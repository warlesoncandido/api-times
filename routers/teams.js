const express = require("express");
const router = express.Router();
const repository = require("../repositories/teams_repository");

router.get('/', async (req, resp) => {
    try {
        var times = await  repository.selectTeams();
        resp.statusCode == 200;
        resp.json(times);

    } catch (e) {
        resp.statusCode == 500;
    }
});


router.post('/', async (req, resp) => {
    try {
        await repository.insertTeams(req.body);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(400).json(e.message);
    }
});

router.delete('/:id', async (req, resp) => {
    try {
        await repository.deleteTeams(req.params.id);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(500).json(e.message);
    }
});

router.put('/', async (req, resp) => {
    try {
        await repository.updateTeams(req.body);
        resp.status(201).json("Ok");
    } catch (e) {
        resp.status(500).json(e.message);
    }
});


router.get('/:uf', async(req, resp) => {
    try {
        var times = await repository.selectTeamsByState(req.params.uf);
        if (times.length > 0) {
            resp.status(200).json(times);
        }else{
            resp.status(404).json('Não temos times cadastrado para esse estado.');

        }


    } catch (e) {
        resp.statusCode == 500;
    }
});


module.exports = router;