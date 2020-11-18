import React, { useContext } from 'react'
import {Link } from 'react-router-dom';
import {UserContext} from '../context/global';
import axios from 'axios'
// import {dataquestion,datatitle} from "../data/dataList";
// const QuizList=()=>datatitle.map((item,index)=>{
//         return(
//             <div className="p-1 col-12" style={{textAlign:'center'}}>
//                <Link to="/userQuizPortal">
//                     <button className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
//                      {item.title}
//                     </button>
//                </Link>
//             </div>
//         )
// })
export default function UserQuiz() {
    const {userName,savedQuizTitle,quizId,setQuizId,dataquestion,setdataquestion}=useContext(UserContext);
    const readDataAxios=(e)=>{
        axios.get(`http://localhost:7000/Quiz/getData/${quizId}`,{
          id:quizId
        })
        
        .then((res)=>{
          console.log(res.data);
         // setdataquestion(res.data);
        })
        .catch((err)=>{console.log("Data Not Found")});
      }
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div style={{paddingTop:"10%"}} className="p-sm-5">
        <header>
        <p className="text-center" style={{fontSize:"30px"}}>Welcome <span style={{color:'red'}}>{userName}</span> to Quiz Assesment</p>
        <p className="text-center" style={{fontSize:"20px"}}>Search Your Assesment Here !!</p>
        <div className="p-1 col-12">
           <div className="form-group">
                <label for="exampleInputPassword1">Quiz Id</label>
                <input style={{width:'300px'}} placeholder={quizId} type="text" onChange={(e)=>{setQuizId(e.target.value)}} className="form-control"/>
                <div className="pt-4">
                    <Link to="/userQuizPortal">
                    <button className="btn-dark" style={{width:"100px",borderRadius:'10px'}} onClick={(e)=>readDataAxios(e)}>Click to Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
        </header>
      </div>
    </div>
    )
}
