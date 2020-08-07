
import React, {  useState } from 'react';
import HomePage from './home/components/index'
import DetailsPeople from './home/components/detailspeople'


const LayoutSwapi = () =>{
    const [characterSelected, setCharacterSelected] = useState(null)
    return(
        <>
            <HomePage onSelectCharacter={setCharacterSelected} />
            <DetailsPeople  characterId={characterSelected} />
        </>
    )
}
export default LayoutSwapi


/*
            {
                (!characterSelected) ?
                    (<HomePage onSelectCharacter={setCharacterSelected} />)
                    : (<DetailsPeople  characterId={characterSelected} />)
            }

*/

