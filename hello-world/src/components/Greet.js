import React from 'react'


const Greet = (props) => { 
    const {name} = props
    console.log(props)
    return (
        <div>
            <p>Hello {name}</p> 
            {props.children}
        </div>
    )

}

export default Greet