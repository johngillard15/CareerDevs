package com.company;

public class Syrups {
    private String drinkName;
    private int syrupAmt;

    public Syrups(String drinkName, int syrupAmt){
        this.drinkName = drinkName;
        this.syrupAmt = syrupAmt;
    }

    public void dispense(int amt){
        this.syrupAmt -= amt;
    }

    public double getVolume(){
        return this.syrupAmt;
    }
}
