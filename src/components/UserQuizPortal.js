import React, {useContext , useState} from 'react';
import {dataquestion} from '../data/dataList';
import {UserContext} from "../context/global";
import {Link} from 'react-router-dom';
export default function UserQuizPortal() {
const {score,setScore,questions,setQuestions,answer,setAnswer}=useContext(UserContext);  
const [resultEnable,setResultEnable]=useState(false);
const [result,setResult]=useState(false);
const [yourAnswer,setYourAnswer]=useState('');
const [buttonClick, setButtonClick] = useState("false");
function clear(){
    setScore(0)
    setQuestions(0)
    setAnswer('')
}
const QuestionsAnOptions=()=>{
return(
    <div className="pt-4">   
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
                <button 
                        onClick={()=>{
                            clear()
                        }}
                        className="col-12 btn text-left p-2 m-2 btn-overlay text-center" 
                        style={{backgroundColor:"#255f6b",fontSize:'25px',color:"white"}}
                >
                Home Page  
                </button>
            </Link>
        </div>
    </div>:''}

    <div className="d-flex row text-left">
        <div className="col-12">
            <div style={{userSelect:"none",fontSize:30}}>{questions+1}. {dataquestion[0].question}</div>
        </div>
    </div>
    <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>
            <button value={dataquestion[0].option1} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white",pointerEvents:buttonClick}}>{dataquestion[questions].option1}</button> 
            <button value={dataquestion[0].option2} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white",pointerEvents:buttonClick}}>{dataquestion[questions].option2}</button>
            <button value={dataquestion[0].option3} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white",pointerEvents:buttonClick}}>{dataquestion[questions].option3}</button>
            <button value={dataquestion[0].option4} className="col-12 btn text-left p-2 m-2 btn-overlay" onClick={scoreAndNext} style={{backgroundColor:"#255f6b",color:"white",pointerEvents:buttonClick}}>{dataquestion[questions].option4}</button>
    </div>

    <div className="mr-4" style={{padding:"20px",paddingLeft:"30px",maxWidth:'80vw'}}>                         
    <button className="col-12 btn text-left p-2 m-2 btn-overlay" 
            onClick={scoreAndNext} 
            style={{backgroundColor:"#255f6b",fontSize:'25px',color:"#a84e32"}}
    >
        Your Answer is  
        <p style={{color:"white",fontSize:'30px'}}>{yourAnswer}</p>
        Currect Answer is  
        <p style={{color:"white",fontSize:'30px'}}>{answer}</p>
        Your Score 
        <p style={{color:"white",fontSize:'30px'}}>{score}</p>
    </button>
    </div>
    </div>
    )
}

function scoreAndNext(e){
    setAnswer(dataquestion[questions].correct);
    setButtonClick('none')
    if(dataquestion[questions].correct==e.target.value)
        {
            setScore(score+1); 
            setYourAnswer(e.target.value);
        }          
    else
        setScore(score+0); 
        setYourAnswer(e.target.value); 
        setTimeout(()=>{
            if(questions<dataquestion.length-1)
                {
                    setButtonClick('false')
                    setQuestions(questions+1); 
                }
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
