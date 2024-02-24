package br.edu.unipe.pos.api.model;

import br.edu.unipe.pos.api.validator.EmailValidation;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import java.io.Serializable;

@Getter
@Setter
@Entity
public class Atleta implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 150)
    private String nome;
    private Integer anoNascimento;
    private String esporte;
    @EmailValidation
    private String email;
    @CPF
    private String cpf;

}
