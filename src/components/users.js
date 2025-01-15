import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams , Link ,useNavigate  } from "react-router-dom"
const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
   const navigate = useNavigate()

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            {/* <button className="view-btn"> 
              <Link to = {`/users/users/${user.login}`}>
              View User
              </Link>
              </button> */}
              <button 
              className="view-btn"
              onClick = { ()=> navigate(`/users/users/${user.login}`)}
              >
             View User
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
