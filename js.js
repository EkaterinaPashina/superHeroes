const cards = document.getElementById('cards');
const superHeroesObj = JSON.parse(JSON.stringify(superheroes));
console.log(superHeroesObj);

function createCard(superhero) {
    const superheroes = document.createElement('div');
    const superherocard = `<section class="hero">
    <div class="hero__img">
        <img src="${superhero.url}" alt="${superhero.name}">
    </div>
    <h2 class="hero__name">${superhero.name}</h2>
    <p class="hero__universe"><span class="header">Вселенная: </span>${superhero.universe}</p>
    <p class="hero__alterego"><span class="header">Альтер эго: </span>${superhero.alterego}</p>
    <p class="hero__occupation"><span class="header">Род деятельности: </span>${superhero.occupation}</p>
    <p class="hero__friends"><span class="header">Друзья: </span>${superhero.friends}</p>
    <p class="hero__superpowers"><span class="header">Суперсилы: </span>${superhero.superpowers}</p>
    <div class="stars">
        <img src="images/star.png" class="star" id="${superhero.name.replaceAll(' ', '')}Star1">
        <img src="images/star.png" class="star" id="${superhero.name.replaceAll(' ', '')}Star2">
        <img src="images/star.png" class="star" id="${superhero.name.replaceAll(' ', '')}Star3">
        <img src="images/star.png" class="star" id="${superhero.name.replaceAll(' ', '')}Star4">
        <img src="images/star.png" class="star" id="${superhero.name.replaceAll(' ', '')}Star5">
    </div>
</section>`;
    superheroes.setAttribute('class', 'card');
    superheroes.innerHTML = superherocard;
    return superheroes;
};

for (let superhero of superHeroesObj) {
    let createsuperhero = createCard(superhero);
    cards.append(createsuperhero);
};

const star = document.querySelectorAll(".star");

Array.from(document.querySelectorAll(".star")).forEach(element => {
    element.addEventListener('click', function () {
        let checked = this.classList.toggle('checked');
        console.log(this.id);

        const star1 = this.id.slice(0, -1) + '1';
        const star2 = this.id.slice(0, -1) + '2';
        const star3 = this.id.slice(0, -1) + '3';
        const star4 = this.id.slice(0, -1) + '4';
        const star5 = this.id.slice(0, -1) + '5';

        if (this.id.includes('Star1')) {
            document.getElementById(`${star1}`).classList.add('checked');
            document.getElementById(`${star1}`).src = './images/starchecked.png';
            document.getElementById(`${star2}`).classList.remove('checked');
            document.getElementById(`${star2}`).src = './images/star.png';
            document.getElementById(`${star3}`).classList.remove('checked');
            document.getElementById(`${star3}`).src = './images/star.png';
            document.getElementById(`${star4}`).classList.remove('checked');
            document.getElementById(`${star4}`).src = './images/star.png';
            document.getElementById(`${star5}`).classList.remove('checked');
            document.getElementById(`${star5}`).src = './images/star.png';
        } else if (this.id.includes('Star2')) {
            document.getElementById(`${star1}`).classList.add('checked');
            document.getElementById(`${star1}`).src = './images/starchecked.png';
            document.getElementById(`${star2}`).classList.add('checked');
            document.getElementById(`${star2}`).src = './images/starchecked.png';
            document.getElementById(`${star3}`).classList.remove('checked');
            document.getElementById(`${star3}`).src = './images/star.png';
            document.getElementById(`${star4}`).classList.remove('checked');
            document.getElementById(`${star4}`).src = './images/star.png';
            document.getElementById(`${star5}`).classList.remove('checked');
            document.getElementById(`${star5}`).src = './images/star.png';

        } else if (this.id.includes('Star3')) {
            document.getElementById(`${star1}`).classList.add('checked');
            document.getElementById(`${star1}`).src = './images/starchecked.png';
            document.getElementById(`${star2}`).classList.add('checked');
            document.getElementById(`${star2}`).src = './images/starchecked.png';
            document.getElementById(`${star3}`).classList.add('checked');
            document.getElementById(`${star3}`).src = './images/starchecked.png';
            document.getElementById(`${star4}`).classList.remove('checked');
            document.getElementById(`${star4}`).src = './images/star.png';
            document.getElementById(`${star5}`).classList.remove('checked');
            document.getElementById(`${star5}`).src = './images/star.png';

        } else if (this.id.includes('Star4')) {
            document.getElementById(`${star1}`).classList.add('checked');
            document.getElementById(`${star1}`).src = './images/starchecked.png';
            document.getElementById(`${star2}`).classList.add('checked');
            document.getElementById(`${star2}`).src = './images/starchecked.png';
            document.getElementById(`${star3}`).classList.add('checked');
            document.getElementById(`${star3}`).src = './images/starchecked.png';
            document.getElementById(`${star4}`).classList.add('checked');
            document.getElementById(`${star4}`).src = './images/starchecked.png';
            document.getElementById(`${star5}`).classList.remove('checked');
            document.getElementById(`${star5}`).src = './images/star.png';

        } else if (this.id.includes('Star5')) {
            document.getElementById(`${star1}`).classList.add('checked');
            document.getElementById(`${star1}`).src = './images/starchecked.png';
            document.getElementById(`${star2}`).classList.add('checked');
            document.getElementById(`${star2}`).src = './images/starchecked.png';
            document.getElementById(`${star3}`).classList.add('checked');
            document.getElementById(`${star3}`).src = './images/starchecked.png';
            document.getElementById(`${star4}`).classList.add('checked');
            document.getElementById(`${star4}`).src = './images/starchecked.png';
            document.getElementById(`${star5}`).classList.add('checked');
            document.getElementById(`${star5}`).src = './images/starchecked.png';
        }
    });
});