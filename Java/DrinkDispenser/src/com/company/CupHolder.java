package com.company;

public class CupHolder {
    public final int volume;
    public int quantity = 0;

    public CupHolder(int volume){
        this.volume = volume;
    }

    public int dispenseCup(){
        quantity--;
        return this.volume;
    }

    public void refill(int amt){
        quantity += amt;
    }
}
