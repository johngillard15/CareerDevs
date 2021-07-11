import com.company.CupHolder;
import com.company.Syrup;

import java.util.ArrayList;
import java.util.List;

public class DrinkDispenser {
    public List<Syrup> syrups = new ArrayList<>();;
    public CupHolder small = new CupHolder(8);
    public CupHolder medium = new CupHolder(10);
    public CupHolder large = new CupHolder(12);

    public DrinkDispenser(int smallVol, int mediumVol, int largeVol){
        small = new CupHolder(smallVol);
        medium = new CupHolder(mediumVol);
        large = new CupHolder(largeVol);
    }

    /*public void serveDrink(String size, int syrupIndex){
        //String drink = syrups.get(syrupIndex).dispense();
        System.out.printf("%s %s\n", size, drink);
    }*/

    public void serveDrink(String size, int syrupI) {
        int vol;
        switch (size) {
            case "S":
                vol = small.dispenseCup();
                break;
            case "M":
                vol = medium.dispenseCup();
                break;
            case "L":
                vol = large.dispenseCup();
                break;
            default:
                System.out.println("ERROR: invalid size");
                return;
        }
        String drink = syrups.get(syrupI).dispense(vol);

        // output should be "{size} {drink}"

        System.out.printf("%s %s\n", size, drink);
        // System.out.println(size + " " + drink);
    }

    public List<String> lowSyrups(int lowValue) {
        List<String> output = new ArrayList<>();

        for (int i = 0; i < syrups.size(); i++) {
            if (syrups.get(i).getVol() <= lowValue) {
                output.add(i + ": " + syrups.get(i).name);
            }
        }

        return output;
    }

    public int lowShots(int num){
        return 1;
    }

    public void addSyrup(Syrup newSyrup) {
        syrups.add(newSyrup);
    }

    public void addSyrup(String name, int vol) {
        syrups.add(new Syrup(name, vol));
    }

    /*public void addShot(Shot newShot){

    }

    public void replaceSyrup(int index, String newSyrup){

    }

    public void replaceShot(int index, String newShot){

    }*/
}
