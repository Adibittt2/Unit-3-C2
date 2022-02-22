async function apiCall(url) {


    //add api call logic here

    try{

        let api = await fetch(url);

        let data = await api.json();

        return data;

    }
    catch(error){

        console.log(error);
    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(element => {
        
        let frame = document.createElement("div");

        let image = document.createElement("img");
        let title = document.createElement("h1");
        // let image = document.createElement("");

        image.src = element.urlToImage;
        title.innerHTML = element.title;

        // element.addEventListener("click",fun());

        // function fun(){

        //     // let frame1 = document.createElement("div");

        //     // let image1 = document.createElement("img");
        //     // let title1 = document.createElement("h1");
        //     // let description1 = document.createElement("h5");
        //     // // let title1 = document.createElement("h1");
        //     // // let image = document.createElement("");
    
        //     // image1.src = element.urlToImage;
        //     // title1.innerHTML = element.title;
        //     // description1.innerHTML = element.desciption;

        //     // frame1.append(image1,title1,description1);
        //     // main.append(frame1);

        //     window.location.href = "news.html";

        // }
        frame.append(image,title);

        main.append(frame);

    });

    

}

export { apiCall, appendArticles }