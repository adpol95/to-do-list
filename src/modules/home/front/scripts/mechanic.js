const evidence = localStorage.key(0) ? JSON.parse(localStorage.getItem("24.02.2023")) : [
  {
    id: Math.floor(Math.random() * 100 + 1) + '',
    value: "Repeat JS",
    line: false
  },
  {
    id: Math.floor(Math.random() * 100 + 1) + '',
    value: "Repeat CSS & HTML",
    line: false
  },
  {
    id: Math.floor(Math.random() * 100 + 1) + '',
    value: "Repeat React",
    line: false
  },
];

fetch('https://todolist-adpol95.b4a.run/task')
  .then((res) => res.json())
  .then((res) => {
    console.log('200', res);
  })
  .catch((err) => console.log(err));

const getList = document.getElementById("mainList");

function render() {
  getList.innerText = "";
  evidence.forEach(el => {
    const firstStep = document.createElement("li");
    firstStep.setAttribute("key", el.id);
    const secondStep = document.createTextNode(el.value);
    firstStep.appendChild(secondStep);
    const thirdStep = document.createElement("button");
    const fourthStep = document.createTextNode("Done");
    thirdStep.setAttribute("class", "doneBut");
    thirdStep.appendChild(fourthStep);
    firstStep.appendChild(thirdStep);
    thirdStep.setAttribute("id", el.id);
    const fifthStep = document.createElement("button");
    fifthStep.setAttribute("class", "delBut");
    const sixthStep = document.createTextNode("X");
    fifthStep.appendChild(sixthStep);
    firstStep.appendChild(fifthStep);
    fifthStep.setAttribute("id", el.id)
    firstStep.setAttribute("class", el.line ? "taskDone" : '');
    getList.appendChild(firstStep);
  })
}

render();
storage();

getList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    const tId = event.target.id;
    evidence.forEach((el, i) => {
      if (tId === el.id) {
        event.target.innerText === "Done" ? el.line = !el.line : evidence.splice(i, 1)
      }
    });
  }
  render()
  storage();
});

const winText = document.getElementById("window");
const butt = document.getElementById("adderTasks");
butt.addEventListener("click", () => {
    evidence.push({
        id: Math.floor(Math.random() * 100 + 1) + '',
        value: winText.value,
        line: false
    })
    winText.value = '';
    render();
    storage();
})

function storage() {
    localStorage.setItem("24.02.2023", JSON.stringify(evidence));
}

const currentDate = new Date();
const getDate = document.getElementsByClassName("date")[0];
getDate.innerText = `Date: ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`

