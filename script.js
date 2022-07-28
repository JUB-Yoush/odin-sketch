
  let canvas =  document.getElementById("canvas");
  let sizeInput = document.getElementById("canvas-size-input")
  let resInput = document.getElementById("canvas-resolution-input")
  let btnUpdate = document.getElementById("btnUpdate")
  
  let max_size = 128
  let canvas_size = 10
  let pixel_size = Math.round(max_size /canvas_size)

  let colour_array = ["red","blue","green"] 
  let current_colour = 1

  

  

  function makeCanvas(){
    canvas.style.width = pixel_size * canvas_size +"px";
    canvas.style.heigh = pixel_size * canvas_size +"px";
    for (let i = 0; i < canvas_size * canvas_size; i++){
      let newPixel = document.createElement("div")
      newPixel.classList.add('pixel');
      newPixel.style.width = pixel_size +"px";
      newPixel.style.height = pixel_size +"px";
      newPixel.addEventListener("click", function (e){
          colourPixel(e)
      })
      canvas.appendChild(newPixel)
    }
  }
  
  function colourPixel(e){
      console.log(e)
      e.originalTarget.style.background = "blue";
  }
  
  function updateCanvas(){
    
    console.log(resInput.value)
    console.log(sizeInput.value)
    while (canvas.firstChild) {
     canvas.removeChild(canvas.firstChild);
    }
   
    if (resInput.value >= 2 && resInput.value <= 128){
      canvas_size = resInput.value;
    }else{
      alert("Resolution must be an interger between 2 and 128")
    }

    if (sizeInput.value >= 64 && sizeInput.value <= 800){
      max_size = sizeInput.value;
    }else{
      alert("Resolution must be an interger from 64 and 800")
    }
    pixel_size = Math.round(max_size /canvas_size)
    console.log(canvas_size)
    console.log(max_size)
    makeCanvas()
  }
  makeCanvas()

  btnUpdate.addEventListener("click", function(){updateCanvas()})
