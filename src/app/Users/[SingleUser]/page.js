import Button from "@/Components/Button";

const getSingleUser = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Users/${id}`);
  const data = await res.json();
  return data;
};

const SingleUser = async (props) => {
  let id = props.params.SingleUser;
  const data = await getSingleUser(id);
  console.log(data);
  return (
    <div className="min-h-screen items-center flex py-20 flex-wrap px-20 gap-7 flex-col">
      <h1 className="text-3xl">User Details</h1>
      <Button />
      <div className="flex flex-col gap-2 p-3 border rounded-lg bg-white w-max my-2 h-max">
        <h2>
          <strong>Name:</strong> {data[0].name}
        </h2>
        <h3>
          <strong>Age:</strong> {data[0].age}
        </h3>
        <h3>
          <strong>Email:</strong> {data[0].email}
        </h3>
        <h3>
          <strong>Qualification</strong> {data[0].education}
        </h3>
        <h3>
          <strong>Address</strong> {data[0].address.street}
        </h3>
      </div>
    </div>
  );
};

export default SingleUser;
