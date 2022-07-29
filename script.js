
  let canvas =  document.getElementById("canvas");
  let sizeInput = document.getElementById("canvas-size-input")
  let resInput = document.getElementById("canvas-resolution-input")
  let btnUpdate = document.getElementById("btnUpdate")
  
  let max_size = 128
  let canvas_size = 10
  let pixel_size = Math.round(max_size /canvas_size)

  let colour_name_array = ["black","navy","maroon","green","blue","brown","dgrey","lgray","white","red","orange","yellow","green","blue","grey","pink","beige"] 
  let colour_hex_array = ["#000000","#1d2b53","#7e2553","#008751","#ab5236","5f574f","c2c3c7","fff1e8","ff004d","ffa300","ffec27","00e436","29adff","83769c","ff77a8","ffccaa"] 
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
