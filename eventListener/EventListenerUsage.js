const aSmallList = document.getElementById("aSmallList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description2");
const p = document.querySelector("p.description1");
const button = document.querySelector("button.description3");
const allDiv = document.getElementById("all");
const addInput = document.querySelector("input.addInput");
const addItemButton = document.querySelector("button.addItemButton");
const listUl = listDiv.querySelector("ul");
const lis = listUl.children;

function anotherWay(li) {
    let up = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);

    let down = document.createElement("button");
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement("button");
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);

}

for (let i = 0; i < lis.length; i += 1) {
    anotherWay(lis[i]);
}

listUl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.className === "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
    }
    if (event.target.className === "up") {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if (prevLi) {
            ul.insertBefore(li, prevLi);
        }
    }
    if (event.target.className === "down") {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) {
            ul.insertBefore(nextLi, li);
        }
    }
});

aSmallList.addEventListener("click", () => {
    if (listDiv.style.display === "none") {
        aSmallList.textContent = "Hide List";
        listDiv.style.display = "block";
    } else {
        aSmallList.textContent = "Show List";
        listDiv.style.display = "none";
    }
});

button.addEventListener("click", () => {
    p.innerHTML = input.value + " Suprise! ";
    input.value = "";
});

allDiv.addEventListener("mouseover", () => {
    allDiv.style.color = "red";
});
allDiv.addEventListener("mouseout", () => {
    allDiv.style.color = "black";
});

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = addInput.value;
    anotherWay(li);
    ul.appendChild(li);
    addInput.value = "";
});




