package com.company;

public class CupHolder {
    private double volume;
    private int quantity;

    public double dispenseCup(){
        this.quantity--;
        return this.volume;
    }

    public void refill(int amt){
        this.quantity += amt;
    }
}
