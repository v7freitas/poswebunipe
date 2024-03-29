package br.edu.unipe.pos.api.service;

import br.edu.unipe.pos.api.model.Atleta;
import br.edu.unipe.pos.api.repository.AtletaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class AtletaService {
    @Autowired
    private AtletaRepository repository;

    public Atleta cadastrar(Atleta atleta){
        return repository.save(atleta);
    }

    public List<Atleta> listar(){
        return repository.findAll();
    }

    public List<Atleta> listarPorNome(String nome){
        return repository.findByNomeOrderByNomeAsc(nome);
    }

    public Atleta alterar(Atleta atleta){
        if(Objects.isNull(atleta.getId())){
            throw new RuntimeException();
        }
        return repository.save(atleta);
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public Atleta consultarPorId(Integer id) {
        return repository.findById(id)
                .orElseThrow(RuntimeException::new);
    }
}
