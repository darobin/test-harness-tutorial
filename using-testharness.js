// <!--
/*global test assert_true assert_false assert_equals assert_not_equals assert_in_array
         assert_array_equals assert_approx_equals assert_regexp_match assert_own_property
         assert_inherits assert_idl_attribute assert_readonly assert_throws assert_unreached
         assert_object_equals*/
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

// `assert_false(actual, description)` is the same as `assert_true` but in reverse. It
// has the same strictness about its `actual` being JavaScript's `false` and not just
// "falsy" (e.g. 0, null)
test(function () {
    assert_false(false, "Falsity is false");
    assert_false(1 === 0, "One is not zero");
}, "Simple checks on falsity");

// `assert_equals(actual, expected, description)` checks that `actual` and `expected`
// have the same value (without necessarily being the same object). Note that this
// comparison is strict and that you should not rely on
// whatever automatic type conversions that JavaScript may perform on comparisons.
test(function () {
    assert_equals("dahut", "da" + "hut", "String concatenation");
    assert_equals(42, 6 * 7, "The ultimate answer");
}, "Simple checks on equality");

// `assert_not_equals(actual, expected, description)` is the reverse of `assert_equals`
// and checks that its /actual/ and /expected/ are not the same. The same caveat on
// comparison strictness applies, so that values that may seem very similar are still
// not equal.
test(function () {
    assert_not_equals("dahut", "myth", "String comparison");
    assert_not_equals(42, "42", "The ultimate answer");
}, "Simple checks on unequality");

// `assert_in_array(actual, expected, description)` checks that `actual` is in the array
// provided in `expected`. Any odd member will do, but note that it will not recurse
// into the array if it is multidimensional.
test(function () {
    assert_in_array("dahut",
                    "chupacabra dahut unicorn".split(" "),
                    "Dahut hunting");
    assert_in_array(2017, [42, 47, 62, 2017] , "Lottery");
}, "Simple checks on membership");

// `assert_array_equals(actual, expected, description)` takes an array for both `actual`
// and `expected`, and validates that they have the same length and that each item is
// `assert_equals` its corresponding member in the other array. Just like the previous
// assertion, this is unidimensional.
test(function () {
    assert_array_equals(["chupacabra", "dahut", "unicorn"],
                        "chupacabra dahut unicorn".split(" "),
                        "Dahut hunting");
    assert_array_equals([4, 9, 16],
                        [2, 3, 4].map(function (x) { return x * x; }),
                        "Square");
}, "Checks on identical membership");


// `assert_approx_equals(actual, expected, epsilon, description)` takes a numerical `actual` value
// and checks that it is within `epsilon` of `expected`. This is notably useful for floating point
// calculations in which you know that some drift may occur and you need to check that the outcome
// is within a given ballpark &mdash; but it can also be used in other cases.
test(function () {
    assert_approx_equals(Math.PI, 3.14, 0.01, "Roughly circular");
    assert_approx_equals(42, 47, 5, "47 is almost 42");
}, "Checks on epsilon equality");


// `assert_regexp_match(actual, expected, description)` checks that `actual` matches the `expected`
// regular expression. The latter can be as simple or complex as you wish to make it, and can be
// created with flags.
test(function () {
    assert_regexp_match(document.title,
                        /^\w{5}-\w{10,12}\.js$/,
                        "That's my title");
    assert_regexp_match("A", /a/i, "Matching lowercase");
}, "Checks using regular expressions");

// `assert_own_property(object, property_name, description)` checks that `object` has a property that
// is truly its own (as opposed to inherited down the prototype chain). JavaScripters will recognise
// this as checking `hasOwnProperty`. If you don't know about this important method, you can
// [read up about it on MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).
test(function () {
    var gollum = { ring: "MIIIIINE!!!!" };
    assert_own_property(gollum, "ring", "Tricksy hobbitses!");
    /* this will fail even though `gollum` has `toString`. */
    assert_own_property(gollum,
                        "toString",
                        "I have that property, but it'ssss not mine.");
}, "Checks for property ownership");


// `assert_inherits(object, property_name, description)` complements `assert_own_property` in that it
// similarly checks that the attribute is available on the object, but asserts that it is *not* the
// object's own property but rather has been inherited down the prototype chain.
test(function () {
    var gollum = { ring: "MIIIIINE!!!!" };
    /* this will succeed here */
    assert_inherits(gollum,
                    "toString",
                    "I have that property, but it'ssss not mine.");
    assert_inherits(gollum,
                    "hasOwnProperty",
                    "This one works too.");
}, "Checks for property inheritance");

// `assert_idl_attribute(object, attribute_name, description)` is the same as
// `assert_inherits` and simply aliases it. For clarity, you may be better off sticking
// to the previous one.

// `assert_readonly(object, property_name, description)` checks that the given `property_name`
// on `object` is properly read-only and therefore cannot be set.
test(function () {
    assert_readonly(document, "nodeType", "You cannot change nodeType.");
}, "Checks for attribute readonlyness");

// `assert_throws(code, func, description)` is a powerful way of checking that code throws when
// and how you expect it to, knowing that the code in `func` is what must trigger the exception.
// This assertion works differently depending on what you pass for `code`.

// If `code` is `null`, then any old exception will do (this is not a particularly recommended check as
// the others are more useful).
test(function () {
    assert_throws("HierarchyRequestError",
                  function () { document.appendChild(document); },
                  "Specific DOM exception.");
}, "Checks for exceptions (null)");

// If `code` is any kind of object, then its `name` attribute is checked. That attribute must match the
// `name` attribute on the exception being thrown. This means that you can pass a specific `DOMError`
// object here and have it match if it's what is being thrown.
test(function () {
    assert_throws({ name: "Bad Kitten!" },
                  function () { throw { name: "Bad Kitten!"}; },
                  "Any exception with the right name.");
}, "Checks for exceptions (object)");

// If `code` is a string then it must be one of the commonly recognised `DOMError` names, and it checks
// that `func` throws the corresponding `DOMError`. For compatibility with older browsers, the old
// exception contacts are supported and mapped to the newer name; so for instance you can use
// `WRONG_DOCUMENT_ERR` to mean `WrongDocumentError`. The latter style is preferred however.
test(function () {
    assert_throws("HierarchyRequestError",
                  function () { document.appendChild(document); },
                  "Specific DOM exception.");
}, "Checks for exceptions (string)");

// `assert_object_equals(actual, expected, description)` checks that two objects are equal by deep-walking
// them side by side and making sure that they have the same fields and that those fields have the same
// values. It is still considered somewhat experimental.
test(function () {
    assert_object_equals({ foo: "bar" },
                         { foo: "bar" },
                         "Simple objects.");
    assert_object_equals({ top: "here", kids: { list: ["stuff", { leaf: true } ]} },
                         { top: "here", kids: { list: ["stuff", { leaf: true } ]} },
                         "Simple objects.");
}, "Checks object deep-equality");


// `assert_unreached(description)` is a very simple assertion the role of which is to
// check that some code is indeed unreachable. It only takes a description, and simply
// always throws its hands up in disgust whenever it is called. Opposite here you
// can see a case in which it is successful (since untouched).
test(function () {
    if (true) return "where you came from";
    assert_unreached("Can't Touch This");
}, "Simple check on unreachability");

// Whereas this one fails because the code reaches it.
test(function () {
    assert_unreached("Reaching where no coder has reached before");
}, "Failed check on unreachability");

// ## Asynchronous Testing
(function () {
    
}());

// <a name='metadata'></a>
// ## Including Metadata
(function () {
    
}());

// ## Advanced Usage
// format_value
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
