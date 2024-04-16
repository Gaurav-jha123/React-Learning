import food from "../Images/burger-image.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br />Jeevan ke pralobans <br /> <span>Pratidin Lo Sakhao</span>
        </h1>
        <h4>
          "Jevvan ke mauj roj lo nahi mile toh khoj lo<span>Fire</span> do execrice after it"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;