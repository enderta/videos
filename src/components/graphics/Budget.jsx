import React from 'react';
import ApexCharts from "react-apexcharts";

const Budget = () => {
    const [budget, setBudget] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/budget')
            .then(response => response.json())
            .then(data => {
                setBudget(data);
                console.log(data);
            });
    }, []);
    console.log(budget.map((item)=>Number(item.sum)))
    const state={
        series: budget.map((item)=>Number(item.sum)),
        options: {

            chart: {
                type: 'pie',

            },
            title: {
                text: 'Budget by Department',
                align: 'center'
            },
            labels: budget.map((item)=>item.department),
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '22px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    return (
        <div >
            <div id="chart">
                <ApexCharts options={state.options} series={state.series} type={"donut"} height={350}  />
            </div>
        </div>
    );
};
export default Budget;