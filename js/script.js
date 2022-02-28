// Global Variable
const inputField = document.getElementById('input-field');
const cardsSection = document.getElementById('cards-section');

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
        console.log(element);
        div.innerHTML = 
        `
            <div class="card">
                <div class='w-50 h-50 mx-auto py-3'>
                    <img src="${element.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Brand: ${element.brand}</h5>
                    <p class="card-text">Phone Name: ${element.phone_name}</p>
                    <button class="btn btn-secondary">Details</button>
                </div>
            </div>
        `;
        cardsSection.appendChild(div);
    });
}