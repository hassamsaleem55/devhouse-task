const date = "01.06.23";
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
const imageSrc = "/card-dummy.jpg";

let question = ["Will the 2024 MacBook Pro have a 5GB chip?"];

function generateQuestions(num: number = 1) {
  let questions = [];
  for (let i = 0; i < num; i++) {
    questions.push(...question);
  }
  return questions;
}

export let contestsData = [
  {
    category: "ongoing",
    label: "Ongoing",
    data: [
      {
        contestNumber: "1",
        date,
        description,
        imageSrc,
        questions: generateQuestions(5),
      },
      {
        contestNumber: "2",
        date,
        description,
        imageSrc,
        questions: generateQuestions(2),
      },
      {
        contestNumber: "3",
        date,
        description,
        imageSrc,
        questions: generateQuestions(4),
      },
      {
        contestNumber: "4",
        date,
        description,
        imageSrc,
        questions: generateQuestions(3),
      },
      {
        contestNumber: "5",
        date,
        description,
        imageSrc,
        questions: generateQuestions(10),
      },
    ],
  },
  {
    category: "archived",
    label: "Archived",
    data: [
      {
        contestNumber: "6",
        date,
        description,
        imageSrc,
        questions: generateQuestions(8),
      },
      {
        contestNumber: "7",
        date,
        description,
        imageSrc,
        questions: generateQuestions(12),
      },
      {
        contestNumber: "8",
        date,
        description,
        imageSrc,
        questions: generateQuestions(6),
      },
    ],
  },
];
