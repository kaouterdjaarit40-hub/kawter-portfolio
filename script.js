const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>navLinks.classList.toggle("active"));

navLinks.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",()=>navLinks.classList.remove("active"));
});

const form=document.getElementById("contactForm");
const message=document.getElementById("formMessage");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  message.textContent="Thank you! Your message has been received ♡";
  form.reset();
});
