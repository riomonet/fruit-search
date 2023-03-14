const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const datalist = document.querySelector('#fruits');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
    results = fruit.filter(item => item.toLowerCase().includes(str));
    showSuggestions(results,str);
}

function searchHandler(e) {


    search(input.value.toLowerCase());
}

function showSuggestions(results, inputVal) {

    datalist.innerHTML='';  //reset list

    let option;
    for(let result of results) {
      	option = document.createElement('option');
	option.setAttribute("value",`${result}`);
	datalist.append(option);
     }
}
    
function useSuggestion(e) {
    
    console.log(e.target.value);
    datalist.innerHTML='';  //reset list
}

input.addEventListener('keyup', searchHandler);
input.addEventListener('change', useSuggestion);



