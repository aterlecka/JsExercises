const aSmallList =  document.getElementById("aSmallList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description2");
const p = document.querySelector("p.description1");
const button = document.querySelector("button.description3");
const allDiv = document.getElementById("all");
const addInput = document.querySelector("input.addInput");
const addItemButton = document.querySelector("button.addItemButton");
const removeItemButton = document.querySelector("button.removeItemButton");





aSmallList.addEventListener("click", ()=>  {
    if ( listDiv.style.display === "none"){
        aSmallList.textContent = "Hide List";
        listDiv.style.display = "block";
    } else{
        aSmallList.textContent = "Show List";
        listDiv.style.display = "none";
    }
} );



button.addEventListener("click", () =>{
    p.innerHTML = input.value + " Suprise! ";
    input.value="";
});

allDiv.addEventListener("mouseover", () => {
    allDiv.style.color="red";
});
allDiv.addEventListener("mouseout", () => {
    allDiv.style.color="black";
});


addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent=addInput.value;
    ul.appendChild(li);
    addInput.value="";
});


removeItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
   let li = document.querySelector("li:last-child");
   ul.removeChild(li);

});
