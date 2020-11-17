import React, {useContext , useState} from 'react'
import {dataquestion} from '../data/dataList';
import {UserContext} from "../context/global";
import {Link} from 'react-router-dom';
export default function UserQuizPortal() {
    const {score,setScore,questions,setQuestions,answer,setAnswer}=useContext(UserContext);  
    const [resultEnable,setResultEnable]=useState(false);
    const [result,setResult]=useState(false);
    const QuestionsAnOptions=()=>{
        return(
             <div className="pt-4">   
                 <div className="d-flex row text-left">
                     <div className="col-12">
                         <div style={{userSelect:"none",fontSize:30}}>{questions+1}. {dataquestion[questions].question}</div>
                     </div>
                 </div>
                 <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>
                         <button value={dataquestion[questions].option1} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white"}}>{dataquestion[questions].option1}</button>
                         <button value={dataquestion[questions].option2} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white"}}>{dataquestion[questions].option2}</button>
                         <button value={dataquestion[questions].option3} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white"}}>{dataquestion[questions].option3}</button>
                         <button value={dataquestion[questions].option4} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white"}}>{dataquestion[questions].option4}</button>
                 </div>
                 {/* <div className="ml-2" style={{paddingLeft:"30px"}}>
                    Score: {score} 
                 </div> */}
                 {/* {answer==dataquestion[questions].correct?
                    <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>                         
                    <button className="col-12 btn text-left p-2 m-2 btn-overlay" 
                            onClick={scoreAndNext} 
                            style={{backgroundColor:"#255f6b",fontSize:'25px',color:"white"}}
                    >
                        You are Right !! The Answer is 
                        <p style={{color:"#a84e32",fontSize:'30px'}}>{dataquestion[questions].correct}</p>
                    </button>
                    </div> 
                 :
                    <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>                         
                    <button className="col-12 btn text-left p-2 m-2 btn-overlay" 
                            onClick={scoreAndNext} 
                            style={{backgroundColor:"#255f6b",fontSize:'25px',color:"#a84e32"}}
                    >
                        You are Wrong  !!  
                        <p style={{color:"white",fontSize:'30px'}}>The Answer is {dataquestion[questions].correct}</p>
                    </button>
                    </div>

                } */}


                {score>5?setResult('Well Done You are passed'):setResult('Sorry You are Failed')}
                {resultEnable?
                    <div>
                        <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>                         
                    <button className="col-12 btn text-left p-2 m-2 btn-overlay text-center" 
                            onClick={scoreAndNext} 
                            style={{backgroundColor:"#255f6b",fontSize:'25px',color:"white"}}
                    >
                    {result} - Your Score is {score}/10 
                    </button>
                    
                    </div>
                    <div className="mr-4" style={{padding:"1px",marginLeft:"10%",maxWidth:'35vw'}}>                         
                    <Link to="/">
                        <button className="col-12 btn text-left p-2 m-2 btn-overlay text-center" 
                                style={{backgroundColor:"#255f6b",fontSize:'25px',color:"white"}}
                        >
                        Home Page  
                        </button>
                    </Link>
                    
                    </div>
                    </div>
                    :''}

                 {/* <div className="mr-4" style={{padding:"20px",paddingLeft:"30vw",paddingRight:"30vw",maxWidth:'30vw'}}>
                 <p className="btn text-center" style={{backgroundColor:"#255f6b",color:"white"}} onClick={()=>{setQuestions(questions+1)}}>Next</p>
                 </div> */}
             </div>
         )
     }
    function scoreAndNext(e){
        setAnswer(e.target.value);
        if(dataquestion[questions].correct==e.target.value)
            setScore(score+1);           
        else
            setScore(score+0);  
            setTimeout(()=>{
                if(questions<dataquestion.length-1)
                    setQuestions(questions+1); 
                else
                    setResultEnable(true);                           
            },1000); 
    }
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "200vw",minHeight: "100vh"}}>
            <p className="pt-4" style={{fontSize:"30px",padding:'2px'}}>Welcome to Quiz Assesment</p>
            <QuestionsAnOptions/>
        </div>
    )
}
