fetch('https://todolist-adpol95.b4a.run/task')
  .then((res) => res.json())
  .then((evidence) => {
    const getList = document.getElementById("mainList");

    function render() {
      getList.innerText = "";
      evidence.forEach(el => {
        const firstStep = document.createElement("li");
        firstStep.setAttribute("key", el._id);
        const secondStep = document.createTextNode(el.value);
        firstStep.appendChild(secondStep);
        const thirdStep = document.createElement("button");
        const fourthStep = document.createTextNode("Done");
        thirdStep.setAttribute("class", "doneBut");
        thirdStep.appendChild(fourthStep);
        firstStep.appendChild(thirdStep);
        thirdStep.setAttribute("id", el._id);
        const fifthStep = document.createElement("button");
        fifthStep.setAttribute("class", "delBut");
        const sixthStep = document.createTextNode("X");
        fifthStep.appendChild(sixthStep);
        firstStep.appendChild(fifthStep);
        fifthStep.setAttribute("id", el._id)
        firstStep.setAttribute("class", el.line ? "taskDone" : '');
        getList.appendChild(firstStep);
      })
    }

    render();
    storage();

    getList.addEventListener("click", (event) => {
      if (event.target.nodeName === "BUTTON" &&  event.target.innerText === "Done") {
        const tId = event.target.id;
        const curTask = evidence.find(el => el._id === tId);
        fetch('https://todolist-adpol95.b4a.run/task/' + tId, {
          method: "PATCH", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({line: !curTask.line}), // body data type must match "Content-Type" header
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
        // evidence.forEach((el, i) => {
        //   if (tId === el.id) {
        //     event.target.innerText === "Done" ? el.line = !el.line : evidence.splice(i, 1)
        //   }
        // });
      }
      render()
      storage();
    });

    const winText = document.getElementById("window");
    const butt = document.getElementById("adderTasks");
    butt.addEventListener("click", () => {
      evidence.push({
        _id: Math.floor(Math.random() * 100 + 1) + '',
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
  })
  .catch((err) => console.log(err));

