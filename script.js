const formInsert = document.getElementById("form-insert-student");
formInsert.addEventListener("submit", (event)=>{
event.preventDefault(); // отменяем отправку формы
let formData = new FormData(formInsert); //собираем данные с формы


let xhr = new XMLHttpRequest();// создаем объект отправки запроса на сервер
xhr.open("POST", "insertStudent.php");
xhr.send(formData);

xhr.onload = () =>{console.log(xhr.response)};
});