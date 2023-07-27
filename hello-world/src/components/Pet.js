import React from "react"

function Pet ({pet}) {

    return(
        <div>
            {pet.name}, also known as {pet.nickname}, is {pet.age}
        </div>
    )

}

export default Pet