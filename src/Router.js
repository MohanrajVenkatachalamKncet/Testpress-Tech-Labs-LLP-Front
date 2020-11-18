import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AdminDetail from './components/AdminDetail';
import HomeScreen from "./components/HomeScreen"
import UserDetail from './components/UserDetail';
import UserQuiz from './components/UserQuiz';
import UserQuizPortal from './components/UserQuizPortal';
export default function Router() {
    return (
       <Switch>
           <Route exact path="/" component={HomeScreen}/>
           <Route exact path="/userDetail" component={UserDetail}/>
           <Route exact path="/adminDetail" component={AdminDetail}/>
           <Route exact path="/userQuiz" component={UserQuiz}/>
           <Route exact path="/userQuizPortal" component={UserQuizPortal}/>
       </Switch>
    )
}
