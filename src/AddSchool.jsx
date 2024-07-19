import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faMapMarkerAlt, faCity, faPhone, faEnvelope, faUpload, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('contact', data.contact);
        formData.append('image', data.image[0]);
        formData.append('email_id', data.email_id);

        try {
            await axios.post('http://localhost:5000/api/addSchool', formData);
            setShowModal(true);
        } catch (error) {
            console.error('Error adding school:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleViewSchools = () => {
        navigate('/show-schools');
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Add New School</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative col-span-2">
                    <FontAwesomeIcon icon={faSchool} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('name', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="School Name"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative col-span-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('address', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="Address"
                    />
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative">
                    <FontAwesomeIcon icon={faCity} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('city', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="City"
                    />
                    {errors.city && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative">
                    <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('state', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="State"
                    />
                    {errors.state && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative">
                    <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('contact', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="Contact"
                        type="number"
                    />
                    {errors.contact && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        placeholder="Email"
                    />
                    {errors.email_id && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative col-span-2">
                    <FontAwesomeIcon icon={faUpload} className="absolute left-3 top-3 text-blue-600" />
                    <input
                        {...register('image', { required: true })}
                        className="w-full p-3 pl-10 border border-blue-300 rounded focus:border-blue-500"
                        type="file"
                    />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="col-span-2">
                    <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">Add School</button>
                </div>
            </form>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-blue-600">School Added Successfully!</h3>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleViewSchools}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                View Schools
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddSchool;
