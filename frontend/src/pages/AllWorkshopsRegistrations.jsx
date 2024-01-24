import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllWorkshopsRegistrations = () => {

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
    }
    useEffect(() => {
        getGoogleData()
    }, [])


    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/get-all-workshops-registrations", {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setData(data.data)
            })
    }, [])



    const [selectedOption, setSelectedOption] = useState(null);
    const [workshopData, setWorkshopData] = useState([])

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value)
        const selectedWorkshop = e.target.value;
        const filteredData = data.filter((item) =>
            item.workshops && item.workshops.includes(selectedWorkshop)
        );
        setWorkshopData([...filteredData]);
    };

    const cellStyle = {
        border: '1px solid white',
        padding: '8px',
        textAlign: 'left',
    };

    return (
        <>
            <div>
                {[
                    "ACM",
                    "DRONAID",
                    "MIST",
                    "ISTE1",
                    "GDSC",
                    "ISTE2",
                    "IE MECH",
                    "IEEE",
                    "ASTRONOMY",
                    "CTF"
                ].map((name, index) => (
                    <label key={index} style={{ marginBottom: '10px', padding: '1rem' }}>
                        <input
                            type="radio"
                            name="options"
                            value={name}
                            checked={selectedOption === name}
                            onChange={handleRadioChange}
                        />
                        {name}
                    </label>
                ))}
            </div>

            <h1 style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>Total Registrations in {selectedOption}: {workshopData.length}</h1>

            <table style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>
                <tr>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Registration No.</th>
                    <th style={cellStyle}>Phone No</th>
                    <th style={cellStyle}>Learners ID</th>
                    <th style={cellStyle}>Email ID</th>
                    <th style={cellStyle}>Branch</th>
                    {/* <th style={cellStyle}>Workshops</th> */}
                    <th style={cellStyle}>UPI ID</th>
                    <th style={cellStyle}>Transaction ID</th>
                    <th style={cellStyle}>Screenshot</th>
                </tr>
                {workshopData.map(i => {
                    return (
                        <tr>
                            <th style={cellStyle}>{i.name}</th>
                            <th style={cellStyle}>{i.regNo}</th>
                            <th style={cellStyle}>{i.phoneNo}</th>
                            <th style={cellStyle}>{i.learnerid}</th>
                            <th style={cellStyle}>{i.email}</th>
                            <th style={cellStyle}>{i.branch}</th>
                            {/* <th style={cellStyle}>{i.workshops.map(a=>{return(<li>{a}</li>)})}</th> */}
                            <th style={cellStyle}>{i.upiID}</th>
                            <th style={cellStyle}>{i.txnID}</th>
                            <th style={cellStyle}><img src={i.screenshot} style={{ width: '10rem' }} /></th>
                        </tr>
                    )
                })}
            </table>

        </>
    );
};

export default AllWorkshopsRegistrations;
