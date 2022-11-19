import React,{useState} from "react";
import styled from "styled-components";
import useInterval from "./useInterval";
const Wrapper = styled.div`
    width : 100%;
    margin : 0 auto;
    height : 100vh;
    position : relative;
`;
const Back = styled.div`
    width : 100%;
    margin : 0 auto;
    height : 100vh;
    background : url("../images/${props => props.poster}.png");
    background-repeat : no-repeat;
    background-size : 100% 100%;
    background-position : center top;
    position : absolute;
    filter : blur(5px);
    transition : 1s;
`;
const Poster = styled.div`
    width : 90%;
    margin : 0 auto;
    height : 100vh;
    background : url("../images/${props => props.poster}.png");
    background-repeat : no-repeat;
    background-size : 100% 100%;
    background-position : center top;
    position : absolute;
    left : 5%;
    transition : 1s;
`;
const LeftBtn = styled.div`
    position : absolute;
    top : calc(50vh - 100px);
    left : calc(5% - 70px);
    text-align : center;
    opacity : 0.3;
    :hover{
        opacity : 1;
    }
    transition : 0.5s;
`;
const RightBtn = styled.div`
    position : absolute;
    top : calc(50vh - 100px);
    left : 95%;
    text-align : center;
    opacity : 0.3;
    :hover{
        opacity : 1;
    }
    transition : 0.5s;
`;
const PagerWrap = styled.div`
    position : absolute;
    top : 95vh;
    left : calc(50% - ${props => props.Length*15}px);
    display : flex;
    flex-direction : row;
    opacity : 0.3;
    :hover{
        opacity : 1;
    }
    transition : 0.5s;
`;
const Pager = styled.div`
    width : 30px;
    height : 30px;
`;
const PagerMark = styled.div`
    width : 16px;
    height : 16px;
    border-radius : 10px;
    background-color : ${props => props.id==props.idx?"#ccc":"#888"};
    border : 2px solid #555;
`
function MainPoster(props){
    
    const slideList = ["poster_1","poster_2","poster_3","poster_4","poster_5"];
    const Length = slideList.length;
    const[idx, setIdx] = useState(0);
    const onLeftClick = () => {
        setIdx(idx>0?idx-1:Length-1);
    }
    const onRightClick = () => {
        setIdx(idx==Length-1?0:idx+1);
    }
    useInterval(() => {
        setIdx(idx==Length-1?0:idx+1);
    },3000,idx);    
    return(
        <Wrapper>
            <Back poster={slideList[idx]}/>
            <Poster poster={slideList[idx]}/>
            <LeftBtn onClick={onLeftClick}><img src="../images/LeftBtn.png" height="200px"/></LeftBtn>
            <RightBtn onClick={onRightClick}><img src="../images/RightBtn.png" height="200px"/></RightBtn>
            <PagerWrap Length={Length}>
                {slideList.map((data, index) => {
                    return(
                        <Pager onClick={() => setIdx(index)} key={index}><PagerMark idx={idx} id={index}/></Pager>    
                    )
                })}
            </PagerWrap>
        </Wrapper>
    )
};

export default MainPoster
