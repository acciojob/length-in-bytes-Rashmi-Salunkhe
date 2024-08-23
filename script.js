const byteSize = (str) => {
  // Create a new Blob object with the input string
  const blob = new Blob([str]);
  
  // Return the size of the Blob in bytes
  return blob.size;
};

// Example usage
const str = prompt("Enter some string.");
alert(byteSize(str));
