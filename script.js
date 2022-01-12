const cat_btn=document.getElementById('cat_btn');
const cat_result=document.getElementById('cat_result');
cat_btn.addEventListener('click',getRandomCat);


function getRandomCat(){
 fetch('https://meowfacts.herokuapp.com/').
 then((res)=>res.json())
 .then((data)=>{
      cat_result.innerHTML=`<h3>${data.data}</h3>`;
  }).catch((err)=>{
      console.log(err);
  });
}

const advice_btn=document.getElementById('advice_btn');
const advice_result=document.getElementById('advice_result');
advice_btn.addEventListener('click',getAdvice);
function getAdvice(){
    fetch('https://api.quotable.io/random').
    then((res)=>res.json())
    .then((data)=>{
        console.log(data);
         advice_result.innerHTML=`<h3>${data.content}</h3>`;
     }).catch((err)=>{
         console.log(err);
     });  
}

const food_btn=document.getElementById('food_btn');
const food_result=document.getElementById('food_result');
food_btn.addEventListener('click',getFood);
function getFood(){
    fetch('https://foodish-api.herokuapp.com/api').
    then((res)=>res.json())
    .then((data)=>{
        console.log(data);
         food_result.innerHTML=`<img src="${data.image}" width="500" height="600">`;
     }).catch((err)=>{
         console.log(err);
     });  
}