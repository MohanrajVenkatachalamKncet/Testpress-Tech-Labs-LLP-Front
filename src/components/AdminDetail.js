import React, { useState , useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../context/global";
import axios from 'axios';
export default function AdminDetail() {
    const {
      adminName,setAdminName,
      quizTitle,setQuizTitle,
      idForm, setIdForm,
      questionForm, setQuestionForm,
      option1Form, setOption1Form,
      option2Form, setOption2Form,
      option3Form, setOption3Form,
      option4Form, setOption4Form,
      correctForm, setCorrectForm,
    }=useContext(UserContext);
    const display=()=>{
        // alert(idForm+questionForm+option1Form+option2Form+option3Form+option4Form+correctForm)
    }

    const createDataAxios=(e)=>{
        display()
        var a={
            "ID":idForm,
            "TITLE":quizTitle,
            "QUESTION":questionForm,
            "OPTION1":option1Form,
            "OPTION2":option2Form,
            "OPTION3":option3Form,
            "OPTION4":option4Form,
            "CORRECT":correctForm
        }
        console.log(idForm+quizTitle+questionForm+option1Form+option2Form+option3Form+option4Form+correctForm)
        axios.post(`http://localhost:7000/Quiz/createData`,a)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log("Name Not send due to"+" "+err);})
      }
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div style={{paddingTop:"10%"}} className="p-sm-5">
        <header>
        <p className="text-center" style={{fontSize:"30px"}}>Welcome to Quiz Assesment</p>
        <p className="text-center" style={{fontSize:"30px"}}>Admin Panel</p>
        </header>
        <form style={{}}>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input style={{width:'300px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={adminName} onChange={(e)=>setAdminName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Quiz Title</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={quizTitle} onChange={(e)=>setQuizTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">id</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={idForm} onChange={(e)=>setIdForm(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Question</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={questionForm} onChange={(e)=>setQuestionForm(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 1</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={option1Form} onChange={(e)=>setOption1Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 2</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={option2Form} onChange={(e)=>setOption2Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 3</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={option3Form} onChange={(e)=>setOption3Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 4</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={option4Form} onChange={(e)=>setOption4Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Correct</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={correctForm} onChange={(e)=>setCorrectForm(e.target.value)}/>
            </div>
            {/* <Link to="/adminQuiz"> */}
                <button type="submit" className="btn btn-primary" onClick={(e)=>createDataAxios(e)}>Click to Create Quiz</button>
            {/* </Link> */}
            <div className="p-1 pt-4">
            <Link to="/">
                <button type="submit" className="btn btn-primary">Home</button>
            </Link>
            </div>
        </form>
      </div>
    </div>
    )
}
