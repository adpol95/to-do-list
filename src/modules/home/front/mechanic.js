const getList = document.getElementsByClassName("to-do-list__unordered-list")[0];

function render() {
  fetch('/task')
    .then((res) => res.json())
    .then((evidence) => {
      getList.innerText = "";
      evidence.forEach(el => {
        const firstStep = document.createElement("li");
        firstStep.setAttribute("key", el._id);
        const p = document.createElement('p');
        const pText = document.createTextNode(el.value);
        p.setAttribute('class', 'to-do-list__items-text')
        p.appendChild(pText);
        firstStep.appendChild(p);
        const thirdStep = document.createElement("button");
        const fourthStep = document.createTextNode("Done");
        thirdStep.setAttribute("class", "to-do-list__btn to-do-list__btn--done");
        thirdStep.appendChild(fourthStep);
        firstStep.appendChild(thirdStep);
        thirdStep.setAttribute("id", el._id);
        const fifthStep = document.createElement("button");
        fifthStep.setAttribute("class", "to-do-list__btn to-do-list__btn--del");
        const sixthStep = document.createTextNode("X");
        fifthStep.appendChild(sixthStep);
        firstStep.appendChild(fifthStep);
        fifthStep.setAttribute("id", el._id)
        firstStep.setAttribute("class", el.line ? "to-do-list__item--active" : 'to-do-list__item--disable');
        getList.appendChild(firstStep);
      })
    })
}

render();

getList.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      const patOrDel = event.target.innerText === "Done";
      const tId = event.target.id;
      fetch('/task')
        .then((res) => res.json())
        .then((evidence) => {
          const curTask = patOrDel ? evidence.find(el => el._id === tId) : '';
          fetch('task/' + tId, {
            method: patOrDel ? "PATCH" : "DELETE", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(patOrDel ? {line: !curTask.line} : undefined), // body data type must match "Content-Type" header
          })
            .then(() => {
              console.log(patOrDel ? 'Task updated' : 'Task deleted')
              render()
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }
  }
);

const winText = document.getElementsByClassName("to-do-list__input-area")[0];
const butt = document.getElementsByClassName("to-do-list__input-btn")[0];
butt.addEventListener("click", () => {
  fetch('/task', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({value: winText.value, line: false}), // body data type must match "Content-Type" header
  })
    .then(() => {
      console.log('Task added')
      render()
    })
    .catch((err) => console.log(err))

  winText.value = '';
})

const currentDate = new Date();
const getDate = document.getElementsByClassName("to-do-list__date")[0];
getDate.innerText = `Date: ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`

// const evidence = localStorage.key(0) ? JSON.parse(localStorage.getItem("24.02.2023")) : [
//   {
//     id: Math.floor(Math.random() * 100 + 1) + '',
//     value: "Repeat JS",
//     line: false
//   },
//   {
//     id: Math.floor(Math.random() * 100 + 1) + '',
//     value: "Repeat CSS & HTML",
//     line: false
//   },
//   {
//     id: Math.floor(Math.random() * 100 + 1) + '',
//     value: "Repeat React",
//     line: false
//   },
// ];
//
// const getList = document.getElementsByClassName("to-do-list__unordered-list")[0];
//
// function render() {
//   getList.innerText = "";
//   evidence.forEach(el => {
//         const firstStep = document.createElement("li");
//         firstStep.setAttribute("key", el.id);
//         const p = document.createElement('p');
//         const pText = document.createTextNode(el.value);
//         p.setAttribute('class', 'to-do-list__items-text')
//         p.appendChild(pText);
//         firstStep.appendChild(p);
//         const thirdStep = document.createElement("button");
//         const fourthStep = document.createTextNode("Done");
//         thirdStep.setAttribute("class", "to-do-list__btn to-do-list__btn--done");
//         thirdStep.appendChild(fourthStep);
//         firstStep.appendChild(thirdStep);
//         thirdStep.setAttribute("id", el.id);
//         const fifthStep = document.createElement("button");
//         fifthStep.setAttribute("class", "to-do-list__btn to-do-list__btn--del");
//         const sixthStep = document.createTextNode("X");
//         fifthStep.appendChild(sixthStep);
//         firstStep.appendChild(fifthStep);
//         fifthStep.setAttribute("id", el.id)
//         firstStep.setAttribute("class", el.line ? "to-do-list__item--active" : 'to-do-list__item--disable');
//         getList.appendChild(firstStep);
//       })
// }
//
// render();
// storage();
//
// getList.addEventListener("click", (event) => {
//   if (event.target.nodeName === "BUTTON") {
//     const tId = event.target.id;
//     evidence.forEach((el, i) => {
//       if (tId === el.id) {
//         event.target.innerText === "Done" ? el.line = !el.line : evidence.splice(i, 1)
//       }
//     });
//   }
//   render()
//   storage();
// });
//
// const winText = document.getElementsByClassName("to-do-list__input-area")[0];
// const butt = document.getElementsByClassName("to-do-list__btn--input")[0];
// butt.addEventListener("click", () => {
//   evidence.push({
//     id: Math.floor(Math.random() * 100 + 1) + '',
//     value: winText.value,
//     line: false
//   })
//   winText.value = '';
//   render();
//   storage();
// })
//
// function storage() {
//   localStorage.setItem("24.02.2023", JSON.stringify(evidence));
// }
//
// const currentDate = new Date();
// const getDate = document.getElementsByClassName("to-do-list__date")[0];
// getDate.innerText = `Date: ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
