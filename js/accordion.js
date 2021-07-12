var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        for (var j = 0; j < this.childNodes.length; j++) {
            var content = this.childNodes[j];
            if (content.className == "accordion-content") {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                  } 
            }
        }				
    });
}