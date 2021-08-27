import React from 'react';



const FeedbackOptions = ({onIncrementFeedback, options}) => (
    <div>
        {options.map(option => (
            <button key={option} type="button" onClick={() => onIncrementFeedback(option)}>{option}</button>))}
        
    </div>
);

export default FeedbackOptions;