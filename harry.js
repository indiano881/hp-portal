$(() => {
    //books, movies, spells, potion, characters
    const API_URL="https://api.potterdb.com/v1/";
    const API_ENDPOINTS =["books","movies","spells","potion","characters"];

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
            $(".grid-container").append(`
            <img src=${spellImage} id="picture${index}">
            `)
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