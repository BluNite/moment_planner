var quizQuest = [
	{
		question: ["What is the question1 "],
		choice:
			["apples", "bananas", "peaches", "dogs"

			],
		answer: ["bananas"]
	},
	{
		question: ["What is the question2 to you boo "],
		choice:
			["pineApple", "grapes", "pears", "watermelon1"
			],
		answer: ("watermelon1")
	},
	{
		question: ["What is the question3 to you boo "],
		choice:
			["pineApple2", "grapes2", "pears2", "watermelon2"
			],
		answer: ("watermelon2")

	},
	{
		question: ["What is the question4 to you boo "],
		choice:
			["pineApple3", "grapes3", "pears3", "watermelon3"
			],
		answer: ("watermelon3")
	}


]
let i = 0;
let questionIndex = 0;
var test = document.querySelector(".test");
console.log(quizQuest[questionIndex].choice)
console.log(quizQuest[1].answer)
console.log(quizQuest.length)


for (i; i < quizQuest.length; i++) {
	var test = document.querySelectorAll(".test");

	var tree = quizQuest[questionIndex].choice;
	//test[i].textContent = tree[i];

	console.log(questionIndex)


	console.log(questionIndex + 1);

	var test = document.querySelectorAll('.test');
	test[i].textContent = tree[i];

};




/*/var a = []
var b = []
if (a == b) {
	console.log('ok')
} else {
	console.log('ooooopsie')
}*/
