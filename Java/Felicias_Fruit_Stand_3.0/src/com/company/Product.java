package com.company;

public class Product {
    public String item;
    public int amount;

    public Product(String item, int amount){
        this.item = item;
        this.amount = amount;
    }

    @Override
    public String toString(){
        return String.format("{ item: %s, amount: %s }", item, amount);
    }
}