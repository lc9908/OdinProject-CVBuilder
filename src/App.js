import React, { Component } from 'react';
import Resume from './component/Resume';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
    }
  }

  changeMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
    console.log(this.state.editMode);
  }

  render() { 
    const {editMode} = this.state;
    return (    
      <div className="app">
        <h1 className='title'>CV Builder</h1>
        <button className='changeModeBtn' onClick={this.changeMode}>{editMode ? "Preview Mode" : "Edit Mode"}</button>
        <Resume editMode={editMode}/>
      </div> 
    );
  }
}
 
export default App;