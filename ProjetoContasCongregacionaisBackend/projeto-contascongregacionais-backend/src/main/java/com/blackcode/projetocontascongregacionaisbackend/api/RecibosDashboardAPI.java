package com.blackcode.projetocontascongregacionaisbackend.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blackcode.projetocontascongregacionaisbackend.model.ReciboDashboardClasse;
import com.blackcode.projetocontascongregacionaisbackend.services.ReciboDashboardService;

@RestController
// @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/recibos")
public class RecibosDashboardAPI {

    @Autowired
    ReciboDashboardService reciboService;

    @GetMapping("/getRecibosDashboard")
    public ResponseEntity<ReciboDashboardClasse> getRecibosDashboard(@RequestParam(required = false) String param) {
        List<ReciboDashboardClasse> recibo = reciboService.findAll();
        return recibo.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(recibo.get(0));
    }

}
