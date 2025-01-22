function submitForm(){
    var celcius = parseFloat(document.getElementById('celcius').value);

    // var kelvin = parseFloat(document.getElementById('kelvin').value);


    var celAfar = celcius *9 / 5 + 32;
    var celAkel = celcius + 273.15;



    // var kelAcel = kelvin - 273.15;
    // var kelAfar =



    document.getElementById('resultado').innerHTML = "Conversión a farenheit: "+(celAfar) +"<br>"+ "Conversión a Kelvin: "+"<strong>"+(celAkel)+"</strong>";





}





// var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
// var farAcel = fahrenheit -32 * 5/9;
// document.getElementById('resultado').innerHTML = "Farenheit a celcius"+(farAcel)








