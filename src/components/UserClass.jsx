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
      <div className="user flex flex-col flex-nowrap items-center my-5">
        <img src={avatar_url} alt="Pic" className="rounded-full py-3" />
        <h2 className="text-xl font-medium uppercase underline">Name: {name}</h2>
        <h2 className="text-xl font-medium uppercase underline">Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
