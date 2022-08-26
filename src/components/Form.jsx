import React from 'react'

const Form = (props) => {
  
  const { submitHandler, entry, setEntry } = props;

  return (
    <div className='form-container'>
      <form onSubmit={(e) => submitHandler(e)} className='log-entry-form'>
        <div className="apply-date">
          <label>Date<span className='required'>*</span></label>
          <input type="date" value={entry.date} onChange={(e) => setEntry(prev => ({
            ...prev,
            date: e.target.value,
          }))}/>
        </div>

        <div className="company">
          <label>Company<span className='required'>*</span></label>
          <input type="text" value={entry.company} onChange={(e) => setEntry(prev => ({
            ...prev,
            company: e.target.value
          }))} />
        </div>

        <div className="jobLink">
          <label>Link<span className='required'>*</span></label>
          <input type="text" value={entry.jobLink} onChange={(e) => setEntry(prev => ({
            ...prev,
            jobLink: e.target.value
          }))}/>
        </div>

        <div className='interviewOne'>
          <label>1st Stage</label>
          <input type="date" value={entry.interviewOne.date} onChange={(e) => setEntry(prev => ({
            ...prev,
            interviewOne: {
              date: e.target.value
            }
          }))}/>
        </div>

        <div className='interviewTwo'>
          <label>2nd Stage</label>
          <input type="date" value={entry.interviewTwo.date} onChange={(e) => setEntry(prev => ({
            ...prev,
            interviewTwo: {
              date: e.target.value
            }
          }))}/>
        </div>

        <div className='assessment'>
          <label>Assessment</label>
          <input type="date" value={entry.assessment.date} onChange={(e) => setEntry(prev => ({
            ...prev,
            assessment: {
              date: e.target.value
            }
          }))} />
        </div>

        <div className="misc">
          <div className="research">
            <label>Researched</label>
            <input type="checkbox" value={entry.research} onChange={(e) => setEntry(prev => ({
              ...prev,
              research: !entry.research
            }))} />
          </div>
          <div className="addOnLinkedIn">
            <label>Added on LinkedIn</label>
            <input type="checkbox" value={entry.addOnLinkedIn} onChange={(e) => setEntry(prev => ({
              ...prev,
              addOnLinkedIn: !entry.addOnLinkedIn
            }))} />
          </div>         
        </div>

        <div className="submit-button">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;