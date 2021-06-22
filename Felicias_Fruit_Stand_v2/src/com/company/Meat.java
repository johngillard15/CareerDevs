package com.company;

public class Meat extends Product{
    public String cut;
    public boolean isCooked;

    public Meat(String name, int quantity, String cut, boolean isCooked){
        super(name, quantity);
        this.cut = cut;
        this.isCooked = isCooked;
    }

    public String toString(){
        return "{ name: " + name + ", quantity: " + quantity + ", cut: " + cut + ", isCooked: " + isCooked + " }";
    }
}
