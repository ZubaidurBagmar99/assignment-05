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