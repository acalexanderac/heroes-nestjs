import Image from "next/image";
import { batman, superman } from "./styles/imports";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            className="tracking-widest align-middle "
            src={superman}
            alt="LOGO"
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Busca a tus Héroes
              </h2>
              <p className="leading-relaxed text-base">
                Puedes buscar a tus héroes y villanos favoritos en nuestra base
                de datos. Sientete libre de buscar a tus personajes favoritos.
              </p>
              <a className="mt-3 text-red-500 inline-flex items-center"></a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Personaliza tus resultados{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Aplica filtros para encontrar a tus personajes favoritos.
              </p>
              <a className="mt-3 text-red-500 inline-flex items-center"></a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Créditos
              </h2>
              <p className="leading-relaxed text-base">
                No ólvides visitar la página de créditos para conocer al autor y
                las tecnologías utilizadas.
              </p>
              <a className="mt-3 text-red-500 inline-flex items-center"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
