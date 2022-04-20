const express = require("express");
const router = express.Router();

router.get('/', (req, resp) => {
    try {
        var times = [
            {
                "estado": "mg",
                "time": "América Mineiro",
                "sigla": "AME" , 
                "url" : "https://www.americamineiro.com.br/wp-content/uploads/2020/10/cropped-iconAmerica.png"
            },
            {
                "estado": "mg",
                "time": "Atético Mineiro",
                "sigla": "CAM",
                "url" : "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Clube_Atl%C3%A9tico_Mineiro_crest.svg/1200px-Clube_Atl%C3%A9tico_Mineiro_crest.svg.png"

            },
            {
                "estado": "mg",
                "time": "Cruzeiro",
                "sigla": "CRU",
                "url" : "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2022.png"

            },
            {
                "estado": "mg",
                "time": "Betim",
                "sigla": "BET",
                "url": "https://betimfutebol.com.br/site/wp-content/uploads/2020/08/mascote-poses-02.jpg"
            },
            {
                "estado": "sp",
                "time": "São Paulo",
                "sigla": "SAO",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"

            },
            {
                "estado": "sp",
                "time": "Santos",
                "sigla": "SAN",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png"

            },
            {
                "estado": "sp",
                "time": "Palmeiras",
                "sigla": "PAL",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png"

            },
            {
                "estado": "sp",
                "time": "Corinthians",
                "sigla": "COR",
                "url" : "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png"

            },
            {
                "estado": "rj",
                "time": "Flamengo",
                "sigla": "FLA",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"

            },
            {
                "estado": "rj",
                "time": "Fluminense",
                "sigla": "FLU",
                "url" : "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png"

            },
            {
                "estado": "rj",
                "time": "Bota fogo",
                "sigla": "BOT",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png"

            },
            {
                "estado": "rj",
                "time": "Vasco da gama",
                "sigla": "VAS",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"

            }
        ];
        resp.statusCode == 200;
        resp.json(times);

    } catch (e) {
        resp.statusCode == 500;
    }
});


router.get('/:estado', (req, resp) => {
    try {
        var times = [
            {
                "estado": "mg",
                "time": "América Mineiro",
                "sigla": "AME" , 
                "url" : "https://www.americamineiro.com.br/wp-content/uploads/2020/10/cropped-iconAmerica.png"
            },
            {
                "estado": "mg",
                "time": "Atético Mineiro",
                "sigla": "CAM",
                "url" : "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Clube_Atl%C3%A9tico_Mineiro_crest.svg/1200px-Clube_Atl%C3%A9tico_Mineiro_crest.svg.png"

            },
            {
                "estado": "mg",
                "time": "Cruzeiro",
                "sigla": "CRU",
                "url" : "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2022.png"

            },
            {
                "estado": "mg",
                "time": "Betim",
                "sigla": "BET",
                "url": "https://betimfutebol.com.br/site/wp-content/uploads/2020/08/mascote-poses-02.jpg"
            },
            {
                "estado": "sp",
                "time": "São Paulo",
                "sigla": "SAO",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"

            },
            {
                "estado": "sp",
                "time": "Santos",
                "sigla": "SAN",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png"

            },
            {
                "estado": "sp",
                "time": "Palmeiras",
                "sigla": "PAL",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png"

            },
            {
                "estado": "sp",
                "time": "Corinthians",
                "sigla": "COR",
                "url" : "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png"

            },
            {
                "estado": "rj",
                "time": "Flamengo",
                "sigla": "FLA",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"

            },
            {
                "estado": "rj",
                "time": "Fluminense",
                "sigla": "FLU",
                "url" : "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png"

            },
            {
                "estado": "rj",
                "time": "Bota fogo",
                "sigla": "BOT",
                "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png"

            },
            {
                "estado": "rj",
                "time": "Vasco da gama",
                "sigla": "VAS",
                "url" : "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"

            }
        ];

        var result = times.filter((item) => {
            return item.estado == req.params.estado;
        });
        console.log('Numero de times =>  '+result.length);
        if (result.length > 0) {
            resp.statusCode == 200;
            resp.json(result);
        }else{
            resp.status(404).json('Não temos times cadastrado para esse estado.');

        }


    } catch (e) {
        resp.statusCode == 500;
    }
});


module.exports = router;