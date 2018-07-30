import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { lessonDuration } from "../utils/LessonTime";

class LessonTime extends Component {
  render() {
    const { time } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Typography style={styles.time}>{lessonDuration(time)}</Typography>
        </Grid>
      </div>
    );
  }
}
const styles = {
  container: {
    padding: 5
  },
  time: {
    margin: "auto",
    overfloWrap: "break-word",
    color: "#696969",
    fontWeight: "bold"
  }
};

LessonTime.propTypes = {
  time: PropTypes.string
};

export default LessonTime;
