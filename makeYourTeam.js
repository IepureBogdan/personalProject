console.log('hello world');

// Player Class

class Player {

    constructor(firstName , lastName , position , number , age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.number = number;
        this.age = age;
    }

}

// info class

class PlayerInfo {

    addPlayerToCard(player) {
        const goalkeeper = document.querySelector('#goalkeeper');
        const leftWing = document.querySelector('#leftWing');
        const leftBack = document.querySelector('#leftBack');
        const center = document.querySelector('#center');
        const rightBack = document.querySelector('#rightBack');
        const rightWing = document.querySelector('#rightWing');
        const pivot = document.querySelector('#pivot');
        const info = document.createElement('ul');
        

        info.innerHTML = `
        <li class="firstName">${player.firstName}</li>
        <li class="lastName">${player.lastName}</li>
        <li class="position">${player.position}</li>
        <li class="number">Jersey no. ${player.number}</li>
        <li class="age">${player.age} Years Old</li> `;

        if (player.position == 'Goalkeeper') {
            goalkeeper.appendChild(info)
            goalkeeper.style.display = 'flex';
        } else if (player.position == 'Left Wing') {
            leftWing.appendChild(info);
            leftWing.style.display = 'flex';
        } else if (player.position == 'Left Back') {
            leftBack.appendChild(info);
            leftBack.style.display = 'flex';
        } else if (player.position == 'Center') {
            center.appendChild(info);
            center.style.display = 'flex';
        } else if (player.position == 'Right Back') {
            rightBack.appendChild(info);
            rightBack.style.display = 'flex';
        } else if (player.position == 'Right Wing') {
            rightWing.appendChild(info);
            rightWing.style.display = 'flex';
        } else if (player.position == 'Pivot') {
            pivot.appendChild(info);
            pivot.style.display = 'flex';
        } else {
            console.log('something is not working');
        };
    }

    resetSearch() {
        document.getElementById('playerFirstName').value='';
        document.getElementById('playerLastName').value='';
        document.getElementById('position').value='';
        document.getElementById('playerNumber').value='';
        document.getElementById('playerAge').value = '';
    }
}

// adding players 

document.querySelector('#addPlayer').addEventListener('submit', 
    function(e) {
        e.preventDefault();
        // values
        const playerFirstName = document.getElementById('playerFirstName').value;
        const playerLastName = document.getElementById('playerLastName').value;
        const position = document.getElementById('position').value;
        const playerNumber = document.getElementById('playerNumber').value;
        const playerAge = document.getElementById('playerAge').value;

        const player = new Player(playerFirstName , playerLastName , position , playerNumber , playerAge);
        const playerInfo = new PlayerInfo();

        

        playerInfo.addPlayerToCard(player);

        playerInfo.resetSearch();

        addPlayer.style.display = 'none';
        console.log(player);
    }
)

// Button for adding players

document.querySelector('#addButton').addEventListener('click' , () => {
    addPlayer.style.display = 'flex';

})