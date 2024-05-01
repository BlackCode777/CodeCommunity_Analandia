package com.blackcode.projetocontascongregacionaisbackend.api;

import static java.util.Objects.*;

import java.util.List;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blackcode.projetocontascongregacionaisbackend.model.ReciboDashboardClasse;
import com.blackcode.projetocontascongregacionaisbackend.services.ReciboDashboardService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/recibos")
public class RecibosDashboardAPI {

    @Autowired
    ReciboDashboardService reciboService;
    private static Logger LOG = LoggerFactory.getLogger(RecibosDashboardAPI.class);

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getRecibosDashboardFindAll")
    public ResponseEntity<Object> getRecibosDashboardFindAll(@RequestParam(required = false) String param) {
        JSONObject mensagemJson = new JSONObject();
        try {
            List<ReciboDashboardClasse> recibo = reciboService.findAll();
            if (recibo.isEmpty()) {
                mensagemJson.put("message", "Nenhum recibo encontrado.");
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(mensagemJson.toString());
            } else {
                return ResponseEntity.ok(recibo.get(0));
            }
        } catch (Exception e) {
            LOG.error("Erro ao buscar recibos do dashboard", e);
            String mensagem = e.getMessage() + (isNull(e.getCause()) ? "" : " Causa: " + e.getCause().getMessage());
            mensagemJson.put("erro", mensagem);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mensagemJson.toString());
        }
    }

    // @GetMapping("/getRecibosDashboardFindAll")
    // public ResponseEntity<ReciboDashboardClasse> getRecibosDashboardFindAll(
    // @RequestParam(required = false) String param) {
    // List<ReciboDashboardClasse> recibo = reciboService.findAll();
    // return recibo.isEmpty() ? ResponseEntity.noContent().build() :
    // ResponseEntity.ok(recibo.get(0));
    // }

}
