const btnabout = document.getElementById("btnabout");
const btncourse = document.getElementById("btncourse");
const btncontact = document.getElementById("btncontact");
const btnenroll = document.getElementById("btn_enroll");

btnabout.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/lesson3/aboutus/aboutus.html";
})
btncontact.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/lesson3/contactus/contactus.html";
})
btncourse.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/lesson3/Course/course.html";
})
btnenroll.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="/Prefinals/index.html";
})