const wrapper = document.querySelector(".wrapper");

const API_URL = "https://jsonplaceholder.typicode.com/users";
async function fetchUsers(api) {
  let respons = await fetch(`${api}`);
  respons
    .json()
    .then((res) => creatCard(res))
    .catch((err) => console.log(err));
}
fetchUsers(API_URL);


function creatCard(data) {
  data.slice(0, 10).forEach((post) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
    <div class="card_img"></div>
    <h3> ${post.name}</h3>
    <p> ${post.username}</p>
    <p> ${post.email}</p>
    <p> ${post.phone}</p>
    <span>${post.address.street}</span>
    <span>${post.address.city}</span>
    <span>${post.website}</span>
    <span>${post.company.name}</span>
    <span>${post.company.catchPhrase}</span>
    `;
    wrapper.appendChild(card);
  });
}
