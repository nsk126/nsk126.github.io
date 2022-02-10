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

let plot2_type = "sine";

function swPlot(element, type_of_plot){
    
    if (type_of_plot == 'sine') {
        
        plot2_type = "sine";
        // console.log("Sine plot");
        update_plot(global_freq);
        
    }else if (type_of_plot == 'sqr') {
        
        plot2_type = "sqr";
        // console.log("Sqr plot");
        update_plot(global_freq);
        
    }else if (type_of_plot == 'saw') {
        
        plot2_type = "saw";
        // console.log("Saw plot");
        update_plot(global_freq);
        
    }

}

// PLOT 1 - NO NEED TO CHANGE - STATIC
for (let index = 0; index < 10000; index++) {

    // signal is A * sin ( 2 * pi * f * t)
    // var x = Math.sign(Math.sin(4 * 2* Math.PI * index/10000));
    var x = Math.sin(4 * 2* Math.PI * index/10000)

    trace1.y.push(x);
    trace1.x.push(index/10000)
}

var data = [trace1];
Plotly.newPlot('myDiv', data);


// ---------------------------------------


// SLIDER BAR DOM
let slider = document.getElementById("freqRange");
let optxt = document.getElementById("optxt1");



for (let index = 0; index < 10000; index++) {

        
    // signal is A * sin ( 2 * pi * f * t)
    var x = Math.sin(1 * 2* Math.PI * index/10000);
    
    trace2.y[index] = x;

}

trace2.x = trace1.x;
data2 = [trace2]

let global_freq = 1;

Plotly.newPlot('plot_interact', data2);

slider.oninput = function(){
    optxt.innerHTML = this.value;
    global_freq = this.value;

    update_plot(global_freq);
}

function update_plot(freq) {
    for (let index = 0; index < 10000; index++) {

        if (plot2_type == "sine") {
            
            // signal is A * sin ( 2 * pi * f * t) 
            // SINE WAVE
            var x = Math.sin(global_freq * 2* Math.PI * index/10000);
        }else if (plot2_type == "sqr"){

            // x = Math.sign(Math.sin(global_freq * 2* Math.PI * index/10000));   
            
            x = (-1) ** Math.floor(2*global_freq*index/10000); 
        }else if(plot2_type == "saw"){
            
            x = 2 * (global_freq * index/10000 % 1) - 1;
        }

        trace2.y[index] = x;
    
    }
    trace2.x = trace1.x;
    data2 = [trace2]
    
    Plotly.newPlot('plot_interact', data2);
}

