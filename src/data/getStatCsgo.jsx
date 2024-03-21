const obj = {
    "ADR": [71,83, false, false],
    "kast": [65,77,false,true],
    "fk":[2,7,false, false],
    "fd":[6,1,true, false],
    "hs":[30,49,false,true],
    "clutches":[1,3,false, false],
    "kills":[15,20,false, false],
    "deads":[20,15,true, false],
    "assists":[7,5,false, false],
    "impact":[1.05,1.20,false, false],
    "maps":[0,3,false, false],
    "raiting":[0.99,1.09,false, false],
    "rounds":[50,100,false,false]
}

function stat(name){
    return obj[name]? obj[name]: null;

}

export default stat;