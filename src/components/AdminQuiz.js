import React ,{ useContext} from 'react';
import {UserContext} from "../context/global";
export default function AdminQuiz() {
    const {adminName}=useContext(UserContext)
    return (
        <div>
           Welcome {adminName} 
        </div>
    )
}
