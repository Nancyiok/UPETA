function addAnimal() {
    const photoInput = document.getElementById("photoUpload");
    const photoFile = photoInput.files[0];
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const story = document.getElementById("story").value;

    const reader = new FileReader();
    reader.onload = function (e) {
        const photo = e.target.result;
        const animal = { photo, name, age, story };
        let animals = JSON.parse(localStorage.getItem("animals")) || [];
        animals.push(animal);
        localStorage.setItem("animals", JSON.stringify(animals));
        document.getElementById("animalForm").reset();
        displayAdminAnimals();
        displayAnimals();
    };

    reader.readAsDataURL(photoFile);
}

function displayAdminAnimals() {
    let container = document.getElementById("adminContainer");
    if (container) {
        container.innerHTML = "";
        let animals = JSON.parse(localStorage.getItem("animals")) || [];
        animals.forEach((animal, index) => {
            let div = document.createElement("div");
            div.classList.add("animal-item");
            let img = document.createElement("img");
            img.src = animal.photo;
            img.alt = animal.name + " photo";
            img.classList.add("admin-animal-photo");
            div.appendChild(img);

            let name = document.createElement("p");
            name.textContent = "Name: " + animal.name;
            div.appendChild(name);

            let age = document.createElement("p");
            age.textContent = "Age: " + animal.age;
            div.appendChild(age);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Adopted";
            deleteBtn.addEventListener("click", () => deleteAnimal(index));
            div.appendChild(deleteBtn);

            container.appendChild(div);
        });
    }
}

function displayAnimals() {
    let container = document.getElementById("animalContainer");
    if (container) {
        container.innerHTML = "";
        let animals = JSON.parse(localStorage.getItem("animals")) || [];

        animals.forEach((animal) => {
            let div = document.createElement("div");
            div.classList.add("animal-item");
            let img = document.createElement("img");
            img.src = animal.photo;
            img.alt = animal.name + " photo";
            img.classList.add("animal-photo");
            div.appendChild(img);

            let name = document.createElement("p");
            name.textContent = "Name: " + animal.name;
            div.appendChild(name);

            let age = document.createElement("p");
            age.textContent = "Age: " + animal.age;
            div.appendChild(age);

            let story = document.createElement("p");
            story.textContent = "Story: " + animal.story;
            div.appendChild(story);

            container.appendChild(div);
        });
    }
}

function deleteAnimal(index) {
    let animals = JSON.parse(localStorage.getItem("animals")) || [];
    animals.splice(index, 1);
    localStorage.setItem("animals", JSON.stringify(animals));
    displayAdminAnimals();
    displayAnimals();
}

document.addEventListener("DOMContentLoaded", function () {
    displayAdminAnimals();
    displayAnimals();
});



document.getElementById('copyButton').addEventListener('click', function() {
var phoneNumber = document.getElementById('phoneLink').textContent;
var tempInput = document.createElement('input');
tempInput.value = phoneNumber;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand('copy');
document.body.removeChild(tempInput);
alert('Phone number copied: ' + phoneNumber);
        });
