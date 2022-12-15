const form = document.querySelector(`form`);
const li = document.createElement(`li`) // CREATE li

////// ADDING EVENT LISTENER ////////
form.addEventListener(`submit`, (e) => {
	e.preventDefault() //PREVENTS SUBMIT BTN TO REFRESH 
	buildTask(e.target.new_task.value) // CALLS FN buildTASK AND GIVES IT A (todo) VALUE
	form.reset() // RESETS 'DESCRIPTION' BOX TO DEFAULT 
})

function buildTask(todo) {
	const button = document.createElement(`button`); // CREATE BUTTON
	const editBtn = document.createElement(`button`) // CREATE EDIT BTN --- WIP ---
	button.addEventListener(`click`, deleteBtn) // ADD CLICK EVENT TO BUTTON AND ASSIGN THE FUNCTION THAT TRIGGERS IT
	// editBtn.addEventListener(`click`, editTask) // --- WIP ---
	li.textContent = `${todo}` // ASSIGNS li THE VALUE TYPED BY USER
	button.textContent = `Delete` // ADD TEXT THAT WILL SHOW ON BUTTON
	// editBtn.textContent = `Edit` // ADD TEXT THAT WILL SHOW ON BUTTON --- WIP ----
	li.appendChild(button); // APPEND BUTTON TO li
	// li.appendChild(editBtn) // APPEND EDIT BTN to li --- WIP ---
	// console.log(li) // NOT NEEDED, HELPFUL TO SEE ON CONSOLE
	document.querySelector(`#tasks`).appendChild(li) //APPENDS li WITH VALUE TO ul WITH ID = TASKS
}

function deleteBtn (e) {
	e.target.parentNode.remove()
}

///////// wip //////////


function editTask (e) {
	e.target.parentNode.replace(`${todo}`, `${newTodo}`)
}
function rebuildTask(newTodo) {
	li.textContent(`${newTodo}`)

}
