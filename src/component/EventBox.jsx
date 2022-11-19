import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
`;
const ItemBox = styled.div.attrs(props => ({
    leftmove :  props.left&&props.trX,
    rightmove : props.right&&props.trX,
}))`
    background-color : grey;
    width : 350px;
    height : 80px;
    line-height : 80px;
    text-align : center;
    font-size : 40px;
    font-family: 'Nanum Pen Script', cursive;
    color : #522;
    border-radius : 40px;
    border : 3px solid #444;
    margin-top : ${props => props.top}px;
    position : absolute;
`;


function EventBox(props){
    const{start, end, posY, top, left, right, text, isFixed} = props;
    const[trX, setTrX] = useState(0);
    useEffect(() => {
        let num = ((posY-start)/(end-start))>1?1:((posY-start)/(end-start));
        isFixed&&setTrX(((left||right)*num));
    },[posY])
    return(
        <Wrapper>
            <ItemBox trX={trX} top={top} left={left} right={right} style={{
                left : `calc(-450px + ${left&&trX}%`,
                right : `calc(-450px + ${right&&trX}%`
            }}>{text}</ItemBox>
        </Wrapper>
    )
}
export default EventBox;