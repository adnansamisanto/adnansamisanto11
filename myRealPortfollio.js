
let btn=document.querySelector('.menu');
let img=document.querySelector('.menu');
let menu=document.querySelector('#menu');

btn.onclick=function(){
    menu.classList.toggle('active');
    img.classList.toggle('active');
}

//next 

let read=document.querySelector('#read');
let text=document.querySelector('#hide');

read.onclick=function(){
    text.classList.toggle('active');
    if(read.innerHTML=="ReadMore"){
        read.innerHTML="ReadLess";
    }else{
        read.innerHTML="ReadMore";
    }
}
// my skill

    let html=document.querySelector('#one');
    let css=document.querySelector('#two');
    let javascript=document.querySelector('#three');

    const skill=()=>{
        html.classList.add('active');
        css.classList.add('active');
        javascript.classList.add('active');
    }
    // skill();

window.addEventListener('scroll',()=>{
    // const scrollevent=document.documentElement.scrollHeight = window.innerHeight;
    // console.log(scrollevent);
    const scrolled= Math.ceil(window.scrollY);
    if(scrolled>2000){
        skill();
    }
})

//advanc option 

let button=document.querySelector('.advanc');
let min_2=document.querySelector('.min_2');

button.onclick=function(){
    min_2.classList.toggle('co');
}

//color change

let color1=document.querySelector('.a');
let color2=document.querySelector('.b');
let color3=document.querySelector('.c');
let color4=document.querySelector('.d');
let color5=document.querySelector('.e');
let color6=document.querySelector('.f');
let color7=document.querySelector('.g');
let color8=document.querySelector('.h');

let home=document.querySelector('.Home');
let age=document.querySelector('.age div');
let text_t=document.querySelector('.title');
let text_ta=document.querySelector('#h1');
let title_2=document.querySelector('.title_3');
let title_3=document.querySelector('.title_4');
let title_4=document.querySelector('.title_5');
let title_5=document.querySelector('#title_6');
let year=document.querySelector('#year');
let devoloper=document.querySelector('#devoloper');
let contuct_me=document.querySelector('#contuct_me');
let wabe1=document.querySelector('#wabe');
let wabe2=document.querySelector('#wabe_2');
let wabe3=document.querySelector('#wabe_3');


color1.onclick=function(){
    home.style.background="red";
    age.style.background="red";
    text_t.style.color="red";
    text_ta.style.color="red";
    title_2.style.color="red";
    title_3.style.color="red";
    title_4.style.color="red";
    title_5.style.color="red";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="red";
    read.style.color="#fff";
    read.style.border="1px solid #fff";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid red";
    wabe1.style.color="red";
    wabe2.style.color="red";
    wabe3.style.color="red";
}

color2.onclick=function(){
    home.style.background="rgb(217, 255, 0)";
    age.style.background="rgb(217, 255, 0)";
    text_t.style.color="rgb(217, 255, 0)";
    text_ta.style.color="rgb(217, 255, 0)";
    title_2.style.color="rgb(217, 255, 0)";
    title_3.style.color="rgb(217, 255, 0)";
    title_4.style.color="rgb(217, 255, 0)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(217, 255, 0)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(217, 255, 0)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(217, 255, 0)";
    wabe1.style.color="rgb(217, 255, 0)";
    wabe2.style.color="rgb(217, 255, 0)";
    wabe3.style.color="rgb(217, 255, 0)";
}

