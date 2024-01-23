package br.edu.unipe.pos.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/freitas")
public class FreitasController {

    @GetMapping("/nome")
    public String nome(){
        return "Vinícius de Freitas";
    }
}
