package com.company;

import java.util.List;

public class DayCare {
    public static void addAnimal(List<Animal> animalList, Animal newAnimal){
        animalList.add(newAnimal);
    }

    public static void displayAnimals(List<Animal> animalList){
        for(Animal animal : animalList)
            System.out.println(animal);
    }

    public static void removeAnimal(List<Animal> animalList, String name){
        animalList.removeIf(animal -> animal.name.equals(name));
    }
}
