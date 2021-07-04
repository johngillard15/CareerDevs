import com.company.Syrups;
import com.company.Shots;
import com.company.CupHolder;

import java.util.ArrayList;
import java.util.List;

public class DrinkDispenser {
    private List<Syrups> syrups = new ArrayList<>();
    private List<Shots> shots = new ArrayList<>();
    private List<CupHolder> cups = new ArrayList<>();

    public DrinkDispenser(){

    }

    public void serveDrink(String size, int syrupIndex){
        //String drink = syrups.get(syrupIndex).dispense();
        System.out.printf("%s %s\n", size, drink);
    }

    public void serveDrink(String size, int syrupIndex, int shotIndex, int shotCount){

    }

    public int lowSyrups(int vol){
        return 1;
    }

    public int lowShots(int num){
        return 1;
    }

    public void addSyrup(Syrups newSyrup){
        syrups.add(newSyrup);
    }

    public void addSyrup(Syrups name, int vol){
        syrups.add(new Syrups(name, vol));
    }

    public void addShot(Shots newShot){
        shots.add(newShot);
    }

    public void replaceSyrup(int index, String newSyrup){

    }

    public void replaceShot(int index, String newShot){

    }
}
