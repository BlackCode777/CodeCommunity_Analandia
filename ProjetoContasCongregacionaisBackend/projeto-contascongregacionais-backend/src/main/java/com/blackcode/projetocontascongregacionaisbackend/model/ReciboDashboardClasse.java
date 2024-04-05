
package com.blackcode.projetocontascongregacionaisbackend.model;

import java.util.Date;

public class ReciboDashboardClasse {
    /*
     * idReciboDashboard: number;
     * mesReciboDashboard: string; //<h4>Recibos do mês {{ "Fevereiro" }}</h4>
     * dataReciboDashboard: string; //<h6>Data {{ "01/02/2024" }}</h6>
     * donativoObraMundRecDashboard: number; //<p>Donativos para Obra Mundial: R$ {{
     * "250,00" }}</p>
     * donativoDespCongrLocalRecDash: number; //<p>Donativo - Desp.Congregação
     * local: R${{ "1200,00" }}</p>
     * donativoTipo: string; //<p>Tipo: {{ "Donativo" }}</p>
     * arranjoDeOnibus: number; //<p>Arranjo de ônibus: R$ {{ "3500,00" }}</p>
     */

    private Long idReciboDashboard;
    private String mesReciboDashboard;
    private String dataReciboDashboard;
    private Float donativoObraMundRecDashboard;
    private Float donativoDespCongrLocalRecDash;
    private Float arranjoDeOnibus;
    private String donativoTipo;

    public void constructor() {
    }

    public void constructor(Long idReciboDashboard, String mesReciboDashboard, String dataReciboDashboard,
            Float donativoObraMundRecDashboard, Float donativoDespCongrLocalRecDash, Float arranjoDeOnibus,
            String donativoTipo) {
        this.idReciboDashboard = idReciboDashboard;
        this.mesReciboDashboard = mesReciboDashboard;
        this.dataReciboDashboard = dataReciboDashboard;
        this.donativoObraMundRecDashboard = donativoObraMundRecDashboard;
        this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash; // Aqui tenho provavelmente tenho um Array
                                                                            // de objetos de outra classe
                                                                            // DespesasCongrLocal[luz/aqua/resolucoes/internet/]
        this.arranjoDeOnibus = arranjoDeOnibus;
        this.donativoTipo = donativoTipo;
    }

    // Criar métodos para soma dos valores this.donativoObraMundRecDashboard /
    // this.donativoDespCongrLocalRecDash / this.arranjoDeOnibus

    /**
     * @return Long return the idReciboDashboard
     */
    public Long getIdReciboDashboard() {
        return idReciboDashboard;
    }

    /**
     * @param idReciboDashboard the idReciboDashboard to set
     */
    public void setIdReciboDashboard(Long idReciboDashboard) {
        this.idReciboDashboard = idReciboDashboard;
    }

    /**
     * @return String return the mesReciboDashboard
     */
    public String getMesReciboDashboard() {
        return mesReciboDashboard;
    }

    /**
     * @param mesReciboDashboard the mesReciboDashboard to set
     */
    public void setMesReciboDashboard(String mesReciboDashboard) {
        this.mesReciboDashboard = mesReciboDashboard;
    }

    /**
     * @return String return the dataReciboDashboard
     */
    public String getDataReciboDashboard() {
        return dataReciboDashboard;
    }

    /**
     * @param dataReciboDashboard the dataReciboDashboard to set
     */
    public void setDataReciboDashboard(String dataReciboDashboard) {
        this.dataReciboDashboard = dataReciboDashboard;
    }

    /**
     * @return Float return the donativoObraMundRecDashboard
     */
    public Float getDonativoObraMundRecDashboard() {
        return donativoObraMundRecDashboard;
    }

    /**
     * @param donativoObraMundRecDashboard the donativoObraMundRecDashboard to set
     */
    public void setDonativoObraMundRecDashboard(Float donativoObraMundRecDashboard) {
        this.donativoObraMundRecDashboard = donativoObraMundRecDashboard;
    }

    /**
     * @return Float return the donativoDespCongrLocalRecDash
     */
    public Float getDonativoDespCongrLocalRecDash() {
        return donativoDespCongrLocalRecDash;
    }

    /**
     * @param donativoDespCongrLocalRecDash the donativoDespCongrLocalRecDash to set
     */
    public void setDonativoDespCongrLocalRecDash(Float donativoDespCongrLocalRecDash) {
        this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash;
    }

    /**
     * @return Float return the arranjoDeOnibus
     */
    public Float getArranjoDeOnibus() {
        return arranjoDeOnibus;
    }

    /**
     * @param arranjoDeOnibus the arranjoDeOnibus to set
     */
    public void setArranjoDeOnibus(Float arranjoDeOnibus) {
        this.arranjoDeOnibus = arranjoDeOnibus;
    }

    /**
     * @return String return the donativoTipo
     */
    public String getDonativoTipo() {
        return donativoTipo;
    }

    /**
     * @param donativoTipo the donativoTipo to set
     */
    public void setDonativoTipo(String donativoTipo) {
        this.donativoTipo = donativoTipo;
    }

}