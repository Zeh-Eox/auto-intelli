import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatInput = ({ value, onChange, onSend, isHistoryCollapsed }) => {
  return (
    <div
      className={`bottom-0 rounded-xl bg-transparent p-2 shadow-lg transition-all duration-300`}
    >
      <div
        className={`flex items-center gap-2 shadow-2xl mx-auto max-w-[calc(50%-5rem)] bg-gray-800 rounded-lg p-6 ${
          isHistoryCollapsed ? "w-full" : "w-auto"
        }`}
      >
        <input
          type="text"
          placeholder="Qu'est-ce que je peux faire pour vous ?"
          className="flex-1 p-6 bg-gray-800 text-white rounded-lg border-none outline-none transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSend()}
        />

        <motion.button
          className="p-3 bg-transparent text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSend}
          disabled={!value.trim()}
        >
          <Send className="w-7 h-7" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;
