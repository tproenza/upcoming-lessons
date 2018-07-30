import moment from "moment";

export function lessonDuration(date) {
  let military = date.split(" ")[1];
  let momentStart = moment(military, "HH:mm:ss");
  let start = momentStart.format("hh:mm A");
  let end = momentStart.add(1, "hours").format("hh:mm A");
  return `${start}-${end} EDT`;
}
