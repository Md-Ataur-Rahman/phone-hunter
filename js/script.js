// Global Variable
const inputField = document.getElementById('input-field');


//---Search Function----///
const search = () => {
    const searchText = inputField.value;
    inputField.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data));
}