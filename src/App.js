import React from "react"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "alexandru"
    }
    
  }


  changeName() {
    return this.setState({
      name:"ALexandru Pistol"
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.name}<br/>
        <button onClick={ this.changeName}> Change name </button>
      </div>
    );
  }

}

export default App;
