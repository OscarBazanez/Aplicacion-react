import React,{ useState, useEffect} from 'react';

const Starwars = () =>{
    const [peoples,setPeoples] = useState([])

    const fetchData = async () =>{
        const result = await fetch('https://swapi.dev/api/people/')
        const {results} = await result.json()
        setPeoples(results)
    }
    useEffect(() => {
        fetchData()
    },[])

    return(
        <>
        <span>Lista de personajes</span>
        <ul>
            {
                peoples.map((people, idx) =>(
                <li key={idx}>{people.name}</li>
                ))
            }
        </ul>
        </>
    )
}

export default Starwars