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

    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }

    getSnapshotBeforeUpdate(){
        console.log('lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidMount(){
        console.log('lifecycle A componentDidMount')
    }

    changeState = () => {
        this.setState ({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <div>lifecycle A</div>
                <button onClick={this.changeState}>change state</button>
            </div>
        )
    }
}

export default LifeCycleA