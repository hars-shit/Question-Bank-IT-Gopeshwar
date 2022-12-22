import React, { useState } from 'react'

const Componenet = ({quesdata, qesdata2, quesdata3}) => {
    const [curYear, setCurYear] = useState({
        year: 2
    })
  return (
    <div className='componenet'>
        { curYear.year === 2 &&
            qesdata2.map((c)=>{
                return(
                    <div>{c}</div>
                )
            })
            }
    </div>
  )
}

export default Componenet
