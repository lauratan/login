export const login = ({username, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'laura' && password === 'password') {
        resolve();
      }
      else {
        reject();
      }
    }, 1000);
  });
}