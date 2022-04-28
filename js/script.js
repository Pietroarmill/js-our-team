const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector(".team-container");

// creo un ciclo per prelevera i dati dall'array e stamparli sulla console e sul documento.
for (let i = 0; i < team.length; i++) {
  // qui li prelevo.
  const thisElement = team[i];
  const thisName = thisElement.name;
  const thisRole = thisElement.role;
  const thisImage = thisElement.image;

  // qui li stampo sulla console.
  console.log("name:", thisElement.name);
  console.log("ruolo:", thisElement.role);
  console.log("immagine:", thisElement.image);
  console.log("");

  // qui li stampo sul documento.
  teamContainer.innerHTML += `<div class="team-card"><div class="card-image"><img src="img/${thisImage}" alt="${thisName}" /></div><div class="card-text"><h3>${thisName}</h3><p>${thisRole}</p></div></div>`;

}

const addBtn = document.getElementById("addMemberButton");

addBtn.addEventListener("click", function() {

  const userName = document.getElementById("name").value;
  const userRole = document.getElementById("role").value;
  const userImage = document.getElementById("image").value;

  const userCard = {
    name: userName,
    role: userRole,
    image: userImage
  }

  team.push(userCard);

  console.log(team);


  const teamContainer = document.querySelector(".team-container");

 
  teamContainer.innerHTML += `<div class="team-card"><div class="card-image"><img src="img/${userImage}" alt="${userName}" /></div><div class="card-text"><h3>${userName}</h3><p>${userRole}</p></div></div>`;
  


})
