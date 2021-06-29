package com.company;

public class Dog extends Animal{
    public String breed;
    public int snoutLength;
    public boolean houseTrained;
    public String noise;

    public Dog(int legs, int size, boolean isFixed, String name, String coat, String breed, int snoutLength,
               boolean houseTrained){
        super(legs, size, isFixed, name, coat);
        this.breed = breed;
        this.snoutLength = snoutLength;
        this.houseTrained = houseTrained;
    }

    public Dog(int legs, int size, boolean isFixed, String name, String coat, String breed, int snoutLength,
               boolean houseTrained, String noise){
        super(legs, size, isFixed, name, coat);
        this.breed = breed;
        this.snoutLength = snoutLength;
        this.houseTrained = houseTrained;
        this.noise = noise;
    }

    @Override
    public void speak(){
        if(!noise.equals(""))
            System.out.println(noise);
        else
            System.out.println("Woof!");
    }

    @Override
    public String toString() {
        return "Dog{" +
                "breed='" + breed + '\'' +
                ", snoutLength=" + snoutLength +
                ", houseTrained=" + houseTrained +
                ", noise=" + noise +
                '}';
    }
}
