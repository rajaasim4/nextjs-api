"use client";

import axios from "axios";
import { toast } from "sonner";

const DeleteUser = ({ id }) => {
  const deleteUser = async () => {
    try {
      let res = await axios.delete(`http://localhost:3000/api/Users/${id}`);
      toast.success("User Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error Occured Whil deleting user");
    }
  };

  return (
    <div>
      <button
        onClick={deleteUser}
        className="border border-black rounded-md px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;
