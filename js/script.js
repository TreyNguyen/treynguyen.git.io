// Header Menu Section
const headermenuToggle = document.querySelector('.header-menu-toggle');
const headermenuLinks = document.querySelectorAll('.header-menu-link')

headermenuToggle.addEventListener('click', () => {
    document.body.classList.toggle('header-menu-open');
});

headermenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('header-menu-open');
    })
})

// Resume Section
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


