const getSections = () => JSON.parse(sessionStorage.getItem("sections"));
const setSections = (sections) => sessionStorage.setItem("sections", JSON.stringify(sections));

const getCurrSection = () => JSON.parse(sessionStorage.getItem("currSection"));
const setCurrSection = (currSection) => sessionStorage.setItem("currSection", JSON.stringify(currSection));

function init() {
    let sections = document.getElementsByTagName("section");
    let sectionObject = [];
    for (let i = 0; i < sections.length; i++) { sectionObject.push(sections[i].id); }
    setSections(sectionObject);
    setCurrSection(0);

    for (let i = 0; i < getSections().length; i++) { load_next_section(); }
}

function load_next_section() {
    sectionName = getSections()[getCurrSection()];

    switch (sectionName) {
        case "education":
            var url = `./src/content/${sectionName}/${sectionName}.html`;
            load_section(url, sectionName);
            var url = `./src/content/spoken-languages/spoken-languages.html`;
            load_section(url, sectionName);
            increment_section();
            break;
        case "experience":
            var url = `./src/content/${sectionName}/${sectionName}.html`;
            load_section(url, sectionName);
            var url = `./src/content/languages/languages.html`;
            load_section(url, sectionName);
            var url = `./src/content/frameworks/frameworks.html`;
            load_section(url, sectionName);
            increment_section();
            break;
        default:
            var url = `./src/content/${sectionName}/${sectionName}.html`;
            load_section(url, sectionName);
            increment_section();
            break;
    }
}

function load_section(url, elementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(elementId).innerHTML += data;
        })
        .catch((error) => console.error("An error ocurred: ", error));
}

function increment_section() {
    let currSection = getCurrSection() + 1;
    setCurrSection(currSection);
}

addEventListener("beforeunload", (event) => {
    localStorage.removeItem("sections");
    localStorage.removeItem("currSection");
})