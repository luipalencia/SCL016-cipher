const cipher = {

  encode(offset, string) {
    let final_code = "", message;
    let i = 0;
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error');
    } 
    for (i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message = (((string.charCodeAt(i) - 65) + offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        message = (((string.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      else if (string.charCodeAt(i)===32) {
        message = 32;
      }
      else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 66) {
        message = (((string.charCodeAt(i) + 33) - offset) % 33) + 33;
      }
      final_code += String.fromCharCode(message);
    }
    return final_code;
  },
  decode(offset, string) {
    let final_code = "", message;
    let i = 0;
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error');
    }
    for (i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message = (((string.charCodeAt(i) + 65) - offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        message = (((string.charCodeAt(i) + 97) - (offset * -1)) % 26) + 97;
      }
      else if (string.charCodeAt(i)===32) {
        message = 32;
      }
      else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 66) {
        message = (((string.charCodeAt(i) + 33) - offset) % 33) + 33;
      }
      final_code += String.fromCharCode(message);
    }
    return final_code;
  },
}

export default cipher;
