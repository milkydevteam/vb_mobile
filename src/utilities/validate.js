const checkInput = (
  phoneText: string = '',
  passwordText: string = '',
  comfirmText: string = '',
): {result: boolean, message: string} => {
  let message = '';
  if (phoneText) {
    if (phoneText.length < 9 || phoneText[0] !== '0' || phoneText.length > 12) {
      message = 'Số điện thoại không hợp lệ';
      return {result: false, message};
    }
    if (!passwordText) {
      message = 'Mật khẩu không đúng';
      return {result: false, message};
    }
    if (passwordText.length < 6) {
      message = 'Mật khẩu cần có tối thiểu 6 kí tự';
      return {result: false, message};
    }
    if (passwordText.length > 40) {
      message = 'Mật khẩu chỉ có tối đa 40 kí tự';
      return {result: false, message};
    }
    const regex = /["'\s/]/;
    const check = passwordText.search(regex);
    if (check !== -1) {
      message = 'Mật khẩu không hợp lệ';
      return {result: false, message};
    }
    if (passwordText !== comfirmText) {
      message = 'Xác nhận mật khẩu không khớp';
      return {result: false, message};
    }
    return {result: true, message};
  }
  message = 'Bạn cần phải nhập số điện thoại';
  return {result: false, message};
};

const checkSpecialName = (name = '') => {
  const otherLetters = '[a-eghik-vxyàáâãèéêìíòóôõùúýỳỹỷỵựửữừứưụủũợởỡờớơộổỗồốọỏịỉĩệểễềếẹẻẽặẳẵằắăậẩẫầấạảđ₫0123456789]'.normalize(
    'NFC',
  );
  const regexString = `^${otherLetters}+\\s(${otherLetters}+\\s)*${otherLetters}+$`;
  const regexPattern = RegExp(regexString);
  return regexPattern.test(name.toLowerCase().normalize('NFC'));
};

const validateEmail = (email = '') => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
export {validateEmail, checkInput, checkSpecialName};
