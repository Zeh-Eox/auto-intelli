import { motion } from "framer-motion";

const ChatBubble = ({ message, isUser }) => {
  return (
    <motion.div
      className={`flex w-full mb-6 ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex items-start gap-2.5 max-w-[90%] md:max-w-[80%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* <div
          className={`w-8 h-8 rounded-full flex-shrink-0 ${
            isUser ? "bg-green-500" : "bg-blue-500"
          }`}
        /> */}

        <div
          className={`px-4 py-3 rounded-xl ${
            isUser ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"
          }`}
        >
          <p className="whitespace-pre-wrap break-words">{message}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBubble;
