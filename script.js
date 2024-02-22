const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const ul = document.querySelector('ul')
  ul.innerText=''
  for(let i=0; i<tasks.length; i++){
    const taskCreated = createTaskItem(tasks[i])
    ul.append(taskCreated)
  }
}

function createTaskItem(task){
    const li = document.createElement('li')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const p = document.createElement('p')
    const button = document.createElement('button')

    p.innerText = task.title

    li.appendChild(div)
    div.appendChild(span)
    div.appendChild(p)
    li.appendChild(button)

    li.classList.add("task__item")
    div.classList.add("task-info__container")
    span.classList.add("task-type")

      if(task.type.toLowerCase() == "importante"){
      span.classList.add("span-important")
    } else if(task.type.toLowerCase() == "urgente"){
      span.classList.add("span-urgent")
    } else{
      span.classList.add("span-normal")
  }
    button.classList.add('task__button--remove-task')

    button.addEventListener('click',function(){
        tasks.splice(tasks.indexOf(task),1)
        renderElements(tasks)
      })
      return li
      
  }

  const buttonAdd = document.getElementsByClassName('form__button--add-task')
  buttonAdd[0].addEventListener('click', function(e){
    e.preventDefault()
    const input = document.getElementById("input_title")
    const select = document.getElementsByClassName("form__input--priority input__box")
      const option = select[0].value
      tasks.type = option
      const adicionar = input.value
      tasks.title = adicionar
      const obj = {
        title:adicionar,
        type:option,
      }
      tasks.unshift(obj)
      
      renderElements(tasks)
  })
  
      renderElements(tasks)