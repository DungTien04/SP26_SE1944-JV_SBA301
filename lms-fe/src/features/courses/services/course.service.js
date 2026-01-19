import React from 'react'
import axiosClient from '../../../shared/services/axiosClient';

const courseService = {
    findAll: async () => {
        const reponse = await axiosClient.get("/courses");

        return reponse.data;
    },

    createCourse: async(payload) => {

    },

};

export default courseService;