package com.company;

import java.util.ArrayList;
import java.util.List;

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
