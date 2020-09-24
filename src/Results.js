import React, { useContext } from "react";
import Pet from "./Pet";
import ThemeContext from "./ThemeContext";

const Results = ({ pets }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }} className="search">
      {pets.length ? (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      ) : (
        <h1>No Pets Found</h1>
      )}
    </div>
  );
};

export default Results;
