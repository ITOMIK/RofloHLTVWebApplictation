import { makeAutoObservable } from "mobx";

class selectedGame{
    selectedGame = '';
    constructor(){
        makeAutoObservable(this);
    }
    setSelectedGame(game){
        this.selectedGame= game;
    }
}

export default new selectedGame();