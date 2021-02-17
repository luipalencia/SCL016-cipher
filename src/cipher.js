const cipher = {

  encode(offset, string) {
    let final_code = "", message;
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error');
    }
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message = (((string.charCodeAt(i) - 65) + offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        message = (((string.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      final_code += String.fromCharCode(message);
    }
    return final_code;
  },
  decode(offset, string) {
    let final_code = "", message;
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error');
    }
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message = (((string.charCodeAt(i) - 65) + offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        message = (((string.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      final_code += String.fromCharCode(message);
    }
    return final_code;
  },
}

export default cipher;
