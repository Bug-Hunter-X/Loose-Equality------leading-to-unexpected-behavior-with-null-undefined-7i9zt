function foo(a, b) {
  if (a == null || b == null) {
    throw new Error('Arguments cannot be null');
  }

  // ... rest of the function
}