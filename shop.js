const card1=document.querySelector(".card1");
const card2=document.querySelector(".card2");
const card3=document.querySelector(".card3");
const card4=document.querySelector(".card4");
const card5=document.querySelector(".card5");
const card6=document.querySelector(".card6");
const card7=document.querySelector(".card7");
const card8=document.querySelector(".card8");
const card9=document.querySelector(".card9");
const card10=document.querySelector(".card10");
const card11=document.querySelector(".card11");
const card12=document.querySelector(".card12");

const sneaker1=document.querySelector(".sneaker1 img");
const sneaker2=document.querySelector(".sneaker2 img");
const sneaker3=document.querySelector(".sneaker3 img");

const sizes1=document.querySelector(".sizes1");
const sizes2=document.querySelector(".sizes2");
const sizes3=document.querySelector(".sizes3");

const obj1=document.querySelector(".obj1 img");
const obj2=document.querySelector(".obj2 img");
const obj3=document.querySelector(".obj3 img");
const obj4=document.querySelector(".obj4 img");
const obj5=document.querySelector(".obj5 img");
const obj6=document.querySelector(".obj6 img");
const obj7=document.querySelector(".obj7 img");
const obj8=document.querySelector(".obj8 img");
const obj9=document.querySelector(".obj9 img");
const obj10=document.querySelector(".obj10 img");


const info1=document.querySelector(".info1 h1");
const info2=document.querySelector(".info2 h1");
const info3=document.querySelector(".info3 h1");
const info4=document.querySelector(".info4 h1");
const info5=document.querySelector(".info5 h1");
const info6=document.querySelector(".info6 h1");
const info7=document.querySelector(".info7 h1");
const info8=document.querySelector(".info8 h1");
const info9=document.querySelector(".info9 h1");
const info10=document.querySelector(".info10 h1");
const info11=document.querySelector(".info11 h1");
const info12=document.querySelector(".info12 h1");

const description1=document.querySelector(".info1 h3");
const description2=document.querySelector(".info2 h3");
const description3=document.querySelector(".info3 h3");
const description4=document.querySelector(".info4 h3");
const description5=document.querySelector(".info5 h3");
const description6=document.querySelector(".info6 h3");
const description7=document.querySelector(".info7 h3");
const description8=document.querySelector(".info8 h3");
const description9=document.querySelector(".info9 h3");
const description10=document.querySelector(".info10 h3");
const description11=document.querySelector(".info11 h3");
const description12=document.querySelector(".info12 h3");

const purchase1=document.querySelector(".purchase1 button");
const purchase2=document.querySelector(".purchase2 button");
const purchase3=document.querySelector(".purchase3 button");
const purchase4=document.querySelector(".purchase4 button");
const purchase5=document.querySelector(".purchase5 button");
const purchase6=document.querySelector(".purchase6 button");
const purchase7=document.querySelector(".purchase7 button");
const purchase8=document.querySelector(".purchase8 button");
const purchase9=document.querySelector(".purchase9 button");
const purchase10=document.querySelector(".purchase10 button");
const purchase11=document.querySelector(".purchase11 button");
const purchase12=document.querySelector(".purchase12 button");

//CARD-1//

card1.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/4 - e.pageX)/20;
    let yAxis=(window.innerHeight/4 - e.pageY)/20;

    card1.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card1.addEventListener("mouseenter", (e)=>{
    card1.style.transform='none';

    info1.style.transform="translateY(15px)";
    description1.style.transform="translateY(15px)";
    sneaker1.style.transform="rotateZ(-20deg)";
    purchase1.style.transform="translateY(15px)";
    sizes1.style.transform="translateY(15px)";
});

card1.addEventListener("mouseleave", (e)=>{
    card1.style.transition="all 0.35s ease"
    card1.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info1.style.transform="translateY(0px)";
    description1.style.transform="translateY(0px)";
    sneaker1.style.transform="rotateZ(0deg)";
    purchase1.style.transform="translateY(0px)";
    sizes1.style.transform="translateY(0px)";
});

