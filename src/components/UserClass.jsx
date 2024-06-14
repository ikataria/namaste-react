import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor")

    // Create class inside in Constructor always
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    console.log(JSON.stringify(this.props.userInfo)  +"Child Component Did Mount");
  }

  componentDidUpdate(){
    console.log("Component did updated.")
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }

  render() {
    const { name, location, avatar_url } = this.props.userInfo;

    // debugger;

    return (
      <div className="user">
        <img src={avatar_url} alt="Pic" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
