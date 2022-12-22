import './PaperSection.css'
import { data, data2, data3 } from '../Data'
import { useState } from 'react'
import Componenet from './Componenet'

function PaperSection(){
    const [curYear, setCurYear] = useState({
        null:null,
        cse:"",
        ce:'',
        me:'',
        ece:'',
        ee:''
    })
    const [quesdata, setQuesdata] = useState(data)
    const [qesdata2, setQuesdata2] = useState(data2)
    const [quesdata3, setQuesdata3]= useState(data3)
    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name)
        setCurYear(
            {
                null:null,
                branch:value
            }
        )
    }
 return (
    <>
    <section className="inside-body-section">
        <div className="container-fluid ">
            <div className="card card-inside">
                <div className="card-header">SEMESTER QUESTION PAPER BANK</div>
                <div className="card-body">
               <select onChange={handleChange}>
                <option name={null} value="null">SELECT BRANCH</option>
                <option name="cse" value="cse" >Computer Science and Engineering  </option>
                <option name="ce" value="ce" >Civil Engineering  </option>
                <option name="me" value="me" >Mechanical Engineering  </option>
                <option name="ece" value="ece" >Electronics Engineering  </option>
                <option name="ee" value="ee" >Electrical Engineering  </option>
    
               </select>
                </div>
            </div>
        </div>

        <Componenet quesdata={quesdata} qesdata2={qesdata2} quesdata3={quesdata3} curYear={curYear}/>
    </section>
    </>
 )
}
export default PaperSection;