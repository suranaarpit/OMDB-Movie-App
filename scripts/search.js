function submit(){
    let movie = document.querySelector("#find").value;
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=d741de38`

    async function oMDB(){
        try{
            let res = await fetch(url)

            let data = await res.json()
            console.log("data:", data);

            if(data.Response == "True"){
                display(data)
            }
            else{

                error()
                
            }
        }
        catch(err){
            console.log("err:",err)
        }
    }
    oMDB()
}

function error(){

document.getElementById("movie").innerHTML = "";
let img = document.createElement("img");
img.setAttribute("id", "errorGif")
img.src = "https://c.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif";
document.getElementById("movie").append(img);


}

function display(obj){
    document.getElementById("movie").innerHTML = "";
    let movie = document.getElementById("movie");

    let movie_advert = document.createElement("div")
    movie_advert.setAttribute("class", "movie_advert")

    let info = document.createElement("div")
    info.setAttribute("class", "disc")

    let img = document.createElement("img")
    img.setAttribute("id", "movie_poster")
    img.src = obj.Poster;
    movie_advert.append(img)

    let name = document.createElement("h2");
    name.innerHTML = `Title : ${obj.Title}`;

    let release = document.createElement("p");
    release.innerHTML = `Release : ${obj.Released}`;

    let actors = document.createElement("p");
    actors.innerHTML = `Actors : ${obj.Actors}`;

    let directors = document.createElement("p");
    directors.innerHTML = `Director : ${obj.Director}`;

    let genre = document.createElement("p");
    genre.innerHTML = `Gnere : ${obj.Genre}`

    let country = document.createElement("p");
    country.innerHTML = `Country : ${obj.Country}`

    let lang = document.createElement("p");
    lang.innerHTML = `Langauge : ${obj.Language}`;

    let type = document.createElement("p");
    type.innerHTML = `Type : ${obj.Type}`

    let run = document.createElement("p");
    run.innerHTML = `Runtime : ${obj.Runtime}`

    let boxof = document.createElement("p");
    boxof.innerHTML = `Box Office : ${obj.BoxOffice}`

    let imdb = document.createElement("p");
    imdb.innerHTML = `IMDB Rating : ⭐${obj.imdbRating}`

    if(obj.imdbRating>8.5){
        let recum = document.createElement("h1");
        recum.setAttribute("id", "recumm");
        recum.innerHTML = "⭐Recommended⭐"
        info.append(recum);
    }


    info.append(name, release, actors, directors, genre, country, lang, type, run, boxof, imdb);

    movie.append(movie_advert, info)

}