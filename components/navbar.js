import Link from "next/link";

export default function Navigation({ currentPath }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Your Brand</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
              currentPath === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/contacts"
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
              currentPath === "/contacts" ? "underline" : ""
            }`}
          >
            Contacts
          </Link>
          <Link
            href="/projects"
            className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
              currentPath === "/projects" ? "underline" : ""
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
