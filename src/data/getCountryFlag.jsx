const getCountryFlagUrl = (countryCode) => {
    const flags = {
        "Israel": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1280px-Flag_of_Israel.svg.png",
        "Russia": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
        "Belarus": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/160px-Flag_of_Belarus.svg.png"
    };
    return flags[countryCode];
};

export default getCountryFlagUrl;