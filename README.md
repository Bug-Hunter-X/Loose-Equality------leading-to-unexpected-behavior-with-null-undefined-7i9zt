# Loose Equality Bug in JavaScript

This repository demonstrates a common error in JavaScript related to loose equality (==) when dealing with null or undefined values.  Loose equality can lead to unexpected type coercion, resulting in bugs that are difficult to track down.

## The Problem

The `foo` function in `bug.js` uses loose equality (==) to check if arguments `a` and `b` are null.  This can lead to unexpected results because loose equality performs type coercion before comparison.  For example, `0 == null` evaluates to `false`, which might not be the intended behavior.

## The Solution

The `bugSolution.js` file shows the corrected version of the function using strict equality (===).  Strict equality does not perform type coercion; it checks for both value and type equality.  This makes the comparison more reliable and prevents unexpected behavior.