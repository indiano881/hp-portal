$(() => {
    //books, movies, spells, potion, characters
    const API_URL="https://api.potterdb.com/v1/";
    const API_ENDPOINTS =["books","movies","spells"];

    const getData = async (url) => {
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
       
    }

    const renderBooks = books => {
        let booksArray=books.data;
        $(booksArray).map((index, book)=> {
            let coverImage= book.attributes.cover;//imagine cover
            $(".grid-container").append(`
            <img src=${coverImage} id="picture${index}">
            `)
        })
    }

    const renderMovies = movie => {
        let moviesArray=movie.data;
        $(moviesArray).map((index, movie)=> {
            let posterImage= movie.attributes.poster;//imagine cover
            $(".grid-container").append(`
            <img src=${posterImage} id="picture${index}">
            `)
        })
    }

    const renderSpells = spells => {
        let spellsArray=spells.data;
        $(spellsArray).map((index, spell)=> {
            let spellImage= spell.attributes.image;//imagine cover

            if (spellImage){
                $(".grid-container").append(`
                <img src=${spellImage} id="picture${index}">
                `)
            } else {
                $(".grid-container").append(`<img src="./images/magic.jpg" id="picture${index}>`)
            }
        })
    }

    

    
    






    //Buttons handling
    $(".booksBtn").on("click", async()=> {
        $(".grid-container").empty();
        let booksData= await getData(API_URL+API_ENDPOINTS[0]);
        renderBooks(booksData);
    })
    $(".moviesBtn").on("click", async()=> {
        $(".grid-container").empty();
        let moviesData= await getData(API_URL+API_ENDPOINTS[1]);
        renderMovies(moviesData);
    })
    $(".spellsBtn").on("click", async()=> {
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
connect to an API in a user fired event
make a request for data
handle the returned data in an efficient manner
display more than one property of the returned data on the page >> DO IT!!!!
the page must be responsive
To achieve a Välgodkänt grade you must complete the above and:
Have correct error handling when fetching the data
Append arguments to the request
Multiple calls to the API - eg have a input field that will generate different arguments and a button that fires the request
Semantic code
A consistent code style
*/