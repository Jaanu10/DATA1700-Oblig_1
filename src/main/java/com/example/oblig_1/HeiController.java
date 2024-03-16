package com.example.oblig_1;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class HeiController {
    ArrayList<Kino> kinoBilletter = new ArrayList<Kino>();
    @PostMapping("/lagre")
    public void nyListe(Kino kino){
        kinoBilletter.add(kino);
    }
    @GetMapping ("/hentBilletter")
    ArrayList<Kino> henterListe(){
        return kinoBilletter;
    }
    @GetMapping ("/slettBillett")
    public void slettListe(){
        kinoBilletter.clear();
    }
}
