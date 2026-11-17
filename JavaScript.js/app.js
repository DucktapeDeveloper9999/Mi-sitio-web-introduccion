const  idiomasButtons = document.querySelectorAll("[data-idioma]");
const  textsToChange = document.querySelectorAll("[data-section]");
console.log(textsToChange);

idiomasButtons.forEach((button) => {
    button.addEventListener("click", () => {
        fetch(`../idiomas/${button.dataset.idioma}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) => {
                    const section = el.dataset.section;
                    const value =el.dataset.value;

                    el.innerHTML = data[section][value];
                })
            })
    })
})
