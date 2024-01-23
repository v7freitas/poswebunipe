package br.edu.unipe.pos.api.controller;

import br.edu.unipe.pos.api.model.Competicao;
import br.edu.unipe.pos.api.service.CompeticaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/competicao")
public class CompeticaoController {

    @Autowired
    private CompeticaoService service;

    @PostMapping
    public ResponseEntity<Competicao> cadastrar(@RequestBody Competicao competicao) {
        competicao = service.cadastrar(competicao);
        return ResponseEntity.ok(competicao);
    }

    @PutMapping
    public ResponseEntity<Competicao> alterar(@RequestBody Competicao competicao){
        competicao = service.alterar(competicao);
        return ResponseEntity.ok(competicao);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        service.deletar(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Competicao> consultarPorId(@PathVariable Integer id){
        return ResponseEntity.ok(service.consultarPorId(id));
    }
}
