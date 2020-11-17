import React, { useState , useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../context/global";
export default function AdminDetail() {
    const {adminName,setAdminName,quizTitle,setQuizTitle}=useContext(UserContext)
    const display=()=>{
        alert(adminName+" "+quizTitle);
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
            <Link to="/adminQuiz">
            <button type="submit" className="btn btn-primary" onClick={display}>Click to Create Quiz</button>
            </Link>
            
        </form>
      </div>
    </div>
    )
}
