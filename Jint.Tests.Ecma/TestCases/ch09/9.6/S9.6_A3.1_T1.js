// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator uses ToNumber
 *
 * @path ch09/9.6/S9.6_A3.1_T1.js
 * @description Type(x) is Boolean
 */

// CHECK#1
if ((new Boolean(true) >>> 0) !== 1) {
  $ERROR('#1: (new Boolean(true) >>> 0) === 1. Actual: ' + ((new Boolean(true) >>> 0)));
}

// CHECK#2
if ((false >>> 0) !== 0) {
  $ERROR('#2: (false >>> 0) === 0. Actual: ' + ((false >>> 0)));
}

