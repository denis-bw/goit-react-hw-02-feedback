import React, { Component } from 'react';
import {Statistics} from '../Statistics/Statistics'
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { Section } from '../Section/Section'
import { Notification } from '../Notification/Notification'
import {ContainerFeedback} from './App.styled'

export default class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  onClicBtn = (e) => {
    const nameState = e.target.textContent;

    this.setState((prevState) => {
      return {[nameState]: prevState[nameState] + 1}
    })
   }


  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <ContainerFeedback >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good","neutral","bad"]}
            onLeaveFeedback={this.onClicBtn}>
          </FeedbackOptions>
        </Section>
     
        
        {total ? <Section title="Statistics">
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}>   
          </Statistics>
        </Section> : <Notification message="There is no feedback"></Notification>}
      </ContainerFeedback>
    );
  }
}

