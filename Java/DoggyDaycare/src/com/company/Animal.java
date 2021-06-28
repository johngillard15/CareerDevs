package com.company;

public class Animal {
    public int legs;
    public int size;
    public boolean isFixed;
    public String name;
    public String coat;

    public Animal(int legs, int size, boolean isFixed, String name, String coat){
        this.legs = legs;
        this.size = size;
        this.isFixed = isFixed;
        this.name = name;
        this.coat = coat;
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
                ", coat='" + coat + '\'' +
                '}';
    }
}
