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
const classmateNameEl = document.querySelector('#alternatives');
const cardEl = document.querySelector('.card');


// arrays to save answers
correct = [];
incorrect = [];

//counter
guess = 0;

// function to shuffle arrays
const shuffleArray = (students) => {
	for(let i = students.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1))
		const temp = students[i]
		students[i] = students[j]
		students[j] = temp
  }
}

// get random correct classmate name + img and 3 random incorrect name + img
const getClassmate = () => {

	// shuffle all objects in student array
    shuffleArray(students);
    console.log(students);
    
    const classmate = students[0];
    const classmateImg = classmate.image;
    classmateImgEl.innerHTML = `<img src="${classmateImg}" alt="" class="card-img-top" id="classmate">`;

	// get 4 random classmates
    const randomClassmates = students.slice(0, 4);

	// get correct answer in smaller array
	const correctAnswer = randomClassmates[0];
	
	// shuffle first four objects
    shuffleArray(randomClassmates);

    /*
    const names = students.filter(student => {
        students[0];
        students[1];
        students[2];
        students[3];
    })
    */

    console.log(randomClassmates);
	classmateNameEl.innerHTML = "";

    randomClassmates.forEach(classmate => {	
		if(classmate == correctAnswer){
			console.log("This is the right answer!", correctAnswer);

			classmateNameEl.innerHTML += `<button id="correctAnswer" data-classmate="${classmate.name}" class="btn btn-primary w-100 m-1">${classmate.name}</button>`;
		} else {
			classmateNameEl.innerHTML += `<button id="wrongAnswer" class="btn btn-primary w-100 m-1">${classmate.name}</button>`;
		}
    })
}

getClassmate();

cardEl.addEventListener('click', e =>{
	if(e.target.tagName === 'BUTTON'){
		console.log(e.target);

		guess++;

		if(e.target.id === 'correctAnswer'){
			console.log("Correct answer");

			correct.push(e.target.innerText);

			console.log(correct);
		} else{
			console.log("Incorrect answer");
			incorrect.push(e.target.innerText);
			console.log(incorrect);
		}

		getClassmate();
	}
});