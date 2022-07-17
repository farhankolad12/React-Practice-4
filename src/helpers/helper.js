import auth from "../firebase";

export const addEmail = (email, name) => {
  const authentication = auth.createUserWithEmailAndPassword(email, name);
  return authentication;
};

export const getUser = async (email, password) => {
  const authentication = auth.signInWithEmailAndPassword(email, password);
  return authentication;
};
