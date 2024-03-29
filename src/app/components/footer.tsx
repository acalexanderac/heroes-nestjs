import { ubiquoLogo } from "../styles/imports";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font sticky bottom-0 bg-gray-100 ">
      <div className="">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Image
            className="tracking-widest align-middle "
            src={ubiquoLogo}
            alt="LOGO"
            width={70}
            height={70}
            blurDataURL="data:..."
            placeholder="blur"
          />
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl font-serif"></span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 — Christian Arias
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            ></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href="https://github.com/acalexanderac"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.912.833.091-.646.349-1.086.635-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.02 2.747-1.02.546 1.375.202 2.392.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.936.359.31.678.92.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/in/calexanderac/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
