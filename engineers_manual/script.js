/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function popout() {
    document.getElementById("myCalc").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.calcbtn')) {
      var dropdowns = document.getElementsByClassName("calc-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
      }
    }
  }

//   Calculator Functions
function forclear() {
    document.getElementById("output").innerHTML="0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = "";
        document.getElementById("output").innerHTML = value;
    }
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
    removeZero();
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

function reverse_sign() {
}

function mem_clear () {
}

function mem_add () {

}

function mem_sub () {

}

function mem_recall() {

}

// Formula Cards Section - Using jQuery here
let old = $(".card").get(0);
$(".card").click(function () {
  if (old != null && $(old).hasClass("open")) 
    $(old).toggleClass("open");
  $(this).toggleClass("open");
  old = this;
});