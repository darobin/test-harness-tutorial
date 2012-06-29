// <!--
/*global test assert_true assert_false*/
// -->
// <script src='../js/testharness.js'></script>
// <script src='../js/move-log.js'></script>
// <script src='../using-testharness.js'></script>
// <link rel='stylesheet' href='../js/testharness.css'>
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

// ## Getting Started
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

// ## Basic Testing

// The most basic usage relies on the `test()` function, which takes a function with the code
// to run, a name of the test, and optionally a literal object providing some additional
// options.
test(function () {
    assert_true(true);
}, "True really is true");

// The given function *must* include at least one assertion; conversely, assertions
// can only appear in the context of a test function.
// A single test may contain multiple assertions, in which case it is considered to be atomic.
// That is to say that a single failed assertion will fail the test, whereas all are required
// to pass for the whole test to pass. A document can contain as many tests as you wish it
// to.

// The example here contains two assertions, both of which pass.
test(function () {
    assert_true(true);
    assert_false(false);
}, "Truth is what you believe it to be");

// But in this example one passes, while the other fails. This causes the entire test to be reported
// as a failure.
test(function () {
    assert_true(true);
    assert_false(true);
}, "All opinions are equally valid.");

// In addition to a function and a name, `test()` can also accept a third parameter being a dictionary
// of options. Most of those options are documented in the [Including Metadata](#metadata) section
// below.

// The only general-purpose option that you can use is `timeout`. It takes a number of milliseconds
// (defaulting to 1000, which the brightest at maths amongst you will have recognised as being equivalent
// to one second). If the content of the test takes longer than `timeout` to run then the test is aborted
// and counted as a fail. Since some processing can take longer than one second to run, especially if
// you are performing a complex test in a low-end environment (e.g. a basic mobile phone) it can at
// times be useful to increase this limit as exemplified here.
test(function () {
    /* do something long and slow here */
    assert_true(true);
}, "Long operation is successful", { timeout: 5000 });

// Note that you do not want to use this for asynchronous operations (if only because it won't work).
// For those, see the section dedicated to that topic below.

// ## Included Assertions

// There is a good choice of assertions available by default. Most of those take the form
// `assert_something(actual, expected, description)` but several have different signatures.
// When a `description` is part of the signature, it is optional and a string intended for
// human consumption in order to provide a better description of which assertion exactly
// failed. If you don't provide it, you will get a default error message instead.

// `assert_true(actual, description)` checks that `actual` is _strictly_ equal to `true`,
// which is to say that it _has_ to be the JavaScript `true` value and not just someting
// that evaluates as "truthy" such as `1` or `"dahut"`.
test(function () {
    assert_true(true, "Truth is true");
    assert_true(1 === 1, "One is really one");
}, "Simple checks on truth");

// `assert_false(actual, description)`
// `assert_equals(actual, expected, description)`
// `assert_not_equals(actual, expected, description)`
// `assert_in_array(actual, expected, description)`
// `assert_array_equals(actual, expected, description)`
// `assert_approx_equals(actual, expected, epsilon, description)`
// `assert_regexp_match(actual, expected, description)`
// `assert_own_property(object, property_name, description)`
// `assert_inherits(object, property_name, description)`
// `assert_idl_attribute(object, attribute_name, description)`
// `assert_readonly(object, property_name, description)`
// `assert_throws(code, func, description)`
// `assert_unreached(description)`


// ## Asynchronous Testing
(function () {
    
}());

// <a name='metadata'></a>
// ## Including Metadata
(function () {
    
}());

// ## Advanced Usage
(function () {
    
}());

// ## Generating Tests
(function () {
    
}());

// ## Writing Your Own Assertions
(function () {
    
}());

// ## Callbacks
(function () {
    
}());

//## Results
// As promised this is a self-runnable document that includes the results for the test suite
// specified by the code in the right column above. You can see the results below:
//
// <div id='log'></div>
