import React from "react"
import Person from "./Person"

function NameList (props) {

    const persons = [
        { name: 'Paçoca', age: 5, nickname: 'Çoçoca'},
        { name: 'Pipoca', age: 11, nickname: 'Popoca'},
        { name: 'Amendoim', age: 7, nickname: 'Duim'}
    ]

    const personList = persons.map(person => <Person person={person}/>)

    return(
        <div>
            { personList }
        </div>
    )

}

export default NameList