// data
const cardData = [
  {
    img: "./js.png",
    head_desc: "Javascript",
    card_desc:
      "I enjoy using javascript for my pages to be dynamic.This is one languange i work with on a daily basis",
  },
  {
    img: "./html.jpg",
    head_desc: "html",
    card_desc:
      "Use Html the structure of my webpage and together with css it gives the page a good lay out",
  },
  {
    img: "./react.jpg",
    head_desc: "React",
    card_desc:
      "This is a javascript framework which iam well versed in.If i decide to use a framework,then React is what i would use",
  },
  {
    img: "./css3.png",
    head_desc: "CSS",
    card_desc:
      "I cant ever forget using CSS on my daily basis as it   gives my website different types of texture such as the layout and fonts. I heavily enjoy working with css as i want my pages to be presentable and on point",
  },
  {
    img: "./bootstrap.png",
    head_desc: "Bootstrap",
    card_desc:
      " Bootstrap is essential as i use it to build fast and responsive webites",
  },
  {
    img: "./node.png",
    head_desc: "Node JS fundermentals",
    card_desc:
      "Use node js for dynamic websites usually if i want to get information from database.Working together with express, mongoose and mongoDB makes the application come to life",
  },
];
// CONTACT

const form = document.getElementById("my-form");
const message = document.getElementById("message");
const username = document.getElementById("name");
const email = document.getElementById("email");
const submitModal = document.querySelector(".submit-modal");
const overlaySubmit = document.querySelector(".overlay-submit");
const closeModal = document.querySelector(".close-modal");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!username.value) {
    username.classList.add("error");
  }
  if (!email.value) {
    email.classList.add("error");
  }
  if (!message.value) {
    message.classList.add("error");
  } else {
    username.classList.remove("error");
    message.classList.remove("error");
    email.classList.remove("error");

    username.classList.add("success");
    message.classList.add("success");
    email.classList.add("success");
    submitModal.classList.add("show-submit-modal");
    overlaySubmit.classList.add("show-overlay-modal");

    try {
      await fetch("https://ancient-coast-86308.herokuapp.com/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username.value,
          email: email.value,
          message: message.value,
        }),
      });
      //  REMOVE INPUT AFTER SUBMIT

      setTimeout(() => {
        username.value = "";
        email.value = "";
        message.value = "";
        username.classList.remove("success");
        message.classList.remove("success");
        email.classList.remove("success");
        submitModal.classList.remove("show-submit-modal");
        overlaySubmit.classList.remove("show-overlay-modal");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  }
});
closeModal.onclick = function () {
  overlaySubmit.classList.remove("show-overlay-modal");
  submitModal.classList.remove("show-submit-modal");
};
const btns = document.querySelectorAll(".btn");
const links = document.querySelectorAll(".link");
let job = document.querySelector(".job");
const cardContainer = document.querySelector(".card-container");
//SHOW ALL CARDS

const cardInfo = cardData
  .map((card, index) => {
    const { img, head_desc, card_desc } = card;
    let position = "next";
    if (index === 0) {
      position = "slide";
    }
    if (index === cardData.length - 1) {
      position = "last";
    }
    return `<div class="card ${position}">
<div class="card-img-container">
   <img src="${img}" class="card-img">
 </div>
<h2 class="head-desc">${head_desc}</h2>
    <p class="card-desc">${card_desc}.</p >
</div>`;
  })
  .join("");
cardContainer.innerHTML = cardInfo;

// CHEVRONS
const right = document.querySelector(".fa-chevron-right");

const slide = (type) => {
  let active = cardContainer.querySelector(".slide");
  let next = active.nextElementSibling;
  const last = document.querySelector(".last");
  if (!next) {
    next = cardContainer.firstElementChild;
  }
  // REMOVE CLASSES
  active.classList.remove(["slide"]);
  next.classList.remove(["next"]);
  last.classList.remove(["last"]);
  if (type == "fa-chevron-left") {
    active.classList.add("next");
    last.classList.add("slide");
    next = last.previousElementSibling;
    if (!next) {
      next = cardContainer.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  // ADD CLASSES
  active.classList.add("last");
  next.classList.add("slide");
  last.classList.add("next");
};
right.addEventListener("click", () => {
  slide();
});
const left = document.querySelector(".fa-chevron-left");
left.addEventListener("click", () => {
  slide("fa-chevron-left");
});
//ACTIVE CLASS
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((bt) => {
      bt.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
// LINKS
const banner = document.querySelector(".banner");
const cover = document.querySelector(".cover-mode");
const about = document.querySelector(".about");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linksContainer = document.querySelector(".links-container");
    linksContainer.style.height = 0;
    times.classList.remove("block");
    bars.classList.add("fa-bars");
  });
});

//BARS AND TIMES
const times = document.querySelector(".fa-times");
const bars = document.querySelector(".fa-bars");
bars.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  const linksContainer = document.querySelector(".links-container");
  const linksHeight = navLinks.getBoundingClientRect().height;
  linksContainer.style.height = `${linksHeight}px`;
  bars.classList.remove("fa-bars");
  times.classList.add("block");
});
times.addEventListener("click", () => {
  const linksContainer = document.querySelector(".links-container");
  linksContainer.style.height = 0;
  times.classList.remove("block");
  bars.classList.add("fa-bars");
});

const projectContainer = document.querySelector(".projects-container");
const arrayOfMyProjects = [
  {
    id: 1,
    url: "https://movies-all-app.netlify.app/home.html",
    image: "./projects-img/movies.png",
  },
  {
    id: 2,
    url: "https://furnitures-app.herokuapp.com/furnitures",
    image: "./projects-img/furnitures.png",
  },
  {
    id: 3,
    url: "https://hearts-restauarant.netlify.app/",
    image: "./projects-img/hearts.png",
  },
  {
    id: 4,
    url: "https://in-progress.netlify.app/",
    image: "./projects-img/coming-soon.png",
  },
  {
    id: 5,
    url: "https://landing-iphone.netlify.app/",
    image: "./projects-img/landing-page.png",
  },
];
const projects = arrayOfMyProjects
  .map((project) => {
    return `<a href="${project.url}" target="_blank">
          <div class="projects-main">
            <div class="project">
              <div class="project-img-container">
                <img
                  src="${project.image}"
                  class="project-img"
                  alt="img"
                />
              </div>
            </div>
            <div class="project-overlay">
              <h2>Visit Project</h2>
            </div>
          </div>
        </a>`;
  })
  .join("");
projectContainer.innerHTML = projects;
