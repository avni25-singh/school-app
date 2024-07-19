import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSchools = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/schools');
                setSchools(response.data);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {schools.map(school => (
                <div key={school.id} className="border rounded-lg p-4 shadow-md">
                    <img
                        src={`http://localhost:5000/schoolImages/${school.image}`}
                        alt={school.name}
                        className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    />
                    <h3 className="mt-4 text-xl font-bold">{school.name}</h3>
                    <p className="mt-2">{school.address}</p>
                    <p className="mt-1">{school.city}</p>
                </div>
            ))}
        </div>
    );
};

export default ShowSchools;
