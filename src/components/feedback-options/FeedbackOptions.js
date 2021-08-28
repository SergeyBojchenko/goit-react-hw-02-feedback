import React from 'react';
import styles from "./feedback-options.module.css"



const FeedbackOptions = ({onIncrementFeedback, options}) => (
    <div className={styles.buttonContainer}>
        {options.map(option => (
            <button key={option} type="button" onClick={() => onIncrementFeedback(option)}>{option}</button>))}
        
    </div>
);

export default FeedbackOptions;