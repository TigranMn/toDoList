const input = document.querySelector('#plansInput')
const toDo = document.querySelector('.todo')
console.log(input)
input.addEventListener('keydown',creatingNewItem)

function creatingNewItem(key) {
   if(key.key === 'Enter' && input.value.replaceAll(' ','')) {
      let container = document.createElement('div')
      container.classList.add('itemContainer')
      let btnContainer = document.createElement('div')
      btnContainer.append(creatingEditBtn(),creatingDeleteBtn())
      btnContainer.classList.add('flex')
      container.append(creatingListItem(),btnContainer)
      input.value = ''
      toDo.appendChild(container)

   }
}

 function creatingListItem() {
   let listItem = document.createElement('input')
   listItem.classList.add('listItem')
   listItem.setAttribute('disabled','disabled')
   listItem.value = input.value
   return listItem
 }
 function creatingEditBtn() {
   let editBtn = document.createElement('button')

   editBtn.innerText = 'Edit'
   editBtn.classList.add('edit')
   editBtn.addEventListener('click', () => {
      let listItem = editBtn.parentElement.parentElement.firstChild
      if(listItem.hasAttribute('disabled')) {
         editBtn.innerText = 'Complete'
         editBtn.classList.add('complete')
      } else {
         editBtn.innerText = 'Edit'
         editBtn.classList.remove('complete')
      }
      listItem.toggleAttribute('disabled')
      listItem.classList.toggle('scale')
      listItem.focus()
   })
   return editBtn
 }
 function creatingDeleteBtn() {
   let deleteBtn = document.createElement('button')
   deleteBtn.innerText = 'Delete'
   deleteBtn.classList.add('delete')
   deleteBtn.addEventListener('click', () => {
      deleteBtn.parentElement.parentElement.remove()
   })
   return deleteBtn
 }