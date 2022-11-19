import React,{useState,useRef,useEffect} from "react";
import styled from "styled-components";
import Container from "./Container";
const Wrapper = styled.div`
    width : 100%;
    height : 188.75px;
    overflow : hidden;
`;
const ImgWrap = styled.div`
    background-color : #111;
    overflow-x : scroll;
    display : flex;
    flex-direction : row;
`;
const Img = styled.img`
    height : 168.75px;
    width : 300px;
    margin : 10px;
`;
function SlideBox(props){
    const{list, opt} = props;
    const[List, setList]=useState(list);
    const[scrollX, setScrollX]=useState(0);
    const[isHover, setIsHover] = useState(false);
    
    const slide = useRef();
    
    useEffect(() => {
        if(scrollX>=960){
            List.push(List.shift());
            setList([...List]);
            slide.current.scrollLeft-=320;
        }
        else if(scrollX<=320){
            List.unshift(List.pop());
            setList([...List]);
            slide.current.scrollLeft+=320;
        }
    },[scrollX])

    const handleScroll = () => {    
        setScrollX(slide.current.scrollLeft);
    }   
    return(
        <Wrapper>
            <ImgWrap len={List.length} ref={slide} onScroll={handleScroll} >
                {List.map((data,index)=>{
                    if(data != "더보기"){
                        let idx = data;
                        return(
                            <Container sclX={scrollX} idx={idx} key={index} opt={opt}/>   
                        );
                    }
                    else{
                        return(
                            <Img src={isHover?"../images/더보기.jpg":"../images/더보기(dark).jpg"} key={index} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}/>
                        )
                    }
                })};
            </ImgWrap>
        </Wrapper>
    );
}

export default SlideBox;