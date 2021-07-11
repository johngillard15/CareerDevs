package com.company;

public class Shot {
    public final String flavor;
    public int shotAmt;
    public final int shotSize;

    public Shot(String flavor, int shotAmt, int shotSize){
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
