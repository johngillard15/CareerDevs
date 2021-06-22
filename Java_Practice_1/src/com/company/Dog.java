package com.company;

public class Dog {
    public String name;
    int legs = 4;
    String hair;

    public Dog(String hair, String name){
        this.hair = hair;
        this.name = name;
    }

    public Dog(String hair, int legs){
        this.hair = hair;
        this.legs = legs;
    }

    public String speak(){
        return "A-woof";
    }

    public String toString() {
        return name + " has " + hair + " hair, and " + legs + " legs, and is a good dog.";
    }
}
