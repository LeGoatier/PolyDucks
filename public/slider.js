var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = async function() {
    const year = Math.floor(this.value / 10 + 2015);
    document.getElementById('year').innerText = year;
    console.log(year);
    const type = getType();
    console.log(type);
    const data = await fetchData(year, type);
    draw(data);
    _year = year;
} 