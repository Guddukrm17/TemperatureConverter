function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const result = document.getElementById("result");
    
    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        result.textContent = "Please enter a valid temperature in Celsius";
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const result2 = document.getElementById("result2");
    
    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        result2.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        result2.textContent = "Please enter a valid temperature in Fahrenheit";
    }
}
