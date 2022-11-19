import React, {useState, useEffect} from "react";
import styled from "styled-components";
import EventNotice from "./EventNotice";
import Gallary from "./Gallary";
import DeviecLink from "./DeviceLink";
const Wrapper = styled.div`
    height : ${props => props.end}px;
    background-color : ${props => props.posY>props.flag?"white":"black"};
    width : 100%;
`;
const LogoWrap = styled.div`
    margin : 0 auto;
    width : 400px;
    height : 250px;
    overflow : hidden;
`;
const contentStart = 300;
const contentHeight_1 = 3000;
const contentHeight_2 = 2500;
const contentHeight_3 = 2500;
const tab = window.innerHeight-1;
const start1 = contentStart; const end1 = start1+contentHeight_1;
const start2 = end1+tab; const end2 = start2+contentHeight_2;
const start3 = end2+tab; const end3 = start3+contentHeight_3;
function Introduce(props){
    const[posY, setPosY] = useState(0);
    const[fixGallary,setFixGallary] = useState(false);
    const[fixDevice,setFixDevice] = useState(false);
    const[fixNotice,setFixNotice] = useState(false);
    const handleScroll = () => {
        let num = Math.round(window.scrollY);
        setPosY(num);
    }   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        window.scrollTo(0,0);
    },[]);
    useEffect(() => {
        (posY>=start1&&posY<=end1)?setFixGallary(true):setFixGallary(false);
        (posY>=start2&&posY<=end2)?setFixDevice(true):setFixDevice(false);
        (posY>=start3&&posY<=end3)?setFixNotice(true):setFixNotice(false);
    },[posY]);
    return(
        <Wrapper posY={posY} flag={(start2+end2)/2} end={end3+tab}>
            <LogoWrap><img src="../images/로고.png" width="400px"/></LogoWrap>
            <Gallary start={start1} end={end1} posY={posY} isFixed={fixGallary}/>
            <DeviecLink start={start2} end={end2} posY={posY} isFixed={fixDevice}/>
            <EventNotice start={start3} end={end3} posY={posY} isFixed={fixNotice}/>
        </Wrapper>
    );
}
export default Introduce;
