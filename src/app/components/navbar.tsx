"use client";
import Link from "next/link";
import { ubiquoLogoTexto } from "../styles/imports";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <>
        <header className="text-gray-600 body-font sticky top-0 bg-white z-10 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky top-0">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <Image
                className="tracking-widest align-middle "
                src={ubiquoLogoTexto}
                alt="LOGO"
                width={200}
                height={200}
                blurDataURL="data:..."
                placeholder="blur"
              />
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  text-black flex flex-wrap items-center text-base justify-center">
              <Link
                className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg"
                href="/"
              >
                Inicio
              </Link>
              <Link
                className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg"
                href="/heroes"
              >
                Búsqueda Héroes
              </Link>
              <Link
                className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg "
                href="/publicador"
              >
                Publicador
              </Link>
              <Link
                className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg "
                href="/errores"
              >
                Error
              </Link>
              <Link
                className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg"
                href="/creditos"
              >
                Créditos
              </Link>
            </nav>
          </div>
        </header>
      </>
    </div>
  );
}
