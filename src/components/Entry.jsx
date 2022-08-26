import React from 'react'
import moment from 'moment';
import { HiOutlinePencilAlt, HiOutlineX, HiLink } from 'react-icons/hi'

const Entry = (props) => {

  const evenBg = {
    backgroundColor: '#393E46',
  };

  const bgColor = props.id % 2 === 0 
    ? evenBg
    : null

  return (
    <div className='entry-item' id={props.id} style={bgColor}>
      <div className="entry-date">{moment(props.date).format('l')}</div>
      <div className="entry-company">{props.company}</div>
      <div className="entry-link"><a href={props.link} target="_blank" rel="noopener noreferrer"><HiLink /></a></div>
      <div className="entry-research">{props.research ? 'yes' : 'no'}</div>
      <div className="entry-linkedIn">{props.linkedIn ? 'yes' : 'no'}</div>
      <div className="entry-actions">
        <HiOutlinePencilAlt className='edit-icon'/>
        <HiOutlineX className='delete-icon' onClick={() => props.deleteHandler(props.id)}/>
      </div>
    </div>
  )
}

export default Entry;