package com.company;

class Vehicle {
    public int wheels = 4;
    public String makeAndModel;
    public double horsePower;

    public Vehicle(String makeAndModel, double horsePower){
        this.makeAndModel = makeAndModel;
        this.horsePower = horsePower;
    }

    public int getWheels(){
        return wheels;
    }

    public void setWheels(int newWheels){
        this.wheels = newWheels;
    }

    public void rev(){
        System.out.printf("\nI am a %s. I have %s wheels and %s hp. Vroom!", makeAndModel, wheels, horsePower);
    }
}

class Sedan extends Vehicle {
    public Sedan(String makeAndModel, double horsePower){
        super(makeAndModel, horsePower);
    }
}

class Pickup extends Vehicle {
    public Pickup(String makeAndModel, double horsePower){
        super(makeAndModel, horsePower);
    }
}

class Dually extends Pickup {
    public Dually(String makeAndModel, double horsePower){
        super(makeAndModel, horsePower);
        wheels = 6;
    }
}

class Lawnmower extends Vehicle {
    public Lawnmower(String makeAndModel, double horsePower){
        super(makeAndModel, horsePower);
    }

    public void rev(){
        System.out.printf("\nI am a %s. I have %s wheels and a blistering %s hp. Why would anyone do drugs when they could just mow a lawn.", makeAndModel, wheels, horsePower);
    }
}


public class Main {

    public static void main(String[] args) {
        Vehicle car = new Vehicle("Benz Patent Motor Car", 0.75);
        car.setWheels(3);
        car.rev();

        Sedan toyotaCorolla = new Sedan("Toyota Corolla", 169);
        toyotaCorolla.rev();

        Pickup fordRaptor = new Pickup("Ford Raptor", 450);
        fordRaptor.rev();

        Dually fordF450 = new Dually("Ford F-450", 475);
        fordF450.rev();

        Lawnmower husqvarnaZ254 = new Lawnmower("Husqvarna Z254", 26);
        husqvarnaZ254.rev();
    }
}
