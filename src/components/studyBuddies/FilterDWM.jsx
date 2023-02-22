import React, {useEffect, useState} from 'react';

const FilterDwm = (props) => {
    const [availabilities, setAvailabilities] = useState([]);
    const [filter, setFilter] = useState('daily');

    useEffect(() => {
        fetch(`/availabilities?filter=${filter}`)
            .then(response => response.json())
            .then(data => setAvailabilities(data))
            .catch(error => console.error(error));
    }, [filter]);

    function handleDailyFilter() {
        setFilter('daily');
    }

    function handleWeeklyFilter() {
        setFilter('weekly');
    }

    function handleMonthlyFilter() {
        setFilter('monthly');
    }

    return (
        <div>
            <button onClick={handleDailyFilter}>Daily</button>
            <button onClick={handleWeeklyFilter}>Weekly</button>
            <button onClick={handleMonthlyFilter}>Monthly</button>
            <ul>
                {props.owners.map(availability => (
                    <li key={availability.id}>
                        {availability.availability_date} - {availability.topic}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FilterDwm;