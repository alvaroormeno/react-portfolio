import './App.css'

import Nav from './components/nav'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Resume from './components/resume'
import Footer from './components/footer'

import React, {useEffect, useState} from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'About': 
        return <About/>;
      case 'Resume': 
        return <Resume/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      default: 
        return <About/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main id="main">
        {renderPage()}
      </main>
      <Footer></Footer>
    </>
    
  )

}

export default App;
