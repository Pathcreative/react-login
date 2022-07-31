import React from 'react'
import {useNavigate}  from "react-router-dom";
// import Child from "./Child"

const Dashboard = () => {
    let navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/Login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
	  <hr/>
      <div className="App">Dashboard</div>
    </>
  );
};

export default Dashboard;


