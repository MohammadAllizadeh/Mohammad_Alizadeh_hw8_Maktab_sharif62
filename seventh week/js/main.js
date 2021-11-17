$(document).ready(function () {
  
$("#myBtn").click(function (e) { 
  modal.style.display = "block";
  modalHeader.innerHTML = "Create";
  modalBody.innerHTML = `
  <input type="text" class="createFormInputs uid"  placeholder="uid">
  <input type="text" class="createFormInputs firstName"  placeholder="firstName">
  <input type="text" class="createFormInputs lastName"  placeholder="lastName">
  <input type="text" class="createFormInputs position"  placeholder="position">
    <input type="text" class="createFormInputs city"  placeholder="city">`;
  modalFooter.innerHTML = `<button class="btn createBtn" onclick="create()">Create</button>`;
});

function create() {
  let createFormInputs = document.querySelectorAll(".createFormInputs");
  let newObj = {};
  for (let index = 0; index < createFormInputs.length; index++) {
    const input = createFormInputs[index];
    if (
      index === 0 &&
      result.findIndex((el) => el.uid === input.value - '') !== -1
    ) {
      return alert("Invalid input");
    }
    if (input.value.trim() === "") return alert("Invalid input");
    newObj[input.classList[1]] = input.value;
  }
  result.push(newObj);
  fillingTable();
  modal.style.display = "none";
}

function fillingTable(sortArg = undefined) {
  if (sortArg) {
    result.sort((a, b) => {
      if (sortArg === "uid") return b.uid - a.uid;
      element1 = a[sortArg].toLowerCase();
      element2 = b[sortArg].toLowerCase();
      return element1 < element2 ? 1 : -1;
    });
  }
  tableBody.innerHTML = "";
  for (const person of result) {
    tableBody.innerHTML += `<tr id="${person.uid}" onclick="showReadForm(this)">
      <td>${person.uid}</td>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.position}</td>
      <td>${person.city}</td>
    </tr>`;
  }
}
fillingTable();

function showReadForm(element) {
  modal.style.display = "block";
  targetUser = result.find((el) => el.uid - "" === element.id - "");
  modalHeader.innerHTML = "Read";
  modalBody.innerHTML = `<p>uid: ${targetUser.uid}</p>
  <p>firstName: ${targetUser.firstName}</p>
  <p>lastName: ${targetUser.lastName}</p>
  <p>position: ${targetUser.position}</p>
  <p>city: ${targetUser.city}</p>`;
  modalFooter.innerHTML = `<button class="btn updateBtn" onclick="showUpdateForm()">Update</button>
  <button class="btn removeBtn" onclick="remove()">Delete</button>`;
}

function remove() {
  result = result.filter((el) => el.uid !== targetUser.uid);
  fillingTable();
  modal.style.display = "none";
}

function showUpdateForm() {
  modalHeader.innerHTML = "Update";
  modalBody.innerHTML = `
    <input type="text" class="updateFormInputs uid" value="${targetUser.uid}" disabled>
    <input type="text" class="updateFormInputs firstName" value="${targetUser.firstName}">
    <input type="text" class="updateFormInputs lastName" value="${targetUser.lastName}">
    <input type="text" class="updateFormInputs position" value="${targetUser.position}">
    <input type="text" class="updateFormInputs city" value="${targetUser.city}">`;
  modalFooter.innerHTML = `<button class="btn saveBtn" onclick="update()">Save</button>`;
}

function update() {
  let updateFormInputs = document.querySelectorAll(".updateFormInputs");
  for (let index = 1; index < updateFormInputs.length; index++) {
    const input = updateFormInputs[index];
    if (input.value.trim() === "") return alert("Invalid input");
    targetUser[input.classList[1]] = input.value;
  }
  fillingTable();
  modal.style.display = "none";
}

function showCreateForm() {}
});
