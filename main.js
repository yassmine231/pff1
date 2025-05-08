
const parentcard = document.getElementsByClassName("parentcard")[0];
const addbtn=document.getElementById("addbtn");
const darkModeToggle = document.getElementById('dark-mode-toggle');
const icon = darkModeToggle.querySelector('i');
const cont =document.getElementsByClassName("cont")[0];

const bgContainer =document.getElementsByClassName("bgContainer")[0]
// const bgContainer = document.getElementById("bgContainer");
const confirmation = document.getElementById("confirmation");
const thankYou = document.getElementById("thankYou");
const yes = document.getElementById("yes");
const add= document.getElementById("add")
const addButtons = document.querySelectorAll('.add-btn');
const darkMode=document.getElementsByClassName("darkMode")[0];


const heartIcons = document.querySelectorAll('.heart-icon');


// Toggle dark mode
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

addbtn.addEventListener("click",(eo)=>{
    const newprod=`
     <div class="parentcard">
    <section class="products">
        
        <div class="container"> <div class="product-grid"> 
    <div class="product-card">
                    <div class="product-image ">
                        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Women's Jacket">
                    </div>
                    <div class="product-info">
                        <h3>Product Name</h3>
                        <div class="price">$00.00</div>
                        <div class="product-actions">
                            <a href="#" class="btn add-btn " >Add to Cart</a>
                            <i class="far fa-heart heart-icon"></i>
                        </div>
                    </div>
                </div> 
                </div>
                 </div>
                 </section>
                  </div>
                  `
                parentcard.innerHTML+=newprod;
}
)
addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        bgContainer.classList.add('active');
        confirmation.style.display = 'none';
    });
});
  
yes.addEventListener('click', () => {
    confirmation.style.display = 'block';
    document.querySelector('.cont:first-child').style.display = 'none';
    
    setTimeout(() => {
        bgContainer.classList.remove('active');
        // Reset the dialogs for next use
        confirmation.style.display = 'none';
        document.querySelector('.cont:first-child').style.display = 'block';
    }, 1500);
});





// another methode to make the add to card buttons work 
// parentcard.addEventListener('click', function(e) {
//     if (e.target.classList.contains('add')) {
//         e.preventDefault();
//         bgContainer.classList.add('active');
//         confirmation.style.display = 'none';
//     }
// });



parentcard.addEventListener("click", (eo) => {
    if (eo.target.className === "add") {
      bgContainer.classList.add("active");
      eo.preventDefault();
      container.style.display = "none";
      confiance.style.display = "block";
    }
  });
  




// Heart icon functionality
// This finds all heart icons again and adds a simple click event
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.onclick = () => {
        icon.classList.toggle('fas'); // filled heart
        icon.classList.toggle('far'); // empty heart
        icon.style.color = icon.classList.contains('fas') ? 'red' : ''; // red if filled
    };
});

  
darkMode.addEventListener("click",(eo) => {
    body.classList.toggle("dark")
  })
 