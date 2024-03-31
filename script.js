const input = document.querySelector("#category-input");

const buttonArr = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

document.addEventListener("DOMContentLoaded", function () {
  const buttonWrapper = document.querySelector(".all-btn");

  buttonArr.forEach((btnEle) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-dark category-btn";
    btn.innerText = btnEle;
    buttonWrapper.appendChild(btn);
  });

  const btns = document.querySelectorAll(".category-btn");
  btns.forEach((catBtn) => {
    catBtn.addEventListener("click", function (e) {
      input.value = e.target.innerText;
    });
  });
});

document.getElementById("joke-form").addEventListener("submit", getJokes);

function getJokes(e) {
  e.preventDefault();
  const getInput = input.value;

  if (getInput === "") {
    alert("Please select a category");
  } else {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${getInput}`;
    loadJoke(apiUrl);
  }
}

function loadJoke(apiUrl) {
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
   
      const jokeList = document.querySelector(".jokes");

      const listItem = document.createElement("li");
      listItem.className = "list";
      listItem.innerHTML = `
          <span>${data.value}</span>
          <a href="#" class="closeBtn"><i class="fas fa-times"></i></a>
        `;

      jokeList.appendChild(listItem);

      const closeBtn = listItem.querySelector(".closeBtn");
            closeBtn.addEventListener("click", function (e) {
              e.preventDefault();
              listItem.remove();
            });
    
          input.value = "";
    })
    .catch((err) => {
      console.log(err);
    });

  
}
