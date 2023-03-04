import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        //setando usuário recebido no useState user
        setUser(user);
        // salvando os dados retornados do .then no local Storage
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <AuthGoogleContext.Provider
      //signed verifica se tem usuario e retorna false caso n
      value={{
        signed: !!user,
        user,
        signInGoogle,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
