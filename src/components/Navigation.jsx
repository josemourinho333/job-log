import React from 'react';
import Entries from './Entries';


const Navigation = (props) => {
  return (
    <div>
      <div className='navigation-container'>
        <button className="application-btn">Applied</button>
        <button className="firstInterview-btn">1st Stage</button>
        <button className="secondInterview-btn">2nd Stage</button>
        <button className="assessment-btn">Assessment</button>
      </div>
      <Entries entriesList={props.entriesList} deleteHandler={props.deleteHandler}/>
    </div>
  )
}

export default Navigation;