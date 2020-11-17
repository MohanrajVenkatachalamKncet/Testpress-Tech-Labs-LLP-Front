import React , {useState} from 'react';
import {Switch } from 'react-router-dom';
import Router from './Router';
import { UserContext } from "./context/global";
function App() {
  const [userName, setUserName] = useState("Enter Your Name");
  const [rollNumber, setRollNumber] = useState("Enter Your Roll Number");
  const [adminName,setAdminName]=useState("Enter Your Name");
  const [quizTitle, setQuizTitle] = useState("Enter Your Quiz Title");
  const [savedQuizTitle, setSavedQuizTitle] = useState('React Quiz');
  const [score,setScore]=useState(0);
  const [questions,setQuestions]=useState(0);
  const [answer, setAnswer] = useState('');
  return (
    <UserContext.Provider value={{
      userName,setUserName,
      rollNumber,setRollNumber,
      adminName,setAdminName,
      quizTitle,setQuizTitle,
      savedQuizTitle,setSavedQuizTitle,
      score,setScore,
      questions,setQuestions,
      answer,setAnswer
    }}>
      <Switch>
        <Router/>
      </Switch>
    </UserContext.Provider>
    )
}

export default App

