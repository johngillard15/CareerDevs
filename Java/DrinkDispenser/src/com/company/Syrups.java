package com.company;

public class Syrups {
    private String drinkName;
    private int volume;

    public Syrups(String drinkName, int volume){
        this.drinkName = drinkName;
        this.volume = volume;
    }

    public void dispense(int amount){
        this.volume -= amount;
    }

    public double getVolume(){
        return this.volume;
    }
}
