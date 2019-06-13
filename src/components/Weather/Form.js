import React from "react";


const Form = props => (
    <form onSubmit={props.getWeather} >
        <div className="input_div" >
            <input type="text" name="city" placeholder="City..." />
            <input type="text"
                name="country"
                placeholder="Country..." />
        </div>
        <button > What's the weather like in.. </button>
    </form >
);
export default Form;