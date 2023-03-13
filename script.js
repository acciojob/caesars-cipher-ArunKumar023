// Your Script here.
function rot13(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // uppercase letters only
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
