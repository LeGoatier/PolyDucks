const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Toggle the dropdown menu when the select box is clicked
    select.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
        caret.classList.toggle('caret-rotate');
        select.classList.toggle('select-clicked');
    });

    // Add event listener for each option inside the dropdown
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Update the selected value to the text of the clicked option
            selected.innerText = option.innerText;

            // Close the dropdown menu after an option is selected
            menu.classList.remove('menu-open');
            caret.classList.remove('caret-rotate');
            select.classList.remove('select-clicked');

            // Remove active class from all options
            options.forEach(_option => {
                _option.classList.remove('active');
            });

            // Add active class to the selected option
            option.classList.add('active');
        });
    });
});