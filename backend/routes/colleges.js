// use this file to get CRUD operations for colleges, use this for 
// homepage

const express = require('express');
const router = express.Router();
const {College} = require('../models');

//retrive all colleges
router.get('/', async (req, res) => {
    try {
        const colleges = await College.findAll();
        res.json(colleges);
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Internal Server Error'});
    }
});

router.get('/id', async (req, res) => {
    const collegeId = req.params.id;
    try {
        const college = await College.findOne({where: {id: collegeId}});
        if (!college) {
            return res.status(404).json({error: 'College Not Found'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({error: "Internal Server Error"})
    }
})

module.exports = router;
//fetching colleges is important, do not allow user to delete
// or add a college on their own.