//CARD-2//

card2.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2 - e.pageX)/25;
    let yAxis=(window.innerHeight/2 - e.pageY)/25;

    card2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card2.addEventListener("mouseenter", (e)=>{
    card2.style.transform='none';

    info2.style.transform="translateY(15px)";
    description2.style.transform="translateY(15px)";
    sneaker2.style.transform="rotateZ(-15deg)";
    purchase2.style.transform="translateY(15px)";
    sizes2.style.transform="translateY(15px)";
});

card2.addEventListener("mouseleave", (e)=>{
    card2.style.transition="all 0.5s ease"
    card2.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info2.style.transform="translateY(0px)";
    description2.style.transform="translateY(0px)";
    sneaker2.style.transform="rotateZ(0deg)";
    purchase2.style.transform="translateY(0px)";
    sizes2.style.transform="translateY(0px)";
});

//CARD-3//

card3.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2 - e.pageX)/40;
    let yAxis=(window.innerHeight/2 - e.pageY)/40;

    card3.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card3.addEventListener("mouseenter", (e)=>{
    card3.style.transform='none';

    info3.style.transform="translateY(15px)";
    description3.style.transform="translateY(15px)";
    sneaker3.style.transform="rotateZ(-10deg)";
    purchase3.style.transform="translateY(15px)";
    sizes3.style.transform="translateY(15px)";
});

card3.addEventListener("mouseleave", (e)=>{
    card3.style.transition="all 0.5s ease"
    card3.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info3.style.transform="translateY(0px)";
    description3.style.transform="translateY(0px)";
    sneaker3.style.transform="rotateY(0deg)";
    purchase3.style.transform="translateY(0px)";
    sizes3.style.transform="translateY(0px)";
});

//CARD-4//

card4.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/7 - e.pageX)/60;
    let yAxis=(window.innerHeight/7 - e.pageY)/60;

    card4.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card4.addEventListener("mouseenter", (e)=>{
    card4.style.transform='none';

    info4.style.transform="translateY(15px)";
    description4.style.transform="translateY(15px)";
    obj1.style.transform="rotateZ(20deg)";
    purchase4.style.transform="translateY(15px)";
});

card4.addEventListener("mouseleave", (e)=>{
    card4.style.transition="all 0.35s ease"
    card4.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info4.style.transform="translateY(0px)";
    description4.style.transform="translateY(0px)";
    obj1.style.transform="rotateZ(0deg)";
    purchase4.style.transform="translateY(0px)";
});

//CARD-5//

card5.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2 - e.pageX)/50;
    let yAxis=(window.innerHeight/2 - e.pageY)/50;

    card5.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card5.addEventListener("mouseenter", (e)=>{
    card5.style.transform='none';

    info5.style.transform="translateY(15px)";
    description5.style.transform="translateY(15px)";
    obj2.style.transform="rotateZ(20deg)";
    purchase5.style.transform="translateY(15px)";
});

card5.addEventListener("mouseleave", (e)=>{
    card5.style.transition="all 0.5s ease"
    card5.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info5.style.transform="translateZ(0px)";
    description5.style.transform="translateZ(0px)";
    obj2.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase5.style.transform="translateZ(0px)";
});

//CARD-6//

card6.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/1 - e.pageX)/50;
    let yAxis=(window.innerHeight/1 - e.pageY)/50;

    card6.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card6.addEventListener("mouseenter", (e)=>{
    card6.style.transform='none';

    info6.style.transform="translateY(15px)";
    description6.style.transform="translateY(15px)";
    obj3.style.transform="rotateZ(-20deg)";
    purchase6.style.transform="translateY(15px)";
});

card6.addEventListener("mouseleave", (e)=>{
    card6.style.transition="all 0.5s ease"
    card6.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info6.style.transform="translateY(0px)";
    description6.style.transform="translateY(0px)";
    obj3.style.transform="rotateY(0deg)";
    purchase6.style.transform="translateY(0px)";
});

