import React, { useState } from "react";
import "./index.css";


const Counter = () => {

    const [counter, setCounter] = useState(0);

    const getModifier = () => {
        if(counter > 0) return 'counter__title--increment';
        if(counter < 0) return 'counter__title--decrement';
        return "";
    }

    return (
        <div className='wrapper'>
            <div className='counter'>
            <h1 className={`counter__title ${getModifier()}`}>{counter}</h1>

                <section className='buttons'>
                    
                <button
                    onClick={() => setCounter(counter + 1)}
                    className="button button--increment"
                > incrementar </button>

                <button
                    onClick={() => setCounter(counter - 1)}
                    className="button button--decrement"
                > decrementar </button>

                </section>

            </div>
        </div>
    )
}

export default Counter;
