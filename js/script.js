// Global Variable
const inputField = document.getElementById('input-field');
const cardsSection = document.getElementById('cards-section');
const cardDetailsSection = document.getElementById('card-details-section');

//---Search Function----///
const search = () => {
    const searchText = inputField.value;
    inputField.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayCards(data.data));
}

// ---Display Cards---- ///
const displayCards = (data) => {
    data.slice(0, 20).forEach(element => {
        const div = document.createElement('div');
        div.classList.add("col");
        // console.log(element);
        div.innerHTML = 
        `
            <div class="card">
                <div class='w-50 h-50 mx-auto py-3'>
                    <img src="${element.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Brand: ${element.brand}</h5>
                    <p class="card-text">Phone Name: ${element.phone_name}</p>
                    <button class="btn btn-secondary" onclick="cardData('${element.slug}')">Details</button>
                </div>
            </div>
        `;
        cardsSection.appendChild(div);
    });
}


//----- Card data -----//

const cardData = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCard(data.data));
}

// ----Display Card----//

const displayCard = (data) => {
    // Create Div Element
    const div = document.createElement('div');
    div.classList.add("card");

    // Inserting html element in div
    div.innerHTML = 
    `
        <div class='w-50 h-50 mx-auto py-3'>
            <img src="${data.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">Brand: ${data.brand}</h5>
            <p class="card-text">Phone Name: ${data.name}</p>
            <p class="card-text">Realesed Date: ${data.releaseDate!==''||data.releaseDate!==null?data.releaseDate:'No Release Data Found'}</p>
            <h4>Main Features:</h4>
            <ul id="features">
                <li>Chip-Set: ${data.mainFeatures.chipSet}</li>
                <li>Display-Size: ${data.mainFeatures.displaySize}</li>
                <li>Memory: ${data.mainFeatures.memory}</li>
                <li>Storage: ${data.mainFeatures.storage}</li>
                <h3>Sensors:</h3>
            </ul>
            <h4>Others:</h4>
            <ul>
                <li>Bluetooth: ${data.others.Bluetooth}</li>
                <li>GPS: ${data.others.GPS}</li>
                <li>NFC: ${data.others.NFC}</li>
                <li>Radio: ${data.others.Radio}</li>
                <li>USB: ${data.others.USB}</li>
                <li>WLAN: ${data.others.WLAN}</li>
            </ul>
        </div>
    `;
    cardDetailsSection.appendChild(div);

    // lo tags create and Secsors value in li tags and appenChild thier parentElement 
    data.mainFeatures.sensors.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element;
        document.getElementById('features').appendChild(li);
    });
}