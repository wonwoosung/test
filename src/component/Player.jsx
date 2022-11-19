import React,{useState} from "react";
import styled from "styled-components";
import Youtube from "react-youtube";

const Wrapper = styled.div`
    width : 50vw;
    height : auto;
    background-color : #333;
    overflow : hidden;
`;
const ContentWrap = styled.div`
    width : 50vw;
    height : 580px;
    background-color : grey;
    margin-top : -75px;
    position : relative;
`;
const ContentHeader = styled.div`
    position : absolute;
    background-color : #222;
    width : 50vw;
    height : 75px;
`;
const ContentFooter = styled.div`
    position : absolute;
    width : 50vw;
    height : 20px;
    background-color : #222;
    top : 506px;
`;
const Controlbar = styled.div`
    position : absolute;
    width : calc(50vw - 4px);
    height : 50px;
    border : 2px solid #111;
    background-color : #222;
    top : 526px;
    display : ${props => props.isHover?"none":"static"};
    color : grey;
    line-height : 54px;
    text-align : center;
    font-size : 20px;
`;




function Player(props){
    const[isHover, setIsHover] = useState(false);
    return(
        <Wrapper>
            <ContentWrap onMouseLeave={() => setIsHover(false)}>
                <ContentHeader/>
                <Youtube
                    videoId={props.id}
                    opts={{
                        width : "100%",
                        height : "580",
                        playerVars : {
                            rel : 0,
                            modestbranding : 1,
                            controls : 1,
                            autoplay : 1,
                            mute : 0
                        },
                    }}
                    onReady={(e) => e.target.playVideo()}
                    onEnd={(e) => e.target.playVideo()} 
                />
                <ContentFooter onMouseOver={() => setIsHover(false)}/>
                <Controlbar isHover={isHover} onMouseOver={() => setIsHover(true)}>------ Control Bar ------</Controlbar>
            </ContentWrap>
        </Wrapper>
    )
};

export default Player;