var wordsDict = {
	subject : 
	["J'ai", "Nous avons", "Tu as", "Vous avez", "Il a", "Ils ont"],
	verbInf : 
	["booter", "connecter", "coder", "programmer", "développer", 
	"scripter", "monter", "hacker", "debugger"],
	verbPastPart : 
	["booté", "connecté", "codé", "programmé", "développé", "scripté", 
	"monté", "hacké", "debuggé"],
	techType :
	["un proxy", "un serveur", "un terminal", "un environnement", 
	"un système d'exploitation", "une base de données", "une API", "un framework", 
	"une GUI", "une application desktop", "un browser", "une librairie"],
	techLabel :
	["SSH", "Raspberry Pi", "Apache", "Windows", "iOS", "Linux", "PostgreSQL", 
	"Django", "REST", "SQLite", "X Window", "jQuerry"],
	languages :
	["Python", "SQL", "JavaScript", "HTML/CSS", "XML", "Bash", "C", "Java", "PHP", 
	".NET"],
	prepo1 :
	["avec du", "en", "en utilisant du", "à l'aide de"],
	prepo2 :
	["afin de", "pour", "dans l'objectif de", "le but final étant de", "avant de"]
}

function selectRandWrd(wordsType) {
	words = wordsDict[wordsType];
	wordsLenMax = words.length - 1;
	wordsLenMin = 0;
	randomInt = Math.floor(Math.random() * (wordsLenMax - wordsLenMin + 1) + wordsLenMin)
	var word = words[randomInt];
	return word;
}

function makeShortSentence() {
	var sentence = selectRandWrd("subject") + " " + selectRandWrd("verbPastPart")
	+ " " + selectRandWrd("techType") + " " + selectRandWrd("techLabel") + " " 
	+ selectRandWrd("prepo1") + " " + selectRandWrd("languages");
	return sentence;
}

function makeLongSentence() {
	var sentence = makeShortSentence() + " "
	+ selectRandWrd("prepo2") + " " + selectRandWrd("verbInf") + " " + 
	selectRandWrd("techType") + " " + selectRandWrd("techLabel");
	return sentence;
}


var bouton = document.getElementById("generator");
var citNumber = document.getElementById("citnumber");
var spanInfo = document.getElementById("info");
var citframe = document.getElementById("citframe");

function displayCit(citNumber, citLengthVal) {
	for (var i = 0; i < citNumber; i++) {
		var pTag = document.createElement("p");
		pTag.style.fontSize= "1.8em"
		if (citLengthVal === "short") {
			pTag.appendChild(document.createTextNode(makeShortSentence() + "."));
		} else {
			pTag.appendChild(document.createTextNode(makeLongSentence() + "."));
		}
		citframe.appendChild(pTag);
	}
}

function clearCit() {
	var pTags = citframe.querySelectorAll("p");
	for (var i = 0; i < pTags.length; i++) {
		citframe.removeChild(pTags[i]);
	}
}

function getCitNumber() {
	var citNumberVal = citNumber.value ;
	if (parseInt(citNumberVal) < 1 || parseInt(citNumberVal) > 5) {
		spanInfo.style.display = "block";
	} else if (isNaN(citNumberVal) === true) {
		spanInfo.style.display = "block";
	} else {
		spanInfo.style.display = "none";
		return citNumberVal;
	}
}

function getCitLength() {
	var citLength1 = document.getElementById("citlength1");
	var citLength2 = document.getElementById("citlength2");
	if (citLength1.checked === true) {
		return citLength1.value;
	} else {
		return citLength2.value;
	}
}

spanInfo.style.display = "none";

bouton.addEventListener("click", function() {
	var citNumberVal = getCitNumber();
	var citLengthVal = getCitLength();
	clearCit();
	displayCit(citNumberVal, citLengthVal);
});