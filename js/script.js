// Выбранная картинка из страницы index.html
const url = localStorage.getItem('lastUsedImage')
const image = document.querySelector('.changable-image')

if (url && image) {
    image.src = url
}

// {url:'',audio:new Audio()}
const audioList = []

function stopAllAudio(currentAudioItem = undefined) {
  audioList.forEach(audioItem => {
    if (currentAudioItem && currentAudioItem === audioItem) return
    audioItem.audio.pause()
  })
}

const onClick = document.querySelectorAll('[data-audio]')
const onHover = document.querySelectorAll('[data-audio-on-hover]')

function audioHandler(elem, key) {
  const url = elem.getAttribute(key)
  if (!url) return

  const fullUrl = `./audio/${url}`
  const foundInstance = audioList.find(audioItem => {
    return audioItem.url === fullUrl
  })

  stopAllAudio(foundInstance)

  if (foundInstance) {
    if (foundInstance.audio.paused) {
      foundInstance.audio.play()
    } else {
      foundInstance.audio.pause()
    }
  } else {
    const instance = new Audio(fullUrl)
    audioList.push({url: fullUrl, audio: instance})
    instance.play()
  }
}

onClick.forEach(elem => {
  elem.addEventListener('click', () => {
    audioHandler(elem, 'data-audio')
  })
})

onHover.forEach(elem => {
  elem.addEventListener('mouseenter', () => {
    audioHandler(elem, 'data-audio-on-hover')
  })
})

