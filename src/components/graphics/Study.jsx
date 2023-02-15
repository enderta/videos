import React from 'react';
import ApexCharts from 'react-apexcharts';

const Study = () => {
    const [prod, setProd] = React.useState([]);


    React.useEffect(() => {
        fetch('http://localhost:3001/prod')
            .then(response => response.json())
            .then(data => {
                setProd(data);
                console.log(data);
            });
    }, []);

    const  state={

        series: [{
           name:'price',
            type: 'column',
            data:prod.map((item)=>item.price)
        }, {
            name:'quantity',
            type: 'line',
            data:prod.map((item)=>item.quantity)
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Products Price and Quantity'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: prod.map((item)=>item.name),
            xaxis: {
                type: 'category'
            },
            yaxis: [{
                title: {
                    text: 'Price',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Quantity'
                }
            }]
        },


    };






return (
        <div >
        <ApexCharts  options={state.options} series={state.series} type="line" height={350} />
        </div>
    );
};

export default Study;