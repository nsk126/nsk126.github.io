
var trace1 = {
    x: [],
    y: [],
    type: 'scatter'
};

var trace2 = {
    x: [],
    y: [],
    type: 'scatter'
};

var trace3 = {
    x: [],
    y: [],
    type: 'scatter'
};

var trace4 = {
    x: [],
    y: [],
    type: 'scatter'
};

var trace5 = {
    x: [],
    y: [],
    type: 'scatter'
};


var slider = document.getElementById("myRange");
var output = document.getElementById("Demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;

    var freq = this.value;
    
    for (let index = 0; index < 10000; index++) {

        
        // signal is A * sin ( 2 * pi * f * t)
        var x = Math.sign(Math.sin(freq * 2* Math.PI * index/10000));
        x = (x + Math.abs(x))/2;

        trace2.y[index] = x;
    }

    trace2.x = trace1.x;


    var data = [trace2];

    Plotly.newPlot('myDiv', data);

}


for (let index = 0; index < 10000; index++) {

    // signal is A * sin ( 2 * pi * f * t)
    var x = Math.sign(Math.sin(4 * 2* Math.PI * index/10000));

    trace1.y.push(x);
    trace1.x.push(index/10000)
}


for (let index = 0; index < 10000; index++) {

    // signal is A * sin ( 2 * pi * f * t)
    var x = Math.sign(Math.sin(15 * 2* Math.PI * index/10000));

    trace3.y.push(x);
    trace3.x.push(index/10000)
}

for (let index = 0; index < 10000; index++) {

    trace4.y[index] = trace1.y[index] + trace2.y[index] + trace3.y[index];
    
}

var fcut = 24;
var alpha = (2*Math.PI*0.0001*fcut)/(2*Math.PI*0.0001*fcut + 1);

console.log(alpha);


trace5.y[0] = 0;

for (let index = 1; index < 10000; index++) {

    trace5.y[index] = trace5.y[index - 1] + alpha * (trace2.y[index] - trace5.y[index - 1]);
  
}

trace2.x = trace1.x;
trace4.x = trace1.x;
trace5.x = trace1.x;

var data = [trace2];

var data1 = [trace5];

Plotly.newPlot('myDiv', data);
Plotly.newPlot('myDiv1', data1);

  