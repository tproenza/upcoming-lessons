import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class Description extends Component {
  render() {
    const { description, descPhoto, title } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Grid item xs={3} sm={3} md={2} lg={2}>
            <Avatar src={descPhoto} style={styles.avatar} />
          </Grid>
          <Grid item xs={9} sm={9} md={10} lg={10}>
            <Typography
              gutterBottom={true}
              variant={"subheading"}
              style={styles.title}
            >
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  avatar: {
    margin: "auto"
  },
  container: {
    padding: 5
  },
  title: {
    fontWeight: 600,
    color: "#333333"
  }
};

Description.propTypes = {
  description: PropTypes.string,
  descPhoto: PropTypes.string,
  title: PropTypes.string
};

export default Description;
