

const lightBox = document.createElement('div')
lightBox.id='lightbox'
document.body.appendChild(lightBox)

const images = document.querySelectorAll()
images.forEach(image =>{
  image.addEventListener('click', e => {
    lightBox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    lightBox.appendChild(img)
  })
})

document.getElementById("contactForm").addEventListener("submit", function(event)
{
  event.preventDefault();
alert("Thank for your querie")
});
