import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
      {/* Adjusted px for smaller screens to give more horizontal room */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-2 text-center">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            CF Visualizer
          </span>
        </div>
        {/* <div className="hidden md:inline">|</div> */}
        <div>
          Built with <span className="text-red-500">♥</span> by{" "}
          <span className="font-semibold">Varun Singla</span>{" "}
        </div>
        {/* <div className="hidden md:inline">|</div> */}
        <a
          href="https://github.com/VScoderr1"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