//CARD-7//

card7.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card7.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card7.addEventListener("mouseenter", (e)=>{
    card7.style.transform='none';

    info7.style.transform="translateY(15px)";
    description7.style.transform="translateY(15px)";
    obj4.style.transform="rotateZ(0deg)";
    purchase7.style.transform="translateY(15px)";
});

card7.addEventListener("mouseleave", (e)=>{
    card7.style.transition="all 0.35s ease"
    card7.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info7.style.transform="translateY(0px)";
    description7.style.transform="translateY(0px)";
    obj4.style.transform="rotateZ(0deg)";
    purchase7.style.transform="translateY(0px)";
});

//CARD-8//

card8.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card8.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card8.addEventListener("mouseenter", (e)=>{
    card8.style.transform='none';

    info8.style.transform="translateY(15px)";
    description8.style.transform="translateY(15px)";
    obj5.style.transform="rotateZ(10deg)";
    purchase8.style.transform="translateY(15px)";
});

card8.addEventListener("mouseleave", (e)=>{
    card8.style.transition="all 0.5s ease"
    card8.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info8.style.transform="translateZ(0px)";
    description8.style.transform="translateZ(0px)";
    obj5.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase8.style.transform="translateZ(0px)";
});

//CARD-9//

card9.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card9.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card9.addEventListener("mouseenter", (e)=>{
    card9.style.transform='none';

    info9.style.transform="translateY(15px)";
    description9.style.transform="translateY(15px)";
    obj6.style.transform="rotateZ(10deg)";
    purchase9.style.transform="translateY(15px)";
});

card9.addEventListener("mouseleave", (e)=>{
    card9.style.transition="all 0.5s ease"
    card9.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info9.style.transform="translateZ(0px)";
    description9.style.transform="translateZ(0px)";
    obj6.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase9.style.transform="translateZ(0px)";
});

//CARD-10//

card10.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card10.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card10.addEventListener("mouseenter", (e)=>{
    card10.style.transform='none';

    info10.style.transform="translateY(15px)";
    description10.style.transform="translateY(15px)";
    obj7.style.transform="rotateZ(10deg)";
    purchase10.style.transform="translateY(15px)";
});

card10.addEventListener("mouseleave", (e)=>{
    card10.style.transition="all 0.5s ease"
    card10.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info10.style.transform="translateZ(0px)";
    description10.style.transform="translateZ(0px)";
    obj7.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase10.style.transform="translateZ(0px)";
});

//CARD-11//

card11.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card11.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card11.addEventListener("mouseenter", (e)=>{
    card11.style.transform='none';

    info11.style.transform="translateY(15px)";
    description11.style.transform="translateY(15px)";
    obj8.style.transform="rotateZ(10deg)";
    purchase11.style.transform="translateY(15px)";
});

card11.addEventListener("mouseleave", (e)=>{
    card11.style.transition="all 0.5s ease"
    card11.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info11.style.transform="translateZ(0px)";
    description11.style.transform="translateZ(0px)";
    obj8.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase11.style.transform="translateZ(0px)";
});

//CARD-12//

card12.addEventListener("mousemove", (e)=> {
    let xAxis=(window.innerWidth/2.5 - e.pageX)/70;
    let yAxis=(window.innerHeight/2.5 - e.pageY)/70;

    card12.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

card12.addEventListener("mouseenter", (e)=>{
    card12.style.transform='none';

    info12.style.transform="translateY(15px)";
    description12.style.transform="translateY(15px)";
    obj9.style.transform="rotateZ(10deg)";
    purchase12.style.transform="translateY(15px)";
});

card12.addEventListener("mouseleave", (e)=>{
    card12.style.transition="all 0.5s ease"
    card12.style.transform=`rotateY(0deg) rotateX(0deg)`;

    info12.style.transform="translateZ(0px)";
    description12.style.transform="translateZ(0px)";
    obj9.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase12.style.transform="translateZ(0px)";
});