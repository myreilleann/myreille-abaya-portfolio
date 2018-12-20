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
indow.addEventListener("load", function(){
	var nodes = document.
querySelectorAll(".overlay");
	for(var i=0; i<nodes.length; i++){
	}
});

var words = nodes[i].innerText;
var html = "";
for(var i2=0; i2<words.length; i2++){
	if(words[i2] == " ")html +=
words[i2];
		else html +=
"<span>"+words[i2]+"</span>"
}
nodes[i].innerHTML = html;
