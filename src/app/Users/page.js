import Link from "next/link";

const GetUsers = async () => {
  const res = await fetch("http://localhost:3000/api/Users");
  const data = await res.json();
  return data;
};

const Users = async () => {
  const allUsers = await GetUsers();

  return (
    <>
      <h1 className="text-center pt-10 text-3xl">All Users Data from APi</h1>
      <div className="min-h-screen flex py-20 flex-wrap px-20 gap-7">
        {allUsers.map((item) => {
          return (
            <Link
              href={`Users/${item.id}`}
              key={item.id}
              className="flex flex-col gap-2 p-3 border rounded-lg bg-white w-max my-2"
            >
              <h2>
                {" "}
                <strong>Name:</strong> {item.name}
              </h2>
              <h3>
                {" "}
                <strong>Age:</strong> {item.age}
              </h3>
              <h3>
                {" "}
                <strong>Email:</strong> {item.email}
              </h3>
              <h3>
                {" "}
                <strong>Qualification</strong> {item.education}
              </h3>
              <h3>
                {" "}
                <strong>Address</strong> {item.address.street}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Users;
