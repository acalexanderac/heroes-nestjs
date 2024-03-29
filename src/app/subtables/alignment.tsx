"use client";
import React, { useState, useEffect } from "react";

const Alignment = () => {
  interface Hero {
    _id: string;
    alignment_id: number;
    name: string;
  }
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("http://localhost:3000/alignments/");
      const data = await response.json();
      console.log(data);
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Tabla de Referencia Alineación
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Alineación
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {heroes.map((hero) => (
            <tr key={hero._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.alignment_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hero.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alignment;
