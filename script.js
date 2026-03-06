/* =========================
INITIALIZE AOS ANIMATIONS
========================= */

AOS.init({
duration:1000,
once:true,
offset:120
});


/* =========================
TYPING HERO TEXT
========================= */

const text="Python Django React Full Stack Developer";

let i=0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();


/* =========================
DARK MODE TOGGLE
========================= */

const toggle=document.getElementById("darkToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

toggle.innerHTML="☀️";

particlesDark();

}

else{

toggle.innerHTML="🌙";

particlesLight();

}

});


/* =========================
PARTICLES BACKGROUND
========================= */

function particlesLight(){

particlesJS("particles-js",{

particles:{

number:{value:60},

color:{value:"#000000"},

size:{value:3},

move:{speed:2},

line_linked:{

enable:true,

color:"#000000"

}

}

});

}



function particlesDark(){

particlesJS("particles-js",{

particles:{

number:{value:60},

color:{value:"#ffffff"},

size:{value:3},

move:{speed:2},

line_linked:{

enable:true,

color:"#ffffff"

}

}

});

}


/* default load */

particlesLight();


/* =========================
LOAD GITHUB REPOSITORIES
LATEST FIRST
========================= */

fetch("https://api.github.com/users/CirilEB/repos")

.then(res=>res.json())

.then(data=>{

let container=document.getElementById("githubRepos");


/* sort by latest pushed */

data.sort((a,b)=> new Date(b.pushed_at) - new Date(a.pushed_at));


/* display top 6 */

data.slice(0,6).forEach(repo=>{

container.innerHTML += `

<div class="col-md-4" data-aos="zoom-in">

<div class="project-card">

<h4>${repo.name}</h4>

<p>${repo.description || "GitHub Repository"}</p>

<p class="repo-date">Updated: ${repo.pushed_at.split("T")[0]}</p>

<a href="${repo.html_url}" target="_blank" class="btn btn-dark">View Repo</a>

</div>

</div>

`;

});

});


/* =========================
EMAILJS CONTACT FORM
========================= */

(function(){

emailjs.init("lKYhj868QdowibKgk");

})();


document.getElementById("contactForm")

.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_m4oqn7b",

"template_a2hi6zk",

this

)

.then(()=>{

document.getElementById("msg").innerText="Message sent successfully!";

this.reset();

})

.catch(()=>{

document.getElementById("msg").innerText="Error sending message.";

});

});