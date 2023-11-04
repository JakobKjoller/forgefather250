"use strict";

var resultDiv = $('.f250div');

function LoadData() {
  var response;
  return regeneratorRuntime.async(function LoadData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("./data/f250.json"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function LoadRandomOne() {
  return regeneratorRuntime.async(function LoadRandomOne$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          LoadData().then(function (result) {
            var length = result.length;
            var x = Math.floor(Math.random() * length);
            var data = result[x];
            CreateF250(data);
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function LoadAll() {
  return regeneratorRuntime.async(function LoadAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          LoadData().then(function (result) {
            $.each(result, function (key, value) {
              CreateF250(value);
            });
          });

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function CreateF250(value) {
  f250 = $('<div class="workout"></div>');
  f250Title = $('<div class="title"><h2>' + value.title + '</h2></div>');
  f250Title.appendTo(f250);

  if (value.note != null) {
    f250Note = $('<div class="note">' + value.note + '</div>');
    f250Note.appendTo(f250);
  }

  f250exercises = $('<div class="exercises"><h3>Exercises</h3></div>');
  f250exercises.appendTo(f250);
  exersicerow = $('<div class="exerciserow"> </div>');
  f250exerciseRep = $('<div class="exerciserep">Reps</div>');
  f250exerciseRep.appendTo(exersicerow);
  f250exercise = $('<div class="exercise">Exercise</div>');
  f250exercise.appendTo(exersicerow);
  exersicerow.appendTo(f250exercises);
  $.each(value.exercises, function (key, exercise) {
    exersicerow = $('<div class="exerciserow"> </div>');
    reps = "&nbsp;";

    if (exercise.reps != null || exercise.reps == 0) {
      reps = exercise.reps;
    }

    f250exerciseRep = $('<div class="exerciserep">' + reps + '</div>');
    f250exerciseRep.appendTo(exersicerow);
    f250exercise = $('<div class="exercise">' + exercise.name + '</div>');
    f250exercise.appendTo(exersicerow);
    exersicerow.appendTo(f250exercises);
  });
  f250.appendTo(resultDiv);
}
/*
var length = jsonString.length;
console.log(length);

obj = JSON.parse(jsonString);
shareInfoLen = Object.keys(obj.shareInfo[0]).length;
*/