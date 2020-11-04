import React from 'react'
import { Route } from 'react-router-dom'

const privateRouter=({component:Component,...rest})=>{
    return (
        <Route 
        {...rest}
         render={routerProps =>(
            <Component {...routerProps}></Component>
        )
         }/>    
    )
}
export default privateRouter