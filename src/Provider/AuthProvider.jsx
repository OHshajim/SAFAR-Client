import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  // create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login 
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }


  const info = { user, createUser, Login }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;