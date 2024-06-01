"use client";

import Link from "next/link";

const Button = () => {
  return (
    <div>
      <Link
        href={"/Users"}
        className="px-5 py-2 border border-black rounded-md"
      >
        Back
      </Link>
    </div>
  );
};

export default Button;
