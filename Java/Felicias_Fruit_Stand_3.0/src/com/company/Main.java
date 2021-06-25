package com.company;

import java.util.ArrayList;
import java.util.List;

/**
 * <h1>Felicia's Fruit Stand 3.0</h1>
 * <p>Felicia's fruit stand has upgraded. She now serves fruits and meat now.</p>
 *
 * <p>Objects
 *  <ol>1. Create a Product class this should contain data that any item she sells will have</ol>
 *  <ol>2. Create a Fruit class that inherits from the Product class that contain fruit specific data.</ol>
 *  <ol>3. Create a Meat class that inherits from the product class that contains Meat specific data.</ol>
 * Be creative with your classes.</p>
 * <br><br>
 * <p>Code
 *  <ol>1. In the main class create a Product list</ol>
 *  <ol>2. add to the list three different Meats and 3 different Fruits.</ol>
 *  <ol>3. in the main class create a method called displayProducts it should accept a Product list and display all the items in the list.</ol>
 *  <ol>4. Create a second displayProducts method in the main class that accepts a Product list AND a string 'type' if the
 *  type is meat only print the meat products and if fruit only display the fruit products</ol>
 *  &emsp;&emsp;a. extra challenge try using a switch statement for this instead of ifelse
 *  <ol>5. create a displayProduct method that accepts a product list and an int i. print out the product at index i.</p>
 * <br><br>
 * <p>be aware that except for the switch statement you should have all the code you need in Thursday's walkthrough.
 * You'll need to adjust some items and use them in different ways to fit this exercise however there are new new concepts in this challenge.
 * Try this by yourself first and see how far you get, You may work with a classmate starting on Tuesday.
 * Of course if you get completely stuck you can ask for help in slack.</p>
 *
 * @since 6/20/2021
 * @author John Gillard
 */

public class Main {

    public static void displayProducts(List<Product> products){
        System.out.print("List of Produce:\n");
        for (Product product : products)
            System.out.printf("\t• %s, %d ct\n", product.item, product.amount);
    }

    public static void displayProducts(List<Product> productList, String type){
        List<Product> productsFiltered = new ArrayList<>();

        // using getSimpleName
        for(Product product : productList){
            if(product.getClass().getSimpleName().equalsIgnoreCase(type))
                productsFiltered.add(product);
        }
        // using instanceof
//        for(Product product : productList){
//            if(type.equalsIgnoreCase("Fruit") && productList instanceof Fruit)
//                productsFiltered.add(product);
//            if(type.equalsIgnoreCase("Meat") && productList instanceof Meat)
//                productsFiltered.add(product);
//        }

        System.out.printf("\n(%s section) ", type);
        displayProducts(productsFiltered);

//        // using switch
//        for(Product product : productList){
//            switch(type){
//                case "Fruit":
//                    if(product instanceof Fruit)
//                        System.out.println((Fruit) product);
//                    break;
//
//                case "Meat":
//                    if(product instanceof Meat)
//                        System.out.println((Meat) product);
//                    break;
//            }
//        }
    }

    public static void displayProduct(List<Product> productList, int i){
        System.out.println("\nCurrent item:");
        System.out.println(productList.get(i));
    }

    public static void main(String[] args){
        List<Product> productList = new ArrayList<>();

        productList.add(new Meat("Smoked Brisket", 1, false));
        productList.add(new Meat("Chicken Breast", 4, true));
        productList.add(new Meat("Pulled Pork", 2, false));
        productList.add(new Fruit("Mandarin Orange", 6, true));
        productList.add(new Fruit("Concord Grapes", 30, false));
        productList.add(new Fruit("Barlett Pear", 5, true));

//        productList.add(new Meat("Lean Ground Turkey"));
//        productList.add(new Meat("Wagyu Beef Burgers"));
//        productList.add(new Meat("Plant-Based Ground Beef"));
//        productList.add(new Fruit("Senga Sengana Strawberries"));
//        productList.add(new Fruit("Sunglo Nectarines");
//        productList.add(new Fruit("Clingstone Peaches"));
//        productList.add(new Fruit("Seedless Red Grapes"));
//        productList.add(new Fruit("Seedless Green Grapes"));

        // Print whole list:
        displayProducts(productList);
        // Print Meat:
        displayProducts(productList, "Meat");
        // Print Fruit:
        displayProducts(productList, "Fruit");
        // Print index:
        displayProduct(productList, 3);
    }
}
