package com.company;
import java.util.*;

//      Felicia's fruit stand has upgraded. She now serves fruits and meat now.


//        Objects
//        1. Create a Product class this should contain data that any item she sells will have
//        2. Create a Fruit class that inherits from the Product class that contain fruit specific data.
//        3. Create a Meat class that inherits from the product class that contains Meat specific data.
//        Be creative with your classes.
//
//
//        Code
//        1. In the main class create a Product list
//        2. add to the list three different Meats and 3 different Fruits.
//        3. in the main class create a method called displayProducts it should accept a Product list and display all the items in the list.
//        4. Create a second displayProducts class that accepts a Product list AND a string 'type' if the type is meat only print the
//          meat products and if fruit only display the fruit products
//        a. extra challenge try using a switch statement for this instead of ifelse
//        5. create a displayProduct method that accepts a product list and an int i. print out the product at index i.
//
//
//        be aware that except for the switch statement you should have all the code you need in Thursday's walkthrough.
//        You'll need to adjust some items and use them in different ways to fit this exercise however there are new new concepts in this challenge.
//        Try this by yourself first and see how far you get, You may work with a classmate starting on Tuesday.
//        Of course if you get completely stuck you can ask for help in slack.

public class Main {
    public static void displayProducts(List<Product> list){
        for(Product product : list){
            System.out.println(product);
        }
    }

    public static void main(String[] args) {
        List<Product> list = new ArrayList<>();

        Fruit product1 = new Fruit("Strawberry", 10, "Red", true);
        Fruit product2 = new Fruit("Banana", 5, "Yellow", true);
        Fruit product3 = new Fruit("Blueberries", 20, "Blue", false);
        Meat product4 = new Meat("Red meat", 7, "Sirloin", true);
        Meat product5 = new Meat("Pork", 70, "Shoulder", false);
        Meat product6 = new Meat("Chicken", 45, "Breast", true);
        list.add(product1);
        list.add(product2);
        list.add(product3);
        list.add(product4);
        list.add(product5);
        list.add(product6);

//        displayProducts(list);
//        DisplayProducts.displayProducts(list, "Fruit");
//        DisplayProducts.displayProducts(list, "Meat");
        DisplayProducts.displayProducts(list, 4);
    }
}
