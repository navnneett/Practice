import {Name, StudentNumber, Program} from './formatting.js';

var name = Name("Navneet");
var studentNumber = StudentNumber("A0");
var course = Program("Digital Design and Development");

var sentence = name + " " + studentNumber + " " + course;
console.log(sentence);

document.getElementById("person").innerHTML = sentence;

