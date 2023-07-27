import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLogged : true
        }
    }


    render(){
        return this.state.isLogged && <div> welcome </div> 
/*         return(
            this.state.isLogged ?
            <div> welcome </div> :
            <div> fuck off </div>
        ) */
/*         let message 
        if(this.state.isLogged)
            message = <div> welcome </div>
        else   
            message = <div> fuck off </div>
        
        return <div> {message} </div> */
/*         if (this.state.isLogged){
            return(
                <div>
                    welcome
                </div>
            )
        }
        else {
            return(
                <div>
                    fuck you
                </div>
            )
        } */
/*         return( 
            <div>
                <div> welcome guest </div>
                <div> XD </div>
            </div>
        ) */

    }

}

export default UserGreeting