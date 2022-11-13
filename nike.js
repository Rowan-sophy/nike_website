const wrapper=document.querySelector('.sliderwrapper');
const slider=document.querySelector('.slider').offsetWidth;
const menuitems=document.querySelectorAll('.menuitem');

const wrapperlength=document.querySelectorAll('.menuitem').length;

const wrapperwidth2=window.pageXOffset;

console.log(wrapperwidth2);
menuitems.forEach(function(eachmenu){
  //console.log(eachmenu.offsetWidth);
});

//console.log(wrapperlength);
//console.log(menuwidth);

const products=[
    {id:1,
    title:"air force",
    price:"119$",
    colors:[{
        code:"black",
        img:"images/air.png",
    },
    {
        code:"darkblue",
        img:"images/air2.png",

    },
    ],
},
{id:2,
    title:"air jordan",
    price:"149$",
    colors:[{
        code:"light green",
        img:'images/jordan.png',
    },
    {
        code:"green",
        img:'images/jordan.png',

    },
    ],
},
{
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "images/blazer.png",
      },
      {
        code: "black",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "lightgray",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie.png",
      },
    ],
  },
];


let choosenproduct=products[0];
const currentproImg=document.querySelector('.productimg');
const ptoducttitle=document.querySelector('.productTitle');
const ptoductprice=document.querySelector('.productPrice');
const productcolor=document.querySelectorAll('.color');
const productDetails=document.querySelectorAll('productDetails');
const productsize=document.querySelectorAll('.size');
const bgcircle=document.querySelectorAll('.sliderbg');
let leftpos=0;
let eachwidth=0;

for (let i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener("click",()=>{
      choosenproduct=products[i];
      const menuwidth=menuitems[i].getBoundingClientRect().width;
      console.log(slider);
        leftpos=`-${i*slider}px`;
        //to change the position we're gonna use transform proprety =translateX()
        //if we use positive number it's gonna move to right and if we use negative number it gonna move to left
        // notice that we're using vw and the space of the whole screen 500vw and each item is 100vw 
      // wrapper.style.transform=`translateX(${-100*i}vw)`;
       wrapper.style.transform=`translateX(${leftpos})`
        //change choosenproduct
       
        console.log(choosenproduct.title);
        console.log(bgcircle);
        //CHANGE THE TEXT OF CURRENT PRODUCT
        ptoducttitle.textContent=choosenproduct.title;
        console.log(ptoducttitle.textContent);
        /*how we could conect the product in gallery with the product details under that 
        we give the id to every product in the array with the same index that they already have in gallery*/
        //ptoductprice.textContent=choosenproduct.price;
        currentproImg.src=choosenproduct.colors[0].img;
        console.log(choosenproduct.colors[1].code);
        bgcircle[i].style.backgroundColor=choosenproduct.colors[1].code;
        //assign new color
       /*productcolor.forEach((color,i)=>{
            color.style.backgroundColor=choosenproduct.colors[i].code;
            console.log(color);
        })*/
        /*for (let i = 0; i < productcolor.length; i++) {
            productcolor[i].style.backgroundColor=choosenproduct.colors[i].code;
            console.log( productcolor);
            /*what is the diffrence between using for and for each , notice that the color above is equal to productcolor[i] if i wrote productcolor
            without [i ] that means the div that contants the other two div and you can't use style with it 
            the color above = productcolor[i]=each one of
             <div class="color"></div>
            <div class="color"></div>
            but productcolor=
             <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            
        }*/


    });
}
/*menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log('you clicked');
    });
    
});*/
for (let i = 0; i < productcolor.length; i++) {
  productcolor[i].addEventListener("click",()=>{
    currentproImg.src=choosenproduct.colors[i].img;
    /*what this function do is when i click on color "div" it would change the product pucture 
    "img inside product div" to the pic in color array in product array*/

  });
}
for (let i = 0; i < productsize.length; i++) {
  productsize[i].addEventListener("click",()=>{
    for (let i = 0; i < productsize.length; i++) {
       if( productsize[i].className.includes('press')){
         productsize[i].classList.toggle('press');}
    }
      /*we did loop twice to solve the proplem of pressing on size many time or choose more than one size 
      //so basically we're gonna loop inside the size and make all the background white and color black
        productsize[i].style.backgroundColor='white';
        productsize[i].style.Color= 'black';
        productsize[i].classList.toggle('press');}
         
      }
    productsize[i].style.Color='white';
    productsize[i].style.backgroundColor='black';*/
   // if( productsize[i].className.includes('press')){
      productsize[i].classList.toggle('press');
      
    
  
      
    
   
  });
}
const productbutton=document.querySelector('.productbutton');
const payment=document.querySelector('.payment');
const close=document.querySelector('.close');
productbutton.addEventListener("click",()=>{

  payment.style.display="flex";

});
close.addEventListener("click",()=>{

  payment.style.display="none";

});


