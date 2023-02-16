import { React, useEffect, useState } from "react";
import { getUsers } from "./service/api";
import OutputCard from "./outputcard";
import "./output.css"

function AllUsers() {
  const [Users, setUser] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers()
    console.log(response.data)
    setUser(response.data);
  };

  return (
    
    <div className="allcards">
    
    {
      Users.map((user, index)=>(
        <OutputCard  key={user.id} name={user.name} email={user.email} quote = {user.quote} instagram={user.instagram}/>
      ))
    }
    </div>
  );
}

export default AllUsers;
