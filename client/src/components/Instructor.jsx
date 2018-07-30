import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class Instructor extends Component {
  render() {
    const { instName, instPhoto } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Grid item xs={6}>
            <Avatar src={instPhoto} style={styles.avatar} />
          </Grid>
          <Grid item xs={6}>
            <Typography style={styles.name}>{instName}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 5
  },
  avatar: {
    margin: "auto"
  },
  name: {
    overfloWrap: "break-word",
    fontWeight: 600,
    color: "#696969"
  }
};

Instructor.propTypes = {
  instName: PropTypes.string,
  instPhoto: PropTypes.string
};

export default Instructor;
