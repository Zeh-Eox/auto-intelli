import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="p-8 flex justify-around items-center text-black bg-[#f1f1f1] rounded absolute top-0 left-0 w-full m-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo text-6xl">👾</div>
      <nav>
        <ul className="flex justify-center items-center gap-6 cursor-default">
          <li>
            <a className="hover:text-blue-500" href="#chatbot">
              Chatbot Area
            </a>
          </li>
          <li>
            <a className="hover:text-blue-500" href="#dashboard">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;
