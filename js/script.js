// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction();};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};


// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
//
// // change color
// window.onscroll = () => {
//   const nav = document.querySelector('#navbar');
//   if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
// };


// name animation
// indow.addEventListener("load", function(){
// 	var nodes = document.
// querySelectorAll(".overlay");
// 	for(var i=0; i<nodes.length; i++){
// 	}
// });
//
// var words = nodes[i].innerText;
// var html = "";
// for(var i2=0; i2<words.length; i2++){
// 	if(words[i2] == " ")html +=
// words[i2];
// 		else html +=
// "<span>"+words[i2]+"</span>"
// }
// nodes[i].innerHTML = html;
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
            $(".view").removeClass("full-width-container").addClass("gallery-mobile");
    }
});
