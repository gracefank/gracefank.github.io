
// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var captionText = document.getElementById("caption");
function openModal(){
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  // captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
function closeModal() { 
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}