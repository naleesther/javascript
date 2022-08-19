function products(){
    fetch('localhost:5000/products/fruits')
    .then((result) => result.json())
    document.getElementById('fruList').innerText=result.category="fruits"
    document.getElementById('vegList').innerText=result
}
products()
