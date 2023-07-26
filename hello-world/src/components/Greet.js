import React from 'react'


const Greet = (props) => { 
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}</p> 
            {props.children}
        </div>
    )

}

export default Greet