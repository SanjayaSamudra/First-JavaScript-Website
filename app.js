let tblCountries = document.getElementById("tblCountries");

let tabelBody =`<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        tabelBody += `<tr>
                        <td><h1 class="head1" >${element.name.common}</h1>
                            <p> 
                                <div>
                                    Official Name : <h5>${element.name.official}</h5> <br>
                                </div>
                                <div class="pad1">
                                    Capital : ${element.capital} <br>
                                </div>
                                <div class="pad2">
                                    Population : ${element.population} <br>
                                </div>
                                <div>
                                    <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Maps</a>
                                </div>      
                            </p>
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
                    console.log(element.name.common);
    });

    tblCountries.innerHTML = tabelBody;

})

function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("capital");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            capital.innerText=obj.capital;
            population.innerText=obj.population
        })
    })
}