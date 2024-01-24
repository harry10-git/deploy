import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllHackathonRegistrations = () => {
  const navigate = useNavigate();

  const admins = ["2shashank11@gmail.com", "istemanipalboard@gmail.com", "aditi26shr@gmail.com", "prateekanand.work@gmail.com", "tanishakar1906@gmail.com"]
  const getGoogleData = async () => {
    try {
      const response = await axios.get("/login/success", { withCredentials: true });
      if (!admins.includes(response.data.user.email)) {
        navigate("/*")
      }

    } catch (error) {
      //console.log("error", error)
      navigate('/*')
    }
  };
  useEffect(() => {
    getGoogleData();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/get-all-hackathon-registrations", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  const cellStyle = {
    border: "1px solid white",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <>
      <div style={{ color: "white" }}>
        <h1>All Registered Users</h1>
      </div>
      <h1 style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>Total Registrations: {data.length}</h1>
      <table
        style={{ borderCollapse: "collapse", width: "100%", color: "white" }}
      >
        <tr>
          <th style={cellStyle}>Team name</th>
          <th style={cellStyle}>Fields</th>
          <th style={cellStyle}>Leader Details</th>
          <th style={cellStyle}>Member 1 Details</th>
          <th style={cellStyle}>Member 2 Details</th>
          <th style={cellStyle}>Member 3 Details</th>
          <th style={cellStyle}>Member 4 Details</th>
          <th style={cellStyle}>UPI ID</th>
          <th style={cellStyle}>Transaction ID</th>
          <th style={cellStyle}>Screenshot</th>
        </tr>
        {data.map((i) => {
          return (
            <tr>
              <th style={cellStyle}>{i.teamName}</th>
              <td style={cellStyle}>
                <tr>Name</tr>
                <tr>Phone no.</tr>
                <tr>Registration no.</tr>
                <tr>Learners ID</tr>
              </td>
              <td style={cellStyle}>
                <ul>
                  {<li>{i.leaderName}</li>}
                  {<li>{i.leaderPhoneNo}</li>}
                  {<li>{i.leaderRegNo}</li>}
                  {<li>{i.leaderLearnerid}</li>}
                </ul>
              </td>

              <td style={cellStyle}>
                <ul>
                  {<li>{i.member1Name}</li>}
                  {<li>{i.member1PhoneNo}</li>}
                  {<li>{i.member1RegNo}</li>}
                  {<li>{i.member1Learnerid}</li>}
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  {<li>{i.member2Name}</li>}
                  {<li>{i.member2PhoneNo}</li>}
                  {<li>{i.member2RegNo}</li>}
                  {<li>{i.member2Learnerid}</li>}
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  {<li>{i.member3Name}</li>}
                  {<li>{i.member3PhoneNo}</li>}
                  {<li>{i.member3RegNo}</li>}
                  {<li>{i.member3Learnerid}</li>}
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  {<li>{i.member4Name}</li>}
                  {<li>{i.member4PhoneNo}</li>}
                  {<li>{i.member4RegNo}</li>}
                  {<li>{i.member4Learnerid}</li>}
                </ul>
              </td>
              <td style={cellStyle}>{i.upiID}</td>
              <td style={cellStyle}>{i.txnID}</td>
              <td style={cellStyle}>
                <img src={i.screenshot} style={{ width: "10rem" }} />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default AllHackathonRegistrations;
