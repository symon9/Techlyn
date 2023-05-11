

const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }/* else{
            entry.target.classList.remove('show')
        } */
    }

    );
}

);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/* nav */

function openNav() {
    document.getElementById("mySidenav").style.display = "flex";
    /* document.getElementById("contain").style.display = "none"; */ 
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
  
