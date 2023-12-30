import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaRandom,
} from 'react-icons/fa';
import people from './data';

const App = () => {
  const [index, setIndex] = useState(1);

  const { name, job, image, text } = people[index];

  console.log(people.length);
  function nextPerson() {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  }
  function prevPerson() {
    let temp = (index - 1 + people.length) % people.length;
    setIndex(temp);
  }
  const randomChoice = () => {
    let rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      rand = (index + 1) % people.length;
    }
    setIndex(rand);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" alt={name} />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        <button className="btn btn-hip" onClick={randomChoice}>
          <FaRandom
            style={{ color: 'black', fontSize: '1.2rem', width: '2.9rem' }}
          ></FaRandom>
        </button>
      </article>
    </main>
  );
};
export default App;
