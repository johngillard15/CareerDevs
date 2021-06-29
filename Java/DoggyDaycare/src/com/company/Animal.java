package com.company;

public class Animal {
    public int legs;
    public int size;
    public boolean isFixed;
    public String name;
    public String color;

    public Animal(int legs, int size, boolean isFixed, String name, String color){
        this.legs = legs;
        this.size = size;
        this.isFixed = isFixed;
        this.name = name;
        this.color = color;
    }

    public void speak(){
        System.out.println("---");
    }

    @Override
    public String toString() {
        return "Animal{" +
                "legs=" + legs +
                ", size=" + size +
                ", isFixed=" + isFixed +
                ", name='" + name + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
