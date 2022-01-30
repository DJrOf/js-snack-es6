


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

bikes.forEach((bike) => {
    const { weight } = bike; 
    if (weight < lightestBike.weight) lightestBike = bikes;
});

bikes.forEach((bike) => {
    const { weight, name } = bike; 
    console.log(name, weight);
});

const { name } = lightestBike;
console.log(`lighest bike: ${ name }`);
