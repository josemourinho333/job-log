import React from 'react';
import Entry from './Entry';
import EntriesColumns from './EntriesColumns';

const Entries = (props) => {

  const entry = props?.entriesList?.map((item) => {
    return (
      <Entry 
        key={item.id}
        id={item.id}
        date={item.date}
        company={item.company}
        research={item.research}
        linkedIn={item.addOnLinkedIn}
        interviewOne={item.interviewOne}
        interviewTwo={item.interviewTwo}
        assessment={item.assessment}
        link={item.jobLink}
        deleteHandler={props.deleteHandler}
      />
    )
  });

  return (
    <div className='entries-container'>
      <EntriesColumns />
      {props?.entriesList?.length > 0
        ? entry
        : <div>No applications sent yet</div>}
    </div>
  )
}

export default Entries;