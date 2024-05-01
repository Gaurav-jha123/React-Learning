import food from "../Images/burger-image.png";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br />Jeevan ke pralobans <br /> <span>Pratidin Lo Sakhao</span>
        </h1>
        <h4>
          "Jevvan ke mauj roj lo nahi mile toh khoj lo<span>Fire</span> do execrice after it"
        </h4>
        <UserClass name = {"Hey Bro's my name"} location = {"Delhi"}/>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
    );
  }
}

export default About;