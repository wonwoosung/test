import React,{useEffect, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
`;
const GallaryWrap = styled.div`
    position : ${props => props.isFixed? "fixed" : "absolute"};
    top : ${props => props.posY<props.start? `${props.start}px` : props.posY>props.end? `${props.end}px`: `0px`}; 
    width : 100%;
    margin : 0 auto;
    height : 150%;
    background-color : black;
`;
const GallaryAxis = styled.div`
    height : 200px;
    position : absolute;
    left : 50%;
    top : 50px;
    transform-style : preserve-3d;
`
const Wall = styled.div`
    transform : rotateY(${props => props.rotY*36}deg) translateZ(-420px); 
    position : absolute;
    top : 50px;
    left : 0px;
    margin-left : -125px;
    transform-style : preserve-3d;
    backface-visibility : hidden;
`;
const ImageWrap = styled.div`
    width : 250px;
    height : 140px;
    background : url("../images/영화_${props => props.index}.jpg");
    background-size : 100% 100%;
    margin-bottom : 10px;
    border-radius : 20px;
    :hover{
        transform : scale(1.2) translateZ(50px);
    }
    border : 2px solid grey;
`;
const Title = styled.div`
    color : white;
    text-align : center;
    margin : 30px auto;
    font-size : 40px;
    font-family: 'Nanum Gothic', sans-serif;
`;
const List = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24],[25,26,27,28],[29,30,31,32],[33,34,35,36],[37,38,39,40],];
let perspective = 10000;
function Gallary(props){
    const{start ,end, posY, isFixed} = props;
    const[roY,setRoY] = useState(0);
    useEffect(() => {
        isFixed&&setRoY((posY-start)*360*1.5/(end-start));
        perspective = (10000-5*props.posY)>800?10000-5*props.posY:800;
    },[posY])
    return(
        <Wrapper>
            <GallaryWrap isFixed={isFixed} start={start} end={end} posY={posY} style={{WebkitPerspective : `${perspective}`}}>
            <Title>다양한 영화 컨텐츠를 즐겨보세요!</Title>
                <GallaryAxis isFixed={isFixed} style={{transform : `rotateY(${roY}deg)`}}>
                    {List.map((data,index) => {
                        return(
                            <Wall key={index} rotY={index}>
                                {data.map((data,index) => {
                                    return(
                                        <ImageWrap key={index} index={data}/>
                                    )
                                })}
                            </Wall>
                        )
                    })}
                </GallaryAxis>
            </GallaryWrap>
        </Wrapper>
    );
}
export default Gallary;