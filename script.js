/**
 * Classmate Guesser!!
 * 
 * TODO:
 * 1. Create a function that randomises image and names from the array to be shown on the page 👍
 * 2. When name is clicked, call function again but save if the name was correct or incorrect, save to array incorrect [] and correct []
 * 3. Show a counter of how many guesses has been made
 */

 const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "images/students/wiktoria-dobrzewinska.jpg",
	},
];

const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];

const classmateImgEl = document.querySelector('#classmate');
const classmateNameEl = document.querySelector('#button-wrapper');
const quizEl = document.querySelector('#quiz');
let resultEl = document.querySelector('.result');
let counterEl = document.querySelector('.counter');


// arrays to save answers
const correct = [];
const incorrect = [];
let newStudents = [];

//counter
let guess = 0;

// function to shuffle arrays
const shuffleArray = (array) => {
	for(let i = array.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1))
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
  }
}

// get random correct classmate name + img and 3 random incorrect name + img
const getClassmate = (studentArray) => {

	// shuffle all objects in student array
    shuffleArray(studentArray);
    console.log(studentArray);

	
	// get 4 random classmates
    const randomClassmates = studentArray.slice(0, 4);
	
	// get correct student name and img in smaller array
	let correctStudent = randomClassmates[0];
	classmateImgEl.src = correctStudent.image;
	let correctName = correctStudent.name;
	
	// filter out chosen student?
	newStudents = studentArray.filter(student => student !== studentArray[0]);
	console.log("New array:", newStudents);
	console.log("Removed student:", studentArray[0]);
	
	// shuffle first four objects
    shuffleArray(randomClassmates);
    console.log(randomClassmates);

	classmateNameEl.innerHTML = "";

	const randomNames = randomClassmates.map(classmate => classmate.name);

    randomNames.forEach(classmate => {	
		if(classmate == correctName){
			console.log("This is the right answer!", correctName);

			classmateNameEl.innerHTML += `<button id="correctAnswer" class="btn btn-light w-50 m-1">${classmate}</button>`;
		} else {
			classmateNameEl.innerHTML += `<button id="wrongAnswer" class="btn btn-light w-50 m-1">${classmate}</button>`;
		}
    })
}

getClassmate(students);

const showResults = () => {
	// buttonEl.preventDefault();
	quizEl.innerHTML = "";
	quizEl.innerHTML += `<h3 class="m-2">Your correct guesses were:</h3>`;

	counterEl.innerText = `${correct.length}/10 was correct!`;

	correct.forEach(correctGuess => {
		quizEl.innerHTML += `<div class="btn btn-success m-1">${correctGuess}</div>`;
	})

	quizEl.innerHTML += `<h3 class="m-2">Your incorrect guesses were:</h3>`;

	incorrect.forEach(incorrectGuess => {
		quizEl.innerHTML += `<div class="btn btn-danger m-1">${incorrectGuess}</div>`;
	})

}

quizEl.addEventListener('click', e =>{
	if(e.target.tagName === 'BUTTON'){
		guess++;
		counterEl.innerText = `${guess}/10`;

		if(e.target.id === 'correctAnswer'){
			resultEl.innerText = "Correct! 👍";
			correct.push(e.target.innerText);

			console.log(correct);
		} else{
			resultEl.innerText = "Incorrect 👎";
			incorrect.push(e.target.innerText);
		}

		if(guess === 10){
			showResults();
		} else{
			getClassmate(newStudents);
		}
	}
});