const express = require("express");
const cors = require("cors");
const app = express();
const dates = require("./dates.js");
const giveWeekDays = require("./giveWeekDays.js");
const monthToInt = require("./monthToInt.js");
const projects = require("./projects.js");
const customer = require("./customer.js");
const shifts_ = require("./shifts_sapi.js");
const emp_details = require("./emp_dr.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.headers);
  res.status(200).json(dates);
});

app.get("/date/:date", (req, res) => {
  const currDay = req.params.date;
  const [month, day, year] = currDay.split(" ");
  const currSunday = new Date(Number(year), monthToInt(month), Number(day));
  const weekDaysArr = giveWeekDays(currSunday);
  const singleWeek = {};
  for (let i = 0; i < weekDaysArr.length; i++) {
    singleWeek["day" + i] = weekDaysArr[i].slice(4);
  }
  res.status(200).json({ items: [singleWeek] });
});

app.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

app.get("/customer", (req, res) => {
  res.status(200).json(customer);
});
app.get("/shifts", (req, res) => {
  res.status(200).json(shifts_);
});
app.get("/getemp/detail", (req, res) => {
  res.status(200).json(emp_details);
});
app.get("*", (req, res) => {
  res.status(404).send("This is not a valid path!!!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
