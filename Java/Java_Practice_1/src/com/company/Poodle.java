package com.company;

public class Poodle extends Dog {
    public Poodle(String hair, String name){
        super(hair, name);
    }

    public String speak(){
        return "Yip!";
    }

    public String dance(){
        return "<(^ _ ^ <) (> ^ _ ^)>";
    }
}
