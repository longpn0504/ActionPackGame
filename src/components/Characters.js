//Characters page
import React from 'react';
import exampleImage from '../images/example.png';

function Characters() {
  const characters = [
    {
      name: 'Fly Bronze',
      description: 'description about this character',
      image: exampleImage
    },
    {
      name: 'Chirster',
      description: 'description about this character',
      image: exampleImage
    },
    {
      name: 'Mimia Man',
      description: 'description about this character',
      image: exampleImage
    },
    {
      name: 'Wonder Wrath',
      description: 'description about this character',
      image: exampleImage
    },
    {
      name: 'Jairan',
      description: 'description about this character',
      image: exampleImage
    },
    {
      name: 'Human Strike',
      description: 'description about this character',
      image: exampleImage
    },

  ]
  return (
    <div className='text-white text-center'>
      <h1 className='text-3xl font-thin'>Choose your</h1>
      <h1 className='text-5xl font-serif italic'>Character</h1>
      {characters.map((character,index) => (
          <div key={index} className="smb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <div className="flex justify-center bg-gray-900 py-10 px-10 space-y-2">
            <img className="w-40 h-40 rounded-full object-cover object-center" src={character.image} />
            <div className="relative w-[60%] py-2 px-10"> 
              <h1 className="text-white text-2xl font-bold capitalize text-center">{character.name}</h1>
              <p>{character.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;