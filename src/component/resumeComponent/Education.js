import React, { Component } from 'react';
import Educations from './Educations';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      info: {
        university: '',
        study: '',
        degree: '',
        to: '',
        from: '',
        index: 0,
      },
      infos: [],
    }
  }

  toggleForm = (e) =>{
    this.setState({
      open: !this.state.open,
    });
    console.log(this.props);
  }

  onUniversityChange = (e) => {
    this.setState({
        info: {
          university: e.target.value,
          study: this.state.info.study,
          degree: this.state.info.degree,
          to: this.state.info.to,
          from: this.state.info.from,
          index: this.state.info.index,
        }
    });
  }

  onStudyChange = (e) => {
    this.setState({
        info: {
          university: this.state.info.university,
          study: e.target.value,
          degree: this.state.info.degree,
          to: this.state.info.to,
          from: this.state.info.from,
          index: this.state.info.index,
        }
    });
  }

  onDegreeChange = (e) => {
    this.setState({
        info: {
          university: this.state.info.university,
          study: this.state.info.study,
          degree: e.target.value,
          to: this.state.info.to,
          from: this.state.info.from,
          index: this.state.info.index,
        }
    });
  }

  onFromChange = (e) => {
    this.setState({
        info: {
          university: this.state.info.university,
          study: this.state.info.study,
          degree: this.state.info.degree,
          to: this.state.info.to,
          from: e.target.value,
          index: this.state.info.index,
        }
    });
  }

  onToChange = (e) => {
    this.setState({
        info: {
          university: this.state.info.university,
          study: this.state.info.study,
          degree: this.state.info.degree,
          to: e.target.value,
          from: this.state.info.from,
          index: this.state.info.index,
        }
    });
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      open: false,
      infos: this.state.infos.concat(this.state.info),
      info: {
        university: '',
        study: '',
        degree: '',
        to: '',
        from: '',
        index: this.state.info.index + 1,
      },
    });
  }

  deleteInfo = (e) => {
    e.preventDefault();
    let deleteIndex = Number(e.target.dataset.index);
    this.setState({
      infos: this.state.infos.filter((info) => info.index !== deleteIndex),
    });
  }

  render() { 
    const {open,info,infos} = this.state;
    const {university, study, degree, to, from} = info;
    const {editMode} = this.props;
    return (
      <div className="education">
          <h1 className='title'>EDUCATION</h1>
          <Educations infos={infos} deleteEducation={this.deleteInfo} editMode={editMode}/>
          { open && editMode && 
            <form className="educationForm" onSubmit={this.addEducation}>
                <div id="universitySection">
                  <label>Unversity: </label>
                  <input type="text" onChange={this.onUniversityChange} value={university} required></input>
                </div>
                <div id="studySection">
                  <label>Field Of Study: </label>
                  <input type="text" onChange={this.onStudyChange} value={study} required></input><br/>              
                </div>
                <div id="degreeSection">
                  <label>Degree: </label>
                  <input type="text" onChange={this.onDegreeChange} value={degree} required></input><br/>             
                </div>
                <div>
                  <label id="fromSection">From: </label> 
                  <input type="text" onChange={this.onFromChange} value={from} required></input>             
                </div>
                <div>
                  <label id="toSection">To: </label> 
                  <input type="text" onChange={this.onToChange} value={to} required></input>         
                </div>
                <button type="button" className="close" onClick={this.toggleForm}>CLOSE</button>
                <button type="submit" className="submit">SUBMIT</button>
            </form>
          }
          {!open && editMode && <button className='addEducation' onClick={this.toggleForm}> + ADD EDUCATION </button>}
        </div>
      );
  }
}
 
export default Education;

