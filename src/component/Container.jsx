import React, {useState, useRef, useEffect, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import StarPoint from "./StarPoint";
import database from "../component/MovieData.json";
const Wrapper = styled.div`
    margin : 10px;
    position : ${props => props.opt?"relative":"static"};
`;
const Box = styled.div.attrs(props => ({
    style:{
        width : props.isHover?"360px":"300px",
        height : props.isHover?"430px":"168.75px",
        top : props.top,
        left : props.left,
        position : props.isHover?"absolute":(props.isOut?"static":"absolute"),
        margin : props.isHover?"-76px 0 0 -30px":0,
        backgroundColor : props.isHover?"#222":"black", 
        transition : "0.3s", 
    }
}))`
    color : grey;
    overflow : hidden;
`;

const Header = styled.div.attrs(props => ({
    style:{
        display : props.isHover?"flex":"none"
    }
}))`
    height : 60px;
    flex-direction : row;
    justify-content : space-between;
    color : lightgrey;
    overflow : hidden;
    margin-right : 20px;
    transition : 0.3s;
`;
const Img = styled.img.attrs(props =>({
    style : {
        width : props.isHover?"360px":"300px",
        heigth : props.isHover?"202.5px":"168.75px",
        margin : props.isHover?"0 calc(50% - 180px)":"0 calc(50% - 150px)"
    }
}))`
    transition : 0.3s;
`;

const Title = styled.div`
    font-size : 25px;
    margin-left : 20px;
    line-height : 60px;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
    font-weight : bold;
    width : 200px;
`;
const Crew = styled.div`
    display : flex;
    overflow : hidden;
    flex-direction : column;
    margin : 20px 0 15px;
`;

const Actor = styled.div`
    margin : 0 20px;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
`;
const Writter = styled.div`
    margin-left : 20px;
    margin-top : 5px;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
`;

const Textarea = styled.div`
    margin : 0 20px 20px;
    overflow : hidden;
    text-overflow : ellipsis;
    word-break : break-word;
    display : -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
`;
const Empty = styled.div`
    width : 300px;
    height : 180px;
`;
const PlayBtn = styled.div`
    position : absolute;
    top : ${props => props.opt?"55px":"125px"};
    left : calc(50% - 35px);
    opacity : 0.5;
    :hover{
        opacity : 1;
    }
    cursor : pointer;
`;
function Container(props){
    const{idx, sclX, opt} = props;
    const moviedata = database.find((data) => data.id == idx);
    const BoxRef = useRef();    
    const[topoff, setTopoff] = useState(0);
    const[leftoff, setLeftoff] = useState(0);
    const[isHover, setIsHover] = useState(false);
    const[isOut, setIsOut] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTopoff(BoxRef.current.offsetTop);
        setLeftoff(BoxRef.current.offsetLeft-sclX);
        !opt&&setIsHover(false);
        !opt&&setIsOut(true);
    },[sclX]);
    const onClick = () => {
        if(!isHover){
            setTopoff(BoxRef.current.offsetTop);
            setLeftoff(BoxRef.current.offsetLeft-sclX);
            setIsHover(true);
        }
    }
    const onLeave = () => {
        setIsHover(false);
        setTimeout(() => {
            !opt&&setIsOut(true);
        },[300])
    }
    const EmptyFnc = () => {};
    return(
        <Wrapper opt={opt}>
            <Box isHover={isHover} isOut={isOut} ref={BoxRef} left={leftoff} top={topoff} onMouseLeave={!opt?onLeave:EmptyFnc} onClick={!opt?onClick:EmptyFnc}>
                <Header isHover={isHover}>
                    <Title>{moviedata.title}</Title> 
                    <StarPoint score={moviedata.score} offset={20}/>
                </Header>
                <div>
                    <Img isHover={isHover} src={moviedata.url}></Img>
                    {(opt||isHover)&&<PlayBtn opt={opt}><img src="../images/playBtn.png" width="70px" onClick={() => {navigate(`/viewpage/${moviedata.id}`)}}/></PlayBtn>}
                </div>
                <Crew isHover={isHover}>
                    <Actor>- 출연진 : {moviedata.actor}</Actor>
                    <Writter>- 감독 : {moviedata.director}</Writter>    
                </Crew>
                <Textarea isHover={isHover}>{moviedata.text}</Textarea>
            </Box>
            {(isHover||!isOut)&&<Empty/>}
        </Wrapper>
    );
};
export default Container;