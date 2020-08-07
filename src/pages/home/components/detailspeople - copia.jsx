import React,{ useState, useEffect } from 'react';
import  { peoples }  from '../../../services';
const DetailsPeople = (props) => {
    const [detailsPeople,setDetailsPeople] = useState(null)
    const fetchDataPeople = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setDetailsPeople(serverData);
    }

    useEffect(() => {
        if(props.peopleID !=null){
            console.log(props.peopleID)
            fetchDataPeople(props.peopleID)
        }
    },[props.peopleID]);

    return(
        detailsPeople &&
        <>
        <h1>Personaje id: { detailsPeople.name}</h1>
        <h5>height { detailsPeople.height}</h5>
        </>
    )
}

export default DetailsPeople