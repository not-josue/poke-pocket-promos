# Notes

These are a couple of notes taken while building the project.

## Card Page

Removed the "Back to Gallery" link from card pages. When clicked, the page would render the Gallery Components but in some instances the user would be scrolled to the bottom of the page.

## Dynamic Metadata

React 19 came with an update to easily customize metadata for each page, so React Helmet Async was not needed.

## Navigation

Had to give up on some pages having a fixed Navigation & others not. Becomes complicated as Scoping doesn't work like Astro. Settle for a non-fixed Navigation across the website.
