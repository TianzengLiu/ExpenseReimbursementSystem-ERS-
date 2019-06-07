import React from 'react'
import { NavComponent } from '../nav/nav.component';

export class ArtistComponent extends React.Component{
    render(){
        return(
            <div>
               <NavComponent/> 
               <h1> Artist Component</h1>
            </div>
        )
    }
}