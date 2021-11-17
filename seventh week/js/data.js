let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

// important data
var tableBody = document.getElementById("tableBody");
var targetUser = null;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modalHeader = document.querySelector('.modal-header h2')  
var modalBody = document.querySelector('.modal-body')  
var modalFooter = document.querySelector('.modal-footer')  

// merge
let result = [];
function merge() {
  for (const person of personData) {
    let additionalData = additionalPersonData.find(
      (el) => el.uid === person.uid
    );
    result.push({ ...person, ...additionalData });
  }
}
merge();
