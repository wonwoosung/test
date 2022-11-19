import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
    margin : 0 auto;
`;
const ScreenWrap = styled.div`
    position : ${props => props.isFixed? "fixed" : "absolute"};
    top : ${props => props.posY<props.start? `${props.start}px` : props.posY>props.end? `${props.end}px`: `0px`}; 
    margin : 0 auto;
    width : 100%;
    height : 100%;
    background-color : black;
`;
const Forest = styled.img`
    position : absolute;
    width : 1200px;
    height : 600px;
    top : 100px;
    z-index : 3;
`
const GallaxyImg = styled.div`
    width : 1200px;
    height : 1200px;
    background : url("../images/별하늘.jpg");
    background-size : 100% 100%;
    background-repeat : no-repeat;
    transform : rotateZ(${props => props.isFixed&&props.posY*360/(props.end-props.start)}deg);
`;
const Screen = styled.div`
    margin : 50px auto 0;    
    width : 1200px;
    height : 600px;
    border-radius : 600px 600px 0 0;
    overflow : hidden;
    position : relative;
`;

function Gallaxy(props){
    const{start ,end, posY} = props;

    const[isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        (posY>=start&&posY<=end)?setIsFixed(true):setIsFixed(false);
    },[posY])
    return(
        <Wrapper>
            <ScreenWrap isFixed={isFixed} start={start} end={end} posY={posY}>
                <Screen>
                    <Forest src="../images/숲.png"/>
                    <GallaxyImg isFixed={isFixed} posY={posY-start} start={start} end={end}/>
                </Screen>
            </ScreenWrap>
        </Wrapper>
    );
}
export default Gallaxy;
