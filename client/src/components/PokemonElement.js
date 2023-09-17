import { useEffect, useState } from "react";


export default function PokemonElement(props){
    const [boxSt,setBoxSt]=useState({
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
        width:"150px",
        height:"150px",
        border:"1px solid black"
    })


    const [poke,setPoke]=useState({
        id:props.id,
        name:props.name,
        imgLink:props.imgLink
    })

    useEffect(()=>{
        console.log(props)
    },[poke])



    const info={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",

        width:"100%",
        height:"50px"
    }


    const clickHandler=()=>{
        setBoxSt({
            ...boxSt,
            backgroundColor:"gray"
        })
    }

    return(
        <div style={boxSt} onClick={clickHandler}>
            <img style={{width:"100px",height:"100px"}} src={poke.imgLink} alt="poke"></img>
            <div style={info}>
                <div>{poke.id}</div>
                <div>{poke.name}</div>
            </div>
        </div>
    );
}






