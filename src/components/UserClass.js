
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Default",
            },
          };
          console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        const encodedUrl = encodeURIComponent(`https://api.github.com/users/Gaurav-jha123`);
        const data = await fetch(`http://localhost:5000/proxy?url=${encodedUrl}`);
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });
    }
    

//render will return some jsx that will be diplayed on to ui
    render(){
        //const {name, location} = this.props;
        const {count} = this.state;
        const { login, location } = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>count : {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Count Increase</button>
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: xyz@email.com</h4>
            </div>
        );
    }
}

export default UserClass;