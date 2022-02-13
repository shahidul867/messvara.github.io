document.getElementsByClassName("img_one")[0].addEventListener("mouseover", function(){this.style.width="80%"});
document.getElementsByClassName("img_one")[0].addEventListener("mouseover", function(){document.getElementsByClassName("img_two").style.width="20%"});
document.getElementsByClassName("img_one")[0].addEventListener("mouseleave", function(){this.style.width="50%"});
document.getElementsByClassName("img_one")[0].addEventListener("mouseleave", function(){document.getElementsByClassName("img_two").style.width="50%"});
document.getElementsByClassName("img_two")[0].addEventListener("mouseover", function(){this.style.width="80%"});
document.getElementsByClassName("img_two")[0].addEventListener("mouseover", function(){document.getElementsByClassName("img_one").style.width="20%"});
document.getElementsByClassName("img_two")[0].addEventListener("mouseleave", function(){this.style.width="50%"});
document.getElementsByClassName("img_two")[0].addEventListener("mouseleave", function(){document.getElementsByClassName("img_one").style.width="50%"});


