import React from 'react';
import ApexCharts from "react-apexcharts";

const Deps = () => {
    const [deps, setDeps] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/deps')
            .then(response => response.json())
            .then(data => {
                setDeps(data);
                console.log(data);
            });
    }, []);
    console.log(deps)
    const state={
        series: deps.map((item)=>Number(item.employees)),
        options: {

            chart: {
                type: 'pie',

            },
            title: {
                text: 'Employees by Department',
                align: 'center'
            },
            labels: deps.map((item)=>item.name),
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

export default Deps;