import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Story from './components/Story';
import Characters from './components/Characters';
import Home from './components/Home';


function App() {
  const currentPath = window.location.pathname;

  let currentPage;

  switch (currentPath) {
    case '/':
      currentPage = <Home />;
      break;
    case '/about':
      currentPage = <About />;
      break;
    case '/story':
      currentPage = <Story />;
      break;
    case '/characters':
      currentPage = <Characters />;
      break;
    default:
      currentPage = <div className='text-white font-bold center-text big-text'>404 - Page Not Found</div>;
  }
  
  return (
    <div>
      <Navbar/>
      {currentPage}
    </div>
  );
}

export default App;
