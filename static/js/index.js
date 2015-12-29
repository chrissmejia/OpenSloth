////////////////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)                                                                  //
//                                                                                        //
// Copyright (C) 2015  Christopher Mejía Montoya - me@chrissmejia.com - chrissmejia.com   //
//                                                                                        //
// Permission is hereby granted, free of charge, to any person obtaining a copy           //
// of this software and associated documentation files (the "Software"), to deal          //
// in the Software without restriction, including without limitation the rights           //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell              //
// copies of the Software, and to permit persons to whom the Software is                  //
// furnished to do so, subject to the following conditions:                               //
//                                                                                        //
// The above copyright notice and this permission notice shall be included in all         //
// copies or substantial portions of the Software.                                        //
//                                                                                        //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR             //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,               //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE            //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                 //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,          //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE          //
// SOFTWARE.                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////

(function(){
    "use strict";

    function data() {
        var dataset = [];
        var startDate = 1450137815;

        dataset[1] = [];
        dataset[2] = [];
        dataset[3] = [];
        dataset[4] = [];

        for (var i = 0; i < 14; i++) {
            var baseY = 1000 * Math.random();
            var baseX = startDate + (i * 100000);
            dataset[1].push({x: baseX, y: baseY + (Math.random() * 100)});
            dataset[2].push({x: baseX, y: baseY + (Math.random() * 300)});
            dataset[3].push({x: baseX, y: baseY + (Math.random() * 600)});
            dataset[4].push({x: baseX, y: baseY + (Math.random() * 900)});
        }

        return [
        {
          values: dataset[1],
          key: '2013',
          color: '#346288'
        },
        {
          values: dataset[2],
          key: '2014',
          color: '#BE4064'
        },
        {
          values: dataset[3],
          key: '2015',
          color: '#75BB3F'
        },
        {
          values: dataset[4],
          key: '2016',
          color: '#D39847'
        }
    ];
    }    

    nv.addGraph(function() {
        var chart = nv.models.lineChart();

        chart.xAxis
//        .axisLabel('Time')
        .tickFormat(function(d) { return d3.time.format('%d %b %y')(new Date(d * 1000))});

        chart.yAxis
//        .axisLabel('Interactions')
        .tickFormat(d3.format('d'));

        chart.margin({top: 0, right: 30, bottom: 20, left: 30})

        d3.select('#chart svg')
        .datum(data())
        .transition().duration(500)
        .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

})();