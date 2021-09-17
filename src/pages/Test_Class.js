import React from "react";

class Test_Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "shakti",
    };
  }
  componentDidMount(){
      this.setState({count:3})
      this.setState({name:"pratap"})
  }

  render() {
    return <>
          <div>i m test and value is {this.state.count}</div>
           <div>i m test and value is {this.state.name}</div>
           </>
  }
}
export default Test_Class;
