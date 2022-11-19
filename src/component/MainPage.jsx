import React from "react";
import styled from "styled-components";
import SlideBox from "./SlideBox";
import Header from "./Header";
import MainPoster from "./MainPoster";
const Wrapper = styled.div`
   width : 100%;
   background-color : black; 
   overflow : hidden;
   position : relative;
`;
const ContentWrap = styled.div`
    width : 100%:
    background-color : #555;
    margin : 0 auto;
`;
const SliderWrap = styled.div`
    width : 100%;
    height : 100vh;
    background-color : #666;
    margin : 20px auto;
`;

const Footer = styled.div`
    width : 100%;
    height : 100px;
    background-color : white;
`;

const Title = styled.div`
    font-size : 40px;
    font-family: 'Nanum Pen Script', cursive;
    color : white;
    margin : 10px 20px;
`;

function MainPage(props){
    window.scrollTo(0,0);
    return(
        <Wrapper>
            <Header/>
            <ContentWrap>
                <MainPoster/>
                <Title>- 이번주 인기 영화</Title>
                <SlideBox list={[1,2,3,4,5,6,7,8,9,10,"더보기"]}/>
                <Title>- 취향저격 추천 영화</Title>
                <SlideBox list={[11,12,13,14,15,16,17,18,19,20,"더보기"]}/>
                <Title>- 장르별 추천 영화</Title>
                <SlideBox list={[21,22,23,24,25,26,27,28,29,30,"더보기"]}/>
                <Title>- 겨울 감성 영화</Title>
                <SlideBox list={[31,32,33,34,35,36,37,38,39,40,"더보기"]}/>
                <SliderWrap>
                </SliderWrap>
                <SliderWrap>
                </SliderWrap>
            </ContentWrap>
            <Footer/>
        </Wrapper>
    );
}
export default MainPage;