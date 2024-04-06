package com.blackcode.projetocontascongregacionaisbackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blackcode.projetocontascongregacionaisbackend.model.ReciboDashboardClasse;
import com.blackcode.projetocontascongregacionaisbackend.repositories.ReciboDashBoardRepo;

@Service
public class ReciboDashboardService {

    @Autowired
    private ReciboDashBoardRepo reciboRepo;

    public ReciboDashboardClasse save(ReciboDashboardClasse recibo) {
        // salvando recibo
        return reciboRepo.save(recibo);
    }

    // busca todos os recibos na base
    public List<ReciboDashboardClasse> findAll() {
        // buscando todos os recibos
        Optional<List<ReciboDashboardClasse>> recibos = Optional.ofNullable(reciboRepo.findAll());
        return recibos.get();
    }

    // public List<ReciboDashboardClasse> findAll() {
    // ListCrudRepository<ReciboDashboardClasse, Long> reciboRepo;
    // // buscando todos os recibos
    // Optional<List<ReciboDashboardClasse>> recibos = reciboRepo.findAll();
    // return recibos.get();
    // }

}
