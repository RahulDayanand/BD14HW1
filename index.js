let express = require("express");
let app = express();
let port = 3000;

//1.Welcome Message

function getWelcomeMessage() {
  return "We will now learn functions";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

//2.Greeting Message

function getGreetingMessage(username) {
  return "Hey " + username + "! Are you ready to learn functions with us?";
}

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

//3.Years Of Experience

function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    return "You have some experience with functions. Great!";
  } else {
    return "No worries. You will start writing functions in no time!";
  }
}

app.get("/message", (req, res) => {
  let yearsOfExp = parseFloat(req.query.yearsOfExp);
  res.send(checkYearsOfExp(yearsOfExp));
});

//4.Total hours to learn functions per week

function getTime(days, hours) {
  return days * hours;
}

app.get("/hours", (req, res) => {
  let days = parseInt(req.query.days);
  let hours = parseInt(req.query.hours);

  res.send(getTime(days, hours).toString());
});

//5.Module Completion Status

function getModulusCompletion(username, hasCompleted) {
  if (hasCompleted) {
    return username + " has completed the modules";
  } else {
    return username + " has not completed the modules";
  }
}

app.get("/module-completion-status", (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted === "true";
  res.send(getModulusCompletion(username, hasCompleted));
});

//6.Personalized Greeting

function getPersonalizedGreeting(name,city){
  return "Hey " + name + "! What's famous about " + city + "?";
}

app.get("/personalized-greeting",(req,res) => {
  let city = req.query.city;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(name,city));
})

//7.Find Age

function findAge(birthyear){
  return 2024 - birthyear;
}

app.get("/find-age",(req,res) => {
  let birthyear = parseInt(req.query.birthyear);
  res.send(findAge(birthyear).toString());
})

//8.Find Required Time

function findRequiredTime(days,hours)
{
  let requiredTime = days * hours;                       
  if(requiredTime >= 30){
    return "The time being dedicated is sufficient for learning functions";
  }else{
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient",(req,res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(findRequiredTime(days,hours).toString());
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
