function toggleLanguage() {
    var elements = [
        {
            element: document.getElementsByClassName("language-switch")[0],
            englishText: "Home",
            spanishText: "Inicio"
        },
        {
            element: document.getElementsByClassName("language-switch")[1],
            englishText: "Works",
            spanishText: "Trabajos"
        },
        {
            element: document.getElementsByClassName("language-switch")[2],
            englishText: "About",
            spanishText: "Sobre mi"
        },
        {
            element: document.getElementsByClassName("language-switch")[3],
            englishText: "Contact",
            spanishText: "Contacto"
        },
        {
            element: document.getElementsByClassName("language-switch")[4],
            englishText: "Digital Designer & Front-End Developer",
            spanishText: "Diseñadora Digital & Desarrolladora Front-End"
        },
        // Add more elements as needed
    ];

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i].element;
        var englishText = elements[i].englishText;
        var spanishText = elements[i].spanishText;

        if (element.textContent === englishText) {
            element.textContent = spanishText;
        } else {
            element.textContent = englishText;
        }
    }
}