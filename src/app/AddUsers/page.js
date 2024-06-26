"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    const formData = {
      name,
      age,
      email,
      education,
      phone,
    };
    console.log("Submitted Data:", formData);
    try {
      const res = await axios.post("http://localhost:3000/api/Users", formData);
      console.log("Submitted Data:", res.data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response.data.result);
      toast.error(error.response.data.result);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-20">
      <h1 className="text-4xl">Add User Form</h1>
      <div className="pt-10">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black rounded-md px-2 py-2 outline-none"
            placeholder="Enter Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="age">Enter Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-black rounded-md px-2 py-2 outline-none"
            placeholder="Enter Age"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Enter Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md px-2 py-2 outline-none"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="education">Enter Education</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="border border-black rounded-md px-2 py-2 outline-none"
            placeholder="Enter Education"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone">Enter Phone Number</label>
          <input
            type="string"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-black rounded-md px-2 py-2 outline-none"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
