//toggle을 이용한 슬라이드메뉴 만들기

let classListNum = document.querySelector("#sidemenu").classList; //DOMTokenList ["on", value: "on"]


//1.toggle
// function sidemenuSlide(){
//  classListNum.toggle('on');
// }

//2.button
// function sidemenuAdd() {
//   classListNum.add('on');
// }
//
// function sidemenuRemove() {
//   classListNum.remove('on');
// }

//3.class check if
function sidemenuSlide() {
  let classNum = document.querySelector("#sidemenu").getAttribute('class');
  console.log(classNum) //on

  if (classNum == "on") {
    classListNum.remove('on');
  } else {
     classListNum.add('on');
  }
}
