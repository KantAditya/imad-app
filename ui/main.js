console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'This is modified Web-App';
//Move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};