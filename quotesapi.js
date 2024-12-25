var data;
async function fetchData(){
    try{
        var response = await fetch("https://official-joke-api.appspot.com/jokes/random/30");
         data= await response.json();
         console.log(data);
         display();
    }
    catch(err){
        console.log(err);
    }
}

fetchData();

function display(){
    data.forEach(obj => {
        const setup= obj.setup;
        const punchline= obj.punchline;
        const temp= '<div class="quotes"><h2>'+setup+'</h2> <h2>'+punchline+'</h2> </div>';
        document.getElementById('quotes').insertAdjacentHTML('beforeend',temp);
    });
}
