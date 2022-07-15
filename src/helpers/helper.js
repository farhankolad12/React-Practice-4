import db from "../firebase";

export const addEmail = (name, email) => {
  db.collection("emails").doc(email).set({
    name: name,
    email: email,
  });
};

export const getUser = async (email) => {
  const userDocs = await db.collection("emails").doc(email).get();
  if (userDocs.exists) {
    return true;
  } else {
    return false;
  }
};
