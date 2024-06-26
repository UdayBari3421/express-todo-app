const isEmailRgex = ({ email }) => {
  const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email);
  return isEmail;
};

const userDataValidation = ({ name, email, username, password }) => {
  return new Promise((resolve, reject) => {
    console.log(name, email, username, password);
    if (!username || !email || !password) reject("Data is missing");

    if (typeof username !== "string") reject("username is not a text");
    if (typeof email !== "string") reject("email is not a text");
    if (typeof password !== "string") reject("password is not a text");

    if (username.length < 3 || username.length > 50) reject("username length should be 3-50");
    if (password.length < 3 || password.length > 50) reject("password length should be 3-50");

    if (!isEmailRgex({ email })) reject("Email format is incorrect");

    resolve();
  });
};

const todoDataValidation = ({ todo }) => {
  return new Promise((resolve, reject) => {
    if (!todo) return reject("Missing todo text");
    if (typeof todo !== "string") return reject("Todo is not a text");
    if (todo.length < 3 || todo.length > 100) return reject("Todo length should be 3-100");

    resolve();
  });
};

module.exports = { userDataValidation, isEmailRgex, todoDataValidation };
