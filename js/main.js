//-------------------BinaryGenerator----------------------------

// const getBineryNumber = (num) => {
//   let binary = "";
//   while (num >= 1) {
//     binary += num % 2;
//     num = Math.floor(num / 2);
//     console.log(binary);
//   }

//   return binary.split("").reverse().join("");
// };
// const result = getBineryNumber(14);
// result;

//---------------------------------------------------

// const names = [
//   "Abror",
//   "Jurat",
//   "Kamil",
//   "Muhammad",
//   "Sarvar",
//   "Bekzod",
//   "Andrey",
//   "Ezoza",
// ];
// const scores = [9, 9, 9, 9, 9, 9, 9, 9];

// const select = document.getElementById("select");
// for(let i = 0; i < names.length; i++){
//     select.innerHTML += `<option value = '${i}'>${names[i]}</option>`;

// }

// select.addEventListener("change",(e) =>{
//     document.getElementById("score").innerHTML = scores[e.target.value]
// })
// const button = document.querySelector("button");

// function showConsole() {
//   console.log("click");
// }

// button.onclick = showConsole;
//----------------------------------------------------------------------------

// const cardModel = ["Audi", "MAN", "Tesla"];
// const carType = ["Sedan", "Truck", "Electric Car"];
// const carPrice = [500, 700, 800];

// const button = document.querySelector("button");

// button.addEventListener("click", function (e) {
//   let random1 = Math.floor(Math.random() * 3);
//   let random2 = Math.floor(Math.random() * 3);
//   let random3 = Math.floor(Math.random() * 3);
//   console.log(cardModel[random1]);
//   console.log(carType[random2]);
//   console.log(carPrice[random3]);
// });
//----------------------------------------------------------------------------
// const carModel = ["Audi", "MAN", "Tesla", "BMW", "Matiz", "QoraGentra"];
// const carType = [
//   "Hatchback",
//   "Pickup",
//   "Electric Car",
//   "Coupe",
//   "Micro",
//   "Sedan",
// ];
// const carPrice = [500, 700, 800, 400, 300, 450];
// const button = document.querySelector("button");

// button.addEventListener("click", function (e) {
//   let random = Math.floor(Math.random() * 6);
//   console.log(carModel[random]);
//   console.log(carType[random]);
//   console.log(carPrice[random]);
// });
//----------------------------------------------------------------------------
// array.forEach((e) => {
//   let className = e.type;

//   button.innerHTML += `<div class"card ${className}">
// <h1>${e.title}</h1>
// </div>
// `;
// });
//----------------------------------------------------------------------------

// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");

// const array = [
//   { title: "Robin Hood", type: "hero" },
//   { title: "King Richard", type: "hero" },
//   { title: "Marian", type: "hero" },
//   { title: "Baby John", type: "hero" },
//   { title: "sheriff of nottingham", type: "villain" },
//   { title: "Prince Jon", type: "villain" },
//   { title: "Sir Hiss", type: "villain" },
// ];

// button1.addEventListener("click", function (e) {
//   alert("heroes");
// });

// button2.addEventListener("click", function (e) {
// alert("villains");
// });

//----------------------------------------------------------------------------

//----------------------------------homework----------------------------------
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const All = document.querySelector(".all");

// const data = {
//   movies: [
//     { title: "spider man no way home", genre: "Action" },
//     { title: "it", genre: "horror" },
//     { title: "blade-runner2049", genre: "Action" },
//     { title: "fight club", genre: "thriller" },
//     { title: "rocky", genre: "Sport" },
//     { title: "american psycho", genre: "thriller" },
//     { title: "Monster", genre: "thriller" },
//     { title: "Avengers", genre: "Action" },
//     { title: "", genre: "" },
//     { title: "", genre: "" },
//     { title: "", genre: "" },
//     { title: "", genre: "" },
//     { title: "", genre: "" },
//   ],
// };
// const filteredData = data.movies.filter(
//   (movies) => movies.genre === "thriller"
// );
// data;
// filteredData;

// function abc() {
//   console.log("hdghjhadsh");
// }
// btn1.addEventListener("click", abc {
//   console.log("shdhsdhgy");
// });

//----------------------------------------------------------------------------
addEventListener("click",(e)=> {
  let circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = (event.pageX - 1) + "px";
  circle.style.top = (event.pageY - 1) + "px";
  document.body.appendChild(circle);
});

//.remove-удаление из Дом дерева
// let mouseCursor = document.querySelector(".circle");
// window.addEventListener("mousemove", circle);
// function circle(e) {
//   mouseCursor.style.top = e.pageY + "px";
//   mouseCursor.style.left = e.pageY + "px";
// }

