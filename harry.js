$(() => {


    const API_URL="https://api.potterdb.com";

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
    };
    
    getData(API_URL+"/v1/books");
    
    

})