const API__URL = "https://jsonplaceholder.typicode.com";
const wrapper = document.querySelector(".sec");
async function fetchUser(api) {
  let reponse = await fetch(`${api}/posts`);
  reponse
    .json()
    .then((res) => createCard(res))
    .catch((arr) => console.log(arr))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchUser(API__URL);

function createCard(data, index) {
  data.forEach((posts) => {
    let card = document.createElement("div");
    card.classList.add("sex");
    card.innerHTML = `
        
        
          <h3>${posts.title}</h3>
              <p>${posts.body}</p>
            

        
          `;
    wrapper.appendChild(card);
  });
}
