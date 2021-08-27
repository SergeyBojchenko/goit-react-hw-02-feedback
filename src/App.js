import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from './components/section';
import FeedbackOptions from "./components/feedback-options";
import ListStatistics from "./components/list-statistics";
import Notification from "./components/notification";


class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onIncrementFeedback = (feedback) => {
        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
        }));
    };

    

    
    render() {
        const { good, neutral, bad } = this.state;
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(
        (good / countTotalFeedback) * 100,);
        const options = Object.keys(this.state);

        return (
        <>
          <Section title="Please leave feedback">
                <FeedbackOptions
                    onIncrementFeedback={this.onIncrementFeedback}
                    options={options}
                />
          </Section>
                <Section title="Statistics">
                    {countTotalFeedback > 0 ?(
                        <ListStatistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={countTotalFeedback}
                            positiveFeedbackPercentage={countPositiveFeedbackPercentage}
                        />
                    ): (<Notification message="No feedback given"/>)} 
          </Section>
    </>
    )
    };
};


export default App;
