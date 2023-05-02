$(document).ready(() => {

	// variables moment formats date and time
	var headingTimeDisplay = moment().format("LL:LT");
	var currentTime = moment().hour();

	// todays's date using moment format for date
	$("#todaysDateIs").text("Today's Date Is:   " + headingTimeDisplay);

	// set time in box columns 60  min intervals starting at 900am
	let timeBoxSequence = {
		intervalBoxTime: 60,
		firstEntry: '0800',
		lastEntry: '1600'
	};

	//variables for start and finish time, var timeBoxHors for moment start time text

	// time start moment.js format
	let startNow = moment(timeBoxSequence.firstEntry, "HH:mm");


	// time end moment.js format
	let finishTime = moment(timeBoxSequence.lastEntry, "HH:mm").add(1, 'hour');


	// time for boxes 9am-5pm here
	let timeBoxHours = [];

	// timeBoxHours time added stack overflow example using moment js in while loop to set condition to set time
	while (startNow < finishTime) {
		//moment.js startNow and finishTime formatted , time added to time box 
		startNow.add(timeBoxSequence.intervalBoxTime, 'minutes');
		timeBoxHours.push(startNow.format("LT"));
		finishTime.format("LT");

	}
	// 9 hour day plan
	var hourLength = 9;

	for (var i = 0; i < hourLength; i++) {
		// div element to make rows
		var planRow = $('<div></div>');

		// div element for hour boxes
		var hour = $("<div>");

		// user text- textArea element
		var userMessage = $('<textArea></textArea>');

		// button elements and icons
		var saveBtn = $('<button></button>');
		var iconSave = $('<i>');
		var deleteBtn = $('<button>');
		var iconDelete = $('<i>')

		// classes, attributes, text added to elements
		//rows 
		planRow.addClass("row  time-block");
		planRow.attr("id", i + 9);
		//variable to capture planRow "id"
		var getID = planRow.attr("id");
		// hour columns
		hour.addClass("hour col-1");
		hour.text(timeBoxHours[i]);
		// user text
		userMessage.addClass("col-9")
		userMessage.attr('value', i + 9);
		//buttons and icons
		saveBtn.addClass('saveBtn col-1');
		saveBtn.attr("value", i + 9);
		iconSave.addClass("far fa-save");
		saveBtn.text('SAVE ')
		deleteBtn.addClass("deleteBtn col-1");
		deleteBtn.text('DELETE ')
		deleteBtn.attr("value", i + 9)
		iconDelete.addClass("fas fa-trash-alt")

		//append element
		planRow.append(hour);
		planRow.append(userMessage);
		saveBtn.append(iconSave);
		planRow.append(saveBtn);
		deleteBtn.append(iconDelete)
		planRow.append(deleteBtn);
		//append to 'root'  element
		$("#timeBox-Id").append(planRow);
		// time alert past(red) present(blue) future(green)
		var textTime = (parseInt(getID))
		if (currentTime == textTime + 1) {
			hour.addClass('past');
		} else if (textTime == currentTime) {
			hour.addClass('present');
		} else {
			$('<div></div>').removeClass('past');
			hour.addClass('future');
		}
	}
	// w3 schools credit for jQuery elements/ gitHub topics jQuery quizApps trilogy Julianne delete  button to program
	// save button
	$(".saveBtn").on('click', function (event) {
		event.preventDefault();
		// set item time and text
		var textTime = $(this).siblings("textarea").attr("value");
		var textInput = $(this).siblings("textarea").val();
		localStorage.setItem(textTime, textInput)
	})

	// delete button
	$(".deleteBtn").on('click', function (event) {
		event.preventDefault();
		//remove item time and text 
		var textTime = $(this).siblings("textarea").attr("value");
		var textInput = $(this).siblings("textarea").val("");
		localStorage.removeItem(textTime, textInput)
	})

	// get item for textarea
	$("textarea").each(function () {
		var textInput = $(this).attr("value");
		var getTextInput = localStorage.getItem(textInput)
		$(this).parent().children("textarea").val(getTextInput)
	})
});


































































