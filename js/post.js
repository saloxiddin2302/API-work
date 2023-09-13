let todosRow = document.querySelector(".todos-post");
let limit = 10;

function getTodoCard({ title, body,id }) {
  return `
  <div class="card card-post mb-3">
  <div class="card-body">
   <h5 class="card-title">${title}</h5>
   <p class="card-text">${body}</p>
   <a href="comments.html" onclick="savePostId(${id})" class="btn btn-primary">Go comments</a>
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
  let data = await getData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  todosRow.innerHTML = " ";
  data.forEach((todo) => {
    todosRow.innerHTML += getTodoCard(todo);
  });
}

getTodos();
