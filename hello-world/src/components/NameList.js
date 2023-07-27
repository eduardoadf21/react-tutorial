import React from "react"
import Pet from "./Pet"

function NameList (props) {

    const pets = [
        { id: 1, name: 'Paçoca', age: 5, nickname: 'Çoçoca'},
        { id: 2, name: 'Pipoca', age: 11, nickname: 'Popoca'},
        { id: 3, name: 'Amendoim', age: 7, nickname: 'Duim'}
    ]

    const petList = pets.map(pet => <Pet key={pet.id} pet={pet}/>)

    return(
        <div>
            { petList }
        </div>
    )

}

export default NameList