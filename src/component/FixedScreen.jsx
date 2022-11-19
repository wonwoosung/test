import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
    margin : 0 auto;
    position : relative;
`;
const ScreenWrap = styled.div`
    top : ${props => props.scrollY<props.start? `${props.start}px` : props.scrollY>props.end? `${props.end}px`: `0px`};
    width : 100%;
    height : 800px;
    position : ${props => props.isFixed? "fixed" : "absolute"};
    background : url("../images/지하철.jpeg");
    background-size : 70% ;
    background-repeat : no-repeat;
    background-position : center;
`;

const Screen = styled.div`
    width : 700px;
    top : 320px;
    left : 350px;
    height : 80px;
    padding : 20px;
    border : 10px solid #222;
    position : absolute;
    overflow : hidden;
    background-color : black;
`;
const Box = styled.div`
    width : 1000%;
    font-size : 40px;
    height : 80px;
    line-height : 80px;
    color : yellow;
    text-decoration : dashed;
    background : black;
    padding-left : 800px;
    transform: translateX(-${props =>props.isFixed&&props.trX/(props.end-props.start)*5000}px); 
`;

function FixedScreen(props){
    const{start ,end, posY} = props;

    const[isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        (posY>=start&&posY<=end)?setIsFixed(true):setIsFixed(false);
    },[posY])
    return(
        <Wrapper>
            <ScreenWrap isFixed={isFixed} scrollY={posY} start={start} end={end}>
                <Screen>
                    <Box trX={posY-start} isFixed={isFixed} start={start} end={end}>승객 여러분께서는 안전하게 승차하시기 바랍니다. The train bound for, MukGoel station is approaching. The next stop is, JungHwa station. 먹골, 먹골행 열차가 들어오고 있습니다. 승객 여러분께서는 안전하게 승차하시기 바랍니다.</Box>
                </Screen>
            </ScreenWrap>
        </Wrapper>
    );
}

export default FixedScreen;