document.getElementById('edit-triangle').addEventListener('click', ()=>{
    document.getElementById('show-triangle').classList.remove('hidden');
})
document.getElementById('edit-rectangle').addEventListener('click', ()=>{
    document.getElementById('show-rectangle').classList.remove('hidden');
})
document.getElementById('edit-parallelogram').addEventListener('click', ()=>{
    document.getElementById('show-parallelogram').classList.remove('hidden');
})
document.getElementById('edit-rhombus').addEventListener('click', ()=>{
    document.getElementById('show-rhombus').classList.remove('hidden');
})
document.getElementById('edit-pentagon').addEventListener('click', ()=>{
    document.getElementById('show-pentagon').classList.remove('hidden');
})
document.getElementById('edit-ellipse').addEventListener('click', ()=>{
    document.getElementById('show-ellipse').classList.remove('hidden');
})
let serial = 0;



// triangle
document.getElementById('area-triangle').addEventListener('click',function(){
    
    const name = document.getElementById('name-triangle').innerText;
    const baseOfTriangle = document.getElementById('base-of-triangle').value;
    const heightOfTriangle = document.getElementById('height-of-triangle').value;
    if (baseOfTriangle === "" || isNaN(baseOfTriangle) || baseOfTriangle < 0 ) {
        alert('Please enter first valid number');
    }
    else if (heightOfTriangle === "" || isNaN(heightOfTriangle) || heightOfTriangle < 0) {
        alert('Please enter second valid number');
    }
     else {
        serial += 1;
        const triangleMultiplication =  0.5 * baseOfTriangle * heightOfTriangle;
        return dataDisplayAreaCalculation(name,triangleMultiplication.toFixed(2));
    }
});
// Rectangle
document.getElementById('area-rectangle').addEventListener('click',function(){
    const name = document.getElementById('name-rectangle').innerText;
    const baseOfRectangle = document.getElementById('width-of-rectangle').value;
    const heightOfRectangle = document.getElementById('length-of-rectangle').value;
    if (baseOfRectangle === "" || isNaN(baseOfRectangle) || baseOfRectangle < 0 ) {
        alert('Please enter first valid number');
    }
    else if (heightOfRectangle === "" || isNaN(heightOfRectangle) || heightOfRectangle < 0) {
        alert('Please enter second valid number');
    }
     else {
        serial += 1;
        const rectangleMultiplication = baseOfRectangle * heightOfRectangle;
        return dataDisplayAreaCalculation(name,rectangleMultiplication.toFixed(2))
    }
    
});

// Parallelogram
document.getElementById('area-parallelogram').addEventListener('click',function(){
    const name = document.getElementById('name-parallelogram').innerText;
    const baseOfParallelogram = document.getElementById('base-of-parallelogram').value;
    const heightOfParallelogram = document.getElementById('height-of-parallelogram').value;
    if (baseOfParallelogram === "" || isNaN(baseOfParallelogram) || baseOfParallelogram < 0 ) {
        alert('Please enter first valid number');
    }
    else if (heightOfParallelogram === "" || isNaN(heightOfParallelogram) || heightOfParallelogram < 0) {
        alert('Please enter second valid number');
    }
     else {
        serial += 1;
        const parallelogramMultiplication = baseOfParallelogram * heightOfParallelogram;
        return dataDisplayAreaCalculation(name,parallelogramMultiplication.toFixed(2))
    }
    
});


// Rhombus
document.getElementById('area-rhombus').addEventListener('click',function(){
    const name = document.getElementById('name-rhombus').innerText;
    const distanceOneRhombus = document.getElementById('distance-one-rhombus').value;
    const distanceTwoRhombus = document.getElementById('distance-two-rhombus').value;
    if (distanceOneRhombus === "" || isNaN(distanceOneRhombus) || distanceOneRhombus < 0 ) {
        alert('Please enter first valid number');
    }
    else if (distanceTwoRhombus === "" || isNaN(distanceTwoRhombus) || distanceTwoRhombus < 0) {
        alert('Please enter second valid number');
    }
     else {
        serial += 1;
        const rhombusMultiplication = distanceOneRhombus * distanceTwoRhombus;
        return dataDisplayAreaCalculation(name,rhombusMultiplication.toFixed(2))
    }
    
});















// Area Calculation
function dataDisplayAreaCalculation(name,areaMultiplication) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.style.display = 'grid';
    tr.style.gridTemplateColumns = 'auto auto auto auto';
    tr.style.margin ='16px 0';

    tr.innerHTML = `
      <td class="mr-4">${serial}</td>
      <td>${name}</td>
      <td class="ml-2">${areaMultiplication}cm<sup>2</sup></td>
      <td class="text-white bg-blue-600 px-3 rounded-lg cursor-pointer ml-2">Convert to m<sup>2</sup></td>      
    `;
    container.appendChild(tr);
}

// color
function colorGenerate(elementId){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    document.getElementById(elementId).style.backgroundColor = randomCode;
}