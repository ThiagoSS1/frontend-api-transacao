
const url = "https://backend-api-transacao.herokuapp.com/users"

function listarUsuarios() {
 
    axios.get(url).then((response) =>  {
      response.data.forEach((users) => {
        const tableBody = document.querySelector("tbody")

        const tableRow = document.createElement("tr")
        const rowId = document.createElement("th")
        rowId.innerHTML = users.id
        const rowName = document.createElement("th")
        rowName.innerHTML = users.name
        const rowAge = document.createElement("th")
        rowAge.innerHTML = users.age;
        const rowCpf = document.createElement("th")
        rowCpf.innerHTML = users.cpf;
        const rowEmail = document.createElement("th")
        rowEmail.innerHTML = users.email;

        tableRow.appendChild(rowId)
        tableRow.appendChild(rowName)
        tableRow.appendChild(rowAge)
        tableRow.appendChild(rowCpf)
        tableRow.appendChild(rowEmail)
        tableBody.appendChild(tableRow)      
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  listarUsuarios()
})

