import React from "react"

function Person ({person}) {

    return(
        <div>
            {person.name}, also known as {person.nickname}, is {person.age}
        </div>
    )

}

export default Person