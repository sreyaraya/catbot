const url = "https://api.thecatapi.com/v1/images/search?api_key=live_cUyvRuZiyLfQvnakzggGtoh33Uewk0EvIUAKK3ZGBQobDBfRSd9EIEDqI64JaKgj";
const btn = document.getElementById("btn")
const img = document.getElementById("image")
//load into method
//button event listener

//oadImage()


function loadImage(){
fetch(url)
.then((response)=>{
    return response.json()
}) 
.then((data)=>{
     var html = '<img class="image" id = "image" src="' + data[0]["url"] + '">';
     img.innerHTML = html;
})
.catch(error => {
    console.error(error)
})

document.body.style.backgroundColor = `#${randomColor()}`


}

function randomColor() {
    return parseInt(Math.random() * (1000000 - 100000) + 100000);
}

btn.addEventListener("click", loadImage);


