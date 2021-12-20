
   
let url = "https://api.giphy.com/v1/gifs/search?api_key=gDcJ41nbcDGidGMqIV7b4iKCH7fPUuXr&q="
let button = document.getElementById("btn");
let backbtn = document.querySelector("#back-btn");
let topconatiner = document.querySelector(".container");
    backbtn.style.display = "none";
button.addEventListener("click",()=>{
    topconatiner.style.display ="none";
    backbtn.style.display = "block";
  //Appending the search input to the url
  
    let searchVal = document.getElementById("search").value;
    let finalUrl = url+searchVal;
    

  // getting the documents

    let gifbody = document.getElementById("information");
    let bodyPage = document.getElementById("body-container");
    let contentBody = document.getElementById("content-box");
   //console.log(url);
    console.log(finalUrl);
    
    //fetching the data by async await method

    const fetchData = async function() {
        try{
          
          const response = await fetch(finalUrl);
          const content = await response.json();
          
          //creating the img element to append the img url for 25 images 

           for(let i =0; i<25; i++){ 
      
           let item=  document.createElement('img');

            item.src=content.data[i].images.preview_gif.url;
       
            bodyPage.appendChild(item);

            backbtn.addEventListener("click", ()=>{
                bodyPage.innerHTML="";
                topconatiner.style.display ="block";
                backbtn.style.display = "none";
        
            })
  
        
           }
         

        }
        catch (err){
            console.log(err);
        }

    } 
    fetchData();

 
    
});