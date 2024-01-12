$(() => {

    const API_URL="https://api.potterdb.com/v1/";

    $(".searchBtn").on("click", ()=> {
        let userInput=$("#search-bar").val();//inserire regex??
        getData(API_URL+userInput);
    })
    

    const getData = async (url) => {
        try {
            let response = await fetch(url);
            if(!response.ok) {
                throw new Error("Error data RESPONSE"+response.status);
            }
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error data REQUEST:"+ error);
        }
    }
    
    
    
    

})