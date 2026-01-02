
console.log("Frontend ishga tushdi");

function itemTemplate(item) {
    return `
      <li class="list-group-item d-flex justify-content-between">${item.reja}
    <div>
  <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1" >O'zgartirish</button>
  <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
    </div>

</li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan urining!");
    });
    
});

document.addEventListener("click", function (e) {
    //delete oper
    console.log('worked')
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq ochirmoqchimisiz?")) {
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Qaytadan urinib ko'ring")
            });
        }
    }
});





