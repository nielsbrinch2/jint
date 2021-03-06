/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.4/15.2.3.4-4-49.js
 * @description Object.getOwnPropertyNames - own index properties of Array objcect are pushed into the returned Array
 */


function testcase() {
        var arr = [0, 1, 2];

        var expResult = ["0", "1", "2", "length"];

        var result = Object.getOwnPropertyNames(arr);

        return compareArray(expResult, result);
    }
runTestCase(testcase);
