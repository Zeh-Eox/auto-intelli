import { useState, useRef, useEffect } from "react";
import ChatBubble from "./layouts/ChatBubble";
import ChatInput from "./others/ChatInput";
import History from "./others/History";
import { askGemini } from "../services/gemini";
import { BrainCircuit, RotateCw } from "lucide-react";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/authContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";

const ChatbotArea = () => {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryCollapsed, setIsHistoryCollapsed] = useState(false);
  const messagesEndRef = useRef(null);

  const user = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Déconnecté !");
    } catch (err) {
      toast.error("Erreur lors de la déconnexion :", err);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputValue.trim() && !isLoading) {
      const newUserMessage = { text: inputValue, isUser: true };
      const thinkingMessage = {
        text: "",
        isUser: false,
        isLoading: true,
      };

      setMessages((prev) => [...prev, newUserMessage, thinkingMessage]);
      setHistory((prev) => [...prev, inputValue]);
      setInputValue("");
      setIsLoading(true);

      try {
        const response = await askGemini(inputValue);
        const newBotMessage = { text: response, isUser: false };

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = newBotMessage;
          return updated;
        });
      } catch (error) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            text: "Désolé, une erreur est survenue. Veuillez réessayer.",
            isUser: false,
          };
          return updated;
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleHistoryToggle = (collapsed) => {
    setIsHistoryCollapsed(collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <History messages={history} onToggle={handleHistoryToggle} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isHistoryCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <header className="sticky top-0 z-10 backdrop-blur-sm p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold">
            <BrainCircuit className="text-blue-400" />
            <span>
              Auto <span className="text-blue-400">Intelli</span>
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                <BrainCircuit className="w-12 h-12 mb-4 opacity-50" />
                <p>Comment puis-je vous aider aujourd'hui ?</p>
              </div>
            )}

            {messages.map((msg, index) =>
              msg.isLoading ? (
                <div key={index} className="flex items-center gap-2.5 p-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500" />
                  <div className="flex items-center px-4 py-3 bg-gray-700 rounded-xl rounded-bl-none">
                    <RotateCw className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              ) : (
                <ChatBubble
                  key={index}
                  message={msg.text}
                  isUser={msg.isUser}
                />
              )
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          isHistoryCollapsed={isHistoryCollapsed}
        />
      </div>
    </div>
  );
};

export default ChatbotArea;
