// je saisis ma div principale dans le body
const app = document.querySelector(".app");
// je créé une div pour mes cartes avant de créer celle pour le compteur
const sections = document.createElement("div");
sections.classList.add("sections");
app.appendChild(sections);

//je créé le tableau avec toutes mes questions et réponses (1 objet par groupe)
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

// je créé mon compteur de points
let i = 0;

// je créé la div pour ce compteur dans mon HTML
const counter = document.createElement("div");
counter.classList.add("counter");
app.appendChild(counter);
// puis l'affichage des points
const h2 = document.createElement("h2");
counter.appendChild(h2);
h2.innerHTML = `${i} / 6 `;

// je boucle sur mon tableau en précisant d'abord chaque élément
// puis l'index qui me servira à différencier mes ID
questions.forEach((elem, index) => {
    // je commence par le corps de la carte
  const section = document.createElement("section");
  sections.appendChild(section);
    // ensuite la question
  const question = document.createElement("h1");
  section.appendChild(question);
  question.innerHTML = `${elem.question}`;
   // puis la div pour ma première réponse
  const firstQuestion = document.createElement("div");
  firstQuestion.classList.add("question");
    // son label que j'adapte à l'ID de l'input radio
  const answer1 = document.createElement("label");
  answer1.innerHTML = `${elem.answer1}`;
  answer1.htmlFor = `input1.${index + 1}`;
    // et l'input en lui-même
    const input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = `input1.${index + 1}`;
    input1.name = `answer.${index + 1}`;
    //
    //
    // je ne fais pas d'appendChild pour l'instant
    //
    //
    // je fais la même chose pour la deuxième question
  const secondQuestion = document.createElement("div");
  secondQuestion.classList.add("question");
  const answer2 = document.createElement("label");
  answer2.htmlFor = `input2.${index + 1}`;
  answer2.innerHTML = `${elem.answer2}`;
  const input2 = document.createElement("input");
  input2.type = "radio";
  input2.id = `input2.${index + 1}`;
  input2.name = `answer.${index + 1}`;

    // je créé un nombre aléatoire entre 1 et 2
    // il me servira à faire apparaître mes questions dans un ordre alétoire
    // ça me permet de viser le même type de réponse valide pour la varification
  let random = Math.ceil(Math.random() * 2);
    // puis je fais apparaître mes éléments en fonction du nombre aléatoire 
  if (random === 1) {
    section.appendChild(firstQuestion);
    firstQuestion.appendChild(answer1);
    firstQuestion.appendChild(input1);
    section.appendChild(secondQuestion);
    secondQuestion.appendChild(answer2);
    secondQuestion.appendChild(input2);
  } else {
    section.appendChild(secondQuestion);
    secondQuestion.appendChild(answer2);
    secondQuestion.appendChild(input2);
    section.appendChild(firstQuestion);
    firstQuestion.appendChild(answer1);
    firstQuestion.appendChild(input1);
  }
    // je créé mon bouton flip
  const flip = document.createElement("input");
  flip.type = "button";
  flip.value = "flip";
  section.appendChild(flip);
    // je déclare ma fonction
  flip.onclick = () => {
    // je commence par vider le contenu de ma section
    section.innerHTML = "";
    // puis je créé la réponse dans ma section à la place du contenu précédent
    const answer = document.createElement("p");
    answer.classList.add("answer");
    section.appendChild(answer);
    // j'adapte la réponse et le compteur en fonction du résultat
    if (input2.checked) {
      answer.innerHTML = "well done!";
      i++;
      console.log(i);
    } else {
      answer.innerHTML = "to bad!";
    }
    // enfin je mets à jour la div de mon compteur
    h2.innerHTML = `${i} / 6 `;
  };
});
