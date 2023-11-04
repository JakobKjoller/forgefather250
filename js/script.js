var resultDiv = $('.f250div');

async function LoadData() {
    const response = await fetch("./data/f250.json");
    return await response.json();

}

async function LoadRandomOne() {
    LoadData().then(result => {

        var length = result.length;

        let x = Math.floor(Math.random() * length);

        var data = result[x];

        CreateF250(data)
    });

}

async function LoadAll() {
    LoadData().then(result => {
        $.each(result, function (key, value) {
            CreateF250(value);

        });
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
        if (exercise.reps != null || exercise.reps == 0)
        {reps = exercise.reps }
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