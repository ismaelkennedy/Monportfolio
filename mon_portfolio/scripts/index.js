function toggleNavbar() {
    const burger = document.querySelector('.navbar-burger');
    const navLinks = document.querySelector('.header-nav_links');

    
    navLinks.classList.toggle('show');

    
    burger.classList.toggle('open');
}


window.addEventListener("load", function () {
	const stats = this.document.querySelectorAll('.stats')
	const header = document.querySelector(".biography");

	header.classList.remove("biography-hidden");



	window.addEventListener("scroll", function () {

    stats.forEach(function(el, key) {
      setTimeout(function() {
        el.classList.remove('hidden')
      }, 500 * key)
      
    })

	});
});

document.addEventListener("scroll", () => {
    
    const skills = document.querySelectorAll(".skills");
    const formations = document.querySelectorAll(".formation");
    const windowHeight = window.innerHeight;

    
    const revealElements = (elements) => {
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100; 

            if (elementTop < windowHeight - revealPoint) {
                setTimeout(() => {
                    element.classList.add("visible");
                }, index * 300); 
            }
        });
    };

    revealElements(skills);
    revealElements(formations);
});

