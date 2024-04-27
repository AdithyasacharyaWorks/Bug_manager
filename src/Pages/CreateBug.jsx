import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CreateBug() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 2000));
  };

  console.log(watch("example"));

  return (
    <div className="">
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Create New Bug
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">
              Bug Name
              {errors.bugname && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              {...register("bugname", { required: "Bug Name is required" })}
            />
            {errors.bugname && (
              <span className="text-red-500 text-sm">
                {errors.bugname.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">
              Bug Description
              {errors.bugdesc && <span className="text-red-500">*</span>}
            </label>

            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              {...register("bugdesc", {
                required: "Bug Description is required",
              })}
            />
            {errors.bugdesc && (
              <span className="text-red-500 text-sm">
                {errors.bugdesc.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Assign To</label>

            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              {...register("assign")}
            >
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">
              Priority
              {errors.priority && <span className="text-red-500">*</span>}
            </label>

            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              {...register("priority", { required: "Please select priority" })}
            >
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.priority && (
              <span className="text-red-500 text-sm">
                {errors.priority.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">
              Project Name
              {errors.projectname && <span className="text-red-500">*</span>}
            </label>

            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              {...register("projectname", {
                required: "Please add project name",
              })}
            >
              <option value="">Select...</option>
              {/* Add options for Project Name dropdown */}
              <option value="">Select...</option>
              <option value="Project1">Project1</option>
              <option value="Project2">Project2</option>
              <option value="Project3">Project3</option>
            </select>
            {errors.projectname && (
              <span className="text-red-500 text-sm">
                {errors.projectname.message}
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className={`bg-[rgb(255,153,0)]  text-white py-2 px-6 rounded-md hover:scale-105 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              Create Bug
            </button>
            <button
              type="button"
              className="bg-[rgb(23,25,30)] text-white py-2 px-6 rounded-md hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBug;
