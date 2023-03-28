import React from 'react';
import Header from './resumeComponent/Header';
import Education from './resumeComponent/Education';
import Experience from './resumeComponent/Experience';

export default function Resume({editMode}) {
  return (
    <div className="resume">
        <Header editMode={editMode}/>
        <hr/>
        <Education editMode={editMode} />
        <hr/>
        <Experience editMode={editMode} />
    </div>
  )
}
