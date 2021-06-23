package com.company;

public class Fruit extends Product{
    public boolean inSeason;

    public Fruit(String item, int amount, boolean inSeason){
        super(item, amount);
        this.inSeason = inSeason;
    }

    @Override
    public String toString() {
        return String.format("{ item: %s, amount: %s, inSeason: %s }", item, amount, inSeason);
    }
}