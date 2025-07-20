const menubar=document.getElementById("menubar");
const slide=document.getElementById("slide");
const closenav=document.getElementById("closenav");


menubar.addEventListener("click", function () {
  slide.style.right = "0"; // ✅ value must be a string with units
});

closenav.addEventListener("click", function () {
  slide.style.right = "-50%"; // ✅ value must be a string with units
});


const btnwo=document.getElementById("btnwo");
const btnmen=document.getElementById("btnmen");
 btnwo.addEventListener("click",function(){
    window.location.href = "women.html";
 })
 btnmen.addEventListener("click",function(){
      window.location.href = "product.html";
 })


const wrapper = document.querySelector('.wrapper');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

// Amount to scroll with each click (adjust as needed)
const scrollAmount = 300;

rightArrow.addEventListener('click', () => {
  wrapper.scrollLeft += scrollAmount;
});

leftArrow.addEventListener('click', () => {
  wrapper.scrollLeft -= scrollAmount;
});


const btn2=document.querySelector(".btn2")
const bags=document.getElementById("bags")
btn2.addEventListener("click",function(){
     window.location.href = "women.html#bags";
})



//navigation settings.....
const navhome=document.getElementById("navhome")
const navmen=document.getElementById("navmen")
const navwomen=document.getElementById("navwomen")


navhome.addEventListener("click",function(){
    window.location.href = "index.html";
})
navwomen.addEventListener("click",function(){
      window.location.href = "women.html";
})
navmen.addEventListener("click",function(){
      window.location.href = "product.html";
})





// //womescollection::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const navhome1=document.getElementById("navhome1")
// const navmen1=document.getElementById("navmen1")
// const navwomen1=document.getElementById("navwomen1")

// navhome1.addEventListener("click",function(){
//     window.location.href = "index.html";
// })
// navwomen1.addEventListener("click",function(){
//       window.location.href = "women.html";
// })
// navmen1.addEventListener("click",function(){
//       window.location.href = "product.html";
// })



// const categoryicon=document.getElementById("categoryicon")
// const filtericon=document.getElementById("filtericon")
// const category_description=document.querySelector(".category_description")  
// const filtersection=document.querySelector(".filtersection")
// const materialcheck=document.querySelector(".materialcheck")
// const colorcheck=document.querySelector(".colorcheck")
// const colorplus=document.getElementById("colorplus")
// const materialplus=document.getElementById("materialplus")
// const materialminus=document.getElementById("materialminus")
// const sortbyicon=document.getElementById("sortbyicon")
// const sortbydescription=document.querySelector(".sortbydescription")
// const filterapplybtn=document.getElementById("filterapplybtn")
// const closefilter=document.getElementById("closefilter")



// categoryicon.addEventListener("click",function(){
 
//   category_description.style.display="grid";
 
//    if (categoryicon.src.includes("arrowdown.svg")) {
//     categoryicon.src = "./icons/arrowup.svg";
//   } else {
//     categoryicon.src = "./icons/arrowdown.svg";
//     category_description.style.display = "none"; // also close dropdown
//   }
// })

// filtericon.addEventListener("click",function(){
//     filtersection.style.display="grid";

// if (filtericon.src.includes("arrowdown.svg")){
//     filtericon.src= "./icons/arrowup.svg";
// } else{
//     filtericon.src="./icons/arrowdown.svg";
//     filtersection.style.display="none";
// }
// })


// //filter 



// colorplus.addEventListener("click",function(){
// colorcheck.style.display="block";
// colorminus.style.display="block";
// colorplus.style.display="none";

// })


// colorminus.addEventListener("click",function(){
//     colorcheck.style.display="none";
//     colorminus.style.display="none";
//     colorplus.style.display="block";
// })

// materialplus.addEventListener("click",function(){
// materialcheck.style.display="block";
// materialminus.style.display="block";
// materialplus.style.display="none";
// })


// materialminus.addEventListener("click",function(){
//     materialcheck.style.display="none";
//     materialminus.style.display="none";
//     materialplus.style.display="block";
// })

// sortbyicon.addEventListener("click",function(){
//    sortbydescription.style.display="block";

//    if (sortbyicon.src.includes("arrowdown.svg")){
//     sortbyicon.src= "./icons/arrowup.svg";
// } else{
//     sortbyicon.src="./icons/arrowdown.svg";
//     sortbydescription.style.display="none";
// }
// })

// filterapplybtn.addEventListener("click",function(){
// //  closefilter.style.display="none";
// })
  


// // //partyimages in womensection...

// // const pimg=document.getElementById("pimg")
// // const partycart=document.querySelector(".partycart")
// // pimg.addEventListener("click",function(){
// // partycart.style.display="grid";
// // partycart.style.transfomr="scaleY(1.1)";
// // })







// const searchSection = document.querySelector(".searchsection");
// const searchIcon = document.getElementById("searchbar");
// const closeIcon = document.querySelector(".searchexit");

// searchIcon.addEventListener("click", () => {
//   searchSection.classList.remove("hidden");
// });

// closeIcon.addEventListener("click", () => {
//   searchSection.classList.add("hidden");
// });




// // Select all relevant checkboxes
// const colorCheckboxes = document.querySelectorAll('.colorcheck input[type="checkbox"]');
// const materialCheckboxes = document.querySelectorAll('.materialcheck input[type="checkbox"]');

// // Select all product items
// const allProducts = document.querySelectorAll(
//   '.partyimages1, .topimages1, .bagimages1, .dressimages1'
// );


// // Select all product items for men
// // const allProducts = document.querySelectorAll(
// //   '.shirtimages1, .tshirtimages1, .shoeimages1'
// // );

// // Utility: Get selected checkbox values
// function getSelectedValues(checkboxes) {
//   return Array.from(checkboxes)
//     .filter(cb => cb.checked)
//     .map(cb => cb.parentElement.textContent.trim());
// }

// // Main filter logic
// function filterProducts() {
//   const selectedColors = getSelectedValues(colorCheckboxes);
//   const selectedMaterials = getSelectedValues(materialCheckboxes);

//   allProducts.forEach(product => {
//     const color = product.getAttribute('data-color');
//     const material = product.getAttribute('data-material');

//     const matchColor =
//       selectedColors.length === 0 || selectedColors.includes(color);
//     const matchMaterial =
//       selectedMaterials.length === 0 || selectedMaterials.includes(material);

//     // Show only if both color & material match
//     if (matchColor && matchMaterial) {
//       product.style.display = 'block';
//     } else {
//       product.style.display = 'none';
//     }
//   });
// }

// // Add event listeners to checkboxes
// colorCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
// materialCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));















