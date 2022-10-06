var data;
var list;
var list1;
var list2;
var list3;
var list4;
var list5;
var list6;
var numItems = 5; // TODO: Maybe change this so it gets this value dynamically instead of hard coding it.
var submitClicked = false;
var listItemAdded = false;
var list_index = 1;

$(document).ready(function() {

    list = document.getElementById('list_devs');

    $('#background').click(function() {
        console.log("click!")

        if (list_index == 1) {
            $('#list1').fadeIn();
        }
        if (list_index == 2) {
            $('#list2').fadeIn();
        }
        if (list_index == 3) {
            $('#list3').fadeIn();
        }
        if (list_index == 4) {
            $('#list4').fadeIn();
        }
        if (list_index == 5) {
            $('#list5').fadeIn();
        }
        if (list_index == 6 && listItemAdded) {
            $('#list6').fadeIn();
        }
        if (list_index < 6) {
            list_index += 1;
        }        
    })
    
})

function getData() {

    var valid = true;

    $('#FnameError').empty();
    $('#LnameError').empty();
    $('#ScoreError').empty()

    var fname = $("#fname").val();
    console.log("Type of fname is: " + typeof fname);

    if (fname.length == 0) {
        console.log("You have forgotten to enter a first name.")
        $('#FnameError').text("You have forgotten to enter a first name.")
        $('#FnameError').show();
        valid = false;
    } 

    var lname = $("#lname").val();
    console.log("Type of lname is: " + typeof lname);

    if (fname.length == 0) {
        console.log("You have forgotten to enter a last name.")
        $('#LnameError').text("You have forgotten to enter a last name.")
        $('#LnameError').show();
        valid = false;
    }

    var score = $("#score").val();
    console.log("Type of score is: " + typeof score);

    if (score.length == 0) {
        console.log("You have forgotten to enter a score variable.")
        $('#ScoreError').text("You have forgotten to enter a score.")
        $('#ScoreError').show();
        valid = false;
    }

    if (parseFloat(score) > 10) {
        console.log("The number cannot be greater than 10.")
        $('#ScoreError').text("The score cannot be greater than 10.")
        $('#ScoreError').show();
        valid = false 
    }

    if (valid == true) {

        submitClicked = true; // The add data button will only work if data is validated first.

        score = String(score); // These operations make sure if a whole number is entered (e.g 5)
        score = score + ".0"; // a decimal point will be added with a 0. The slice method gets rid of 
        score = score.slice(0, 3); // unnecessary information (such as if the entered value wasn't a whole number).
        console.log(score);

        data = fname + ' ' + lname + ' ' + '-' + ' ' + 'Average Score: ' + score + '/10';
    } else {
        console.log("Data not added due to hitting a validation error.")
    }    
}

function addToList() {

    if (submitClicked) {
        if (numItems <= 5) {

            var newData = data;
            var entry = document.createElement('li');
            entry.id = 'list6'
            entry.className = 'others'
            entry.appendChild(document.createTextNode(newData));
            list.appendChild(entry);
            numItems += 1;
            listItemAdded = true;
    
        } else {
    
            console.log("You have reached the maximum number of list items allowed.")
            alert("You have reached the maximum number of list items allowed.\nThe maximum number allowed is 6.")
    
        }

    } else {
        console.log("You have not submitted data yet or it is invalid.")
    }

    
    
}