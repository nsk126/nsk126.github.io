var trace1 = {
    x: [],
    y: [],
    type: 'scatter'
};

for (let index = 0; index < 10000; index++) {

    // signal is A * sin ( 2 * pi * f * t)
    // var x = Math.sign(Math.sin(4 * 2* Math.PI * index/10000));
    var x = Math.sin(4 * 2* Math.PI * index/10000)

    trace1.y.push(x);
    trace1.x.push(index/10000)
}

var data = [trace1];
Plotly.newPlot('myDiv', data);