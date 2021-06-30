package com.company;

public class Dog extends Animal{
    public String breed;
    public int snoutLength;
    public boolean isHouseTrained;
    public String noise = "Woof!";

    public Dog(int legs, int size, boolean isFixed, String name, String coat, String breed, int snoutLength,
               boolean isHouseTrained){
        super(legs, size, isFixed, name, coat);
        this.breed = breed;
        this.snoutLength = snoutLength;
        this.isHouseTrained = isHouseTrained;
    }

    public Dog(int legs, int size, boolean isFixed, String name, String coat, String breed, int snoutLength,
               boolean isHouseTrained, String noise){
        super(legs, size, isFixed, name, coat);
        this.breed = breed;
        this.snoutLength = snoutLength;
        this.isHouseTrained = isHouseTrained;
        this.noise = noise;
    }

    @Override
    public void speak(){
        System.out.println(noise);
    }

    @Override
    public String toString() {
        return "Dog{" +
                "legs=" + legs +
                ", size=" + size +
                ", isFixed=" + isFixed +
                ", name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", breed='" + breed + '\'' +
                ", snoutLength=" + snoutLength +
                ", isHouseTrained=" + isHouseTrained +
                ", noise='" + noise + '\'' +
                '}';
    }
}
