import React,{useEffect, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 1000px;  
    height : 2500px;
    margin : 0 auto;
`;
const DoorWrap = styled.div`
    width : 1000px;
    margin : 0px auto;
    -webkit-perspective : 1500;
    transform-stlye : preserve-3d;
    position : fixed;
    border : 1px solid black;
`;

const DoorLeft = styled.div`
    width : 300px;
    height : 500px;
    top : 30px;
    left : 190px;
    background-color : grey;
    transform : translateZ(${props => -props.end+props.posY}px) rotateY(${props =>props.isOpen?-(props.posY-props.open)*120/(props.end-props.open):props.posY>props.end?-120:0}deg);
    position : absolute;
    border : 10px solid #333;
    transform-origin : left top;
    transform-stlye : preserve-3d;
`;
const DoorRight = styled.div`
    width : 300px;
    height : 500px;
    top : 30px;
    left : 510px;
    background-color : grey;
    border : 10px solid #333;
    transform : translateZ(${props => -props.end+props.posY}px) rotateY(${props =>props.isOpen?(props.posY-props.open)*120/(props.end-props.open):props.posY>props.end?120:0}deg);
    position : absolute;
    transform-origin : right top;
    transform-stlye : preserve-3d;
`;
const Inside = styled.div`
    width : 640px;
    top : 30px;
    left : 190px;
    z-index : -2;
    position : absolute;
    height : 520px;
    background-color : black;
    transform : translateZ(${props => -props.end+props.posY}px);
    transform-stlye : preserve-3d;
`
const Line = styled.div`
    width : 640px;
    height : 1900px;
    top : 550px;
    z-index : -1;
    left : 190px;
    position : absolute;
    background-color : #3e3;
    transform :rotateX(90deg) translateY(${props => -props.end+props.posY}px) ;
    transform-origin : left top;
    transform-stlye : preserve-3d;
`
function OpenDoor(props){
    let start = 300;
    let end = 1500;
    let open = 0.5*start + 0.5*end;
    const[posY, setPosY] = useState(0);
    const[isOpen, setIsOpen] = useState(false);
    const handleScroll = () => {
        let num = Math.round(window.scrollY);
        setPosY(num);
        ((open<=num)&&(num<=end))?setIsOpen(true):setIsOpen(false);
    }   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    },[]);
    return(
        <Wrapper>
            <DoorWrap>
                <DoorLeft posY={posY} isOpen={isOpen} open={open} start={start} end={end}/>
                <DoorRight posY={posY} isOpen={isOpen} open={open} start={start} end={end}/>
                <Inside posY={posY} end={end}/>
                <Line posY={posY} end={end}/>
            </DoorWrap>
        </Wrapper>
    );
}
export default OpenDoor;