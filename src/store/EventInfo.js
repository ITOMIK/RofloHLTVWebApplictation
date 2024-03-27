import { makeAutoObservable } from "mobx";

class eventInfo{
    event= null;
    discipline=null;
    constructor(){
        makeAutoObservable(this);
    }
    setData(event, discipline){
        this.event=event;
        this.discipline = discipline;
    }
}

export default new eventInfo();