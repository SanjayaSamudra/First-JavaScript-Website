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
                        <td>${element.name.common}
                            <p> 
                                Subregion : ${element.subregion} <br>
                                Population : ${element.population} <br>
                                <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Maps</a>
                            </p>
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
                    console.log(element.name.common);
    });

    tblCountries.innerHTML = tabelBody;

})