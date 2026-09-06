import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "public", "dashboards");
const IMAGE_RE = /\.(png|jpe?g|webp|avif)$/i;

export type Found = { src: string; width: number; height: number; file: string };

/** Minimal PNG / JPEG intrinsic-size reader so images render without layout shift. */
function dimensions(buf: Buffer): { width: number; height: number } | null {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      const isSOF =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc;
      if (isSOF) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
  }
  return null;
}

function measure(fullPath: string, publicSrc: string, file: string): Found | null {
  try {
    const stat = fs.statSync(fullPath);
    if (!stat.isFile() || stat.size === 0) return null;
    const head = Buffer.alloc(Math.min(65536, stat.size));
    const fd = fs.openSync(fullPath, "r");
    fs.readSync(fd, head, 0, head.length, 0);
    fs.closeSync(fd);
    const dim = dimensions(head) ?? { width: 1600, height: 900 };
    return { src: publicSrc, width: dim.width, height: dim.height, file };
  } catch {
    return null;
  }
}

/** "2. Delay by city.PNG" -> sorts before "10. Courier.png" */
const natural = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/**
 * Reads every image inside /public/dashboards/<folder>/, ANY file names,
 * in natural sort order. This is the primary way screenshots get onto the site:
 * copy a project's screenshot folder in, and it just works.
 */
export function listFolder(folder: string): Found[] {
  const dir = path.join(ROOT, folder);
  try {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_RE.test(f) && !f.startsWith("."))
      .sort(natural.compare)
      .map((f) => measure(path.join(dir, f), `/dashboards/${folder}/${f}`, f))
      .filter((x): x is Found => x !== null);
  } catch {
    return [];
  }
}

/** Fallback: a specifically named file sitting at /public/dashboards/<file>. */
export function resolveShot(file: string): Found | null {
  const base = file.replace(IMAGE_RE, "");
  for (const name of [file, `${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`]) {
    const full = path.join(ROOT, name);
    if (fs.existsSync(full)) {
      const m = measure(full, `/dashboards/${name}`, name);
      if (m) return m;
    }
  }
  return null;
}

/** "3 - delay by city.png" -> "Delay by city" */
export function humanize(file: string): string {
  const base = file
    .replace(IMAGE_RE, "")
    .replace(/[_-]+/g, " ")
    .replace(/^\s*\d+[.)\s-]*/, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!base) return "Dashboard view";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

/**
 * The single dashboard used as a project's preview on the Work page.
 * Looks for the named file inside the project's folder; if it is not there
 * (screenshots renamed or replaced) it falls back to the first image, so the
 * preview degrades to "some real dashboard" rather than disappearing.
 */
export function resolvePreview(folder: string, file?: string): Found | null {
  const all = listFolder(folder);
  if (all.length === 0) return null;
  if (file) {
    const exact = all.find((f) => f.file === file);
    if (exact) return exact;
  }
  return all[0];
}
