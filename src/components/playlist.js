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
            .then(data => setJoke(data.value))
            .then(data=> setIsLoading(false))
            .catch(err => console.error(err));        


    }
    const [joke,setJoke]=useState([])
    const [isLoading,setIsLoading]=useState(true)



    useEffect(()=>{
        getSong()
    },[]);

    if(isLoading){
        return <p>Loading</p>
    }
    

return( <div>

{joke}

<button onClick={getSong}>Refresh</button>

</div>
);
}

export default Playlist