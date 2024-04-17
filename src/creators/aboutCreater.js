const h2 = document.querySelector('#aboutContent h2');
export const bindingAboutData = data => {
    h2.innerHTML = " "
    console.log(data);
    h2.textContent = data.title;

    const p = document.querySelector('#aboutContent p');
    p.innerHTML = " "
    p.textContent = data.description;

    const img = document.querySelector('#aboutContent .img-fluid');
    if (data && data.about && data.about.image) {
        img.src = data.about.image;
    } else {
        console.error("Image source not found or invalid");
    }

    
}