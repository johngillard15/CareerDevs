package com.company;

public class Shots {
    private final String flavor;
    private int shotAmt;
    private final int shotSize;

    public Shots(String flavor, int shotAmt, int shotSize){
        this.flavor = flavor;
        this.shotAmt = shotAmt;
        this.shotSize = shotSize;
    }

    public String dispense(){
        this.shotAmt -= shotSize;
        return this.flavor;
    }

    public int getVolume(){
        return (this.shotAmt / this.shotSize);
    }
}
