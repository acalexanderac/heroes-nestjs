"use client";
import React, { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const HeroForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "hero_id" ||
      e.target.name === "height" ||
      e.target.name === "weight" ||
      e.target.name === "publisher_id" ||
      e.target.name === "gender_id" ||
      e.target.name === "alignment_id"
        ? parseInt(e.target.value)
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/hero-informations/",
        formData
      );
      console.log(formData);
      router.push("/heroes/error");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="eye_color"
          className="block text-sm font-medium text-gray-700"
        >
          Eye Color
        </label>
        <input
          type="text"
          name="eye_color"
          value={formData.eye_color}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="hair_color"
          className="block text-sm font-medium text-gray-700"
        >
          Hair Color
        </label>
        <input
          type="text"
          name="hair_color"
          value={formData.hair_color}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="skin_color"
          className="block text-sm font-medium text-gray-700"
        >
          Skin Color
        </label>
        <input
          type="text"
          name="skin_color"
          value={formData.skin_color}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="height"
          className="block text-sm font-medium text-gray-700"
        >
          Height
        </label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="weight"
          className="block text-sm font-medium text-gray-700"
        >
          Weight
        </label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="hair_color"
          className="block text-sm font-medium text-gray-700"
        >
          Race
        </label>
        <input
          type="text"
          name="race"
          value={formData.race}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="publisher_id"
          className="block text-sm font-medium text-gray-700"
        >
          Publisher ID
        </label>
        <input
          type="number"
          name="publisher_id"
          value={formData.publisher_id}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="gender_id"
          className="block text-sm font-medium text-gray-700"
        >
          Gender ID
        </label>
        <input
          type="number"
          name="gender_id"
          value={formData.gender_id}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="alignment_id"
          className="block text-sm font-medium text-gray-700"
        >
          Alignment ID
        </label>
        <input
          type="number"
          name="alignment_id"
          value={formData.alignment_id}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="hero_id"
          className="block text-sm font-medium text-gray-700"
        >
          Hero ID
        </label>
        <input
          type="number"
          name="hero_id"
          value={formData.hero_id}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {/* Repeat for other fields */}
      <button
        type="submit"
        className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Submit
      </button>
    </form>
  );
};

export default HeroForm;
