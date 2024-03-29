"use client";
import React, { useState, useEffect } from "react";

interface Publisher {
  _id: string;
  publisher_id: number;
  publisher_name: string;
}

interface SearchCriteria {
  publisher_name?: string;
}
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/publishers/search");
  const data = await response.json();

  return {
    props: {
      initialPublisher: data,
    },
  };
}

const Publishers = () => {
  const [publisher, setPublisher] = useState<Publisher[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});

  useEffect(() => {
    const fetchPublisher = async () => {
      const response = await fetch("http://localhost:3000/publishers/search");
      const data = await response.json();
      setPublisher(data);
    };

    fetchPublisher();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria({
      publisher_name: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/publishers/search?term=${searchCriteria.publisher_name}`
    );
    const data = await response.json();
    setPublisher(data);
  };

  return (
    <div>
      <div className="flex space-x-4">
        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <div>
            <label
              htmlFor="publisher_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Publicador
            </label>
            <input
              type="text"
              name="publisher_name"
              id="publisher_name"
              placeholder="Buscar por Nombre del Publicador"
              onChange={handleSearchChange}
              className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Search
          </button>
        </form>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {/* Add the same classes to each th */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Publicador
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>

            {/* ... other th elements */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publisher.map((publisher) => (
            <tr key={publisher._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {publisher._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {publisher.publisher_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {publisher.publisher_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publishers;
