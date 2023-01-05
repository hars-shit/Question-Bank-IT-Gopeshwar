// import React, { useState } from 'react'
import { FourthYearCe, FourthYearCse, FourthYearEce, FourthYearEe, FourthYearMe } from './FourthYear'
import { ThirdYearCe, ThirdYearCse, ThirdYearEce, ThirdYearEe, ThirdYearMe } from './ThirdYear'
import { SecondYearCe, SecondYearCse, SecondYearEce, SecondYearEe, SecondYearMe } from './SecondYear'



 const QuesRefrence = ({year, curYear}) => {
//     // if hover on element 
//     const [isHovering ,setIsHovering]=useState(false);

//     const handleMouseEnter=()=>{
//         // setIsHovering(true);
//     }
//     const handleMouseLeave=()=>{
//         // setIsHovering(false);
//     }
    const Styles={
        subject:{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            marginTop:"22px",
            gap:"106px",
            marginRight:"12px",
            border:"1px solid #b0b0c9",
            marginLeft:"12px",
            backgroundColor:"rgb(219 237 255)",
            cursor:"pointer"
            // backgroundColor:isHovering ? "brown" : "rgb(219 237 255)"   
        },
        
        li:{
            margin:"4px 0",
            listStyleType:"none", 
            padding:"6px 5px"
        },
        a:{
            fontSize:"14px",
            fontWeight:600,
            color:"black",
            // color:isHovering ? "white":"black",
            fontFamily:"Crete Round', serif",
            textDecoration:"none"
        }

    }
  return (
    <>
    
    {
        (year === "2" && curYear === "cse") &&
        SecondYearCse.map((c,key)=>{
            return (
                <div className='subject' style={Styles.subject}  >

               <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ce") &&
        SecondYearCe.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "me") &&
        SecondYearMe.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ee") &&
        SecondYearEe.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ece") &&
        SecondYearEce.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }

       {/* for 3rd year....... */}
{
        (year === "3" && curYear === "cse") &&
        ThirdYearCse.map((c)=>{
            return (
                <div className='subject' style={Styles.subject} >
                     <li style={Styles.li}></li>
                     <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ce") &&
        ThirdYearCe.map((c)=>{
            return (
                <div className='subject'>
                <h5 className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "me") &&
         ThirdYearMe.map((c)=>{
            return (
                <div className='subject'>
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ee") &&
        ThirdYearEe.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ece") &&
        ThirdYearEce.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }


    {/* for 4 year........ */}

    {
        (year === "4" && curYear === "cse") &&
        FourthYearCse.map((c)=>{
            return (
                <div className='subject' >
                <h5 className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ce") &&
        FourthYearCe.map((c)=>{
            return (
                <div className='subject' >
                <h5  className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "me") &&
        FourthYearMe.map((c)=>{
            return (
                <div className='subject' >
                <h5 style={{color:'teal'}} className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ee") &&
        FourthYearEe.map((c)=>{
            return (
                <div className='subject' >
                <h5 style={{color:'teal'}} className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ece") &&
        FourthYearEce.map((c)=>{
            return (
                <div className='subject' >
                <h5 style={{color:'teal'}} className='curyear'>{year + "year"}</h5>
                <h5 className='branch'>{`BRANCH - ${curYear}`}</h5>
                <h5 >{c.sub}</h5>
                </div>
            )
        })
        
    }
      </>
  )
}

export default QuesRefrence