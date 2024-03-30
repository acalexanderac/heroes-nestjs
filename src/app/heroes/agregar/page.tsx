"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

//import { Logo} from "@/app/services/imports";

type FormData = {
  hero_id: number;
  name: string;
  eye_color: string | null;
  hair_color: string | null;
  skin_color: string | null;
  height: number | null;
  weight: number | null;
  race: string | null;
  publisher_id: number | null; // Cambiado a string
  gender_id: number | null; // Cambiado a string
  alignment_id: number | null; // Cambiado a string
};

function HeroPage() {
  const params = useParams();

  const router = useRouter();

  const [newPaciente, setNewPaciente] = useState<FormData>({
    hero_id: 0,
    name: "",
    eye_color: "",
    hair_color: "",
    skin_color: "",
    height: 0,
    weight: 0,
    race: "",
    publisher_id: 0,
    gender_id: 0,
    alignment_id: 0,
  });

  const getPaciente = async () => {
    // Check if params['id'] is defined
    if (params["id"]) {
      try {
        const res = await fetch(
          `http://localhost:3000/hero-informations/${params["id"]}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          toast.error("No hay Información, revise el Backend.");
          throw new Error(`Failed to fetch data, status: ${res.status}`);
        }

        const dataUpdate = await res.json();
        setNewPaciente({
          hero_id: dataUpdate.hero_id,
          name: dataUpdate.name,
          eye_color: dataUpdate.eye_color,
          hair_color: dataUpdate.hair_color,
          skin_color: dataUpdate.skin_color,
          height: dataUpdate.height,
          weight: dataUpdate.weight,
          race: dataUpdate.race,
          publisher_id: dataUpdate.publisher_id,
          gender_id: dataUpdate.gender_id,
          alignment_id: dataUpdate.alignment_id,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    getPaciente();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const updateTask = async () => {
    try {
      await fetch(`http://localhost:3000/hero-informations/${params["id"]}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newPaciente,
        }), //
      });
      router.push("/sys");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Revisa tus datos");
      console.error(error);
      toast.error("Hubo un error al actualizar ");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPaciente((prevState) => ({
      ...prevState,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const onSubmit = async (data: FormData) => {
    if (!params.id) {
      try {
        const numericData = Object.fromEntries(
          Object.entries(data).map(([key, value]) => {
            if (
              [
                "hero_id",
                "height",
                "weight",
                "publisher_id",
                "gender_id",
                "alignment_id",
              ].includes(key)
            ) {
              return [key, Number(value)];
            } else {
              return [key, value];
            }
          })
        );

        await axios.post(
          `http://localhost:3000/hero-informations/`,
          numericData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Formulario enviado con éxito");
        toast.success("Heroe Creado", { duration: 3000 });
        router.push("/heroes/error");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        toast.error("Revisa, Error!");
      }
    } else {
      const numericData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
          if (
            [
              "hero_id",
              "height",
              "weight",
              "publisher_id",
              "gender_id",
              "alignment_id",
            ].includes(key)
          ) {
            return [key, Number(value)];
          } else {
            return [key, value];
          }
        })
      );

      setNewPaciente(numericData as FormData);
      await updateTask();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <Toaster />

      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-6 h-6 stroke-rose-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>

        <span className="ml-3 text-2xl font-serif">
          {!params.id ? "Añadir Heroe" : "Editar Heroe"}
        </span>
      </a>

      {params.id ? (
        <button
          className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
          disabled
        >
          Eliminar Heroe ID. {params.id}
        </button>
      ) : (
        <button
          className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed"
          disabled
        >
          Añadiendo Heroe
        </button>
      )}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="px-5 py-5">
              <label
                htmlFor="hero_id"
                className="block text-ls font-medium leading-6 text-gray-900"
              >
                Hero ID
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  id="hero_id"
                  className="block rounded-md border-0 py-1.5 pl-7
                                    pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                  placeholder="John Doe"
                  {...register("hero_id", { required: false })}
                  onChange={handleChange}
                  value={newPaciente.hero_id}
                />
                {errors.hero_id && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-ls mt-1 ml-1">
                    Obligatorio !
                  </span>
                )}
              </div>
            </div>

            <div className="px-5 c ">
              <label
                htmlFor="name"
                className="block text-ls font-medium text-gray-900"
              >
                Name
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="name"
                  className="block rounded-md border-0 py-1.5 pl-7 pr-20
                                    text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-1/2"
                  placeholder="Name"
                  {...register("name", { required: false })}
                  onChange={handleChange}
                  value={newPaciente.name}
                />
              </div>
            </div>
            <div className="px-5 pt-5">
              <label
                htmlFor="eye_color"
                className="block text-ls font-medium text-gray-900"
              >
                Eye Color
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="eye_color"
                  className="block rounded-md border-0 py-1.5 pl-7 pr-20
                                    text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                  placeholder="Eye Color"
                  {...register("eye_color", { required: false })}
                  onChange={handleChange}
                  value={newPaciente.eye_color || ""}
                />
              </div>
            </div>

            <div className="px-5 pt-5 flex flex-wrap">
              <div className="w-full md:w-1/2 pr-4">
                <label
                  htmlFor="hair_color"
                  className="block text-ls font-medium text-gray-900"
                >
                  Hair Color
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    id="hair_color"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-950 sm:text-sm sm:leading-6"
                    placeholder="Hair Color"
                    {...register("hair_color", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.hair_color || ""}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-4">
                <label
                  htmlFor="skin_color"
                  className="block text-ls font-medium text-gray-900"
                >
                  Skin Color
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    id="skin_color"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Skin Color"
                    {...register("skin_color", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.skin_color || ""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="height"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Height
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="height"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Height"
                    {...register("height", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.height || ""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="weight"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Weight
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="weight"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Weight"
                    {...register("weight", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.weight || ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="race"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Race
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    id="race"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Race"
                    {...register("race", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.race || ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="publisher_id"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Publisher ID
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="publisher_id"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Publisher ID"
                    {...register("publisher_id", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.publisher_id || ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="gender_id"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Gender ID
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="gender_id"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Gender ID"
                    {...register("gender_id", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.gender_id || ""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="">
                <label
                  htmlFor="alignment_id"
                  className="block text-ls font-medium leading-6 text-gray-900"
                >
                  Alignment ID
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="alignment_id"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Alignment ID"
                    {...register("alignment_id", { required: false })}
                    onChange={handleChange}
                    value={newPaciente.alignment_id || ""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="pl-5 py-5 flex">
              <button
                className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500
                        rounded text-lg"
                type="submit"
              >
                {!params.id ? "Guardar Heroe" : "Modificar Heroe"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroPage;
