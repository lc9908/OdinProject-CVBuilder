import React, { Component } from 'react';
import Experiences from './Experiences';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      exp: {
        company: '',
        title: '',
        from: '',
        to: '',
        summarize: '',
        index: 0,
      },
      exps: [],
    }
  };

  toggleForm = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  onCompanyChange = (e) => {
    this.setState({
      exp: {
        company: e.target.value,
        title: this.state.exp.title,
        from: this.state.exp.from,
        to: this.state.exp.to,
        summarize: this.state.exp.summarize,
        index: this.state.exp.index,
      }
    });
  }

  onTitleChange = (e) => {
    this.setState({
      exp: {
        company: this.state.exp.company,
        title: e.target.value,
        from: this.state.exp.from,
        to: this.state.exp.to,
        summarize: this.state.exp.summarize,
        index: this.state.exp.index,
      }
    });
  }

  onFromChange = (e) => {
    this.setState({
      exp: {
        company: this.state.exp.company,
        title: this.state.exp.title,
        from: e.target.value,
        to: this.state.exp.to,
        summarize: this.state.exp.summarize,
        index: this.state.exp.index,
      }
    });
  }

  onToChange = (e) => {
    this.setState({
      exp: {
        company: this.state.exp.company,
        title: this.state.exp.title,
        from: this.state.exp.from,
        to: e.target.value,
        summarize: this.state.exp.summarize,
        index: this.state.exp.index,
      }
    });
  }

  onSummChange = (e) => {
    this.setState({
      exp: {
        company: this.state.exp.company,
        title: this.state.exp.title,
        from: this.state.exp.from,
        to: this.state.exp.to,
        summarize: e.target.value,
        index: this.state.exp.index,
      }
    });
  }

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      open: false,
      exp: {
        company: '',
        title: '',
        from: '',
        to: '',
        summarize: '',
        index: this.state.exp.index + 1,
      },
      exps: this.state.exps.concat(this.state.exp),
    });
  }

  deleteExp = (e) => {
    e.preventDefault();
    console.log(e);
    let deleteIndex = Number(e.target.dataset.index);
    console.log(deleteIndex);

    this.setState({
      exps: this.state.exps.filter((exp) => exp.index !== deleteIndex),
    });
  }



  render() { 
    const {open,exp, exps} = this.state;
    const {company, title, from, to, summarize} = exp;
    const {editMode} = this.props;
    return (    
      <div className="work">
        <h1 className="title">WORK EXPERIENCE</h1>
        <Experiences experiences={exps} deleteExp={this.deleteExp} editMode={editMode} />
        {open &&
        <form className="workForm" onSubmit={this.addExperience}>
                <div id="companySection">
                  <label>Company Name: </label>
                  <input type="text" onChange={this.onCompanyChange} value={company} required></input>
                </div>
                <div id="workTitleSection">
                  <label>Title: </label>
                  <input type="text" onChange={this.onTitleChange} value={title} required></input><br/>       
                </div>
                <div>
                <label>From: </label> 
                <input type="text" onChange={this.onFromChange} value={from} required></input>             
                </div>
                <div>
                <label>To: </label> 
                <input type="text" onChange={this.onToChange} value={to} placeholder="If you currently work here, type in 'now' "  required></input>       
                </div>
                <label>Summarize Your Work in a paragraph: </label>
                <textarea rows="10" onChange={this.onSummChange} value={summarize} style={{fontSize: "20px", padding:"5px"}} ></textarea>
                <button type="button" className="close" onClick={this.toggleForm}>CLOSE</button>
                <button type="submit" className="submit">SUBMIT</button>
          </form>
        }
      {!open && editMode && <button className='addWork' onClick={this.toggleForm}> + ADD WORK EXPERIENCE </button>}
      </div> 
    );
  }
}
 
export default Experience;