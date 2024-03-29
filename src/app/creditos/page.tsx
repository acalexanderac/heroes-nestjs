import Image from "next/image";
import {
  nestjs,
  nextjs,
  superman,
  tailwindcss,
  ubiquoLogo,
} from "../styles/imports";

export default function Creditos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            CRÉDITOS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hecho por Christian Arias. Realizado haciendo uso de las siguientes
            tecnologías:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="tracking-widest align-middle "
                src={nextjs}
                alt="LOGO"
                blurDataURL="data:..."
                placeholder="blur"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  NextJS
                </h2>
                <h3 className="text-gray-500 mb-3">Typescript</h3>
                <p className="mb-4">
                  Next.js es un marco web de desarrollo front-end de React de
                  código abierto creado por Vercel que habilita funcionalidades
                  como la representación del lado del servidor y la generación
                  de sitios web estáticos para aplicaciones web basadas en
                  React.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="tracking-widest align-middle "
                src={nestjs}
                alt="LOGO"
                blurDataURL="data:..."
                placeholder="blur"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Nest JS
                </h2>
                <h3 className="text-gray-500 mb-3">Typescript</h3>
                <p className="mb-4">
                  Nest.js es uno de los frameworks de Node.js de más rápido
                  crecimiento para construir aplicaciones backend eficientes,
                  escalables y de nivel empresarial utilizando Node.js. Es
                  conocido por producir aplicaciones altamente comprobables,
                  mantenibles y escalables utilizando el moderno JavaScript y
                  TypeScript.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="tracking-widest align-middle "
                src={tailwindcss}
                alt="LOGO"
                blurDataURL="data:..."
                placeholder="blur"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  TailwindCSS
                </h2>
                <h3 className="text-gray-500 mb-3">CSS</h3>
                <p className="mb-4">
                  Tailwind CSS es un framework de CSS de código abierto​ para el
                  diseño de páginas web. La principal característica de esta
                  biblioteca es que, a diferencia de otras como Bootstrap, no
                  genera una serie de clases predefinidas para elementos como
                  botones o tablas.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="tracking-widest align-middle "
                src={ubiquoLogo}
                alt="LOGO"
                blurDataURL="data:..."
                placeholder="blur"
                width={200}
                height={200}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Christian Arias
                </h2>
                <h3 className="text-gray-500 mb-3">Web Developer</h3>
                <p className="mb-4">
                  Programador Full Stack, con experiencia en desarrollo de
                  aplicaciones web freelancing y proyectos académicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
