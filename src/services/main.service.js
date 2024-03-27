import axios from "axios";
import PlayerInfo from "../store/PlayerInfo";

class Service {
    async getAll(){
        return axios.get("https://64b69371df0839c97e15cf4a.mockapi.io/api/rnt/roflohltvData");
    }
}

export default new Service();