import Logo from "./Logo";


export default function Top(){

    const main={
        display:"flex",
        flexDirection:"column",
        
        // backgroundColor:"white",
        
        width:"100%",
        height:"150px",

        borderBottom:"1px solid white",
        marginBottom:"10px"
    }

    return(
        <div style={main}>
            <Logo></Logo>
        </div>
    )
}




