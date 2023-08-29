document.querySelectorAll("drop-zone-input").forEach(inputElement => {
   const dropZoneElement = inputElement.closest(".drop-zone");
   
   dropZoneElement.addEventListener("click", function(){
    inputElement.click();
   });

   inputElement.addEventListener("change" , function(event){
     displayThumbnailImage(dropZoneElement , event.target.files[0])
   });

   dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
   });

   
   dropZoneElement.addEventListener("dragleave", (e) => {
      dropZoneElement.classList.add("drop-zone--over");
   });


   
   dropZoneElement.addEventListener("dragend", (e) => {
      dropZoneElement.classList.add("drop-zone--over");
   });


   // ["dragleave" , "dragend"].forEach(event => {
   //    dropZoneElement.addEventListener(event , function(){
   //       dropZoneElement.classList.remove("drop-zone--over");
   //    })
   // });

   dropZoneElement.addEventListener("drop" , (event) => {
      event.preventDefault();
      inputElement.files = event.dataTransfer.files;
      console.log(event.dataTransfer);
      displayThumbnailImage(dropZoneElement , event.dataTransfer.files[0]);
   })
})

function displayThumbnailImage(dropZoneElement , file){

   const dropZonePrompt = document.querySelector("drop-zone__prompt");
   if(dropZonePrompt){
      dropZonePrompt.remove();
   }

   const thumbnailElement = document.querySelector("drop-zone__thumb");
   if (!thumbnailElement){   
         const div = document.createElement("div");
         div.classList.add("drop-zone__thumb");
         dropZoneElement.appendChild(div);
   }

    
   if(file.type.includes("image/")){
      const thumbnailElement = document.querySelector("drop-zone__thumb");

         thumbnailElement.dataset.label = file.name;
         const reader = new FileReader();
         reader.readAsDataURL(file);

         reader.onload = function(){
         console.log(reader.result);
         thumbnailElement.style.backgroundImage = 'url(${reader.result})'
   }
   }


}