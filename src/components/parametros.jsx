import React,{useState,useEffect} from 'react'
import {TextField} from '@material-ui/core'
import Autocomplete from "@material-ui/lab/Autocomplete";
const Parametros = () => {

    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [objetoUser, setObjUser] = useState();
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        //console.log(users)
        setUsuarios(users)
    }

    return (
        <div>
            <Autocomplete
            name="campo"
            id="combo-box-demo"
            options={usuarios}
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            onChange={(event, newValue) => {
                console.log(newValue)
                //setUsuarios(newValue);
                setObjUser(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                console.log('valor input',newInputValue);
                setInputValue(newInputValue);
            }}
            renderInput={params => (
                <TextField {...params} label="Combo box" variant="outlined" />
            )}
            />
            <ul>
                {/*
                    usuarios.map(item => (
                        <li key={item.id}>
                            <input type="text" defaultValue={item.name} />
                        </li>
                    ))*/
                }
                
            </ul>{JSON.stringify(inputValue)}

            <br></br><br></br>

            {JSON.stringify(objetoUser)}

            


            <br></br><br></br><br></br>
            <div>{`value: ${JSON.stringify(usuarios.name) !== null ? `'${JSON.stringify(usuarios.name)}'` : 'null'}`}</div>
        </div>
    )
}

export default Parametros