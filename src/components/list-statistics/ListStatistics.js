import React from 'react';
import styles from "./listStatistics.module.css"

const ListStatistics = ({good, neutral, bad, total, positiveFeedbackPercentage}) => (
    <>
        <ul className={styles.listStatistics}>
            <li>
                <p>Good:</p><span>{good}</span>
            </li>
            <li>
                <p>Neutral:</p><span>{neutral}</span>
            </li>
            <li>
                <p>Bad:</p><span>{bad}</span>
            </li>
            <li>
                <p>Total:</p><span>{total}</span>
            </li>
            <li>
                <p>Positive feedback:</p><span>{positiveFeedbackPercentage}</span>
            </li>
        </ul>
        </>
);

export default ListStatistics;