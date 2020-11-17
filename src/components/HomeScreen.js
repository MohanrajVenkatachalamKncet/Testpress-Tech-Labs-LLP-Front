import React from 'react'
import {Link} from 'react-router-dom';
export default function HomeScreen() {
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div style={{paddingTop:"10%"}} className="p-sm-5">
        <header>
        <p className="text-center" style={{fontSize:"30px"}}>Welcome to Quiz Assesment</p>
        </header>
        <div className="d-flex row">
          <div className="p-4 col-12" style={{textAlign:'center'}}>
           <Link to="/adminDetail">
                <button className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
                  Admin
                </button>
           </Link>
          </div>
          <div className="p-4 col-12" style={{textAlign:'center'}}>
           <Link to="/userDetail">
            <button  className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
              User
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}
