package com.company;

public class Shots {
    private String flavor;
    private double shotAmt;
    private double shot;

    public String dispense(){
        this.shotAmt -= shot;
        return this.flavor;
    }

    public int getVolume(){
        return (int)(this.shotAmt / this.shot);
    }
}
