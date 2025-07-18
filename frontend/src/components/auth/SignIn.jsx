import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Connexion Réussie");
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Erreur lors de la connexion");
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="flex flex-col items-center justify-center min-h-screen gap-4 bg-[#10102e] text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Se connecter</h2>

      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded bg-gray-800 border border-gray-600 w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mot de passe"
        className="px-4 py-2 rounded bg-gray-800 border border-gray-600 w-80"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
      >
        Se connecter
      </button>
    </form>
  );
};

export default SignIn;
