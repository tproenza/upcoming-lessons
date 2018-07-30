import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lesson from "./Lesson";
import moment from "moment";

class DaySection extends Component {
  render() {
    const { day, lessons } = this.props;
    return (
      <div className="DaySection" style={styles.DaySection}>
        <Grid container spacing={24}>
          <Typography variant="subheading" style={styles.dayHeader}>
            {moment(day, "YYYY/MM/DD").format("ddd, MMMM Do YYYY")}
          </Typography>
          {lessons.map(lesson => <Lesson key={lesson.time} lesson={lesson} />)}
        </Grid>
      </div>
    );
  }
}
const styles = {
  DaySection: { padding: 20 },
  dayHeader: {
    paddingBottom: 7,
    fontWeight: 600,
    color: "#696969"
  }
};
DaySection.propTypes = {
  lessons: PropTypes.array.isRequired
};

export default DaySection;
