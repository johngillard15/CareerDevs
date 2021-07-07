package com.company;

/**
 * <h1>DrinkDispenser</h1>
 *
 * <p>Today you will be practicing the "Has A" relationship by creating a DrinkDispenser system.</p>
 * <br>
 * <p>The DrinkDispenser system will have
 * <li>a collection of Syrups. These syrups will have a name and a volume</li>
 * <li>a collection of Shots. These will have a Flavor a volume and amount to dispense per shot.</li>
 * <li>Three different CupHolders with sizes 'small' 'medium' large' (you can decide what those numbers are)</li></p>
 * <br>
 * <h3>CupHolder details:</h3>
 * <p>The CupHolder class will have</p>
 * <li>Volume per cup</li>
 * <li>Quantity</li>
 * <li>our cups are not smart cups so it won't be able to tell us if it's full or how full however it will be able to respond with it's size.</li>
 * <li>a dispenseCup() method that will return the volume of the cup and deduct one from it's quantity of cups.</li>
 * <li>a refill(amt) method that will add amt to the quantity of cups</li>
 * <li>Extra challenges:</li>
 * <li>make the volume a private final field that can't be modified or accessed outside of the dispenseCup method.</li>
 * <li>make the quantity field a private field so it can only be modified through the two methods.</li>
 * <br>
 * <h3>Shots Details</h3>
 * <p>the shots class will have:</p>
 * <li>a flavor name</li>
 * <li>current amount of liquid</li>
 * <li>amount to dispense per "shot"</li>
 * <li>a dispense() method that deducts the liquid for a single shot per call and returns the flavor of the shot.</li>
 * <li>a getVolume method that will return the amount of shots remaining (not liquid amount the number of shots);</li>
 * <li>Extra Challenges:</li>
 * <li>make the fields all private.</li>
 * <li>update the dispense method to see if there is enough liquid to dispense and if not return null instead of the flavor.</li>
 * <br>
 * <h3>Syrup details</h3>
 * <li>drink name</li>
 * <li>amount of liquid</li>
 * <li>a dispense(amt) method that deducts the amount of liquid requested</li>
 * <li>a getVolume method that will return the amount of liquid remaining</li>
 * <li>Extra Challenges:</li>
 * <li>make fields Private</li>
 * <br> 
 * <h3>DrinkDispenser Methods:</h3>
 * <li>ServeDrink(size, syrupIndex) will get a cup of the size requested and dispense the syrup requested. Will display "{Size} {Drink}" ex: "Medium Coke"</li>
 * <li>ServeDrink(size, syrupIndex, shotIndex, shotCount) will get a cup of size requested add shotcount of shotIndex shot and dispense the syrup requested will display "{Size} {Shot} {Drink}" ex "Large Cherry Sprite"</li>
 * <li>lowSyrups(vol) will scan the syrups and return the indexes of any syrups that have less then vol liquid remaining</li>
 * <li>lowShots(num) will scan the shots and return the indexes of any shots that have less then num shots remaining</li>
 * <li>addSyrup(syrup) will add the syrup to the collection</li>
 * <li>addShot(shot) will add the shot to the collection.</li>
 * <li>extraChallenges</li>
 * <li>replaceSyrup(index, newSyrup) will replace the syrup at index with newSyrup</li>
 * <li>replaceShot(index, shot) will replace the shot at the index with newShot</li>
 * <li>update serveDrinks system to display "failed" if either there is not enough cups or not enough shots.</li>
 *
 * @since 1/7/2021
 * @author John Gillard
 */

public class Main {

    public static void main(String[] args) {
        DrinkDispenser dispenser = new DrinkDispenser();

        dispenser.addSyrup(new Syrup("Purple Drank", 1000));
        dispenser.addSyrup("Blue Drank", 600);
        dispenser.addSyrup(new Syrup("Orange", 750));

        dispenser.serveDrink("medium", 3);
    }
}
