var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    const year = Math.floor(this.value / 10 + 2015);
    document.getElementById('year').innerText = year;
} 