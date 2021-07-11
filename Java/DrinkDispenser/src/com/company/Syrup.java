package com.company;

public class Syrup {
    public String drinkName;
    public int volume;

    public Syrup(String drinkName, int volume){
        this.drinkName = drinkName;
        this.volume = volume;
    }

    public String dispense(int amount){
        volume -= amount;
        return drinkName;
    }

    public double getVolume(){
        return this.volume;
    }
}
