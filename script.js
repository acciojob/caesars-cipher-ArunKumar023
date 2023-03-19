function rot13(str) {
  // Define a helper function to shift a single character by 13 places
  function shiftChar(char) {
    // Get the ASCII code of the character
    let code = char.charCodeAt(0);
    // Shift the code by 13 places, wrapping around if necessary
    if (code >= 65 && code <= 90) {
      code = ((code - 65 + 13) % 26) + 65;
    }
    // Convert the shifted code back to a character
    return String.fromCharCode(code);
  }

  // Use map and join to apply the shiftChar function to each character in the string
  return str.split('').map(shiftChar).join('');
}
