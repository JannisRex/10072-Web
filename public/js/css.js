/**
 * helperFunctions for the css
 * its for making things dynamic
 */

// From http://stackoverflow.com/a/5365036/2065702
let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16)
// creates a random hexColor which can be used
document.documentElement.style.setProperty('--cardBackgroundColor', randomColor)
