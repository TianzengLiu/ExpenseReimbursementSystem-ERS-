import React from 'react';
// import logo from './logo.svg';
import './include/bootstrap'
import './App.css';

import { SignInComponent } from './components/signin/signin.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/secondcomponent/second.component';
// import { NavComponent } from './components/nav/nav.component';

// import { FirstComponent } from './components/firstcomponent/first.component';
import { ClickerComponent } from './components/clicker/clicker.component';
//import { MoviesComponent } from './components/movies/movies.component';
import { NestedComponent } from './components/nested/nested.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ChuckNorrisComponent } from './components/chucknorris/chucknorris.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { UsersComponent } from './components/userscomponent/users.component';
import { LogOutComponent } from './components/logoutcomponent/logout.component';
import { UserComponent } from './components/usercomponent/user.component';

import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { ReimbursementByUserComponent } from './components/reimbursementbyuser/reimbursementbyuser.component';
import { ReimbursementByStatusComponent } from './components/reimbursementbystatus/reimbursementbystatus.component';








const App: React.FC = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    {/* <NavComponent/> */}
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/login' component={SignInComponent}/>
        <Route path='/home' component={HomeComponent}/>
        <Route path='/second' component={HomeComponent}/>
        <Route exact path='/reimbursements/status' component={ReimbursementsComponent}/>
        {/* <Route path='/first' component={FirstComponent}/> */}
        <Route path='/clicker' component={ClickerComponent}/>
        {/* <Route path='/movies' component={MoviesComponent}/> */}
        <Route path='/nested' component={NestedComponent}/>
        <Route path='/pokemon' component={PokemonComponent}/>
        {/*             we use render instead of component to give props in a route  */}
        {/* This is an example of a higher order component That is a component that wraps around another one and adds some functionality */}
        <Route path='/chuck-norris' render={(props)=><ChuckNorrisComponent {...props} maxJokes={10}/>}/>
        <Route path='/tic-tac-toe' component={TicTacToeComponent}/>
        <Route exact path='/users' component={UsersComponent}/>  
        <Route path='/logout' component={LogOutComponent}/>
        <Route path='/users/:user_id' component={UserComponent}/>
        <Route path='/reimbursements/status/:status_id'  component={ReimbursementByStatusComponent}/>
        <Route path='/reimbursements/author/userId/:user_id'  component={ReimbursementByUserComponent}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
