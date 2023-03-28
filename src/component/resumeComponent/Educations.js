import React from 'react'

export default function Educations({infos, deleteEducation, editMode}) {

  return (
    <div>
        {infos.map((info) => {
            return (
            <div className="addedEducation" key={info.index}>
              <div>
                <h2>{info.university}</h2>
                <h4 style={{color: "##8d8d8d"}}>{info.study}, {info.degree}</h4>   
                <h5 style={{color: "#c7c7c7"}}>{info.from} - {info.to}</h5>   
              </div>
              {editMode && <button data-index={info.index} onClick={deleteEducation} className="delete"> DELETE </button>  }       
            </div>
            );
        })}
    </div>
  )
}