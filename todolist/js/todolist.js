const input = document.querySelector("#task");
const button = document.querySelector("#liveToastBtn");
const list = document.querySelector("#list");
const listli = document.querySelectorAll("#list li");
const span = document.querySelectorAll(".carpi");
let defaultToDo = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];
localStorage.setItem("todo", defaultToDo);
let todos = localStorage.getItem("todo").split(",");

todos.map((todo) => {
  let li = document.createElement("li");
  li.innerHTML = todo + `<span class="carpi">&#10006;</span>`;
  list.append(li);
});

let todo = [];
function newElement() {
  if (input.value !== "" && input.value !== " ") {
    defaultToDo.push(input.value);
    localStorage.setItem("todo", defaultToDo);
    let li = document.createElement("li");
    li.innerHTML = input.value + `<span class="carpi">&#10006;</span>`;
    list.append(li);
    $("#liveToast").toast("show");
  } else {
    $("#liveToastError").toast("show");
  }
}

list.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
});

span.forEach((key, value) => {
  key.addEventListener("click", () => {
    key.parentElement.remove();
  });
});
