import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link
          href={"/Users"}
          className="border rounded-md px-5 py-2 border-black"
        >
          Users
        </Link>
      </main>
    </>
  );
}
