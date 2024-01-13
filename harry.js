$(() => {

    const API_URL="https://api.potterdb.com/v1/";

    const getData = async (url) => {
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
            
        
    }


    const renderBooks = book => {
        let coverImage= data.data[0].attributes.cover;//immaggine cover
        $("article").append(`
        <img src=${coverImage}>
        `)
    }
    
    
    $(".searchBtn").on("click", ()=> {
        let userInput=$("#search-bar").val();//inserire regex??
        getData(API_URL+userInput);
        
    })

})