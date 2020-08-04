import React,{ useEffect} from 'react'

const Api = () =>{

    const funcionUno = () => console.log('Numero 1')
    const funcionDos = () => console.log('Numero 2')
    const funcionTres = () => {
        //Definicion de una promesa
        const myFirstPromise= new Promise((resolve,reject)=>{
            setTimeout(()=> {
                console.log('Numero 3 promesa')
                resolve()
            },2000)
        })
        return myFirstPromise        
    }
    const funcionCuatro = () => console.log('Numero 4')
    const funcionCinco = () => console.log('Numero 5')

    const onMount = async() =>{
        funcionUno()
        funcionDos()
        await funcionTres()
        funcionCuatro()
        funcionCinco()
    }
    const asyncOnMount = () =>{
        onMount()
    }

    useEffect(
        asyncOnMount,[]
    )
    

    return(
        <>
        </>
    )
}

export default Api