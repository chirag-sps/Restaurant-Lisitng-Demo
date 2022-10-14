import strings from "../Constants/LanguageLocalize/localization";

export function passwordValidator(password) {
  if (!password) return strings.EMPTY_PASSWORD;
  if (password.length < 5)
    return strings.VALID_PASSWORD;
  if (password !== "Qwer1234") return strings.WRONG_PASSWORD 
  return '';
}

export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return strings.EMPTY_EMAIL;
  if (!re.test(email)) return strings.VALID_EMAIL;
  if(email != "abc@gmail.com") return strings.WRONG_EMAIL 
  return '';
}
