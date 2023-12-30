import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
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
      </article>
    </main>
  );
};
export default App;
