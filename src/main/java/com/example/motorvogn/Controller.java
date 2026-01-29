package com.example.motorvogn;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;


@RestController
public class Controller {

    public final List<Motorvogn> motorvognRegister = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreKunde(Motorvogn bil){
        motorvognRegister.add(bil);
    }

    @GetMapping("/hentAlle")
    public List<Motorvogn> hentAlle(){
        return motorvognRegister;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        motorvognRegister.clear();
    }
}
