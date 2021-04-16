//toggle을 이용한 슬라이드메뉴 만들기

let classListNum = document.querySelector("#sidemenu").classList; //DOMTokenList ["on", value: "on"]
console.log(classListNum);

function sidemenuSlide(){
 classListNum.toggle('on');
}
