import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width : 100%;
    margin : 0 auto;
    background-color : black;
    height : auto;
    position : fixed;
    transition : 0.5s;
    z-index :99;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

const Nav = styled.div`
    display : flex;
    flex-direction : row;
    margin : 10px 0px;
`;

const LogoWrap = styled.div`
    margin : auto  30px;
`;


const List = styled.div`
    color : #333;
    font-weight : 600;
    margin : 10px 20px;
    cursor : pointer;
    :hover{
        color : #aaa;
    }
`;
let num = 0;
const list = ["로그인", "사이트 소개", "구독 안내", "공지 사항"];
function Header(props){
    const[posY, setPosY] = useState(0);
    const navigate = useNavigate();
    const handleScroll = () => {
        num = window.scrollY>200?200:window.scrollY;
        setPosY(num);
    }   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    },[]);
    return(
        <Wrapper posY={posY} style={{opacity : `${(posY - 100)/150}`}} onMouseOver={() => setPosY(250)} onMouseLeave={() => setPosY(num)}>
            <LogoWrap onClick={() => {navigate(`/`)}}>
            <img src="../images/LogoText.png" height="40px"/>
            </LogoWrap>
            <Nav>
                {list.map((data, index) => {
                    if(data == "사이트 소개"){
                        return(
                            <List key={index} onClick={() => {navigate(`/introduce`)}}>{data}</List>    
                        )
                    }
                    return(
                        <List key={index}>{data}</List>
                    )
                })}
            </Nav>
        </Wrapper>
    )
};

export default Header;