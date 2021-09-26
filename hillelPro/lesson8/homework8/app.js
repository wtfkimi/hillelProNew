
const inputEl = document.querySelector('.input-task');
const btnSubmitEl = document.querySelector('.btn-submit');
const checkListEl = document.querySelector('.container-ul');
const btnDeleteEl = document.querySelector('.btn-delete');

btnSubmitEl.addEventListener('click', event => {
    const task = document.createElement('li');
    task.classList.add("task-task");
    task.textContent = inputEl.value;
    checkListEl.append(task);
    inputEl.value = "";
})

btnDeleteEl.addEventListener('click', ev=> {
    const tasks = Array.from(document.querySelectorAll('.task-task'));
    if (tasks.length > 0){
        tasks[tasks.length - 1].remove();
    }
})


inputEl.addEventListener('focus', ev => {
    ev.target.style.background = 'rgba(229, 219, 219)';
})

inputEl.addEventListener('blur', ev => {
    ev.target.style.background = '';
})






