import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-top : ${props => props.offset}px;   
    height : 20px;    
`;

function StarPoint(props){
    let{score, offset} = props;
    let list=[];     
    for(let i=0;i<5;i++){
        if(score>=1) list.push(1);
        else if(score<=0) list.push(0);
        else list.push(0.5);
        score-=1;    
    }
    return(
        <Wrapper offset={offset}>
            {list.map((data, index) => {
                if(data==1){
                    return(
                        <img src="../images/Fullstar.png" width="20px" key={index}/>
                    )
                }
                else if(data==0.5){
                    return(
                        <img src="../images/Halfstar.png" width="20px" key={index}/>   
                    )
                }
                else{
                    return(
                        <img src="../images/Emptystar.png" width="20px" key={index}/> 
                    )
                }
            })}
        </Wrapper>
    )
};

export default StarPoint;