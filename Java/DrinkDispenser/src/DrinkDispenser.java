import com.company.Syrups;
import com.company.Shots;
import com.company.CupHolder;

import java.util.ArrayList;
import java.util.List;

public class DrinkDispenser {
    private List<Syrups> syrups = new ArrayList<>();
    private List<Shots> shots = new ArrayList<>();
    private List<CupHolder> cups = new ArrayList<>();

    public void serveDrink(String size, int syrupIndex){
        //System.out.printf("", );
    }

    public void serveDrink(String size, int syrupIndex, int shotIndex, int shotCount){

    }

    public int lowSyrups(int vol){
        return 1;
    }

    public int lowShots(int num){
        return 1;
    }

    public void addSyrup(Syrups syrup){
        syrups.add(syrup);
    }

    public void addShot(Shots shot){
        shots.add(shot);
    }

    public void replaceSyrup(int index, String newSyrup){

    }

    public void replaceShot(int index, String newShot){

    }
}
