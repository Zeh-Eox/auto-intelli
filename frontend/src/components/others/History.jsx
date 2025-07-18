import { motion } from "framer-motion";
import { BrainCircuit, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const History = ({ messages, onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle(newState);
  };

  return (
    <div
      className={`flex flex-col rounded-xl bg-gray-800 text-white h-screen fixed z-10 overflow-y-auto transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-blue-400" />
            <span className="font-semibold">Historique</span>
          </div>
        )}
        {isCollapsed && (
          <BrainCircuit className="w-6 h-6 text-blue-400 mx-auto" />
        )}

        <button
          onClick={toggleCollapse}
          className="p-1 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="p-2 space-y-1 overflow-y-auto">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message, index) => (
            <button
              key={index}
              className={`w-full text-left p-2 rounded-md hover:bg-gray-800 transition-colors truncate ${
                isCollapsed ? "text-center" : ""
              }`}
              title={message}
            >
              {isCollapsed ? (
                <span className="text-xs">#{index + 1}</span>
              ) : (
                <>
                  {message.substring(0, 30)}
                  {message.length > 30 && "..."}
                </>
              )}
            </button>
          ))
        ) : (
          <p className="text-gray-400 text-sm p-2 text-center">
            {isCollapsed ? "..." : "Aucun historique"}
          </p>
        )}
      </div>
    </div>
  );
};

export default History;
