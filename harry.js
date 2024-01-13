$(() => {
    //books, movies, spells, potion, characters
    const API_URL="https://api.potterdb.com/v1/";

    const getData = async (url) => {
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        renderBooks(data);
    }


    const renderBooks = books => {
        let booksArray=books.data;
        $(booksArray).map((index, book)=> {

            let coverImage= book.attributes.cover;//imagine cover
            $(".grid-container").empty().append(`
            <img src=${coverImage} id="picture${index}">
            `)


        })


        
    }
    
    
    $(".searchBtn").on("click", ()=> {
        let userInput=$("#search-bar").val();//inserire regex??
        getData(API_URL+userInput);
        
    })

})