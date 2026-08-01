import {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useParams, useSearchParams } from 'react-router-dom'

function Home(){

    const params = useParams();
    alert(params.id);

    //this is basically a useState() variable without "setSearchParams", but could be if you needed it
    const [searchParams] = useSearchParams();

    alert(searchParams.get("x"));


    //useState containers
    const [allSkus, setSkus] = useState([])
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('');
    

    //api 
    async function getSkus(req, res) {
        try{
            res = await fetch("/getSKUs")
            const data = await res.json();
            setSkus(data[0]);
        }
        catch(err){
            console.log(err)
        }
    }


    //useEffects
    useEffect(()=>{
        getSkus();
    },[])


    //formHandlers, standard form 
    async function formFunction(e) {
        try{
            setLoading(true)
            e.preventDefault();
            alert("enters form function");
            const form = new FormData(e.target);
            alert("it's working");
            const id = form.get("id");
            alert(id);
            const data = await fetch("/skuByID",({
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    id: id
                })
            }))

            const res = await data.json();
            alert("form response: " + JSON.stringify(res));

        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false);
            Navigate("home");
        }
    }

    return(
    <>
    <h1 className="text-green-100">HELLO WORLD!</h1>
        <h1>where is the content??</h1>
        <h1>{allSkus[0]?.title}</h1>
        <h1>{allSkus[5]?.title}</h1>
    
    <form onSubmit={formFunction} >
        <input name='id'placeholder='id' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        <button type='submit' disabled={loading}></button>
    </form>
    <h2>Current Input: {input}</h2>

    </>
    )
}

export {Home}