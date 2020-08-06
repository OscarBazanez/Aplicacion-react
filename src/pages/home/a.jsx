import React,{ useState, useEffect } from 'react';
import  peoples  from '../../services/peoples';

const AboutPeople = (props) => {
    const [detailsPeople,setDetailsPeople] = useState(null)
    const fetchDataPeople = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setDetailsPeople(serverData);
    }
    /*
    // No funciona solo muestra GET https://swapi.dev/api/people/null/ 404
    useEffect(() => {
        fetchDataPeople(props.peopleID)
    },[]);
    */


    /*
    //Muestra los datos del personaje, pero se ejecuta infinitamente
    useEffect(() => {
        fetchDataPeople(props.peopleID)
    });
    */
    return(
        detailsPeople &&
        <>
        <h1>Personaje id: { detailsPeople.name}</h1>
        </>
    )
}

export default AboutPeople