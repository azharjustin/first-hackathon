var nes=document.createElement("div")
var button=document.createElement("button");
button.style.marginLeft="42%"

button.innerText="search";
nes.appendChild(button)



 async function fetchData(){
     try{
         var countryData=await fetch("https://api.nationalize.io/?name=michael")
         var countries=await countryData.json()
         console.log(countries);
        
          

         button.addEventListener("click",function(){
             if(document.getElementById("name").value!=0) {

             
                 var newc=countries.country;
                 
            //  newc.forEach(function (element,index){
                 var net=document.createElement("div")
                 var net2=document.createElement("div")
                 net.innerText="CountryID:"+countries.country[0].country_id + ' , '+"Probability:" + countries.country[0].probability;
                 net2.innerText="CountryID:"+countries.country[1].country_id + ' , '+"Probability:" + countries.country[1].probability;
                 net.style.marginLeft="40%"
                 net.style.marginTop="10px"
                 net.style.fontSize="30px"
                
                 net2.style.marginLeft="40%"
                 net2.style.marginTop="10px"
                 net2.style.fontSize="30px"
                
                 nes.appendChild(net);
                 nes.appendChild(net2);
            //  });
            }
         })
         
    
 
         document.body.appendChild(nes)
        
     }   


     catch(error){
         console.log(error)
     }
 }

           fetchData()