$(() => {
    //books, movies, spells, potion, characters
    const API_URL="https://api.potterdb.com/v1/";
    const API_ENDPOINTS =["books","movies","spells"];
    
    const harryPotterSoundtrack= new Audio("./audio/MainTheme.mp3")
    harryPotterSoundtrack.preload="auto";
    
    

    const getData = async (url) => {
        try {

            let response = await fetch(url);
            if(!response.ok) {
                throw new Error("Network response error: "+response.status);
            }
            let data = await response.json();
            console.log(data);
            return data;

        } catch (error) {
            $("section").empty().append(`<h3> Network request error: ${error}</h3>`)
        }
        
       
    }

    const renderBooks = books => {
        let booksArray=books.data;
        $(booksArray).map((index, book)=> {
            let coverImage= book.attributes.cover;
            let titleBook= book.attributes.title;
            let releaseDate= book.attributes.release_date;
            $(".grid-container").append(`
            <div class="grid-item">
                <img src=${coverImage} id="picture${index}">
                <h3>${titleBook}</h3>
                <h4>Published: ${releaseDate}</h4>
            </div>
            `)
        })
    }

    const renderMovies = movie => {
        let moviesArray=movie.data;
        $(moviesArray).map((index, movie)=> {
            let posterImage= movie.attributes.poster;
            let titleMovie= movie.attributes.title;
            let releaseDate= movie.attributes.release_date;
            $(".grid-container").append(`
            <div class="grid-item">
                <img src=${posterImage} id="picture${index}">
                <h3>${titleMovie}</h3>
                <h4>Released: ${releaseDate}</h4>
            </div>
            `)
        })
    }

    const renderSpells = spells => {
        let spellsArray=spells.data;
        $(spellsArray).map((index, spell)=> {
            let spellImage= spell.attributes.image;
            let spellName= spell.attributes.name;
            let spellEffect=spell.attributes.effect;
            if (spellImage){
                $(".grid-container").append(`
                <div class="grid-item">
                    <img src=${spellImage} id="picture${index}">
                    <h3>${spellName}</h3>
                    <h4>${spellEffect}</h4>
                </div>
                `)
            } else {
                $(".grid-container").append(`
                <div class="grid-item">
                    <img src="./images/magic.jpg" id="picture${index}">
                    <h3>${spellName}</h3>
                    <h4>${spellEffect}</h4>
                </div>
                `)
            }
        })
    }
    





    //Buttons handling
    $(".booksBtn").on("click", async()=> {
        harryPotterSoundtrack.play();
        $(".grid-container").empty();
        let booksData= await getData(API_URL+API_ENDPOINTS[0]);
        renderBooks(booksData);
    })
    $(".moviesBtn").on("click", async()=> {
        harryPotterSoundtrack.play();
        $(".grid-container").empty();
        let moviesData= await getData(API_URL+API_ENDPOINTS[1]);
        renderMovies(moviesData);
    })
    $(".spellsBtn").on("click", async()=> {
        harryPotterSoundtrack.play();
        $(".grid-container").empty();
        let spellsData= await getData(API_URL+API_ENDPOINTS[2]);
        console.log(spellsData);
        renderSpells(spellsData);
    })



})

/*
Instructions
In this assignment we will create a webpage loaded with AJAX data returned from an API.

This is to test your knowledge of JSON objects, AJAX, working with APIs and html/css/js. Vanilla JS, jQuery or both can be used to complete the assignment.

The choice of API is up to you but please keep in mind any keys you might need. You can use XHR or fetch to access the data.

The page needs to have at least one event that triggers the initial API call. This could be a 'start' button, or a 'search' field with submit or something similar. 

On firing the event an AJAX request is made to an API and data is returned. The data must be a JSON object and not a simple string.

The data that is returned from the call must be dynamically displayed on the page. You can populate pre-existing elements or dynamically create elements.

The specifications will depend somewhat on your choice of API.

Submit both a github pages link and a link to the repo.

To achieve a Godkänt grade you must:
connect to an API in a user fired event ok
make a request for data ok
handle the returned data in an efficient manner ok
display more than one property of the returned data on the page ok
the page must be responsive OK
To achieve a Välgodkänt grade you must complete the above and:
Have correct error handling when fetching the data OK
Append arguments to the request OK
Multiple calls to the API - eg have a input field that will generate different arguments and a button that fires the request OK
Semantic code OK
A consistent code style OK
*/