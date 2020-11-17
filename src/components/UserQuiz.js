import React, { useContext } from 'react'
import {Link } from 'react-router-dom';
import {UserContext} from '../context/global';
import {dataquestion,datatitle} from "../data/dataList"
const QuizList=()=>datatitle.map((item,index)=>{
        return(
            <div className="p-1 col-12" style={{textAlign:'center'}}>
               <Link to="/userQuizPortal">
                    <button className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
                     {item.title}
                    </button>
               </Link>
            </div>
        )
})
export default function UserQuiz() {
    const {userName,savedQuizTitle}=useContext(UserContext);
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div style={{paddingTop:"10%"}} className="p-sm-5">
        <header>
        <p className="text-center" style={{fontSize:"30px"}}>Welcome <span style={{color:'red'}}>{userName}</span> to Quiz Assesment</p>
        <p className="text-center" style={{fontSize:"20px"}}>Choose Your Assesment Here !!</p>
        <QuizList/>
        </header>
      </div>
    </div>
    )
}
