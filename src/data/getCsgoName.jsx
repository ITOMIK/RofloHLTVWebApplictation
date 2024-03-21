const obj = {
    "adr": "ADR",
    "kast": "KAST",
    "fk": "Avg First Kills",
    "fd":"Avg First Deads",
    "hs":"Hs",
    "clutches":"Clutches",
    "kills":"Avg Kills",
    "deads":"Avg Deads",
    "assists":"Avg Assists",
    "impact":"Impact",
    "maps":"Maps",
    "raiting":"Raiting",
}

function stat(name){
    return obj[name]===null || obj[name]===undefined? name : obj[name];

}

export default stat;