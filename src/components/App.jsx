import React, { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClickHandler = event => {
    const stateValue = event.currentTarget.name;
    this.setState(prevState => ({
      [stateValue]: prevState[stateValue] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions buttonClickHandler={this.buttonClickHandler} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </Container>
    );
  }
}
