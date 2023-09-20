import React, { useState } from "react";

export default function Add() {
  const [data, setData] = useState({
    address: "string",
    attachments: [
      {
        imgPath:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdRY6jEfOi-Yy7A2YTY4sk4oWFMVLhg2wWQ&usqp=CAU",
      },
    ],
    categoryId: 0,
    city: "string",
    componentsDto: {
      additional: "string",
      airCondition: false,
      courtyard: true,
      furniture: false,
      gasStove: true,
      internet: false,
      tv: true,
    },
    country: "string",
    description: "string",
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: false,
      school: true,
      stadium: true,
      subway: false,
      superMarket: false,
    },
    houseDetails: {
      area: 2,
      bath: 3,
      beds: 4,
      garage: 2,
      room: 3,
      yearBuilt: 2011,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "string",
    price: 1,
    region: "string",
    salePrice: 2,
    status: true,
    zipCode: "1202",
  });

  const addUser = () => {
    fetch(`http://localhost:8080/api/v1/houses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <React.Fragment>
      <h1>Add</h1>
      <form>
        <input type="text" placeholder="address" />
        <input type="text" placeholder="city" />
        <input type="text" placeholder="country" />
        <button onClick={addUser}>Add</button>
      </form>
    </React.Fragment>
  );
}
