const obj = {
    "adr": [99,125, false, false],
    "acs":[199,250,false, false],
    "kast": [65,77,false,true],
    "fk":[2,6,false, false],
    "fd":[6,1,true, false],
    "hs":[20,30,false,true],
    "clutches":[1,3,false, false],
    "kills":[12,18,false, false],
    "deads":[15,10,true, false],
    "assists":[4,3,false, false],
    "impact":[1.05,1.20,false, false],
    "maps":[0,1,false, false]
}

function stat(name){
    return obj[name]?obj[name]:null ;

}

export default stat;