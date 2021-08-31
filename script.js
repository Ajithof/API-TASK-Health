function foo(){
    var cc=document.getElementById("text").Value;
console.log(cc);

async function getdata(){

    let data= await fetch('https://api.covid19api.com/total/dayone/country/${cc}');
    let datares=await data.json();
    console.log(datares);

    console.log(datares[i].confirmed+" "+datares[i].Active+" "+datares[i].Deaths+" "+datares[i].Date);
}
getdata();
}





