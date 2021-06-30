package com.company;

import java.util.ArrayList;
import java.util.List;

public class DayCare {
    List<Animal> animals = new ArrayList<>();

    public void addAnimal(Animal newAnimal){
        animals.add(newAnimal);
    }

    public void displayAnimals(){
        for(Animal animal : animals)
            System.out.println(animal);
    }

    public void removeAnimal(String name){
        animals.removeIf(animal -> animal.name.equals(name));
    }
}
