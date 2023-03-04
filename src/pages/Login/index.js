import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Login = () => {
  const { signInGoogle } = useContext(AuthGoogleContext);
  return <button onClick={() => signInGoogle()}>Logar com Google</button>;
};
