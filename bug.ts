function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Output: No name provided
printName('John'); // Output: JOHN
printName(undefined); // Error!