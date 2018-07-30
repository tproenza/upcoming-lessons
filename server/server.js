const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const moment = require("moment");
const _ = require("lodash");
let lessons = {};

let rootPath = path.join(__dirname, "../");
let indexPath = path.join(rootPath, "./client/public/index.html");

/* In case the json file used is large, we can use 
   fs.readFile which is async vs 'require'*/
fs.readFile(path.join(rootPath, "./server/channel.json"), (err, data) => {
  if (err) throw err;
  let unordered = {};
  let parsed = JSON.parse(data);
  let withDate = parsed.map(l => {
    l.date = moment(l.time).format("YYYY-MM-DD");
    return l;
  });

  // Group courses in the same day
  let grouped = _.groupBy(withDate, "date");
  // Sort courses in each day
  Object.keys(grouped).map(day => {
    return (unordered[day] = _.sortBy(grouped[day], "time"));
  });
  Object.keys(unordered)
    .sort()
    .forEach(key => {
      lessons[key] = unordered[key];
    });
  /** These iterations can be expensive and would be
   *  mitigated by querying the DB properly however,
   *  for purpose of this demo we'll assume we
   *  want to send the data ordered
   */
});

app.get("/api/lessons", (req, res) => {
  res.send(lessons);
});

/* Middleware to catch URLs that look
   like a file extension i.e. .js, .html */
app.use((req, res, next) => {
  let err;

  if (path.extname(req.path).length > 0) {
    err = new Error("Not found.");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Wild card
app.get("/*", (req, res) => {
  res.sendFile(indexPath);
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

/* Currently there's a proxy set on the front end
   that makes sure the express server is hit @ port 8000
   rather than the default port React is listening to.
   Please note that if your local env has a different port
   set you will have to edit the client package.json */
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
