let todosRow = document.querySelector(".todos-row");
let conatiner = document.querySelector(".container");

function getTodoCard({
  name,
  username,
  address: {
    street,
    suite,
    city,
    zipcode,
    geo: { lat, lng },
  },
  phone,
  website,
  company: { name: companyName, catchPhrase, bs },
}) {
  return `
  <div class='user-card d-flex flex-column gap-3'>
    <div class='user-name d-flex justify-content-between'>
        <h2>${name}</h2>
        <h2>${username}</h2>
    </div>

    <div class='user-address d-grid gap-2'>
        <div class='user_address-street d-flex justify-content-between'>
            <h4>${street}</h4>
            <p>${suite}</p>
        </div>
        <div class='user_address-city d-flex align-items-center justify-content-between'>
            <h5>${city}</h5>
            <h6>${zipcode}</h6>
        </div>
        <div class='user_address-geo d-flex justify-content-between'>
            <p>${lat}</p>
            <p>${lng}</p>
        </div>
    </div>

    <div class="d-flex flex-column gap-1">
        <a href='tel: ${phone}'>${phone}</a>
        <a href='${website}'>${website}</a>
    </div>

        <div class="user-company d-grid gap-2">
            <h2>${companyName}</h2>
            <h3>${catchPhrase}</h3>
            <p>${bs}</p>
        </div>

  <div class="user-btn">
      <a class='user_btn-todos'   href="todos.html">User todos</a>
      <a class='user_btn-post'  href="post.html">User post</a>
  </div>
</div>


  `;
}

function saveId(id) {
  localStorage.setItem("usersId", id);
}

async function getTodos() {
  todosRow.innerHTML = `
    <section>
    <div class="loader">
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
        <span style="--i: 8"></span>
        <span style="--i: 9"></span>
        <span style="--i: 10"></span>
        <span style="--i: 11"></span>
        <span style="--i: 12"></span>
        <span style="--i: 13"></span>
        <span style="--i: 14"></span>
        <span style="--i: 15"></span>
        <span style="--i: 16"></span>
        <span style="--i: 17"></span>  
        <span style="--i: 18"></span>  
        <span style="--i: 19"></span>
        <span style="--i: 20"></span>

      </div>
</section>
    
    `;

  let data = await getData("https://jsonplaceholder.typicode.com/users");
  todosRow.innerHTML = " ";
  data.forEach((todo) => {
    todosRow.innerHTML += getTodoCard(todo);
  });
}

getTodos();

const loading = document.querySelector(".loader");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});