color3.onclick=function(){
    home.style.background="rgb(0, 26, 255)";
    age.style.background="rgb(0, 26, 255)";
    text_t.style.color="rgb(0, 26, 255)";
    text_ta.style.color="rgb(0, 26, 255)";
    title_2.style.color="rgb(0, 26, 255)";
    title_3.style.color="rgb(0, 26, 255)";
    title_4.style.color="rgb(0, 26, 255)";
    title_5.style.color="rgb(0, 26, 255)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(0, 26, 255)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(0, 26, 255)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(0, 26, 255)";
    wabe1.style.color="rgb(0, 26, 255)";
    wabe2.style.color="rgb(0, 26, 255)";
    wabe3.style.color="rgb(0, 26, 255)";
}
color4.onclick=function(){
    home.style.background="rgb(0, 255, 221)";
    age.style.background="rgb(0, 255, 221)";
    text_t.style.color="rgb(0, 255, 221)";
    text_ta.style.color="rgb(0, 255, 221)";
    title_2.style.color="rgb(0, 255, 221)";
    title_3.style.color="rgb(0, 255, 221)";
    title_4.style.color="rgb(0, 255, 221)";
    title_5.style.color="rgb(0, 255, 221)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(0, 255, 221)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(0, 255, 221)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(0, 255, 221)";
    wabe1.style.color="rgb(0, 255, 221)";
    wabe2.style.color="rgb(0, 255, 221)";
    wabe3.style.color="rgb(0, 255, 221)";
}
color5.onclick=function(){
    home.style.background="rgb(0, 255, 34)";
    age.style.background="rgb(0, 255, 34)";
    text_t.style.color="rgb(0, 255, 34)";
    text_ta.style.color="rgb(0, 255, 34)";
    title_2.style.color="rgb(0, 255, 34)";
    title_3.style.color="rgb(0, 255, 34)";
    title_4.style.color="rgb(0, 255, 34)";
    title_5.style.color="rgb(0, 255, 34)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(0, 255, 34)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(0, 255, 34)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(0, 255, 34)";
    wabe1.style.color="rgb(0, 255, 34)";
    wabe2.style.color="rgb(0, 255, 34)";
    wabe3.style.color="rgb(0, 255, 34)";
}
color6.onclick=function(){
    home.style.background="rgb(255, 0, 157)";
    age.style.background="rgb(255, 0, 157)";
    text_t.style.color="rgb(255, 0, 157)";
    text_ta.style.color="rgb(255, 0, 157)";
    title_2.style.color="rgb(255, 0, 157)";
    title_3.style.color="rgb(255, 0, 157)";
    title_4.style.color="rgb(255, 0, 157)";
    title_5.style.color="rgb(255, 0, 157)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(255, 0, 157)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(255, 0, 157)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(255, 0, 157)";
    wabe1.style.color="rgb(255, 0, 157)";
    wabe2.style.color="rgb(255, 0, 157)";
    wabe3.style.color="rgb(255, 0, 157)";
}
color7.onclick=function(){
    home.style.background="#FFD700";
    age.style.background="#FFD700";
    text_t.style.color="#FFD700";
    text_ta.style.color="#FFD700";
    title_2.style.color="#FFD700";
    title_3.style.color="#FFD700";
    title_4.style.color="#FFD700";
    title_5.style.color="#FFD700";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="#FFD700";
    read.style.color="#fff";
    read.style.border="1px solid #FFD700";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid #FFD700";
    wabe1.style.color="#FFD700";
    wabe2.style.color="#FFD700";
    wabe3.style.color="#FFD700";
}
color8.onclick=function(){
    home.style.background="rgb(255, 0, 0)";
    age.style.background="rgb(255, 0, 0)";
    text_t.style.color="rgb(255, 0, 0)";
    text_ta.style.color="rgb(255, 0, 0)";
    title_2.style.color="rgb(255, 0, 0)";
    title_3.style.color="rgb(255, 0, 0)";
    title_4.style.color="rgb(255, 0, 0)";
    title_5.style.color="rgb(255, 0, 0)";
    year.style.color="#fff";
    devoloper.style.color="#fff";
    read.style.background="rgb(255, 0, 0)";
    read.style.color="#fff";
    read.style.border="1px solid rgb(255, 0, 0)";
    // contuct_me.style.background="red";
    contuct_me.style.border="1px solid rgb(255, 0, 0)";
    wabe1.style.color="rgb(255, 0, 0)";
    wabe2.style.color="rgb(255, 0, 0)";
    wabe3.style.color="rgb(255, 0, 0)";
}