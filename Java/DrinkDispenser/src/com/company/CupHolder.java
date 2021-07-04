package com.company;

public class CupHolder {
    private final int volume;
    private int quantity;

    public CupHolder(String size){
        switch(size){
            case "small":
                this.volume = 8;
                break;

            case "medium":
                this.volume = 16;
                break;

            case "large":
                this.volume = 24;
                break;

            default:
                this.volume = 4;
                break;
        }
    }

    public int dispenseCup(){
        this.quantity--;
        return this.volume;
    }

    public void refill(int amt){
        this.quantity += amt;
    }
}
