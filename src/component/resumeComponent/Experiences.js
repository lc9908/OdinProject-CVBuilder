import React from 'react'

export default function Experiences(props) {

  const {experiences, editMode} = props;
  return (
    <div>
      {experiences.map((experience) => {

      return (
        <div className="addedExperience" key={experience.company}>
          <div>
            <h2>{experience.company}</h2>
            <h4 style={{color: "#4a4949"}}>{experience.title}</h4>
            <h5 style={{color: "#999797"}}>{experience.from} - {experience.to} </h5>
            <ul>
              <li>{experience.summarize}</li>
            </ul>
          </div>
          {editMode && <button className="delete"> DELETE </button>  }      
        </div>
      )
    })}
    </div>
  )
}
