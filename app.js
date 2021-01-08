//document
const lis = document.getElementsByClassName("collection-item");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Food to Buy";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log("listItems");
lis = Array.from(lis);

lis.forEach(function (li) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
