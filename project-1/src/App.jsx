import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaMenu from './Component/PizzaMenu';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Loader from './Component/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [isloading, setISloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISloading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
        <Header/>
        <PizzaMenu />
        <Footer/>
        </>
      )}
    </>
  );
}

export default App;




    