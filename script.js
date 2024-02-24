const cards = document.querySelector(".cards");

for (let i = 0; i < 30; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML += `<img src="https://imgs.search.brave.com/xolGrDXgcNclSam9ld9MAoEOUgmYXfvWFiAf6uDMjpU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NDE1MDgxOS9waG90/by9kb2ktaW50aGFu/b24tYXQtY2hpYW5n/LW1haS10aGFpbGFu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9djhyMG5QQ1NI/N3R0RlU1YmVXUE1r/REpmMllSRVVhc3Q1/ZEVUWWI2MjE2Zz0" alt="hotel images"> </img><p class="heading"> Phuket, Thailand </p> <p class="card-distance">4444 kms away </p><p class="card-date">17th Jan 2024</p> <p class="card-money">₹1000 per night</p>`;
  cards.appendChild(card);
}
