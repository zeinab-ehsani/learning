// let book1=document.querySelector(".book1")

// let  openBook1=document.querySelector(".details-book1")

// let open2=document.querySelector(".open2")

const cardBook = [
  {
    tabTitle: "Photoshop",
    titleDetails: "Adobe Photoshop for Beginners",
    textDetails: "Learn photo editing, retouching and layer-based design from scratch with hands-on projects.",
    price: "$120",
    img: "./assets/img/img-home/Rectangle 34.svg",
  },
  {
    tabTitle: "Illustrator",
    titleDetails: "Vector Illustration with Illustrator",
    textDetails: "Create logos, icons and scalable artwork using the pen tool, shapes and color palettes.",
    price: "$140",
    img: "./assets/img/img-home/doreh2.svg",
  },
  {
    tabTitle: "UI Design",
    titleDetails: "UI Design Fundamentals",
    textDetails: "Understand layout, typography and color systems to design clean and modern interfaces.",
    price: "$200",
    img: "./assets/img/img-home/dovreh3.svg",
  },
  {
    tabTitle: "Figma",
    titleDetails: "Figma from Zero to Pro",
    textDetails: "Build responsive designs, components and prototypes in Figma step by step.",
    price: "$180",
    img: "./assets/img/img-home/dovreh4.svg",
  },
  {
    tabTitle: "Typography",
    titleDetails: "The Art of Typography",
    textDetails: "Learn how to choose, pair and arrange fonts to make your designs readable and beautiful.",
    price: "$90",
    img: "./assets/img/img-home/labrary1.png",
  },
  {
    tabTitle: "Branding",
    titleDetails: "Brand Identity Design",
    textDetails: "Design a complete brand identity including logo, colors, typography and style guide.",
    price: "$250",
    img: "./assets/img/img-home/labrary1.png",
  },
  {
    tabTitle: "Motion",
    titleDetails: "Intro to Motion Graphics",
    textDetails: "Bring your designs to life with basic animation principles and After Effects workflows.",
    price: "$300",
    img: "./assets/img/img-home/labrary1.png",
  },
];












// let cardBook=[
//     {titleDetails:"css",textDetails:"tovzih",price:"$400"},
//         {titleDetails:"html",textDetails:"tovzih2",price:"$430"}

// ]
// cardBook.forEach(elem => {

// document.querySelector(".open2").innerHTML+=`

//      <div class="details-book1 border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
//           <img class="w-[40%]" src="./assets/img/img-home/labrary1.png" alt="">
//           <div class="w-[50%] flex flex-col gap-1.5 justify-between">
//             <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
//             <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
//             <span class="flex flex-row justify-between align-middle items-center">

//               <span><i class="fa-solid fa-star text-[#FFC107]"></i><i class="fa-solid fa-star text-[#FFC107]"></i><i
//                   class="fa-solid fa-star text-[#FFC107]"></i><i class="fa-solid fa-star text-[#FFC107]"></i><i
//                   class="fa-solid fa-star text-[#FFC107]"></i></span>

//               <span class="text-font-20 font-bold price">${elem.price}</span>


//             </span>
//             <a href="./course-detail.html"
//               class="text-cyan border border-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">
//               EXPLORE
//             </a>

//           </div>

//         </div>

// `



// });

// book1.addEventListener("click",function(){
// cardBook.forEach(elem => {

// document.querySelector(".open2").innerHTML=`

//      <div class="details-book1 h-[430px] border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
//           <img class="w-[40%]" src="./assets/img/img-home/labrary1.png" alt="">
//           <div class="w-[50%] flex flex-col gap-1.5 justify-between">
//             <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
//             <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
//             <span class="flex flex-row justify-between align-middle items-center">

//               <span><i class="fa-solid fa-star text-[#FFC107]"></i><i class="fa-solid fa-star text-[#FFC107]"></i><i
//                   class="fa-solid fa-star text-[#FFC107]"></i><i class="fa-solid fa-star text-[#FFC107]"></i><i
//                   class="fa-solid fa-star text-[#FFC107]"></i></span>

//               <span class="text-font-20 font-bold price">${elem.price}</span>


//             </span>
//             <a href="./course-detail.html"
//               class="text-cyan border border-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">
//               EXPLORE
//             </a>

//           </div>

//         </div>

// `



// });


// })

const books = document.querySelectorAll(".book");

books.forEach((book) => {
  book.addEventListener("click", () => {
    const elem = cardBook[book.dataset.index];
    const box = book.nextElementSibling;

    document.querySelectorAll(".open-box").forEach((o) => (o.innerHTML = ""));

    box.innerHTML = `
      <div class="details-book1 border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
        <img class="w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
        <div class="w-[50%] flex flex-col gap-1.5 justify-between">
          <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
          <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
          <span class="flex flex-row justify-between items-center">
            <span class="text-[#FFC107]">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </span>
            <span class="text-font-20 font-bold price">${elem.price}</span>
          </span>
          <a href="./course-detail.html" class="text-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">EXPLORE</a>
        </div>
      </div>
    `;
  });
});

















