import { useState } from "react";
import JokeForm from "../components/JokeForm";

const JokeContainer = () => {

    const [jokes, setJokes] = useState ([]);
    const [programmingJokes, setProgrammingJokes] = useState([]);
    const [showPunchline, setShowPunchline] = useState(false);
    const [programmingPunchline, setProgrammingPunchline] = useState(false);
    const [myJokes, setMyJokes] = useState([]);
  
    
    const fetchJoke = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const jsonData = await response.json();

        setJokes(jsonData);
    }

    const fetchProgrammingJoke = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
        const jsonData = await response.json();
        setProgrammingJokes(jsonData[0]);
      };

      const addAJoke = (newJokes, newPunchlines) => {
        const newJokeObject = {
          setup: newJokes,
          punchline: newPunchlines,
        };
    
        setMyJokes([...myJokes, newJokeObject]);
      };
    return ( 
    <>
    <h1>Pick a random joke :D</h1>
    <button class = "Go" onClick= {fetchJoke}>Go</button>
    <p>{jokes.setup}</p>
    <button class ="punchline" onClick={() => setShowPunchline(!showPunchline)}>Punchline</button>
    {showPunchline ? <p>{jokes.punchline}</p>: null}
    
    <h2>Get a programming joke!</h2>
    <button className="Go" onClick={fetchProgrammingJoke}>Go</button>
    <p>{programmingJokes.setup}</p>
    <button class ="punchline" onClick={() => setProgrammingPunchline(!programmingPunchline)}>Punchline</button>
    {programmingPunchline ? <p>{programmingJokes.punchline}</p>: null}

    <h2>Add a joke to your list</h2>
    <JokeForm addAJoke={addAJoke} />
    <myJokes setMyJokes={setMyJokes}/>

    <h2>My Joke List</h2>
      <ul>{myJokes.map((joke, index) => (
          <li>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
    </>

    
  );
};
 
export default JokeContainer;