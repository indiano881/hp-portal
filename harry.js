$(() => {
    //books, movies, spells, potion, characters
    const API_URL="https://api.potterdb.com/v1/";
    const API_ENDPOINTS =["books","movies","spells"];
    //music
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

