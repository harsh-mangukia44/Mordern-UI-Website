import React from "react";
import "./Header.css";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3Header sectionPadding" id="home">
      <div className="gpt3HeaderContent">
        <h1 className="gradientText">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3HeaderContentInput">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3HeaderContentPeople">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in 24 hours</p>
        </div>
        <div className="gpt3HeaderImage">
          <img src={ai} alt='AI' />
        </div>
      </div>
    </div>
  );
};

export default Header;
