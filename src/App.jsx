import React, { useState, useEffect } from 'react';

const App = () => {

    const [username, setUsername] = useState('')
    const [text, setText] = useState('')
    const [myChirps, setMyChirps] = useState([
        {
            username: 'John',
            text: 'Hello'
        },
        {
            username: 'Tom',
            text: 'How are you John?'
        },
        {
            username: 'John',
            text: "I'm doing okay I guess"
        }

    ]);

    const handleButtonClick = () => {
        const newChirp = { // Creates a new chirp
            username:  username , // property named "username" has the value of the username piece of state
            text:  text // property named "text" has the value of the text piece of state
        }
        setUsername('')
        setText('')
        console.log(newChirp)
        let updatedChirps = [...myChirps, newChirp]
        console.log(updatedChirps)
        setMyChirps(updatedChirps);
        console.log(myChirps)
    }

    return (
        <>
            <div>
                <form className="form-group">
                    <input placeholder='Your Name' value={username} onChange={e => setUsername(e.target.value)} />
                    <input placeholder="What's on your mind?" value={text} onChange={e => setText(e.target.value)} />
                    <button type='button' onClick={handleButtonClick}>Chirp!</button>
                </form>
            </div>
            <div>
                <div>
                    {myChirps.map(chirp => (
                        <div>
                            <h3>{chirp.username}</h3>
                            <p>{chirp.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;