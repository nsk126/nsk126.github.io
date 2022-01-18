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


for (let index = 0; index < 10000; index++) {

    // signal is A * sin ( 2 * pi * f * t)
    // var x = Math.sign(Math.sin(4 * 2* Math.PI * index/10000));
    var x = Math.sin(4 * 2* Math.PI * index/10000)

    trace1.y.push(x);
    trace1.x.push(index/10000)
}

var data = [trace1];
Plotly.newPlot('myDiv', data);



var slider = document.getElementById("freqRange");
var optxt = document.getElementById("optxt1");



for (let index = 0; index < 10000; index++) {

        
    // signal is A * sin ( 2 * pi * f * t)
    var x = Math.sin(1 * 2* Math.PI * index/10000);
    
    trace2.y[index] = x;

}

trace2.x = trace1.x;
data2 = [trace2]
Plotly.newPlot('plot_interact', data2);

slider.oninput = function(){
    optxt.innerHTML = this.value;
    var freq_1 = this.value;

    for (let index = 0; index < 10000; index++) {

        
        // signal is A * sin ( 2 * pi * f * t)
        var x = Math.sin(freq_1 * 2* Math.PI * index/10000);
        
        trace2.y[index] = x;
    
    }
    trace2.x = trace1.x;
    data2 = [trace2]
    
    Plotly.newPlot('plot_interact', data2);
}




