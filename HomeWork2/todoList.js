let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulDOM = document.getElementsByTagName("li");


let veriler = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
veriler.push(taskDOM.value);



for (let i = 0; i < ulDOM.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ulDOM[i].append(closeButton);
    ulDOM[i].onclick = check;
}


btnDOM.addEventListener('click', elemanEkle)

function check() {
    this.classList.toggle("checked");
}

let todoArray = [];
function elemanEkle() {

    if (taskDOM.value == "") {
        $(".error").toast("show");
        veriler.push(taskDOM.value);
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = taskDOM.value;
        taskDOM.value = "";

        todoArray.push(liDOM.innerHTML);
        localStorage.setItem('items', JSON.stringify(todoArray))

        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
       
    }
}

function removeButton() {
    this.parentElement.remove();
}

