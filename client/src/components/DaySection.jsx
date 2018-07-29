import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lesson from "./Lesson";

class DaySection extends Component {
  render() {
    return (
      <div className="DaySection-container">
        <Grid container spacing={24} style={styles.container}>
          <Typography variant="subheading" style={styles.dayHeader}>
            {this.props.day}
          </Typography>
          {this.props.lessons.map(lesson => (
            <Grid key={lesson.time} item xs={12} style={styles.lessonContainer}>
              <Lesson key={lesson.time} lesson={lesson} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
const styles = {
  container: { padding: 20 },
  dayHeader: {
    paddingBottom: 7,
    fontWeight: 600
  },
  lessonContainer: {
    paddingTop: 2,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  }
};
DaySection.propTypes = {
  lessons: PropTypes.array.isRequired
};

export default DaySection;
