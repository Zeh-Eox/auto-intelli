import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatInput = ({ value, onChange, onSend, isHistoryCollapsed }) => {
  return (
    <div
      className={`fixed bottom-0 bg-gray-800 px-4 py-8 shadow-lg transition-all duration-300 ${
        isHistoryCollapsed ? "left-16" : "left-64"
      } right-0`}
    >
      <div
        className={`flex items-center gap-2 mx-auto ${
          isHistoryCollapsed
            ? "max-w-[calc(75%-5rem)]"
            : "max-w-[calc(75%-17rem)]"
        }`}
      >
        <input
          type="text"
          placeholder="Posez votre question..."
          className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSend()}
        />

        <motion.button
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSend}
          disabled={!value.trim()}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;
