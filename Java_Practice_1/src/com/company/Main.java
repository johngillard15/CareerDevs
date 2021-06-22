package com.company;

import java.util.*;

public class Main {

    public static void main(String[] args) {
//        int year = 2400; // 2004 -> true, 2100 -> false, 2400 -> true
//        int index = 6; // 2 -> 1, 6 -> 8, 10 -> 55
//
//        System.out.println("Challenge 1: Leap Year");
//        System.out.printf("%d is a leap year? %s%n", year, Practice.isLeapYear(year));
//        System.out.println("Challenge 2: Fibonacci Sequence");
//        System.out.printf("Fibonacci number at position %d: %d%n", index, Practice.Fib(index));

        int[] arr = new int[8];
        arr[3] = 3;

        List<Integer> list = new ArrayList<>();
        list.add(8);
        list.add(3);
        list.add(42);
        list.add(3000);
        System.out.println(list);

        List<Dog> myDogs = new ArrayList<>();
        myDogs.add(new Dog("Short", "Rufus"));
        myDogs.add(new Dog("Long", "Fifo"));
        myDogs.add(new Dog("Medium", "Holly"));
        myDogs.add(new Poodle("White", "Doodle"));

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        for (Dog dog : myDogs) {
            System.out.println(dog);
            if(dog instanceof Poodle)
                System.out.println(((Poodle) dog).dance());
        }
    }
}
