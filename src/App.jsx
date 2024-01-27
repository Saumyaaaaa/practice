import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 xl:w-2/3">
          <img
            src="times.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 xl:w-1/3">
          <div className="flex flex-col justify-center items-center lg:items-start h-full px-4 lg:px-8">
            <Card
              username="Concept of Self Learning"
              btnText="Read More"
              paragraph="In developing countries, self-learning is a vital tool for individuals to overcome educational barriers and adapt to limited resources, fostering personal growth and contributing to socio-economic development."
              imageSrc="my.jpeg"
            />

            <Card
              username="CodeNari"
              btnText="Visit Us"
              paragraph="Codenari, founded by Saumya Neupane, is dedicated to fostering the welfare and empowerment of girls within the tech community. The organization strives to create opportunities, provide support, and promote inclusivity for girls pursuing careers in technology."
              imageSrc="nari.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
