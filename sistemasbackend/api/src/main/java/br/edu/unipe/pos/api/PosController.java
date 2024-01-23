package br.edu.unipe.pos.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pos")
public class PosController {

    @GetMapping("/hello")
    public String hello() {
        return "Freitas";
    }
}
