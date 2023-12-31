import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(){
        super()
        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return( 
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )

    }

}

export default ParentComponent