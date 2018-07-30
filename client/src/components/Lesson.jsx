import React, { Component } from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Instructor from "./Instructor";
import LessonTime from "./LessonTime";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Lesson extends Component {
  render() {
    const {
      description,
      instructorName,
      instructorPhotoUrl,
      subjectPhotoUrl,
      title,
      time
    } = this.props.lesson;

    return (
      <Grid item xs={12} style={styles.lessonContainer}>
        <Paper style={styles.Paper}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Description
                description={description}
                descPhoto={subjectPhotoUrl}
                title={title}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Instructor
                instName={instructorName}
                instPhoto={instructorPhotoUrl}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <LessonTime time={time} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const styles = {
  lessonContainer: {
    paddingTop: 2,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  Paper: {
    padding: 10,
    borderRadius: 0
  }
};

Lesson.propTypes = {
  lesson: PropTypes.object
};

export default Lesson;
