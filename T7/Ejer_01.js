fetch("movimientos.json")
    .then(response => response.json())
    .then(data => {
        data.movimientos.forEach(mov => {
            console.log(`${mov.pieza}: ${mov.from} a ${mov.to}`);
        });
    });