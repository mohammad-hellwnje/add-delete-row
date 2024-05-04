let nameInput = document.querySelector('#firstname');
let lastInput = document.querySelector('#lastname');
let  ageInput = document.querySelector('#age');
const addRow = (fname , lname , age , index) => {
  const tableBody = document.querySelector(".table tbody");
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
          <tr>
              <th scope="row">${index}</th>
              <td>${fname}</td>
              <td>${lname}</td>
              <td>${age}</td>
              <td>      
              <button onclick="deleteRow(event)" class="btn btn-danger">Delete row</button>
              </td>
          </tr>
  `
  );
}
let index = 1; 
const newRowButton = document.querySelector(".add-new-button")
newRowButton.addEventListener("click",()=>{
  addRow(nameInput.value,lastInput.value,ageInput.value,index);

  index +=1;
  nameInput.value = '';
  lastInput.value = '';
  ageInput.value = '';
})

const deleteRow = (event) => {
  event.target.parentElement.parentElement.remove();
}

















