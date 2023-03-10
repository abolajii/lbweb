import { NoAuthLoveBirdz } from ".";

const checkIfEmailExists = async (email) => {
  return await NoAuthLoveBirdz.post("/checkemail", { email });
};

const signUp = async (user) => {
  return await NoAuthLoveBirdz.post("/signup", user);
};

const logIn = async (user) => {
  return await NoAuthLoveBirdz.post("/signin", user);
};

export { checkIfEmailExists, signUp, logIn };
