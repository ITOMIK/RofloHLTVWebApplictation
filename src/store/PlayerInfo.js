import { makeAutoObservable } from "mobx";

class playerInfo{
    id= null;
    constructor(){
        makeAutoObservable(this);
    }
    setId(id){
        this.id=id;
    }
}

export default new playerInfo();