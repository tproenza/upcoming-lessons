import React, { Component } from "react";
import DaySection from "./DaySection";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

class App extends Component {
  state = { lessons: {} };

  componentDidMount() {
    fetch("/api/lessons")
      .then(res => res.json())
      .then(lessons => this.setState({ lessons }));
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App-container">
          {Object.keys(this.state.lessons).map(day => (
            <DaySection key={day} day={day} lessons={this.state.lessons[day]} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
