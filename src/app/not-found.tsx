import Image from "next/image";
import { doggo } from "./styles/imports";
export default function NotFound() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="tracking-widest align-middle "
          src={doggo}
          alt="LOGO"
          width={400}
          height={400}
          blurDataURL="data:..."
          placeholder="blur"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Oops! ERROR 404!
          </h1>
          <p className="mb-8 leading-relaxed">
            La Página a la que intentas acceder no existe. Por favor, verifica
            la URL e intenta nuevamente.
          </p>
        </div>
      </div>
    </section>
  );
}
