import React, {useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Player from "./Player";
import Header from "./Header";
import StarPoint from "./StarPoint";
import SlideBanner from "./SlideBanner";
import database from "../component/MovieData.json";
import {useParams} from "react-router-dom";
const Wrapper = styled.div`
    width : calc(100% + 580px);
    position : absolute;
    height : calc(100% + 180px);
    background-color : black;
`;
const ContentWrap = styled.div`
    position : fixed;
    height : 100vh;
    display : flex;
    flex-direction : row;`;
const PlayerWrap = styled.div`
    width : 50vw;
    padding : 0 20px 50px;
    position : relative;
    background-color : #222;
    margin : 62px 60px 0 90px;
    height : calc(80% - 10px);
`;
const PlayerHeader = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
`;
const Title = styled.div`
    width : 42vw;
    height : 70px;
    line-height : 70px;
    color : #ccc;
    font-size : 30px;
    font-weight : bold;
    padding-left : 30px; 
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
`;
const ListWrap = styled.div`
    display : flex;
    flex-direction : column;
    height : 80%;
    width : 30vw;
    margin-top : 62px;
    background-color : #222;
    padding : 20px;
    overflow : hidden;
`;

const List = styled.div`
    width : auto;
    color : #ccc;
    background-color : #333;
    margin-bottom : 10px;
    padding : 5px;
    display : flex;
    flex-direction : row;
`;
const Tag = styled.div`
    width : 5.5vw;
    text-align : center;
    margin-right : 10px;
    min-height : 40px;
    line-height : 40px;
    border-right : 3px solid #555;
    font-size : 16px;
`;
const TextBox = styled.div`
    width : 22vw;
    line-height : 40px;
    padding : 0  10px;
    min-height : 40px;
    height : ${props => props.BoxHeight?props.BoxHeight:"auto"};
    white-space : normal;
    overflow : scroll;
`;
const Button = styled.div`
    background-color : #555;
    width : 40px;
    height : 40px;
    border-radius : 20px;
    cursor : pointer;
    text-align : center;
    line-height : 40px;
    color : #aaa;
    font-size : 16px;
    :active{
        opacity : 0.5;
    }
`;

function ViewPage(props){
    const {idx} = useParams();
    const Base = useRef();
    const Wrap = useRef();
    const navigate = useNavigate();
    const moviedata = database.find((data) => data.id == idx);
    
    let TextBoxOffsetTop, TextBoxHeight,TotalHeight;
    const[BoxHeight, setBoxHeight] = useState(0);
    
    window.scrollTo(0,0);
    useEffect(() => {
        TextBoxOffsetTop = Base.current.offsetTop - 62;
        TotalHeight = Wrap.current.clientHeight;
        TextBoxHeight = TotalHeight - TextBoxOffsetTop - 20;
        setBoxHeight(TextBoxHeight+"px");
    },[])
    return(
        <Wrapper>
            <ContentWrap>
                <Header/>
                <PlayerWrap>
                    <PlayerHeader>
                        <Title>{moviedata.title}</Title>
                        <Button onClick={() => {navigate(`/`)}}>뒤로</Button>
                        <Button>찜</Button>
                    </PlayerHeader>
                    <Player id={moviedata.youtube}/>
                </PlayerWrap>
                <ListWrap ref={Wrap}>
                    <List>
                        <Tag>제 목</Tag>
                        <TextBox>{moviedata.title}</TextBox>
                    </List>
                    <List>
                        <Tag>별 점</Tag>
                        <TextBox>
                        <StarPoint score={moviedata.score} offset={3}/>
                        </TextBox>
                    </List>
                    <List>
                        <Tag>감 독</Tag>
                        <TextBox>{moviedata.director}</TextBox>
                    </List>
                    <List>
                        <Tag>출연진</Tag>
                        <TextBox>{moviedata.actor}</TextBox>
                    </List>
                    <List>
                        <Tag>줄거리</Tag>
                        <TextBox ref={Base} BoxHeight={BoxHeight}>{moviedata.text}</TextBox>
                    </List>
                </ListWrap>
            </ContentWrap>
            <SlideBanner/>
        </Wrapper>
    )
};
export default ViewPage;