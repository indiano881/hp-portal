$(() => {

    const API_URL="https://api.potterdb.com/v1/";

    
    

    const getData = async (url) => {
        try {
            let response = await fetch(url);
            if(!response.ok) {
                throw new Error("Error data RESPONSE"+response.status);
            }
            let data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error data REQUEST:"+ error);
        }
    }
    const getBooks = () => {
        let coverImage= data.data[0].attributes.cover;//immaggine cover
        $("article").append(`
        <img src=${coverImage}>
        `)
    }
    
    
    $(".searchBtn").on("click", ()=> {
        let userInput=$("#search-bar").val();//inserire regex??
        getData(API_URL+userInput);
        getBooks();
    })

})