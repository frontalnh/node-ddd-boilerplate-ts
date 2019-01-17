export const genRandomString = () => {
  let randomString = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10; i++) {
    randomString += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }
  randomString = Date.now().toString() + randomString;
  return randomString;
};

export const genRandomNumber = (count: number) => {
  let result = '';

  for (let i = 0; i < count; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
};
