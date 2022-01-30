


// Array di bici

const bikes = [
    {
        name: 'Mountain',
        weight: 8,
    },
    {
        name: 'Dmx',
        weight: 10,
    },
    {
        name: 'Elettrica',
        weight: 11,
    },
];

// Lightest Bike

let lightestBike = bikes[0];

for (let i = 0; i < bikes.lenghts; i++) {
    const bike = bikes[i];
    const { weight } = bike;
    if (weight < lightestBike.weight) lightestBike = bikes;
};

const { name } = lightestBike;
console.log(`lighest bike: ${ name }`);

