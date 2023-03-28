<section id="cards">
  <div class="superheroes">
  		<div class="superhero active">
  			<img src="http://via.placeholder.com/500x500">
  		</div>
  		<div class="superhero next">
  			<img src="http://via.placeholder.com/500x500">
  		</div>
  		<div class="superhero">
  			<img src="http://via.placeholder.com/500x500">
  		</div>
  		<div class="superhero">
  			<img src="http://via.placeholder.com/500x500">
  		</div>
  		<div class="superhero prev">
  			<img src="http://via.placeholder.com/500x500">
  		</div>
  		<div class="btn-superheroes">
  			<button class="btn"><i class="fas fa-angle-left"></i></button>
  			<button class="btn"><i class="fas fa-angle-right"></i></button>
  		</div>
  </div>
</section>
<style media="screen">
#cards {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.superheroes {
  position: relative;
  user-select: none;
}

.superheroes .superhero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  z-index: -1;
  opacity: 0;
}

.superhero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.superhero.active {
    opacity:1;
    z-index:99;
    box-shadow:0px 0px 105px -35px rgba(0,0,0,.75)
}

.superhero.prev {
    z-index:2;
    opacity:.25;
    transform:translate(-125%,-50%);
}

.superhero.next {
    z-index:2;
    opacity:.25;
    transform:translate(25%,-50%);
}

.superheroes .btn-superheroes {
    position:absolute;
    bottom:-75px;
    left:50%;
    transform:translateX(-50%);
    width:275px;
    z-index:100;
}

.btn-superheroes .btn {
    color:#fff;
    font-size:32px;
    cursor:pointer;
    position:relative;
    opacity:.75;
    transition:all .3s ease-in-out
}

.btn-superheroes .btn:hover {
    opacity:1
}

.btn-superheroes .btn:before {
    content:"";
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:50px;
    height:50px;
    background-color:#00000000;
    border-radius:50%;
    z-index:-99
}

.btn-superheroes .btn:nth-child(1) {
    float:left
}

.btn-superheroes .btn:nth-child(2) {
    float:right
}

.btn-superheroes button {
	background-color:#007bff;
	color:white;
	border:none;
	padding:.375rem .75rem;
	border-radius:.25rem;
	font-size:1rem;
	line-height:1.5;
	cursor:pointer;
}
</style>
<script type="text/javascript">
const slider = document.querySelector(".superheroes");
const slides = document.querySelectorAll(".superhero");
const button = document.querySelectorAll(".btn");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
current = number;
prev = current - 1;
next = current + 1;

for (let i = 0; i < slides.length; i++) {
  slides[i].classList.remove("active");
  slides[i].classList.remove("prev");
  slides[i].classList.remove("next");
}

if (next == 5) {
  next = 0;
}

if (prev == -1) {
  prev = 4;
}

slides[current].classList.add("active");
slides[prev].classList.add("prev");
slides[next].classList.add("next");
}
</script>
