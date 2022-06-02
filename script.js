const app = document.querySelector(".app");
const sections = document.createElement("div");
sections.classList.add("sections");
app.appendChild(sections);

let questions = [
  {
    question: "low code ou full stack?",
    answer1: "low code",
    answer2: "full-stack",
  },
  {
    question: "200 lignes ou 1000 lignes?",
    answer1: "200 lignes",
    answer2: "1000 lignes",
  },
  {
    question: "particule ou tchi-tchi?",
    answer1: "tchi-tchi",
    answer2: "particule",
  },
  {
    question: "fonction classique ou fonction fléchée?",
    answer1: "fonction classique",
    answer2: "fonction fléchée",
  },
  {
    question: "if else ou condition ternaire?",
    answer1: "if else",
    answer2: "condition ternaire",
  },
  {
    question: "Johnny depp ou Amber heard?",
    answer1: "Amber Heard",
    answer2: "Johnny Depp",
  },
];

let i = 0;

const counter = document.createElement("div");
counter.classList.add("counter");
app.appendChild(counter);
const h2 = document.createElement("h2");
counter.appendChild(h2);
h2.innerHTML = `${i} / 6 `;

questions.forEach((elem, index) => {
  const section = document.createElement("section");
  sections.appendChild(section);
  const question = document.createElement("h1");
  section.appendChild(question);
  question.innerHTML = `${elem.question}`;
  let random = Math.ceil(Math.random() * 2);
  if (random === 1) {
    const firstQuestion = document.createElement("div");
    firstQuestion.classList.add("question");
    section.appendChild(firstQuestion);
    const answer1 = document.createElement("label");
    answer1.innerHTML = `${elem.answer1}`;
    answer1.htmlFor = `input1.${index + 1}`;
    firstQuestion.appendChild(answer1);
    const input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = `input1.${index + 1}`;
    input1.name = `answer.${index + 1}`;
    firstQuestion.appendChild(input1);
    const secondQuestion = document.createElement("div");
    secondQuestion.classList.add("question");
    section.appendChild(secondQuestion);
    const answer2 = document.createElement("label");
    answer2.htmlFor = `input2.${index + 1}`;
    answer2.innerHTML = `${elem.answer2}`;
    secondQuestion.appendChild(answer2);
    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = `input2.${index + 1}`;
    input2.name = `answer.${index + 1}`;
    secondQuestion.appendChild(input2);
    const flip = document.createElement("input");
    flip.type = "button";
    flip.value = "flip";
    section.appendChild(flip);
    flip.onclick = () => {
      section.innerHTML = "";
      const answer = document.createElement("p");
      answer.classList.add("answer");
      section.appendChild(answer);
      if (input2.checked) {
        answer.innerHTML = "well done!";
        i++;
        console.log(i);
      } else {
        answer.innerHTML = "to bad!";
      }
      h2.innerHTML = `${i} / 6 `;
    };
  } else {
    const secondQuestion = document.createElement("div");
    secondQuestion.classList.add("question");
    section.appendChild(secondQuestion);
    const answer2 = document.createElement("label");
    answer2.htmlFor = `input2.${index + 1}`;
    answer2.innerHTML = `${elem.answer2}`;
    secondQuestion.appendChild(answer2);
    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = `input2.${index + 1}`;
    input2.name = `answer.${index + 1}`;
    secondQuestion.appendChild(input2);
    const firstQuestion = document.createElement("div");
    firstQuestion.classList.add("question");
    section.appendChild(firstQuestion);
    const answer1 = document.createElement("label");
    answer1.innerHTML = `${elem.answer1}`;
    answer1.htmlFor = `input1.${index + 1}`;
    firstQuestion.appendChild(answer1);
    const input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = `input1.${index + 1}`;
    input1.name = `answer.${index + 1}`;
    firstQuestion.appendChild(input1);
    const flip = document.createElement("input");
    flip.type = "button";
    flip.value = "flip";
    section.appendChild(flip);
    flip.onclick = () => {
      section.innerHTML = "";
      const answer = document.createElement("p");
      answer.classList.add("answer");
      section.appendChild(answer);
      if (input2.checked) {
        answer.innerHTML = "well done!";
        i++;
        console.log(i);
      } else {
        answer.innerHTML = "to bad!";
      }
      h2.innerHTML = `${i} / 6 `;
    };
  }
});
