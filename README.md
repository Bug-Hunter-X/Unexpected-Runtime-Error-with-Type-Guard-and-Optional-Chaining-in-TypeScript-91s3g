# Unexpected Runtime Error with Type Guard and Optional Chaining in TypeScript

This repository demonstrates a subtle bug in TypeScript that can occur when combining type guards with optional chaining.  The issue arises when a function expects a string or null, but an undefined value is passed unexpectedly.

## Bug Description
The `printName` function is designed to handle string values and null values gracefully.  However, when it receives `undefined`, a runtime error occurs despite the type guard seemingly handling this case.

## Reproduction Steps
1. Clone this repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled JavaScript code.
4. Observe the runtime error when `undefined` is passed as an argument.

## Solution
The solution involves explicitly checking for `undefined` in the type guard to prevent the runtime error. This ensures that the code handles all possible scenarios correctly, including `undefined`, `null`, and valid string values.