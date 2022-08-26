import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import {v4 as uuidv4 } from 'uuid';

function App() {
  const [entriesList, setEntriesList] = useState([...JSON.parse(localStorage.getItem('entries_list'))]);

  const [entry, setEntry] = useState({
    date: '',
    company: '',
    research: false,
    addOnLinkedIn: false,
    interviewOne: {
      date: ''
    },
    interviewTwo: {
      date: ''
    },
    assessment: {
      date: ''
    },
    jobLink: ''
  });

  useEffect(() => {
    localStorage.setItem('entries_list', JSON.stringify(entriesList));
  }, [entriesList]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('values', entry);
    if (entry.date === '' || entry.company === '' || entry.link === '') {
      console.log('Required fields');
    } else {
      const addEntry = {
      id: uuidv4(),
      ...entry
      };
      setEntriesList(prev => ([
        ...prev,
        addEntry
      ]));
    };
  };

  const deleteHandler = (entryId) => {
    console.log('entryId', entryId);
  }

  return (
    <div className="App">
      <Form  submitHandler={submitHandler} entry={entry} setEntry={setEntry} /> 
      <Navigation entriesList={entriesList} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
