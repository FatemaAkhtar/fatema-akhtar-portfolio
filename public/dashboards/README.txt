DASHBOARD SCREENSHOTS
=====================

STATUS - all four projects have their evidence in place.

  logistics/    5 images
  mortgage/     3 images
  startup/      6 images
  callcenter/   1 image

Captions for every one of these were written from the real numbers in the
images. If you re-export a dashboard and the figures change, update the caption
to match - the captions quote specific values.

REPLACING OR ADDING AN IMAGE
----------------------------
Drop it in the project folder. No renaming needed - any file names work
(.png .jpg .jpeg .webp .avif, upper or lower case).

Number the files to control the order they appear in:
    1 overview.png
    2 delay analysis.png
    10 summary.png      <- correctly sorts after 2, not after 1

Captions attach in order: 1st image gets the 1st written caption, 2nd gets the
2nd. Captions live in lib/content.ts, in each project's `shots` list.

Add more images than there are captions and the extras still display, titled
from the file name, with a visible reminder to write a caption.

WRITING A CAPTION
-----------------
Every caption answers "what should I notice here?" - not "what is this chart".

  Weak:   "Agent performance table."
  Better: "Answer rates run 79.1% to 82.6% - a 3.5-point spread, and every one
           of them above the centre's own 74.1%."
