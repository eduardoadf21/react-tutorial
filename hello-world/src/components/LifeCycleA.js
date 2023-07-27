import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: 'luis'
      }
      console.log('lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifeycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycle A componentDidMount')
    }

    render() {
        console.log('lifecycleA render')
        return (
        <div>LifeCycleA</div>
        )
    }
}

export default LifeCycleA