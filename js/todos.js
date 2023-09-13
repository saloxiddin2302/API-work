let todosRow = document.querySelector(".todus-row");

function getTodoCard({ title, completed }) {
  return `
  <div class="card card-post mb-3">
  <div class="card-body d-flex justify-content-between align-items-center">
   <h5 class="card-title m-0">${title}</h5>

   <p class="btn btn-primary m-0 
   ${completed ? "bg-success border-success" : "bg-danger border-danger"}">${
    completed ? "Completed" : "Not completed"
  }</p>
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
  let data = await getData("https://jsonplaceholder.typicode.com/todos");
  todosRow.innerHTML = " ";
  data.forEach((todo) => {
    todosRow.innerHTML += getTodoCard(todo);
  });
}

getTodos();
