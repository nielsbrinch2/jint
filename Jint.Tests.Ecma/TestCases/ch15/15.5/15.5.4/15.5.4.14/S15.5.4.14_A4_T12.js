// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
 * been stored. If separator is a regular expression then
 * inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding
 *
 * @path ch15/15.5/15.5.4/15.5.4.14/S15.5.4.14_A4_T12.js
 * @description Arguments are new RegExp and 1, and instance is String("hello")
 */

var __string = new String("hello");

var __re = new RegExp;

var __split = __string.split(__re, 1);

var __expected = ["h"];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== __expected.length) {
  $ERROR('#2: __split.length === __expected.length. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== __expected[0]) {
  $ERROR('#3: __split[0] === '+__expected[0]+'. Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

