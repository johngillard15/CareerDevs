package com.company;

public class Fruit extends Product{
    public String color;
    public boolean inSeason;

    public Fruit(String name, int quantity, String color, boolean inSeason){
        super(name, quantity);
        this.color = color;
        this.inSeason = inSeason;
    }

    public String toString(){
        return "{ name: " + name + ", quantity: " + quantity + ", color: " + color + ", inSeason: " + inSeason + " }";
    }
}
