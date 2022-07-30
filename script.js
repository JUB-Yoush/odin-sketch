
  let canvas =  document.getElementById("canvas");
  let sizeInput = document.getElementById("canvas-size-input")
  let resInput = document.getElementById("canvas-resolution-input")
  let btnUpdate = document.getElementById("btnUpdate")
  let btnAddColour = document.getElementById("btnAddColour")
  let rInput = document.getElementById("r-input")
  let gInput = document.getElementById("g-input")
  let bInput = document.getElementById("b-input")
  
  let max_size = 256
  let canvas_size = 16
  let pixel_size = Math.round(max_size /canvas_size)

  let colour_name_array = ["black","navy","maroon","green","blue","brown","dgrey","lgray","white","red","orange","yellow","green","blue","grey","pink","beige"] 
  let colour_hex_array = ["#000000","#1d2b53","#7e2553","#008751","#ab5236","5f574f","c2c3c7","fff1e8","ff004d","ffa300","ffec27","00e436","29adff","83769c","ff77a8","ffccaa"] 
  let current_colour = ""
  let colourPreview = document.getElementById("colour-preview")
  let rValue = rInput.value
  let gValue = gInput.value
  let bValue = bInput.value

  function addColour(){
   if (rValue >= 0 && rValue < 256 && gValue >= 0 && gValue < 256 && bValue >= 0 && bValue < 256){
      /*let hex_colour = decimalToHexString(rValue) + decimalToHexString(gValue) + decimalToHexString(bValue)
      current_colour = ""
      current_colour = "#"+hex_colour
      console.log(hex_colour) */
      rValue = rInput.value
      gValue = gInput.value
      bValue = bInput.value
   }
  else{
    alert('invalid colour input')
  }
    
  }

  

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
      console.log("rgb("+String(rValue)+","+String(gValue)+","+String(bValue)+")")
      e.originalTarget.style.background = "rgb("+String(rValue)+","+String(gValue)+","+String(bValue)+")";
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

  function updatePreview(){
    
    // when it's a proper colour, update the box next to it\
    let rValuePreview = rInput.value
    let gValuePreview = gInput.value
    let bValuePreview = bInput.value
    if (rValuePreview.length == 0){
      rValuePreview = 0
    }
    console.log(rValuePreview)
    if (rValuePreview >= 0 && rValuePreview < 256 && gValuePreview >= 0 && gValuePreview < 256 && bValuePreview >= 0 && bValuePreview < 256){
      console.log('ggo string')
      colourPreview.style.backgroundColor = "rgb("+String(rValuePreview)+","+String(gValuePreview)+","+String(bValuePreview)+")";
    }else{
      alert('invalid')
    }
  }


  makeCanvas()

  btnUpdate.addEventListener("click", function(){updateCanvas()})
  btnAddColour.addEventListener("click", function(){addColour()})
  
