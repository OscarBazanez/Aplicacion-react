import React,{ useState, useEffect } from 'react';
import  { peoples }  from '../../../services';
const DetailsPeople = ({ props,characterId }) => {
    const [detailsPeople,setDetailsPeople] = useState(null)
    const fetchDataPeople = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setDetailsPeople(serverData);
    }

    useEffect(() => {
        if(characterId !=null){
            console.log(characterId)
            fetchDataPeople(characterId)
        }
    },[characterId]);

    return(
        detailsPeople &&
        <>
        <h1>Personaje id: { detailsPeople.name}</h1>
        <h5>height { detailsPeople.height}</h5>
        </>
    )
}

export default DetailsPeople




