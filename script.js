// let button = document.querySelector(".btn");
// // console.log(button)
// button.addEventListener("click",function(){
//     // alert(button.textContent);
//     const div = document.createElement("div");
//     document.body.append(div);
//     div.textContent=button.textContent;
// })
// let body = document.querySelector("body");
// body.style.display="flex";
// body.style.gap="20px"
// body.style.border="1px solid black"
// body.style.width="300px";
// body.style.flexWrap="wrap"
// button.style.backgroundColor="red";
// button.style.color="white"

// ! Task -4 
// const listElement =document.querySelectorAll("ul li");
// for (let i = 0; i < listElement.length; i++) {
//     listElement[i].addEventListener("click",function(){
//         console.log(listElement[i].textContent)
//     })
    
// }
// console.log(ul)
// let color = document.getElementById("color");
// let width = document.getElementById("width");
// let btn = document.getElementById("change-btn");
// let figure = document.querySelector(".figure");

// btn.addEventListener("click", function () {
//   if (color.value == "" || width.value == "") {
//     return;
//   }
//   figure.style.backgroundColor = color.value;
//   figure.style.width = width.value + "px";
// });

//  !  Task -5

// const listElement = document.querySelectorAll("ul li");
// for (let i = 0; i < listElement.length; i++) {
//     listElement[i].addEventListener("click",function(){
//         // console.log(this)
//         // console.log(listElement[i])
//         // this.remove;
//     })
    
// }

// ? Task -6

let inputColor = document.getElementById("color");
let inputWidth= document.getElementById("width");
let button = document.querySelector(".btn");
let figure = document.querySelector(".figure");

button.addEventListener("click",function(){

    if(inputColor.value=="" || inputWidth.value==""){
        alert("inputlari doldurun.")
    }
    // figure.style.backgroundColor="red"
    figure.style.backgroundColor=inputColor.value;
    figure.style.width=inputWidth.value + "px";
})



