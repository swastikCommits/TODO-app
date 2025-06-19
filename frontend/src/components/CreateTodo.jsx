import { useState } from 'react';

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
         <input style={{padding: 10, margin: 10}} type="text" placeholder="Title" onChange= {(e)=>setTitle(e.target.value)}/> <br />   
         <input style={{padding: 10, margin: 10}} type="text" placeholder="Description" onChange= {(e)=>setDescription(e.target.value)}/> <br />


         <button style={{padding: 10, margin: 10}} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({title, description})
            }).then(async function(res){
                const json=await res.json();
                alert(json.msg);
            })
         }}>Add Todo</button>
    </div>
}