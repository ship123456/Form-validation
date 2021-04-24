import React, { Component } from "react";
import "./App.css";

export class App extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      errname: "",
      errpass: "",
      email:'',
      mobile:'',
      errmobile:'',
      erremail:''
    };
    
    this.changeParameters = this.changeParameters.bind(this);
    this.submitHandler=this.submitHandler.bind(this)
  }

  submitHandler(e){
    const{mobile,email}=this.state
    e.preventDefault()
console.log(mobile)   
if(mobile.length!==10)
{
    this.setState({errmobile:'length should be greater than 10'})
}
else{
    this.setState({errmobile:''})
}

     const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
       if(!emailRegex.test(email)){
    this.setState({erremail:'invalid'})
}
else{
    this.setState({erremail:''})

}


    

  }
  changeParameters(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
    if (name === "name") {
      if (value.length < 5) {
        this.setState({
          errname: "name should be greater than 5 char",
        });
      } else {
        this.setState({
          errname: "",
        });
      }
    }
    if (name === "password") {
      if (value.length < 10) {
        this.setState({
          errpass: "password should be greater than 10 char",
        });
      } else {
        this.setState({
          errpass: "",
        });
      }
    }
   
  }
  render() {
    const { errname, errpass,erremail,errmobile } = this.state;
    return (
      <>
        <div>
          form validation done on onsubmit.
          <form onSubmit={(e)=>this.submitHandler(e)}>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              onChange={(e) => this.changeParameters(e)}
              value={this.state.email}
            />{" "}
            <br />
            <div className="error"> {erremail}</div> <br />
            <input
              type="number"
              name="mobile"
              placeholder="enter mobile"
              onChange={(e) => this.changeParameters(e)}
              value={this.state.mobile}
            />{" "}
            <br />
            <div className="error"> {errmobile}</div>
            <button>submit</button>
 <br /> <br />
            <br />
          </form>
        </div>
        <br />
        <br />
        <br />

        <div>
          form validation done on onChange.
          <form >
            <input
              type="text"
              name="name"
              placeholder="enter name"
              onChange={(e) => this.changeParameters(e)}
              value={this.state.name}
            />{" "}
            <br />
            <div className="error"> {errname}</div> <br /> <br />
            <br />
            <input
              type="passord"
              name="password"
              placeholder="enter password"
              onChange={(e) => this.changeParameters(e)}
              value={this.state.password}
            />{" "}
            <br />
            <div className="error"> {errpass}</div> <br /> <br />
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default App;
