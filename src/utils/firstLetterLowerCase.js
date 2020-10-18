export const firstLetterLowerCase = (text) => `${text.charAt(0).toLowerCase()}${text.slice(1)}`;

export const firstLetterLowerCaseObjectKey = (obj) => {
  const keys = Object.keys(obj);
  let res = {};

  keys.forEach((k) => {
    res = {
      ...res,
      [firstLetterLowerCase(k)]: obj[k],
    };
  });

  return res;
};