const cardBook2 = [
  {
    tabTitle: "Photography",
    titleDetails: "Photography for Beginners",
    textDetails: "Learn camera basics, exposure, composition and lighting to take better photos from day one.",
    price: "$110",
    img: "./assets/img/img-home/camera.jpg",
  },
  {
    tabTitle: "Lightroom",
    titleDetails: "Photo Editing with Lightroom",
    textDetails: "Master color correction, presets and batch editing to give your photos a professional look.",
    price: "$130",
    img: "./assets/img/img-home/camera.jpg",
  },
  {
    tabTitle: "Portrait",
    titleDetails: "Portrait Photography Essentials",
    textDetails: "Work with natural and studio light, posing and backgrounds to capture great portraits.",
    price: "$160",
    img: "./assets/img/img-home/camera.jpg",
  },
  {
    tabTitle: "Video",
    titleDetails: "Video Shooting and Storytelling",
    textDetails: "Plan, shoot and frame short videos that tell a clear story with simple equipment.",
    price: "$190",
    img: "./assets/img/img-home/camera.jpg",
  },
  {
    tabTitle: "Editing",
    titleDetails: "Video Editing with Premiere Pro",
    textDetails: "Cut, arrange and polish your footage with transitions, audio and color grading.",
    price: "$220",
    img: "./assets/img/img-home/camera.jpg",
  },
  {
    tabTitle: "Drone",
    titleDetails: "Aerial Photography with Drones",
    textDetails: "Learn safe drone flying and how to capture stunning aerial photos and footage.",
    price: "$270",
    img: "./assets/img/img-home/camera.jpg",
  },

];



const photos = document.querySelectorAll(".photo")

photos.forEach((photo) => {
  photo.addEventListener("click", function () {
    const elem = cardBook2[photo.dataset.index];
    const boxphoto = photo.nextElementSibling;
    document.querySelectorAll(".open-photo").forEach((o) => {
      (o.innerHTML = "");
    })

    boxphoto.innerHTML = `
 <div class="details-book1 border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
        <img class="w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
        <div class="w-[50%] flex flex-col gap-1.5 justify-between">
          <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
          <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
          <span class="flex flex-row justify-between items-center">
            <span class="text-[#FFC107]">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </span>
            <span class="text-font-20 font-bold price">${elem.price}</span>
          </span>
          <a href="./course-detail.html" class="text-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">EXPLORE</a>
        </div>
      </div>
`
  })
})



const cardBook3 = [
  {
    tabTitle: "English",
    titleDetails: "English Conversation Practice",
    textDetails: "Improve your speaking and listening with daily dialogues and real-life situations.",
    price: "$100",
    img: "./assets/img/img-home/classlan.png",
  },
  {
    tabTitle: "IELTS",
    titleDetails: "IELTS Preparation Course",
    textDetails: "Practice all four IELTS skills with sample tests, tips and personal feedback.",
    price: "$180",
    img: "./assets/img/img-home/classlan.png",
  },
  {
    tabTitle: "German",
    titleDetails: "German for Beginners",
    textDetails: "Learn basic grammar, vocabulary and pronunciation to start speaking German confidently.",
    price: "$130",
    img: "./assets/img/img-home/classlan.png",
  },
  {
    tabTitle: "French",
    titleDetails: "French Made Simple",
    textDetails: "Build a solid foundation in French with short lessons, audio and speaking exercises.",
    price: "$130",
    img: "./assets/img/img-home/classlan.png",
  },
  {
    tabTitle: "Spanish",
    titleDetails: "Spanish from Scratch",
    textDetails: "Start speaking Spanish quickly with practical phrases and fun, easy exercises.",
    price: "$120",
    img: "./assets/img/img-home/classlan.png",
  },
  {
    tabTitle: "Business",
    titleDetails: "Business English Essentials",
    textDetails: "Learn emails, meetings and presentations vocabulary for the international workplace.",
    price: "$210",
    img: "./assets/img/img-home/classlan.png",
  },


];

const languages = document.querySelectorAll(".language")


languages.forEach((language) => {


  language.addEventListener("click", function () {
    const elem = cardBook3[language.dataset.index];
    const boxLanguage = language.nextElementSibling;
    document.querySelectorAll(".open-lan").forEach((o) => {
      (o.innerHTML = "");
    })
    boxLanguage.innerHTML = `


 <div class="details-book1 border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
        <img class="w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
        <div class="w-[50%] flex flex-col gap-1.5 justify-between">
          <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
          <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
          <span class="flex flex-row justify-between items-center">
            <span class="text-[#FFC107]">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </span>
            <span class="text-font-20 font-bold price">${elem.price}</span>
          </span>
          <a href="./course-detail.html" class="text-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">EXPLORE</a>
        </div>
      </div>


`
  })

})

let dark = document.querySelector(".btn-dark")

let light = document.querySelector(".btn-light")
let warm= document.querySelector(".btn-warm")
const body = document.body;
let navbar=document.querySelector(".navbar")
dark.addEventListener("click",function(){

   body.classList.remove("light", "warm");
  body.classList.add("dark");
})
light.addEventListener("click",function(){

   body.classList.remove("dark", "warm");
  body.classList.add("light");
})
warm.addEventListener("click",function(){

   body.classList.remove("light", "dark");
  body.classList.add("warm");
navbar.style.borderRadius="30px" ;
 ;

})