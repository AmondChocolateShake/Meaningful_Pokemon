import { useEffect, useState } from "react";

export default function PokemonElement(props) {
    const [clicked, setClicked] = useState(false);
    const [poke, setPoke] = useState({
        id: props.id,
        name: props.name,
        imgLink: props.imgLink,
        type: props.type,
        owned: props.owned,
        favorite: props.favorite
    })
    const [boxSt, setBoxSt] = useState({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "gray",
        width: "150px",
        height: "150px",
        border: "3px solid white",
        borderRadius: "10px",
        marginLeft: "10px"
    })
    const [infoSt, setInfoSt] = useState({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

        width: "100%",
        height: "50px",
        borderTop: "1px solid rgb(196 196 196)",
        borderBottomLeftRadius: "7px",
        borderBottomRightRadius: "7px"

    })


    useEffect(() => {
        changeColor(poke.owned);
    }, [poke])

    function changeColor() {
        // console.log("changeColor," + poke.name + "is" + poke.owned)
        if (poke.owned) {
            setBoxSt({
                ...boxSt,
                backgroundColor: "#2B4865"
            })
            setInfoSt({
                ...infoSt,
                backgroundColor: "#84A7A1"
            })
        } else {
            setBoxSt({
                ...boxSt,
                backgroundColor: "gray"
            })
            setInfoSt({
                ...infoSt,
                backgroundColor: "gray"
            })
        }
    }

    const clickHandler = () => {
        console.log("clicked id", poke.id)
        //poke 객체 전개로 모든 속성 전달 후 owned의 상태를 반전
        setPoke({ ...poke, owned: !poke.owned });
        props.callback(poke);
    }

    return (
        <div >
            <div style={boxSt} onClick={clickHandler}>
                <img style={{ width: "100px", height: "100px" }} src={poke.imgLink} alt="poke"></img>
                <div style={infoSt}>
                    <div>{poke.id}</div>
                    <div>{poke.name}</div>
                </div>
            </div>
        </div >
    );
}