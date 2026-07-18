import { useState } from "react";

function App(){

const [report,setReport]=useState(null);

const analyzeMission=async()=>{

const res=await fetch("http://localhost:5000/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

distance:120,

velocity:7.8,

size:3

})

});

const data=await res.json();

setReport(data);

}

return(

<div>

<h1>OrbitGuard AI</h1>

<button onClick={analyzeMission}>

Analyze Mission

</button>

{
report && (

<div>

<h2>{report.missionStatus}</h2>

<p>{report.cleanupPriority}</p>

<p>{report.fuel}</p>

<p>{report.recommendation}</p>

<p>{report.successProbability}</p>

</div>

)

}

</div>

)

}

export default App;