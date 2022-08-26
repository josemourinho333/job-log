import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import {v4 as uuidv4 } from 'uuid';

function App() {

  const [entriesList, setEntriesList] = useState(
    localStorage.getItem('entries_list')
    ? [...JSON.parse(localStorage.getItem('entries_list'))]
    : []
  );

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

  const initialEntry = {
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
  };

  useEffect(() => {
    localStorage.setItem('entries_list', JSON.stringify(entriesList));
  }, [entriesList]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (entry.id) {
      const oldId = entry.id;
      const newList = entriesList.filter(entry => entry.id !== oldId);
      const updatedList = [...newList, entry];
      setEntriesList([...updatedList]);
      setEntry({...initialEntry});
    } else {
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

        setEntry({...initialEntry});
      };
    };
  };

  const deleteHandler = (entryId) => {
    const newEntriesList = entriesList.filter(entry => entry.id !== entryId);
    setEntriesList([...newEntriesList]);
  };

  const editHandler = (entryData) => {
    console.log('entryId', entryData);
    setEntry({...entryData});
  };

  return (
    <div className="App">
      <Form  submitHandler={submitHandler} entry={entry} setEntry={setEntry} /> 
      <Navigation entriesList={entriesList} deleteHandler={deleteHandler} editHandler={editHandler}/>
    </div>
  );
}

export default App;
