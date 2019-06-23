// The function for Getting the images data
function getpic(){
    var image = document.getElementById("search").value;
    let url = `https://images-api.nasa.gov/search?q=${image}`;
    document.querySelector("body").background = "";

    fetch(url)
    .then(res => res.json())
    .then((out) => {
        for(let i=0; i<5; i++) {
            var url = out.collection.items[i].href;
            fetch(url)
                .then(res => res.json())
                .then((image) => {
                    var pic = image[0];
                    $(".formContainer").hide();
                    $("#result").append(`<div class="jumbotron" id="id_${i}"> \
                    <div class="row">
                        <div class="col-xs-12 col-sm-12" style="text-align:center; margin:0;">
                        <img src=${pic} width=50% height=100%>
                        </div>
                    </div>
                </div>`);
                })
                .catch(err => {throw err});
        }
    })
    .catch(err => { throw err });
}

// Getting the picture of the day as the background picture when the page loads.
window.onload = function(){
    let url = "https://api.nasa.gov/planetary/apod?api_key=<GOpmNT4AHO4onEqhKpWtx4vQ3udWtV7wEvr2b0eH>";
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            image = out.hdurl;
            $('#result').empty();
            document.querySelector("body").background = `${image}`;
        })
        .catch(err => { throw err });
}