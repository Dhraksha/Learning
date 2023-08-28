document.querySelectorAll('drop-zone-input').forEach(inputElement => {
   const dropZoneElement = inputElement.closest('.drop-zone');
   
   dropZoneElement.addEventListener('click' , function(){
    inputElement.click();
   })
})