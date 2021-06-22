package com.company;

import java.util.List;

public class DisplayProducts {
//    public static void displayProducts(List<Product> list, String type){
//        for(Product product : list){
//            if(type.equals("Fruit") && product instanceof Fruit){
//                System.out.println((Fruit) product);
//            }
//            else if(type.equals("Meat") && product instanceof Meat){
//                System.out.println((Meat) product);
//            }
//        }
//    }
    public static void displayProducts(List<Product> list, String type){
        for(Product product : list){
            switch (type){
                case "Fruit":
                    if(product instanceof Fruit){
                        System.out.println((Fruit) product);
                    }
                    break;

                case "Meat":
                    if(product instanceof Meat){
                        System.out.println((Meat) product);
                    }
                    break;
            }
        }
    }

    public static void displayProducts(List<Product> list, int i){
        System.out.println(list.get(i));
    }
}
