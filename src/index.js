var education_items = 0;
var experience_items = 0;
var projects_items = 0;

function scroll_education_items_forward() {
    var items = document.getElementById("education-content");

    education_items += 30;
    items.scroll({
        left: (education_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}

function scroll_education_items_backward() {
    var items = document.getElementById("education-content");
    education_items -= 30;
    items.scroll({
        left: (education_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}

function scroll_experience_items_forward() {
    var items = document.getElementById("experience-content");

    experience_items += 30;
    items.scroll({
        left: (experience_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}

function scroll_experience_items_backward() {
    var items = document.getElementById("experience-content");
    
    experience_items -= 30;
    items.scroll({
        left: (experience_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}

function scroll_projects_items_forward() {
    var items = document.getElementById("projects-content");

    projects_items += 30;
    items.scroll({
        left: (projects_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}

function scroll_projects_items_backward() {
    var items = document.getElementById("projects-content");

    projects_items -= 30;
    items.scroll({
        left: (projects_items * window.innerWidth) / 100,
        behavior: "smooth"
    });
}