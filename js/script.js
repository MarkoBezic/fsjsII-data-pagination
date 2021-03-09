/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Function creates and appends the list of students to be displayed on the page
*/
const perPage = 9;

function showPage(list, page) {
  const startIndex = page * perPage - perPage;
  const endIndex = page * perPage;
  const studentListEl = document.querySelector(".student-list");
  studentListEl.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentListEl.innerHTML += `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${
              list[i].picture.large
            }" alt="Profile Picture">
            <h3>${
              list[i].name.title === "Miss"
                ? `${list[i].name.title}`
                : `${list[i].name.title}.`
            } ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>`;
    }
  }
}

/*
Function creates and appends pagination buttons
*/

function addPagination(list) {
  const numberOfButtons = Math.ceil(list.length / perPage);
  const linkListEl = document.querySelector(".link-list");

  linkListEl.innerHTML = "";

  for (let i = 1; i <= numberOfButtons; i++) {
    linkListEl.innerHTML += `
      <li>
        <button type="button">${i}</button>
      </li>
    `;
  }
  // first button given active class on load
  linkListEl.querySelector("button").classList = "active";

  //listen for clicks on pagination buttons and update current button with active class
  const linkListButtons = linkListEl.querySelectorAll("button");

  for (let j = 0; j < linkListButtons.length; j++)
    linkListButtons[j].addEventListener("click", (e) => {
      const activeButton = linkListEl.querySelector(".active");
      activeButton.classList.remove("active");
      e.target.classList.add("active");
      const pageNumber = e.target.innerText;
      showPage(list, pageNumber);
    });
}

//Load page
showPage(data, 1);
addPagination(data);
