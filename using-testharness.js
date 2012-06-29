// <script src='../js/testharness.js'></script>
// <script src='../using-testharness.js'></script>
// <style>
//  /* here we position the results #log so that it spans the whole width */
// </style>
// This document provides a tutorial for W3C's test framework, known as `testharness.js`,
// which you can download from [its GitHub repository](https://github.com/jgraham/testharness.js).
//
// This tutorial does not assume that you are necessarily familiar with other test frameworks,
// but it does expect you to be reasonably proficient with JavaScript (since JavaScript APIs is
// what one tests using this).
//
// If you are familiar with other test frameworks such as [QUnit](http://docs.jquery.com/QUnit),
// [Mocha](http://visionmedia.github.com/mocha/), or [Jasmine](http://pivotal.github.com/jasmine/)
// then you should find your way around here relatively easily.
//
// Indeed, `testharness.js` is not very different from those, though it does have a number of
// features that make it particularly well suited to testing APIs implemented by the browser
// and exposed *to* JavaScript rather than those created in JavaScript directly.
//
// This tutorial is actually designed to be runnable. The code you see in the right column
// is described on the left, but it is also ran as soon as you load this page. If you scroll
// to the bottom, you will see the results of this run.
//
// This documentation was generated using [Docco](http://jashkenas.github.com/docco/), and the
// idea behind the way in which it is done is shamelessly stolen from the
// [Jasmine Documentation](http://pivotal.github.com/jasmine/).

// ## Getting started
// Let's get started with this code! The first thing you need to do to load `testharness.js`
// is to include it from a `script` element in the usual way. You can either download your
// own copy and set it up locally whichever way you want, or if you're writing a test for
// a W3C service you should just point to the W3C copy:
//
//       <script src='http://w3c-test.org/resources/testharness.js'></script>
//       <script src='http://w3c-test.org/resources/testharnessreport.js'></script>
//
// At which point you might rightfully ask why there are two files. The reason for this is
// simple: the first one is the actual implementations, and the second one is empty. Why
// include an empty file? The idea is that when a specific vendor checks your test suite
// out, they can override the content of the `testharnessreport.js` file. This makes it
// possible for them to integrate running the test suite with whatever test reporting tool
// they may be using internally.
//
// If you wish the HTML page into which your tests are being run to render results in a nice
// and convenient table, you should include an HTML element with ID `log` where you would
// like those results to appear. See the bottom of this document for an example.

// Then the JavaScript you'll use can start.
(function () {
    
}());

//## Results
// As promised this is a self-runnable document that includes the results for the test suite
// specified by the code in the right column above. You can see the results below:
//
// <div id='log'></div>
