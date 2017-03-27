"use strict"

var Image;

if (typeof(window) !== 'undefined' && window.Image) {
	Image = window.Image;
} else {
	var Canvas = require('./GetCanvas');
	Image = Canvas.Image;
}

module.exports = Image;