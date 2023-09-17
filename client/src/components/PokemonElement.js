import { useEffect, useState } from "react";


export default function PokemonElement(props){
    const [clicked,setClicked]=useState(false);
    const [poke,setPoke]=useState({
        id:props.id,
        name:props.name,
        imgLink:props.imgLink
    })
    const [boxSt,setBoxSt]=useState({
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
        backgroundColor:"gray",
        width:"150px",
        height:"150px",
        border:"1px solid black"
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

    useEffect(()=>{
        changeColor(clicked);
    },[clicked])

    function changeColor(state){
        console.log("changeColor"+state)
        if(state){
            setBoxSt({
                ...boxSt,
                backgroundColor:"white"
            })
        }else{
            setBoxSt({
                ...boxSt,
                backgroundColor:"gray"
            })
        }
    }

    const clickHandler=()=>{
        console.log("clicked")
        setClicked(!clicked);//클릭시 상태 변환
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






