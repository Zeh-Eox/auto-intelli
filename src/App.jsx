import Header from "./components/Header";
import ChatbotArea from "./components/ChatbotArea";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { useAuth } from "./context/authContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      {user ? <ChatbotArea /> : <SignIn />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
