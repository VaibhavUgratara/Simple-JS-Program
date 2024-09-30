let todo = document.getElementById("todolist")
if (localStorage.length === 0) {
  todo.innerHTML = `<p>No todos found...</p>`
}
else {
  let todolist = document.getElementById("todolist")
  let iHTML = `<table class="table table-bordered table-hover border-dark">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Todo Work</th>
      <th scope="col">Timing</th>
      <th scope="col">Functions</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">`
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let item = localStorage.getItem(key)
    iHTML += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${key}</td>
      <td>${item}</td>
      <td><button class="btn btn-dark btn-sm" onclick=delete_todo(${i})>Delete</button>
        <button class="btn btn-dark btn-sm" onclick= update_todo(${i})>Update</button></td>
    </tr>`
  }
  iHTML += `</tbody></table>`
  todolist.innerHTML = iHTML
}

let add_todo = document.getElementById("add_todo")

let func = document.getElementById("func")
add_todo.addEventListener("click", () => {
  func.innerHTML = func.innerHTML + `<div id="addtodoform">
            <form onSubmit="return todo_insert();" name="insert_todo_form">
                <div class="mb-3">
                <br>
                    <label for="todowork" class="form-label">Enter Todo Work</label>
                    <input type="text" class="form-control" id="todowork" placeholder="e.g. Read a book">
                  </div>
                  <div class="mb-3">
                    <label for="todotiming" class="form-label">Enter Timing</label>
                    <input type="text" class="form-control" id="todotiming" placeholder="e.g. 5:00 P.M. to 6:00 P.M.">
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
            </div>
            <hr>`
  addtodoform.scrollIntoView()
})
const todo_insert = () => {
  let f = document.forms["insert_todo_form"]
  let a = f["todowork"].value
  let b = f["todotiming"].value
  if (a === "" || b === "") {
    func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oops!!</strong> Fill all the fields!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`+ func.innerHTML
    return false
  }
  else {
    let c = localStorage.getItem(a)
    if (c) {
      func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oops!!</strong> Todo already present!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`+ func.innerHTML
      return false
    }
    localStorage.setItem(a, b)
    return true
  }
}

const delete_todo = (id) => {
  localStorage.removeItem(localStorage.key(id))
  location.reload()
}

const update_todo = (id) => {
  let a = localStorage.key(id)
  let b = localStorage.getItem(a)
  func.innerHTML = func.innerHTML + `<div id="updatetodoform">
            <form onSubmit="return todo_update(${id});" name="update_todo_form">
                <div class="mb-3">
                <br>
                    <label for="todowork" class="form-label">Todo</label>
                    <input type="text" class="form-control" id="todowork" placeholder="e.g. Read a book" value="${a}">
                  </div>
                  <div class="mb-3">
                    <label for="todotiming" class="form-label">Timing</label>
                    <input type="text" class="form-control" id="todotiming" placeholder="e.g. 5:00 P.M. to 6:00 P.M." value="${b}">
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
            </div>
            <hr>`
  updatetodoform.scrollIntoView()
}


const todo_update = (id) => {
  let key = localStorage.key(id)
  let f = document.forms["update_todo_form"]
  let a = f["todowork"].value
  let b = f["todotiming"].value
  if (a === "" || b === "") {
    func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Oops!!</strong> Fill all the fields!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`+ func.innerHTML
    return false
  }
  else {
    localStorage.removeItem(key)
    localStorage.setItem(a, b)
    return true
  }
}