# Authors Note
This was kind of a rough idea I had over a couple of nights, and was never refined into a production ready library. The repository has been left here, without documentation or promise of further updates. I may revist this one day, but for now consider this an abandoned project. I never got around to setting up branches, but ideally I would have had a develop branch, with feature branches merging into this before moving onto production, and then being released. If anyone would like to inherit this project and finish it off, let me know, or submit a PR.

*If you really want to use this, see the example.*

---

# Cha-Cha-Slider
Take it back now y'all


# Setup
`npm install`, run `gulp`, and then include the `dist/js/main.min.js` script and the `dist/styles/app.min.css` default theme.


# Todo list
 - [ ] Create Contributor Guide
 - [ ] Documentation
 - [ ] Implement API To library for programatic controlling
 - [ ] Object Orientated
 - [ ] Remove gap between slide contents and slide label
 - [ ] Cleanup the code
 - [ ] Add mobile support for default theme
 - [ ] Turn features (Progress, auto scroll, etc) on and off via customisation
 - [ ] When slider is focused, allow arrow keys for scrolling through slides (left to right)
 - [ ] Allow any size image to be used
 - [x] Rename CSS Classes to be Cha Cha Slider specific
 - [x] Add slideBack() function
 - [x] Add slideForward() function
 - [x] Add jumpSlide() function
 - [x] Add custom text field to top right to allow for copyright info, etc
 - [x] Set the current slide element via the JS and not manually
 - [x] Add the controls via the JS and not manually
 - [x] Initial function to run when page is loaded that setups library
 - [x] Wait till all images are complete before initalising

# Version/Changelog

**_Version 0.0.4_**
- Initalisation function on page ready, waiting till after images loaded

**_Version 0.0.3.1_**
- Fixed animation class being a generic name

**_Version 0.0.3_**
- Added next and previous controls via the library rather than user
- Switched the container to an ID rather than a class

**_Version 0.0.2_**
- Added the slide count & current slide into top left corner

**__Version 0.0.1__**
- Launched
