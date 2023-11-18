import React, { useState } from 'react';
import data from '../data';

export default function Got() {
  const { houses } = data;
  const peopleArray = houses.flatMap((house) => house.people);

  const [filteredPeople, setFilteredPeople] = useState(peopleArray);
  const [input, setInput] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  const handleHouseClick = (houseName) => {
    const house = houses.find((house) => house.name === houseName);
    setSelectedHouse(house);
    setFilteredPeople(house.people);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);
    const filtered = selectedHouse
      ? selectedHouse.people.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : peopleArray.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    setFilteredPeople(filtered);
  };

  return (
    <div>
      <div className='main-container'>
        <h1>People of GOT </h1>
        <input
          type='text'
          value={input}
          onChange={handleSearch}
          placeholder='Search the people of GOT'
        />
        <div className='button-container'>
          {houses.map((house, index) => (
            <button key={index} onClick={() => handleHouseClick(house.name)}>
              {house.name.toUpperCase()}
            </button>
          ))}
        </div>
        <div className='people-container'>
          {filteredPeople.map((people, index) => (
            <div key={index} className='people-card'>
              {/* <img src={people.image} alt={`Image of ${people.name}`} /> */}
              <h1>{people.name}</h1>
              {people.description}
              <button
                style={{
                  color: '#fff',
                  backgroundColor: '#000',
                  width: '8rem',
                }}
                onClick={() => window.open(people.wikiLink, '_blank')}
              >
                KNOW MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
