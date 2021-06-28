package com.company;

public class Cat extends Animal{
    public String pattern;
    public boolean wasStray;
    public boolean clawsFurniture;

    public Cat(int legs, int size, boolean isFixed, String name, String coat, String pattern, boolean wasStray){
        super(legs, size, isFixed, name, coat);
        this.pattern = pattern;
        this.wasStray = wasStray;
    }

    public Cat(int legs, int size, boolean isFixed, String name, String coat, String pattern, boolean wasStray,
               boolean clawsFurniture){
        super(legs, size, isFixed, name, coat);
        this.pattern = pattern;
        this.wasStray = wasStray;
        this.clawsFurniture = clawsFurniture;
    }

    @Override
    public void speak(){
        System.out.println("Meow!");
    }

    @Override
    public String toString() {
        return "Cat{" +
                "pattern='" + pattern + '\'' +
                ", wasStray=" + wasStray +
                ", clawsFurniture=" + clawsFurniture +
                '}';
    }
}
