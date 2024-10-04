let Abissian = document.querySelector(".Abissian")
Abissian.addEventListener("click", function(){
    window.location.assign('Cat1.html')
})

let Bengal = document.querySelector(".Bengal")
Bengal.addEventListener("click", function(){
    window.location.assign('Bengal_cat.html')
})

let British = document.querySelector(".British")
British.addEventListener("click", function(){
    window.location.assign('British_cat.html')
})

let Ekzotuk  = document.querySelector(".Ekzotuk")
Ekzotuk.addEventListener("click", function(){
    window.location.assign('Ekzotuk.html')
})

let Karakal  = document.querySelector(".Karakal")
Karakal.addEventListener("click", function(){
    window.location.assign('Karakal.html')
})

let Manchkin  = document.querySelector(".Manchkin")
Manchkin.addEventListener("click", function(){
    window.location.assign('Manchkin.html')
})

let Maincun = document.querySelector(".Maincun")
Maincun.addEventListener("click", function(){
    window.location.assign('Maincun.html')
})

let Siamska  = document.querySelector(".Siamska")
Siamska.addEventListener("click", function(){
    window.location.assign('Siamska_cat.html')
})

let Snow_shu = document.querySelector(".Snow-shu")
Snow_shu.addEventListener("click", function(){
    window.location.assign('Snow-shu.html')
})

let Somaliiska = document.querySelector(".Somaliiska")
Somaliiska.addEventListener("click", function(){
    window.location.assign('Somaliiska_cat.html')
})

let Scottish = document.querySelector(".Scottish")
Scottish.addEventListener("click", function(){
    window.location.assign('Scottish_cat.html')
})

let Sphynx = document.querySelector(".Sphynx")
Sphynx.addEventListener("click", function(){
    window.location.assign('Sphynx.html')
})

let Kornish_rex = document.querySelector(".Kornish-rex")
Kornish_rex.addEventListener("click", function(){
    window.location.assign('Kornish-rex.html')
})












let Abissian_in_breeds = document.querySelector(".Abissian_in_breeds")
Abissian_in_breeds.addEventListener("click", function(){
    window.location.assign('Cat1.html')
})

let Bengal_in_breeds = document.querySelector(".Bengal_in_breeds")
Bengal_in_breeds.addEventListener("click", function(){
    window.location.assign('Bengal_cat.html')
})

let British_in_breeds = document.querySelector(".British_in_breeds")
British_in_breeds.addEventListener("click", function(){
    window.location.assign('British_cat.html')
})

let Ekzotuk_in_breeds = document.querySelector(".Ekzotuk_in_breeds")
Ekzotuk_in_breeds.addEventListener("click", function(){
    window.location.assign('Ekzotuk.html')
})

let Karakal_in_breeds = document.querySelector(".Karakal_in_breeds")
Karakal_in_breeds.addEventListener("click", function(){
    window.location.assign('Karakal.html')
})

let Manchkin_in_breeds = document.querySelector(".Manchkin_in_breeds")
Manchkin_in_breeds.addEventListener("click", function(){
    window.location.assign('Manchkin.html')
})

let Maincun_in_breeds = document.querySelector(".Maincun_in_breeds")
Maincun_in_breeds.addEventListener("click", function(){
    window.location.assign('Maincun.html')
})

let Siamska_in_breeds = document.querySelector(".Siamska_in_breeds")
Siamska_in_breeds.addEventListener("click", function(){
    window.location.assign('Siamska_cat.html')
})

let Snow_shu_in_breeds = document.querySelector(".Snow_shu_in_breeds")
Snow_shu_in_breeds.addEventListener("click", function(){
    window.location.assign('Snow-shu.html')
})

let Somaliiska_in_breeds = document.querySelector(".Somaliiska_in_breeds")
Somaliiska_in_breeds.addEventListener("click", function(){
    window.location.assign('Somaliiska_cat.html')
})

let Scottish_in_breeds = document.querySelector(".Scottish_in_breeds")
Scottish_in_breeds.addEventListener("click", function(){
    window.location.assign('Scottish_cat.html')
})

let Sphynx_in_breeds = document.querySelector(".Sphynx_in_breeds")
Sphynx_in_breeds.addEventListener("click", function(){
    window.location.assign('Sphynx.html')
})

let Kornish_rex_in_breeds = document.querySelector(".Kornish-rex_in_breeds")
Kornish_rex_in_breeds.addEventListener("click", function(){
    window.location.assign('Kornish-rex.html')
})











// Функція пошуку порід котиків
function searchBreeds(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    console.log("Пошукова функція викликана!"); // Лог для перевірки виклику функції

    // Отримуємо значення пошукового запиту
    let query = document.querySelector('#searchForm input').value.toLowerCase().trim();
    console.log("Пошуковий запит: " + query); // Лог для перевірки введеного запиту

    // Отримуємо всі картки порід та тексти порід
    let breedCards = document.querySelectorAll('.card');
    let breedTexts = document.querySelectorAll('.breed-1 p');

    let found = false; // Змінна для відстеження результатів пошуку

    // Перебираємо всі картки порід і приховуємо або показуємо їх
    breedCards.forEach(function (card) {
        let breedName = card.querySelector("p").textContent.toLowerCase();
        if (breedName.includes(query)) {
            card.style.display = "block"; // Показуємо картку
            found = true;
        } else {
            card.style.display = "none"; // Приховуємо картку
        }
    });

    // Перебираємо всі текстові назви порід
    breedTexts.forEach(function (breed) {
        let breedText = breed.textContent.toLowerCase();
        if (breedText.includes(query)) {
            breed.style.display = "block"; // Показуємо текст породи
            found = true;
        } else {
            breed.style.display = "none"; // Приховуємо текст породи
        }
    });

    // Якщо нічого не знайдено, виводимо повідомлення
    if (!found) {
        alert("Породу не знайдено. Спробуйте інший пошуковий запит.");
    }
}

// Навішуємо обробник подій на форму пошуку
let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', searchBreeds);

document.getElementById('themeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
  });