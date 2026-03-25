// 1
function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();
    let diff = today - dob;
    let age = new Date(diff);
    document.getElementById("ageResult").innerText =
        `${age.getUTCFullYear() - 1970} Years ${age.getUTCMonth()} Months ${age.getUTCDate() - 1} Days`;
}

// 2
function addToList() {
    let li = document.createElement("li");
    li.textContent = listInput.value;
    orderedList.appendChild(li);
    listInput.value = "";
}

// 3
function changeFont(font) {
    fontText.style.fontFamily = font;
}

// 4
function factorial() {
    let n = factInput.value, f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    factResult.innerText = f;
}

// 5
function highlight() {
    document.querySelectorAll(".para").forEach(p => {
        p.classList.toggle("highlight", p.innerText.includes(keyword.value));
    });
}

// 6
function generateTable() {
    let r = rows.value, c = cols.value, html = "<table border='1'>";
    for (let i = 0; i < r; i++) {
        html += "<tr>";
        for (let j = 0; j < c; j++) html += "<td>Cell</td>";
        html += "</tr>";
    }
    tableContainer.innerHTML = html + "</table>";
}

// 7
function previewImage(e) {
    preview.src = URL.createObjectURL(e.target.files[0]);
}

// 8
function addTask() {
    let li = document.createElement("li");
    li.innerHTML = `${task.value} <button onclick="this.parentElement.remove()"></button>`;
    li.onclick = () => li.style.textDecoration = "line-through";
    todoList.appendChild(li);
    task.value = "";
}

// 9
function login() {
    loginMsg.innerText = (user.value === "admin" && pass.value === "123")
        ? "Login Successful"
        : "Invalid Credentials";
}

// 10
function quiz(ans) {
    quizResult.innerText = ans === 4 ? "Correct!" : "Wrong!";
}

// 11
function countWords(text) {
    wordCount.innerText = "Words: " + text.trim().split(/\s+/).length;
}

// 12
function showDate() {
    alert(new Date());
}

// 13
function toggleButton(val) {
    toggleBtn.disabled = val.length === 0;
}

// 14
function toggleText() {
    togglePara.style.display =
        togglePara.style.display === "none" ? "block" : "none";
}

// 15
function evenOdd() {
    eoResult.innerText = numCheck.value % 2 === 0 ? "Even" : "Odd";
}

// 16
function toUpper() {
    caseResult.innerText = caseInput.value.toUpperCase();
}
function toLower() {
    caseResult.innerText = caseInput.value.toLowerCase();
}

// 17
let counter = 0;
function changeCount(v) {
    counter += v;
    count.innerText = counter;
}

// 18
function countVowels(text) {
    vowelCount.innerText = "Vowels: " + (text.match(/[aeiou]/gi) || []).length;
}

// 19
function animateName() {
    let name = nameInput.value, i = 0;
    nameAnim.innerText = "";
    let interval = setInterval(() => {
        nameAnim.innerText += name[i++];
        if (i === name.length) clearInterval(interval);
    }, 200);
}

// 20
function reverseString(text) {
    reverseResult.innerText = text.split("").reverse().join("");
}
