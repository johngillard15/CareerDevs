package com.company;

import java.util.ArrayList;
import java.util.List;

/**
 * <h1>Doggy Daycare</h1>
 *
 * <p>Warm up review of the previous work with a test on Github. Submit the github link to your repo for this assignment.
 * if you are unable to do that we will review github in class today to make sure everyone is able to submit a github link.</p>
 *
 * <p>Today you will create a Doggy Daycare application that can handle both Dogs and Cats . create the following classes:</p>
 *
 * <p>Animal Class:<br>
 * Field requirements: legs, size, isFixed, name<br>
 * include 1 field of your own creation<br>
 * Construction that takes at least the four required fields and initializes them.<br>
 * A speak method that outputs ("---")</p>
 *
 * <p>Dog Class, Child class of Animal,<br>
 * Field requirements: Breed, snoutLength,<br>
 * include 1 field of your own creation.<br>
 * Constructor that takes at least the required fields and satisfies the parent constructor.<br>
 * Override speak class</p>
 *
 * <p>Cat Class Child class of Animal,<br>
 * Field requirements: Pattern, wasStray<br>
 * include 1 field of your own creation,<br>
 * Constructor that takes at least the required fields and satisfies the parent constructor.<br>
 * Override speak Class</p>
 *
 * <p>(additional challenge. Create a noise field in either child class, update the speak class.
 * if the animal's noise field has data speak the noise otherwise use the parent speak method, hint: may need a second constructor)</p>
 *
 * <p>DayCare class</p>
 *
 * <p>static method addAnimal takes an Animal and an Animal List. The method should add the animal to the list.<br>
 * Static method displayAnimals should take an Animal List and should print out each Animal. (note that this is going to print out Animal details)<br>
 * Update the displayAnimals class where as it iterates through each animal it tests what child class it is and prints differently depending on the Animals child type.<br>
 * Static Method removeAnimal should take a name and an Animal list.<br>
 * The method should go through and find the animal with the same name then remove that animal from the list.</p>
 *
 * <p>Tips to run this program.<br>
 * You'll instantiate the Animal list in the Main method.<br>
 * when you add an animal you can run the method as addAnimal(animalList, new Dog(...parameters...))</p>
 *
 * <br>
 *
 * @since 28/6/2021
 * @author John Gillard
 */

public class Main {

    public static void main(String[] args) {
        List<Animal> animalList = new ArrayList<>();

        // Instantiate animals
        Animal defaultAnimal = new Animal(1, 1, true, "Default Animal", "Default");
        Dog fido = new Dog(4, 2, true, "Fido", "Light Brown", "Golden Retriever", 3, false, 2);
        Cat kitty = new Cat(4, 2, true, "Kitty", "White", "Black Spots", false);
        Dog rufus = new Dog(4, 4, true, "Rufus", "Grey", "Tamaskan", 4, true, 5);
        Cat maxwell = new Cat(4, 3, true, "Maxwell", "Brown", "Black Stripes", true, true);

        // Add animals to list
        DayCare.addAnimal(animalList, defaultAnimal);
        DayCare.addAnimal(animalList, fido);
        DayCare.addAnimal(animalList, kitty);
        DayCare.addAnimal(animalList, rufus);
        DayCare.addAnimal(animalList, maxwell);

        // Display all animals in list
        DayCare.displayAnimals(animalList);

        // Remove an animal and display updated list
        System.out.printf("\nRemove \"%s\"\n", defaultAnimal.name);
        DayCare.removeAnimal(animalList, defaultAnimal.name);
        DayCare.displayAnimals(animalList);

        // Let the animals loose!
        System.out.println("\nSpeak!");
        fido.speak();
        kitty.speak();
        rufus.speak();
        maxwell.speak();
    }
}
