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

for (let i = 0; i < team.length; i++) {
  const thisElement = team[i];
  const thisName = thisElement.name;
  const thisRole = thisElement.role;
  const thisImage = thisElement.image;
  console.log("name:", thisElement.name, "ruolo:", thisElement.role, "immagine:", thisElement.image)
  
  
  teamContainer.innerHTML += `<div class="team-card"><div class="card-image"><img src="img/${thisImage}" alt="${thisName}" /></div><div class="card-text"><h3>${thisName}</h3><p>${thisRole}</p></div></div>`

}