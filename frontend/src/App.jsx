import Header from "./components/Header";
import ChatbotArea from "./components/ChatbotArea";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { useAuth } from "./context/authContext";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const { user, loading } = useAuth();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // 1024px ou plus

  if (loading) return <p>Chargement...</p>;

  if (!isLargeScreen) {
    return (
      <div className="flex items-center justify-center h-screen p-4 text-center bg-[#10102e] text-white">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Application non disponible
          </h1>
          <p>
            Cette application est optimisée pour les ordinateurs et grandes
            tablettes. Veuillez utiliser un appareil avec un écran plus large.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {user ? <ChatbotArea /> : <SignIn />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
