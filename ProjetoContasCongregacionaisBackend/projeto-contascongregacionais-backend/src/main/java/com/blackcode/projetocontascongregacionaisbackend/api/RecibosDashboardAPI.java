package com.blackcode.projetocontascongregacionaisbackend.api;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blackcode.projetocontascongregacionaisbackend.model.ReciboDashboardClasse;
import com.blackcode.projetocontascongregacionaisbackend.services.ReciboDashboardService;

@RestController
@CrossOrigin
@RequestMapping("/recibos")
public class RecibosDashboardAPI {

    @Autowired
    ReciboDashboardService reciboService;
    private static final Logger logger = LoggerFactory.getLogger(RecibosDashboardAPI.class);

    @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowedHeaders = "*")
    @GetMapping("/getRecibosDashboardFindAll")
    public ResponseEntity<List<ReciboDashboardClasse>> getRecibosDashboardFindAll(
            @RequestParam(required = false) String param) {
        List<ReciboDashboardClasse> recibo = reciboService.findAll();
        logger.info("Recibo _############_ : {}", recibo);
        return recibo.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(recibo);

    }

    // metodo post
    @PostMapping("/postRecibosDashboardSave")
    public ResponseEntity<ReciboDashboardClasse> postRecibosDashboardSave(@RequestBody ReciboDashboardClasse recibo) {
        ReciboDashboardClasse savedRecibo = reciboService.save(recibo);
        return ResponseEntity.ok(savedRecibo);
    }

}