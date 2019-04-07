import React from "react";
import Travel from "./Travel";
// src/Travels.js
const travels = [
  {
    destination:"Lac du Salagou",
    country:"France",
    photo:"http://ahahh.blog.lemonde.fr/files/2009/11/salagou-2007-019.1257186982.jpg",
    distance:"231 km"
  },
  {
    destination:"Nîmes",
    country:"France",
    photo:"https://www.lesedc.org/wp-content/uploads/2017/06/2015-Maison-Carr%C3%A9e-N%C3%AEmes.jpg",
    distance:"291 km"
  },
  {
    destination:"Montpellier",
    country:"France",
    photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Montpellier_Place_de_la_Com%C3%A9die.jpg/1200px-Montpellier_Place_de_la_Com%C3%A9die.jpg",
    distance:"242 km"
  },
  {
    destination:"Fécamp",
    country:"France",
    photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/F%C3%A9camp_Phare.jpg/1200px-F%C3%A9camp_Phare.jpg",
    distance:"863 km"
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) => (
      <Travel
        destination={travel.destination}
        country={travel.country}
        photo={travel.photo}
        distance={travel.distance}
        key={index}
      />
    ))}
  </div>
);

export default Travels; 