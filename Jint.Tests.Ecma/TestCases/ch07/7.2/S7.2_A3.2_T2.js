// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Single line comment can contain VERTICAL TAB (U+000B)
 *
 * @path ch07/7.2/S7.2_A3.2_T2.js
 * @description Use real VERTICAL TAB
 */

//CHECK#1
var x = 0;
//singlelinecommentx = 1;
if (x !== 0) {
  $ERROR('#1: var x = 0; //singlelinecommentx = 1; x === 0. Actual: ' + (x));
}

