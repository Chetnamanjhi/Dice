let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', () => {
    let img = document.getElementById('image');
    let random = Math.floor(Math.random() * 6) + 1;
    
    img.setAttribute("src", `../Image/photo/${random}.png`);


})