if (document.body.classList.contains('runAudioGid')) {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="modal">
      <div class="modal__window">
          <h1>Здравствуйте, вас приветствует музей покорения космоса</h1>
          <p>Для использования аудиогида, используйте <span style="font-size: 2rem">🛰️</span>️</p>
          <p>Для использования полноэкранного режима, используйте F11</p>
          <button class="btn btn-close-modal" style="display: inline-block;margin-bottom: 10px">Счастливого путешествия</button>
          <div>
            <a class="modal__link" href="https://disk.yandex.ru/d/fyoWGY4ZG-PUbA">Ссылка на видео</a>
          </div>
      </div>
  </div>
  `)

  const modal = document.querySelector('.modal')
  const btn = document.querySelector('.btn-close-modal')
  btn.addEventListener('click', () => {
    modal.remove()
  })
}

//====================================================
document.body.addEventListener("keydown", (event) => {
    if (event.ctrlKey) { event.preventDefault() }
});

var boxshadow = "";
    for(var i = 0; i <= 2000; i++){
        px = Math.random() < 0.5 ? "-" : "";
        py = Math.random() < 0.5 ? "-" : "";
        x = Math.floor((Math.random() * window.innerWidth) + 1);
        y = Math.floor((Math.random() * window.innerHeight) + 1);
        s = Math.floor((Math.random() * 2) - 1);
        boxshadow += px+x+"px "+py+y+"px 0 "+s+"px #fff,";
    }
    
    boxshadow = boxshadow.slice(0, -1);
    
    stars.style.boxShadow = boxshadow;

//===============================



const container=document.getElementById('container')
const box1=document.querySelector('.box1')
const text1=document.querySelector('.text1')
const box=document.querySelector('.box')
const voiz=document.getElementById('prh')
const Victorina2=[
    {
    infBox1:`   <img src="image/belarus.png" >
        
    <p class="kor">республика Беларусь</p>`,
    infText1:`  
    <p>
    Как ты думаешь, является ли Республика Беларусь космической Державой?
</p>
<div id="yes">
Да
</div>
<div id="no">
Нет
</div>
<div id="vibor" >

</div>`,
    infBox:`  <   <p class="strText">Музей покорения космоса</p>
   
    <img src="image/belarus.png" >`,
    },
    {
        infBox1:` <img src="image/korolev.jpg" alt="">
        <p class="kor">Королёв Сергей Павлович</p>`,
        infText1:`   
    <img class="earth" src="image/Земля.png">
    <img class="sputnik" src="image/Спутник.png">`,
        infBox:`<p class="strText">Музей покорения космоса</p>
       
        <img src="image/belarus.png" >`,
        }
    ]
//==================

const eys=document.getElementById('yes')
const no=document.getElementById('no')
const vibor=document.getElementById('vibor')
if(eys!=null)
   eys.addEventListener('click',eysF)

if(no!=null)
    no.addEventListener('click',noF)
function eysF(){
   // vibor.style.display='block';
eys.innerHTML=`Правильно! Давай в этом убедимся.`;
eys.style.fontSize='19px';
eys.style.textTransform='lowercase';
}
function noF(){
   // vibor.style.display='block';
    no.innerHTML=`Сомневаешься? Давай в этом убедимся.`;
    no.style.fontSize='19px';
no.style.textTransform='lowercase';
}
    //====================
    //=====================
  
    function replaseImg(event){
        let elem=event.target
        let src= elem.getAttribute('src')
        let elem2=document.querySelector('a.strelka2')
        elem2.style.display='block'
        let elem3=document.querySelector('a.str2 img')
        elem3.src=src
      
        localStorage.setItem('lastUsedImage', elem3.src)
        return elem3.src;
    }
           
    const sputn=document.querySelectorAll('#sputnic .hero')

    Array.from(sputn).forEach(item=>{
        item.addEventListener('click',replaseImg)
    });
       //=====================================================
   

    //==============страница королев
    //================================
 
    function replaseImg2(event){
        let elem=event.target
        let src= elem.getAttribute('src')
        
        text0.classList.remove('str')
        if(src=='image/спутник21.png'){
        let elem2=document.querySelector('img.sputnik')
         elem2.src=src
         console.log(elem2.src, text0.innerHTML)
         text0.innerHTML=' Молодец!!! Путешествие продолжается'
         text0.classList.add('trAnsv2')
         text0.classList.remove('falAnsv2')
        }
    else{
        text0.innerHTML=' Неправильно. Попробуй ещё. '
        text0.classList.add('falAnsv2')
        text0.classList.remove('trAnsv2')
        } 
         }
       
const sputn2=document.querySelectorAll('#sputnic .sl2')

Array.from(sputn2).forEach(item=>{
    item.addEventListener('click',replaseImg2)
}); 
//====================================

//=============================
function replaseImg3(event){
    let elem=event.target
    let src= elem.getAttribute('src')
    text10.classList.remove('str')
    if(src=='image/собаки0.jpg'){
    let elem2=document.querySelector('.dog img:nth-child(2)');
    let elem4=document.querySelector('.box1 img');
    elem4.style.opacity='1';
elem2.src='image/Собаки.png'
elem2.style.left=13+'%'
elem2.style.top=0
elem2.classList.add('sobaki')

    console.log(elem2)
    text10.innerHTML=' Молодец!!! Путешествие продолжается'
    text10.classList.add('trAnsv2')
    text10.classList.remove('falAnsv2')
    // elem2.src=src
    // elem2.style.cssText='border-radius: 50%; width: 30%;'
    // console.log(elem2.src)
    }
    else{
    text10.innerHTML=' Неправильно. Попробуй ещё. '
    text10.classList.add('falAnsv2')
    text10.classList.remove('trAnsv2')
    } 
    
}
   
const sputn3=document.querySelectorAll('#sputnic .flora')
console.log(sputn3)
Array.from(sputn3).forEach(item=>{
item.addEventListener('click',replaseImg3)
}); 
//====================================
function replaseImg4(event){
    let elem=event.target
    let src= elem.getAttribute('src')
    text13.classList.remove('str')
    
    if(src=='image/байконур5.png'){
    console.log(src)
    text13.innerHTML=' Молодец!!! Путешествие продолжается'
    text13.classList.add('trAnsv2')
    text13.classList.remove('falAnsv2')
     }
    else{
    text13.innerHTML=' Неправильно. Попробуй ещё. '
    text13.classList.add('falAnsv2')
    text13.classList.remove('trAnsv2')
     } 
}
   
const sputn4=document.querySelectorAll('#sputnic .gag')

Array.from(sputn4).forEach(item=>{
item.addEventListener('click',replaseImg4)
}); 
//=======================================
//=======================================
const dragstart=function(event){
    event.dataTransfer.setData('id',event.target.id)
   // console.log(event.target.id)
}


const images=document.querySelectorAll('#container1 .col1 img')
Array.from(images).forEach((element)=>{
    element.addEventListener('dragstart', dragstart)
});
//=================================
const dragover=function(event){
    event.preventDefault();

}
const drop=function(event){
    event.preventDefault();
  let attr= event.target.dataset.num;
    console.log(attr)//id блока
     let pict=event.dataTransfer.getData('id') //attrib picture
     if(attr==pict){
        event.target.style.border='0'
     event.target.appendChild(document.getElementById(pict))
     }
        else return;
    //console.log(pict)

}

const cells=document.querySelectorAll('#container1 .col2')
Array.from(cells).forEach((element)=>{
    element.addEventListener("dragover",dragover)
    element.addEventListener("drop",drop)
})
//==============================
//================================
function replaseImg5(event){
    let elem=event.target
    let src= elem.getAttribute('src')
    text33.classList.remove('str')
    
    if(src=='image/ссср.jpg'){
    console.log(src)
    text33.innerHTML=' Молодец!!! Путешествие продолжается'
    text33.classList.add('trAnsv')
    text33.classList.remove('falAnsv')
     }
     else if(src=='image/рб.jpg'){
        console.log(src)
        text33.innerHTML='Белоруссия входила в состав Советского Союза! Но подумай ещё'
        text33.classList.add('trAnsv')
        text33.classList.remove('falAnsv')
    }
     else {
    text33.innerHTML=' Неправильно. Попробуй ещё. '
    text33.classList.add('falAnsv')
    text33.classList.remove('trAnsv')
     } 
}
   
const sputn5=document.querySelectorAll('#sputnic .sl4')

Array.from(sputn5).forEach(item=>{
item.addEventListener('click',replaseImg5)
}); 
//=========================
function replaseImg6(event){
    let elem=event.target
    let src= elem.getAttribute('src')
    text14.classList.remove('str')
    
    if(src=='image/novicki.png'){
    console.log(src)
    text14.innerHTML=' Олег Новицкий - летчик-космонавт Российской Федерации'
     }
     else if(src=='image/2_0.jpg'){
        console.log(src)
        text14.innerHTML='Дважды Герой Советского Союза Петр Климук совершил <br>свои полеты еще во времена СССР'}
     
    else    if(src=='image/kovalenok.png'){
            console.log(src)
            text14.innerHTML='Дважды Герой Советского Союза  Владимир Коваленок  совершил <br>свои полеты еще во времена СССР'}
         else {
       elem.src='img/космонавтd.png';
    text14.innerHTML=' Первый в истории независимой Беларуси космонавт станет символом космических успехов страны и многое привнесет в нашу науку, проложит дорогу в небо другим белорусам. <br>И ты тоже можешь им стать '
   text14.style.fontSize=18+'px'
    console.log(src)
     } 
}
   
const sputn6=document.querySelectorAll('#sputnic .belka')
console.log(sputn6)
Array.from(sputn6).forEach(item=>{
item.addEventListener('click',replaseImg6)
}); 
//=========================
function replaseImg7(event){
    let elem=event.target
    let src= elem.getAttribute('src')
    text23.classList.remove('str')
    
    if(src=='image/8_0.jpg'){
    console.log(src)
    text23.innerHTML='Правильно. Это телекоммуникационный спутник «Белинтерсат-1»'
    text23.classList.add('trAnsv')
        text23.classList.remove('falAnsv')
     }
     else if(src=='image/5_0.jpg'){
        console.log(src)
        text23.innerHTML='Молодец. «БелКа»  - это аббревиатура от «Белорусский космический аппарат».'
        text23.classList.add('trAnsv')
        text23.classList.remove('falAnsv')
    }
     
    else   {
       
    text23.innerHTML=' Подумай еще раз '
    text23.classList.add('falAnsv')
    text23.classList.remove('trAnsv')
    console.log(src)
     } 
}
   
const sputn7=document.querySelectorAll('#sputnic .s24')
console.log(sputn7)
Array.from(sputn7).forEach(item=>{
item.addEventListener('click',replaseImg7)
}); 
///================================

//=============
//=====================bssr
let dx=2; let x0=0
let bssr=document.getElementById('bssr')
if(bssr!=null){
    bssrMove();
}

function  bssrMove(){
    console.log(x0)
    if(x0<550){
    x0=x0+dx
    bssr.style.left=`${x0}px`;
    setTimeout('bssrMove()',20)
}}
//==========================
//==========================
const arrayRis=['01','09','04','07','05','08','02','06','03'];
const zon1=document.getElementById('zone1')
if(zon1!==null)
for(let i=0;i<arrayRis.length;i++){
    zon1.innerHTML+=`<img src="img/k_${arrayRis[i]}.gif" id="${i}" draggable="true">`
    console.log(i)
}

 
const dragstart2=function(event){
     event.dataTransfer.setData('id',event.target.id)
    console.log(event.target.id)
}
const images2=document.querySelectorAll('#zone1 img') //коллекция
console.log(images2)
Array.from(images2).forEach((element)=>{element.addEventListener('dragstart',dragstart2)})

const dragover2=function(event){

    event.preventDefault()

}
const drop2=function(event){
     event.preventDefault()
     if(event.target.tagName==='IMG') return;
     let imageId=event.dataTransfer.getData('id')
     console.log(imageId)
     event.target.appendChild(document.getElementById(imageId))

}

//====================
const cells2=document.querySelectorAll('#containerPazl .col7')
Array.from(cells2).forEach((element)=>{
    element.addEventListener('dragover',dragover2)
    element.addEventListener('drop',drop2)
});
/*====================Victorina==============*/
const Victorina=[
    {
    question:"В каком году был произведен запуск первого искусственного спутника Земли",
    answer:['1937 год','1957 год',"2000 год","1986 год"],
    correct:2,
    }
    ,{
        question:"Кто является первым космонавтом Земли?",
        answer:[
        'Юрий Гагарин',
        'Нил Армстронг',
        "Кощей Бессмертный",
        "Алексей Леонов"],
        correct:1,
    },
    {
        question:"Кто является первым человеком в открытом космосе",
        answer:['Лунтик',
        'Нил Армстронг',
        "Владимир Коваленок",
        "Алексей Леонов"],
        correct:4,
    },
    {
        question:"Какие животные первыми побывали в космосе",
        answer:['Стрелка и Белка',
        'Рекс, Бим и Стелла',
        "Мухтар и Звезда",
        "Стрела и Бром"],
        correct:1,
    },
    {
        question:"В каком году республика Беларусь запустила первый спутник",
        answer:['2003 год',
        '2008 год',
        "2012 год",
        "2020 год"],
        correct:3,
    },
    {
        question:"Первая женщина полетевшая в космос",
        answer:['Валентина Терешкова',
        'Василиса Премудрая',
        "баба Яга",
        "Светлана Савицкая"],
        correct:1,
    },
    {
        question:"Как назывался первый искусственный спутник Земли",
        answer:['Юнона',
        'СПУТНИК-1',
        "Вояджер-1",
        "Falcon"],
        correct:2,
    },
    {
        question:"Как называется первый белорусский спутник",
        answer:['Тигр',
        'Белка',
        "Заяц",
        "Барсук"],
        correct:2,
    }, 
    {
        question:"Какого числа отмечается день космонавтики?",
        answer:['30 февраля 1961 год',
        '26 апреля 1986 год',
        "21 августа 1964 год",
        "12 апреля 1961 год"],
        correct:4,
    },
    {
        question:"Как назывался корабль с первым человеком на борту?",
        answer:['Восход-1',
        'Запад-1',
        "Север-1",
        "Восток-1"],
        correct:1,
    },
    ]
//===========================
let testQwest=document.getElementById('testQwest')
let listAnswer=document.getElementById('listAnswer')
const btn=document.getElementById("testRez")
//==============================
//переменные игры
//========================
let score=0;
let questionIndex=0;
if(testQwest!=null && listAnswer!=null){
clearPage();
showQuestion();

//=================
//проверка нажатие на кнопку
//======================
btn.onclick=checkAnswer;


function clearPage(){
    testQwest.innerHTML='';
    listAnswer.innerHTML='';
}
function showQuestion(){
   // console.log('вопрос')
//вопрос
const Question=`<h2>${Victorina[questionIndex]['question']}</h2>`
testQwest.innerHTML=Question
//console.log(Victorina[questionIndex]['question'])
//варианты ответов
for(let i=0;i<Victorina[questionIndex]['answer'].length;i++){
//    console.log(Victorina[questionIndex]['answer'][i])
const Answer=`<label class="answ"> <input type="radio" value="${i+1}" >${Victorina[questionIndex]['answer'][i]}</label>`
listAnswer.innerHTML+=Answer;
        }
}
function checkAnswer(){
//console.log('hi')
const checkedRadio=listAnswer.querySelector('input[type=radio]:checked')
//console.log(checkedRadio.value)

if(!checkedRadio){
    btn.blur();
    return;
}
const userAnswer=+checkedRadio.value;

if(userAnswer===Victorina[questionIndex]['correct']){
score++;
}
console.log(score)
//проверка вопросов
//===========================
if(questionIndex!==Victorina.length-1){
    console.log("Это не последний вопрос")
questionIndex++;
clearPage();
showQuestion();
return;
}
else{
    console.log("Это  последний вопрос")
clearPage();
showResult();
//btn.innerHTML = "";
}

}
function showResult(){
    console.log("show")
    let message, rez=score*100/Victorina.length;
    if(rez==100){
        message='Поздравляем! Молодец!!! 🚀 🛰️ 🪐'
    }
    else if(rez>=50 && rez<100)
    {
        message='Уже неплохо 🎆 🌌'
    }
    else {
        message='Вам необходимо повторить материал 🐕'
    }
const result=` <h2>${message}</h2>
<h3> Ваш результат: ${rez.toFixed(2)}%</h3>
<p class="p"> Вы ответили ${score} из ${Victorina.length}</p>`
listAnswer.innerHTML=result;

testRez.blur();
btn.innerHTML='Начать заново';
testRez.onclick=()=>{history.go()}


}
}
/*================menu==============*/
const spnMenu=document.querySelector('.strText span.s2')

spnMenu.onclick=function(){
menu.classList.toggle('str');
}
//====================
let showingTooltip;

document.onmouseover = function(e) {
  var target = e.target;

  var tooltip = target.getAttribute('data-tooltip');

  if (!tooltip) {
    target = e.target.closest('figure');

    if (target) {
      tooltip = target.getAttribute('data-tooltip');
    }
  }

  if (!tooltip) return

  var tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltip;
  document.body.appendChild(tooltipElem);

  var coords = target.getBoundingClientRect();

  var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не вылезать за левую границу окна

  var top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // не вылезать за верхнюю границу окна
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  showingTooltip = tooltipElem;
};

document.onmouseout = function(e) {

  if (showingTooltip) {
    document.body.removeChild(showingTooltip);
    showingTooltip = null;
  }

};