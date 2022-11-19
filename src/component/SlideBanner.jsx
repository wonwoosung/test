import React,{useEffect, useState} from "react";
import styled from "styled-components";
import SlideBox from "./SlideBox";
import StarPoint from "./StarPoint";
const Wrapper = styled.div`
`;
const RelativeContentWrap = styled.div`
    position : fixed;  
    overflow-X : scroll;
    overflow-Y : hidden;
    width : 100%;
    height : 220px;
`;

const SlideText = styled.div`
    height : 40px;
    line-height : 40px;
    color : white;
    font-size : 20px;
    background-color : #111;
    width : 200px;
    text-align : center;
    border-radius : 8px 8px 0 0 ;
    margin-left : 20px;
`;

const CommentWrap = styled.div`
    position : fixed;
    height : 100%;
`;
const CommentLabel = styled.div`
    width : 40px;
    height : 80px;
    background-color : #212;
    font-size : 20px;
    writing-mode : vertical-lr;
    position : fixed;
    margin-left : -40px;
    margin-top : 100px;
    border-radius : 8px 0 0 8px;
    line-height : 40px;
    text-align : center;
    color : #ccc;
`;

const Content = styled.div`
    width : 540px;
    height : calc(100vh - 20px);
    background-color : #212;
    overflow : scroll;
    padding : 20px;
`;
const ListWrap = styled.div`
    width : 520px;
    background-color : #fefeff;
    margin-bottom : 15px;
    display : flex;
    flex-direction : row;
    padding : 10px;
    border-radius : 20px;
`;
const User = styled.div`
    display : flex;
    flex-direction : column;
    width : 400px;
    border-left : 3px solid #ccc;
    margin-left : 10px;
    padding : 10px;
`;
const NameTag = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    height : 15px;
`;
const Name = styled.div`
    height : 15px;
    line-height : 15px;
    font-size : 20px;
    color : #333;
    font-weight : bold;
`;

const Img = styled.div`
    width : 80px;
    height : 80px;
    border-radius : 40px;
    overflow : hidden;
`;

const Text = styled.div`
    margin-top : 20px;
`;

const Data = [
    {
        "id":"Lorem",
        "score":4.0,
        "comment":`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!`
    },
    {
        "id":"Ipsom",
        "score":4.5,
        "comment":`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!`
    },
    {
        "id":"Anyone",
        "score":4.5,
        "comment":`Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
    },
    {
        "id":"Ohxike Rasdus",
        "score":5.0,
        "comment":`Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!`
    },
    {
        "id":"Berheit mein neight",
        "score":4.5,
        "comment":`Don't forget what is the most Greatest thing is director completly success the study about cosmos with Professor D.H`
    },
    {
        "id":"Monte Calreo_caster",
        "score":4.0,
        "comment":`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore mollitia nostrum doloribus, atque iusto dolores cupiditate nam in, necessitatibus aliquam libero officiis nihil modi pariatur quia veniam totam unde!`
    },
]

function SlideBanner(props){
    let posX=0, posY=0, timer;
    const[scrollY, setScrollY] = useState(0);
    const[scrollX, setScrollX] = useState(0);
    const handleScroll = () => {    
        posX = window.scrollX;
        posY = window.scrollY;
        setScrollY(posY);
        setScrollX(posX);
        clearTimeout(timer);
        timer = setTimeout(() => {
            window.scrollTo({top:(posY>90?180:0),left:(posX>200?600:0),behavior:"smooth"});
        },[100])
    }   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        }
    },[]);
    return(
        <Wrapper>
            <CommentWrap posX={scrollX} style={{left : `calc(100vw - ${scrollX}px`}}>
                <CommentLabel>리 뷰</CommentLabel>
                <Content>
                    {Data.map((data, index) => {
                        return(
                            <ListWrap key={index}>
                                <Img><img src="../images/profile.jpg" width="80px"height="80px"/></Img>
                                <User>
                                    <NameTag>
                                        <Name>{data.id}</Name>
                                        <StarPoint score={data.score} offset={-3}/>
                                    </NameTag>
                                    <Text>{data.comment}</Text>
                                </User>
                            </ListWrap>
                        )
                    })}
                </Content>
            </CommentWrap>
            <RelativeContentWrap posY={scrollY} style={{top : `calc(100vh - ${scrollY + 40}px)`}}>
                <SlideText>연관 추천 영화</SlideText>
                <SlideBox list={[1,2,3,4,5,6,7,8,9,10]} opt={true}/>   
            </RelativeContentWrap>
        </Wrapper>
    )
};

export default SlideBanner;