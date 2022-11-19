import React,{useState, useEffect} from "react";
import styled from "styled-components";
import EventBox from "./EventBox";
const Wrapper = styled.div`
    width : 100%;
`;
const ContentWrap = styled.div`
    width : 100%;
    height : 100%;
    background : rgba(0,0,0,${props =>props.num});
    position : ${props => props.isFixed? "fixed" : "absolute"};
    top : ${props => props.posY<props.start? `${props.start}px` : props.posY>props.end? `${props.end}px`: `0px`}; 
    overflow : hidden;
`;
const Title = styled.div`
    text-align : center;
    margin : 50px auto 0;
    font-size : 40px;
    color : white;
    font-family: 'Nanum Gothic', sans-serif;

`;
const Logo = styled.div.attrs(props => ({
    style : {
        opacity : props.opacity
    }
}))`
    background : url("../images/로고.png");
    width : 600px;
    height : 600px;
    background-size : 100% 100%;
    position : absolute;
    left : calc(50% - 300px);
`;
let num = 0;
function EventNotice(props){
    const{start, end, posY, isFixed} = props;
    const tab = (end-start)/12;
    const[opacity, setOpacity] = useState(0); 
    useEffect(() => {
        isFixed&&setOpacity((posY-start-100)/(end-start));
        num = (posY-start)/(end-start-10*tab);
    },[posY])
    return(
        <Wrapper start={start}>
            <ContentWrap start={start} end={end} isFixed={isFixed} posY={posY} tab={tab} style={{background : `rgba(0,0,0,${num})`}}>
            <Title>지금 가입하여 다양한 혜택을 확인해보세요</Title>
            <Logo opacity={opacity}start={start} end={end} isFixed={isFixed} posY={posY}/>
            <EventBox start={start} end={end-6*tab} text={"첫 결제 30% 할인"} posY={posY} isFixed={isFixed} top={100} left={40}/>
            <EventBox start={start+2*tab} end={end-4*tab} text={"프리미엄 3개월 무료 체험"} posY={posY} isFixed={isFixed} top={250} left={35}/>
            <EventBox start={start+3*tab} end={end-tab} text={"오프라인 저장 최대 8TB"} posY={posY} isFixed={isFixed} top={400} left={37}/>
            <EventBox start={start+tab} end={end-5*tab} text={"최대 8개 기기 공유 계정"} posY={posY} isFixed={isFixed} top={100} right={40}/>
            <EventBox start={start+4*tab} end={end-3*tab} text={"다양한 이벤트 및 할인"} posY={posY} isFixed={isFixed} top={250} right={35}/>
            <EventBox start={start+6*tab} end={end} text={"국내 최초 초고화질(16K)"} posY={posY} isFixed={isFixed} top={400} right={38}/>
            </ContentWrap>
        </Wrapper>
    );
}

export default EventNotice;