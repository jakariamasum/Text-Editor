const textArea=document.getElementById('textarea');

// text size increse or decrese
 document.getElementById('text-size').addEventListener('change',function(){
    
     let value1=this.value;
    console.log(value1)
     textArea.style.fontSize = value1 + "px";
});
document.getElementById('bold').addEventListener('click',function(){
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal";
        classList.remove("active");
    }
    else {
        textArea.style.fontWeight = "bold";
        classList.add("active");
    }
});
// make text italic
document.getElementById('italic').addEventListener('click',function(){
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal";
        classList.remove("active");
    }
    else {
        textArea.style.fontStyle = "italic";
        classList.add("active");
    }
}); 

// make text underline
document.getElementById('underline').addEventListener('click',function(){
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none";
        classList.remove("active");
    }
    else {
        textArea.style.textDecoration = "underline";
        classList.add("active");
    }
});

// text align-left 
document.getElementById('align-left').addEventListener('click',function(){
    textArea.style.textAlign = "left";
});

// text align center
document.getElementById('align-center').addEventListener('click',function(){
    textArea.style.textAlign = "center";
});

// text align-right
document.getElementById('align-right').addEventListener('click',function(){
    textArea.style.textAlign = "right";
});

// text-upperCase
document.getElementById('upperCase').addEventListener('click',function(){
    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "none";
        classList.remove("active");
    }
    else {
        textArea.style.textTransform = "uppercase";
        classList.add("active");
    }
});

// formate remover
document.getElementById('slash').addEventListener('click',function(){
    textArea.style.fontWeight = "normal";
    textArea.style.textAlign = "left";
    textArea.style.fontStyle = "normal";
    textArea.style.textTransform = "capitalize";
    textArea.value = "";
}); 

// color change
document.getElementById('color').addEventListener('change',function(){
    let value = this.value;
    textarea.style.color = value;
});

// load page
window.addEventListener('load', function() {
    textarea.value = "";
});
