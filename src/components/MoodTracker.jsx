import { useState } from "react";

const MoodTracker = () => {
    const messages = {
        "😟": "মন খারাপ? একটা বিরতি নাও",
        "😐": "ঠিক আছে, চলতে চলো।",
        "🙂": "ভালো লাগছে যেন ভালো লাগেনা",
        "😎": "দারুণ! এই energy ধরে রাখো!",
        "🥳": "আজ তোমার দিনটা অসাধারণ!"
    };

    const [selectedMood, setSelectedMood] = useState(null);

    const messageKeys = Object.keys(messages);
    console.log(selectedMood, messages["😟"], 'SelectedMood');


    return (
        <div className='mood-tracker-parent'>
            Mood tracker hi
            <div className="emoji-parent">
                {messageKeys.map(emoji => {
                    return <button className="emoji-btn" onClick={() => setSelectedMood(emoji)}>{emoji}</button>
                })}
            </div>
            <p>{messages[selectedMood]}</p>
            
        </div>
    );
};

export default MoodTracker;