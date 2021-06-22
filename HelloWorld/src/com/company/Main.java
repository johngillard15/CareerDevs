package com.company;

class Dog {
    private final int legs = 4;
    String hair;

    // public Dog(){}; default if there is no constructor
    public Dog(String hair){
        this.hair = hair;
    }

    public void speak(){
        System.out.println("woof!");
    }

    public int getLegs(){
        return legs;
    }
}

class Poodle extends Dog {
    public Poodle(String hair){
        super(hair);
    }

    public void speak(){
        System.out.println("yip");
    }

    public void speak(String bark){
        System.out.println(bark);
    }

    public String toString(){
       return "This poodle has " + getLegs() + " legs with " + hair + " hair.";
    }
}

class Calc {
    /*public static int sumTotal(int n) {
        // sum all numbers from 1 up to n
        int total = 0;

        for (int i = 0; i <= n; System.out.println(i)) {
            total += i++;
        }

        return total;
    }*/

    public static int sumTotal(int n) {
        int total, i;
        total = i = 0;

        while (i <= n) {
            total += i++;
        }

        return total;
    }

    public static int sumEvens(int n) {
        // sum all even numbers from 2 to n
        int total = 0;

        for (int i = 2; i <= n; i++) {
            if (i % 2 == 0)
                total += i;
        }

        return total;
    }
}

public class Main {
    public static void main(String[] args){
        /*Dog fido = new Dog("brown");
        fido.speak();

        Poodle jackdaughter = new Poodle("white");
        jackdaughter.speak();
        jackdaughter.speak("Hello, World!");

        System.out.println(jackdaughter);*/

        System.out.println(Calc.sumTotal(10));
        System.out.println(Calc.sumEvens(10));
    }
}
