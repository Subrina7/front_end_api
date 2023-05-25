import { useState } from "react";

const JokeForm = ({addAJoke}) => {
    const [newJokes, setNewJokes] = useState("");
    const [newPunchlines, setNewPunchlines] = useState("");

    const handleJokeChange = (e) => {
        setNewJokes(e.target.value);
    }

    const handlePunchlineChange = (e) => {
        setNewPunchlines(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addAJoke(newJokes, newPunchlines);
        setNewJokes("");
        setNewPunchlines("");
      }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
            type="text"
            value={newJokes}
            onChange={handleJokeChange}
            placeholder="Enter your joke"
            />

            <input 
            type="text"
            value={newPunchlines}
            onChange={handlePunchlineChange}
            placeholder="Enter the punchline"
            />
            <button type="submit">Add joke</button>
        </form>
    );
}
 
export default JokeForm;
