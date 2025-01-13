import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user= useLoaderData();
    const {name, email, username}=user;
  return (
    <div>
      <h2>Details about user:{name}</h2>
      <p>email:{email}</p>
      <p>username:{username}</p>
    </div>
  );
};

export default UserDetails;
