var express = require('express');

var app = express();

app.get('*', function (req, res) {
  var dateStamp = {
    unix: null,
    date: null
  };
  
  var timeStamp = decodeURIComponent(req.path).slice(1);
  var dateIn = new Date(isNaN(timeStamp) ? timeStamp : +timeStamp);
  if (dateIn.getTime()) {
    dateStamp.unix = dateIn.getTime();
    dateStamp.date = dateIn.toDateString();
  }
  
  res.send(JSON.stringify(dateStamp));
});

app.listen(process.env.PORT || 8080, function () {
});