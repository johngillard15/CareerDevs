package com.company;

public class Syrups {
    private String drink;
    private double syrupAmt;

    public void dispense(int amt){
        this.syrupAmt -= amt;
    }

    public double getVolume(){
        return this.syrupAmt;
    }
}
