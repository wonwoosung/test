import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
`;
const ContentWrap = styled.div`
    width : 100%;
    height : 100%;
    position : ${props => props.isFixed? "fixed" : "absolute"};
    top : ${props => props.posY<props.start? `${props.start}px` : props.posY>props.end? `${props.end}px`: `0px`}; 
`;
const ImageWrap = styled.div`
    display : flex;
    flex-divrection : row;
    align-items : center;
    justify-content : center;
`;  
const Tablet = styled.div.attrs(props => ({
    style:{
        opacity : (props.posY-props.start)/(props.end-props.start)
    }
}))`
    background : url(../images/태블릿.png);
    width : 500px;
    height : 500px;
    background-size : 100% 100%;
`;
const Smartphone = styled.div.attrs(props => ({
    style : {
        opacity : (props.posY-props.start)/(props.end-props.start)
    }
}))`
    background : url(../images/스마트폰.png);
    width : 500px;
    height : 500px;
    background-size : 100% 100%;
`;
const Notebook = styled.div.attrs(props => ({
    style : {
        opacity : (props.posY-props.start)/(props.end-props.start)
    }
}))`
    background : url(../images/노트북.png);
    width : 500px;
    height : 500px;
    background-size : 100% 100%;
`;
const Title = styled.div`
    text-align : center;
    margin : 50px auto;
    font-size : 40px;
    font-family: 'Nanum Gothic', sans-serif;
`;

let num=0;
function DeviecLink(props){
    const{start, end, posY, isFixed} = props;
    const tab = (end-start)/6;
    useEffect(() => {
        num = (posY-start)/(end-start-5*tab);
    },[posY])
    return(
        <Wrapper start={start}>
            <ContentWrap start={start} end={end} isFixed={isFixed} posY={posY} tab={tab} style={{background : `rgba(255,255,255,${num})`}}>
            <Title>기기 제한 없이 다양한 환경에서 즐겨보세요</Title>
            <ImageWrap>
                <Smartphone start={start+tab} end={end-3*tab} posY={posY}/>
                <Tablet start={start+2*tab} end={end-2*tab} posY={posY}/>
                <Notebook start={start+3*tab} end={end-tab} posY={posY}/>
            </ImageWrap>
            </ContentWrap>
        </Wrapper>
    )
}

export default DeviecLink;