import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Description from "./Description";
import Instructor from "./Instructor";
import LessonTime from "./LessonTime";

class Lesson extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Description />
          <Instructor />
          <LessonTime />
        </CardContent>
      </Card>
    );
  }
}

export default Lesson;
