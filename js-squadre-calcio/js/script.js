const teams = [
    {
        nome: 'Genoa',
        punti: 43,
        falliSubiti: 10
    },
    {
        nome: 'Roma',
        punti: 34,
        falliSubiti: 7
    },
    {
        nome: Fiorentina,
        punti: 36,
        falliSubiti: 3
    },
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];

    team.punti = getRandomNumber(1, 100);
    team.falliSubiti = getRandomNumber(1,50);
}

// 2

const newArray = [];

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const { nome, falliSubiti } = team;
    newArray.push(nome, falliSubiti);
}

console.log(newArray);

// print

const tableData = document.querySelector('tbody');
let content = '';

for(let i = 0; i < newArray.length; i++) {
    const team = newArray[i];

    content += '
    <tr>
        <td>${team.nome}</td>
        <td>${team.falliSubiti}</td>
    </tr>
    ';  
}

tableData.innerHTML = content;
