"use client";
import React, { useState, useEffect } from "react";
import Gender from "../subtables/gender";
import Alignment from "../subtables/alignment";
import Publisher from "../subtables/publisher";
import Publishers from "../subtables/publisher";
import axios from "axios";

interface Hero {
  _id: string;
  hero_id: number;
  name: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  height: number;
  weight: number;
  race: string;
  publisher_id: number;
  gender_id: number;
  alignment_id: number;
}

interface SearchCriteria {
  publisher_id?: number;
  race?: string;
  gender_id?: number;
  alignment_id?: number;
}
export async function getServerSideProps() {
  const response = await fetch(
    "http://localhost:3000/hero-informations/search"
  );
  const data = await response.json();

  return {
    props: {
      initialHeroes: data,
    },
  };
}

const Page = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch(
        "http://localhost:3000/hero-informations/search"
      );
      const data = await response.json();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchCriteria as any);
    const response = await fetch(
      `http://localhost:3000/hero-informations/search?${params.toString()}`
    );
    const data = await response.json();
    setHeroes(data);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas borrar este Héroe?")) {
      try {
        await axios.delete(`http://localhost:3000/hero-informations/${id}`);
        setHeroes(heroes.filter((hero) => hero._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold space-y-4 px-20 py-5">Búsqueda</h2>
      <div className="flex space-auto ">
        <form onSubmit={handleSubmit} className="space-y-4 px-20 ">
          <div>
            <label
              htmlFor="publisher_id"
              className="block font-medium text-gray-700"
            >
              ID del Publicador
            </label>
            <input
              type="text"
              name="publisher_id"
              id="publisher_id"
              placeholder="Buscar por ID del Publicador"
              onChange={handleSearchChange}
              className="mt-5 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="race"
              className="block text-sm font-medium text-gray-700"
            >
              Raza
            </label>
            <input
              type="text"
              name="race"
              id="race"
              placeholder="Buscar por Raza"
              onChange={handleSearchChange}
              className="mt-5 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="publisher_id"
              className="block text-sm font-medium text-gray-700"
            >
              ID de Género
            </label>
            <input
              type="text"
              name="gender_id"
              id="gender_id"
              placeholder="Buscar por ID Género"
              onChange={handleSearchChange}
              className="mt-5 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="alignment_id"
              className="block text-sm font-medium text-gray-700"
            >
              ID de Alineación
            </label>
            <input
              type="text"
              name="alignment_id"
              id="alignment_id"
              placeholder="Buscar por ID de Alineación"
              onChange={handleSearchChange}
              className="mt-5 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Search
          </button>
        </form>

        <div className="w-1/3">
          <Gender />
        </div>

        <div className="w-1/3">
          <Alignment />
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {/* Add the same classes to each th */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color de ojos
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color de cabello
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color de piel
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Altura
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Peso
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Raza
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID de editor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID de género
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID de alineación
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
            {/* ... other th elements */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {heroes.map((hero) => (
            <tr key={hero._id}>
              {/* Add the same classes to each td */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.eye_color}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.hair_color}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.skin_color}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.height}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.weight}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.race}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.publisher_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.gender_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.alignment_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={`/heroes/${hero._id}`}>Editar</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button onClick={() => handleDelete(hero._id)}>Borrar</button>
              </td>
              {/* ... other td elements */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
