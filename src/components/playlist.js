import React from 'react'
import {useEffect,useState} from 'react'
 

const Playlist=()=>{

    const getSong=()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '214905531dmshce098852702b4dbp1193f1jsn7aa897fdf777'
            }
        };
        setIsLoading(true)
        
        fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
            .then(data => data.json())
            .then(data => setJokes([...jokes,data]))
            .then(data=> setIsLoading(false))
            .catch(err => console.error(err));        

        console.log(jokes)
    }
    const [jokes,setJokes]=useState([])
    const [isLoading,setIsLoading]=useState(true)



    useEffect(()=>{
        getSong();
    },[]);

    if(jokes.length===0){
        return <p>Loading</p>
    }
    

return( <div>
<div>
<button onClick={getSong} disabled={isLoading} className='joke-btn'>Load Joke</button>
</div>

{console.log(jokes)}
<ul className="joke-list">
{

    jokes.map(joke=>{
        return <li key={joke.id} className="joke-card">{joke.value}</li>
    })
}
</ul>


</div>
);
}

export default Playlist