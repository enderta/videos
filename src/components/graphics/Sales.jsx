import React from 'react';
import ApexCharts from 'react-apexcharts';
const Sales = () => {
     const [sales, setSales] = React.useState([]);

        React.useEffect(() => {
        fetch('http://localhost:3001/sales')
            .then(response => response.json())
            .then(data => {
                setSales(data);
                console.log(data);
            });

        }, []);
    const state={
        series: [{
            data: sales.map((item)=>item.sales)
        }],
        options: {
            chart: {
                name:'sales',
                type: 'bar',
                height: 350
            },
            title: {
                text: 'Sales by Person',
            },
            background: '#561212',
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    colors: {
                        ranges: [{
                            from: -1000,
                            to: 0,
                            color: '#F15B46'
                        }, {
                            from: 1,
                            to: 10000,
                            color: '#FEB019'
                        }],

                    }
                }
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: sales.map((item)=>item.name),
            }
        },
    };

return (
        <div >
            <div id="chart">
                <ApexCharts options={state.options} series={state.series} type="bar" height={350}  />
            </div>
        </div>
    );
};

export default Sales;