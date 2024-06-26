"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const UploadImage = () => {
  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.set("file", file);
      const res = await axios.post("api/Upload", data);
      toast.success("Image added");

      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      toast.error("Error Occured");
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">This is upload Image Module</h1>
      <h2>
        In this Video i will demonstarate how to upload the image in Next JS
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target?.files[0]);
          }}
          name=""
          id=""
        />
        <button className="border px-4 py-2 rounded-md border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
