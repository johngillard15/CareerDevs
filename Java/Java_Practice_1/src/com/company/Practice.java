package com.company;

public class Practice {
    // Challenge 1 - Leap Year
    public static boolean isLeapYear(int year){
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }

    // Challenge 2 - Fibonacci Sequence
    public static int Fib(int pos){
        int lastFibo2 = 0; // second to last fibonacci number
        int lastFibo1 = 1; // last fibonacci number
        int fibo = 1; // current fibonacci number, loop starts here

        if(pos == 0)
            return lastFibo2;

        //System.out.printf("0: %d%n1: %d%n", lastFibo2, lastFibo1);
        for(int i = 2; i <= pos; i++){ // starts at index 2
            fibo = lastFibo2 + lastFibo1;
            lastFibo2 = lastFibo1;
            lastFibo1 = fibo;
            //System.out.printf("%d: %d%n", i, fibo);
        }
        return fibo;
    }
}
