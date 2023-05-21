/* ===== Helper Functions ===== */
function copyToClipboard (inputText) {
  const el = document.createElement('textarea');
  el.value = inputText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  
  /* Alert the copied text */
  alert("Copied the text: " + inputText);
};

function updateStyleChecker() {
  
  if (!(debug)) {
    
    let debuggerElement = document.getElementById('debugger');
    
    if (window.getComputedStyle(debuggerElement).display === "none") {
    
      return;
    
    } else {
      
      debuggerElement.style.display = 'none';  
      
    }
       
  }
  
  let styleCheckerContent = "";
  
  let styleElements = document.getElementsByTagName('style');
  
  for (let i = 0; i < styleElements.length; i++) {
    
    if (!(styleElements[i].id)) {
      
      continue;
      
    }
    
    styleCheckerContent += `id: ${styleElements[i].id}`;
    styleCheckerContent += styleElements[i].innerHTML;
    styleCheckerContent += '<br>';
    
  }
  
  document.getElementById('styleChecker').innerHTML = styleCheckerContent;
   
}

function getInputValue(inputId) {
  
  return document.getElementById(inputId).value;

}

function updateDisplayCSS(className, value) {
  
  let elements = document.getElementsByClassName(className);
  
  for (let i = 0; i < elements.length; i++) {
    
    elements[i].innerHTML = String(value).trim();
    
  }
  
}

function updateThumbColor() {
  
  thumbColor = getInputValue('thumbColor');
  
  document.getElementById('styleThumbColor').innerHTML = `
    *::-webkit-scrollbar-thumb {
      background-color: ${thumbColor};
    }
  `;
  
  document.getElementById('styleColor').innerHTML = `
    * {
      scrollbar-color: ${thumbColor} ${trackColor};
    }
  `;
  
  updateDisplayCSS('displayThumbColor', thumbColor);
  
  updateStyleChecker();
  
}

function updateTrackColor() {
  
  trackColor = getInputValue('trackColor');
  
  document.getElementById('styleTrackColor').innerHTML = `
    *::-webkit-scrollbar-track {
      background: ${trackColor};
    }
  `;
  
  document.getElementById('styleColor').innerHTML = `
    * {
      scrollbar-color: ${thumbColor} ${trackColor};
    }
  `;
  
  updateDisplayCSS('displayTrackColor', trackColor);
  
  updateStyleChecker();
  
}

function updateWidthStyle() {
  
  widthStyle = getInputValue('widthStyle');
  
  document.getElementById('styleWidthStyle').innerHTML = `
    * {
      scrollbar-width: ${widthStyle};
    }
  `;
  
  updateDisplayCSS('displayWidthStyle', widthStyle);
  
  updateStyleChecker();
  
}

function updateWidth() {
  
  width = getInputValue('width');
  
  document.getElementById('styleWidth').innerHTML = `
    *::-webkit-scrollbar {
      width: ${width}px;
    }
  `;
  
  updateDisplayCSS('displayWidth', width);
  
  updateStyleChecker();
  
}

function updateBorderRadius() {
  
  borderRadius = getInputValue('borderRadius');
  
  document.getElementById('styleBorderRadius').innerHTML = `
    *::-webkit-scrollbar-thumb {
      border-radius: ${borderRadius}px;
    }
  `;
  
  updateDisplayCSS('displayBorderRadius', borderRadius);
                   
  updateStyleChecker();
  
}

function updateBorderWidth() {
  
  borderWidth = getInputValue('borderWidth');
  
  document.getElementById('styleBorder').innerHTML = `
    *::-webkit-scrollbar-thumb {
      border: ${borderWidth}px ${borderStyle} ${borderColor};
    }
  `;
  
  updateDisplayCSS('displayBorderWidth', borderWidth);
                   
  updateStyleChecker();
  
}

function updateBorderStyle() {
  
  borderStyle = getInputValue('borderStyle');
  
  document.getElementById('styleBorder').innerHTML = `
    *::-webkit-scrollbar-thumb {
      border: ${borderWidth}px ${borderStyle} ${borderColor};
    }
  `;
  
  updateDisplayCSS('displayBorderStyle', borderStyle);
                   
  updateStyleChecker();
  
}

function updateBorderColor() {
  
  borderColor = getInputValue('borderColor');
  
  document.getElementById('styleBorder').innerHTML = `
    *::-webkit-scrollbar-thumb {
      border: ${borderWidth}px ${borderStyle} ${borderColor};
    }
  `;
  
  updateDisplayCSS('displayBorderColor', borderColor);
                   
  updateStyleChecker();
  
}

/* ===== Setup ===== */
let debug = false;

let thumbColor = getInputValue('thumbColor');
let trackColor = getInputValue('trackColor');
let widthStyle = getInputValue('widthStyle');
let width = getInputValue('width');
let borderRadius = getInputValue('borderRadius');
let borderWidth = getInputValue('borderWidth');
let borderStyle = getInputValue('borderStyle');
let borderColor = getInputValue('borderColor');

updateThumbColor();
updateTrackColor();
updateWidthStyle();
updateWidth();
updateBorderRadius();
updateBorderWidth();
updateBorderStyle();
updateBorderColor();

updateStyleChecker();

/* ===== Event Listeners ===== */
document.getElementById('thumbColor').addEventListener("change", updateThumbColor);
document.getElementById('trackColor').addEventListener("change", updateTrackColor);
document.getElementById('widthStyle').addEventListener("change", updateWidthStyle);
document.getElementById('width').addEventListener("change", updateWidth);
document.getElementById('borderRadius').addEventListener("change", updateBorderRadius);
document.getElementById('borderWidth').addEventListener("change", updateBorderWidth);
document.getElementById('borderStyle').addEventListener("change", updateBorderStyle);
document.getElementById('borderColor').addEventListener("change", updateBorderColor);

document.getElementsByClassName('copy')[0].addEventListener("click", function () {
  
  let copyText = document.getElementById('cssCode').innerText;
  
  copyToClipboard(copyText);
  
});

document.getElementsByClassName('info')[0].addEventListener("click", function () {
  
  let instructions = document.getElementsByClassName("instructions")[0];
  
  if (window.getComputedStyle(instructions).display === "none") {
    
    instructions.style.display = "inline";
    instructions.classList.add("slide-left");
    instructions.classList.remove("slide-right");
                                  
    
  } else {
    
    instructions.classList.add("slide-right");
    instructions.classList.remove("slide-left");
    setTimeout(function () {
      instructions.style.display = "none";
    }, 500);
     
  }
  
});