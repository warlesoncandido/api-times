const express = require("express");
const repository = require("../repositories/states_repository");

const router = express.Router();


router.get('/', async (req, resp) => {
    try {
        var states = await repository.selectStates();
        resp.header = { 'Content-Type': 'application/json' };
        resp.statusCode = 200;
        resp.json(states);
    } catch (e) {
        resp.statusCode = 500;
    }
});


router.post('/', async (req, resp) => {
    try {
        await repository.insertState(req.body);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(400).json(e.message);
    }
});

router.delete('/:id', async (req, resp) => {
    try {
        await repository.deleteState(req.params.id);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(500).json(e.message);
    }
});

router.put('/', async (req, resp) => {
    try {
        await repository.updateState(req.body);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(500).json(e.message);
    }
});





module.exports = router;

