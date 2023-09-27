//About page
import React from 'react';
import KobeImage from '../images/DefaultAvatar.png';
import MarkImage from '../images/DefaultAvatar.png';
import LongImage from '../images/DefaultAvatar.png';
import RoyImage from '../images/DefaultAvatar.png';


const persons = [
  {
    name: 'Kobe Dare',
    imageSrc: KobeImage,
    bio: 'Short paragraph about Kobe.',
  },
  {
    name: 'Mark Ibarra',
    imageSrc: MarkImage,
    bio: 'Short paragraph about Mark.',
  },
  {
    name: 'Long Nguyen',
    imageSrc: LongImage,
    bio: 'Short paragraph about Long.',
  },
  {
    name: 'Roy Perlman',
    imageSrc: RoyImage,
    bio: 'Short paragraph about Roy.',
  },
];

function About() {
  return (
    <div className='center-text text-white person-card'>
      <h1 className='big-text font-bold'> Meet the Team:</h1>
        <br />
      <p> Hello! We are students at San Jose State University. This website is for our senior project. 
      Our team consists of four skilled members: Roy, Long, Kobe, and Mark, Over the next two semesters, we will be developing 
      a fun 2D action-packed game. With our diverse skillsets, creativity, and commitment, we aim to create an immersive gaming 
      experience that engages players and brings our ideas to life. As a team of students, we are excited about the challenges 
      ahead and look forward to pushing our development boundaries to deploy our senior project.
       
       <br />
      </p>

      <div>
        {persons.map((person, index) => (    
          <div key={index}>
            <div className='image-container'>
              <img src={person.imageSrc} alt={person.name} />
            </div>
              <h2 className='font-bold'>{person.name}</h2>
              <p>{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;