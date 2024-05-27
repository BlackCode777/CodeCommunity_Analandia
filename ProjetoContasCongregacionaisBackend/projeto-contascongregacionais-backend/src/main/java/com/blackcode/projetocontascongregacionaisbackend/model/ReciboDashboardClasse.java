
package com.blackcode.projetocontascongregacionaisbackend.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.AccessType;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@AccessType(AccessType.Type.PROPERTY)
@Document(collection = "recibos-dashboard")
public class ReciboDashboardClasse {

    @MongoId(FieldType.OBJECT_ID)
    private ObjectId id;

    @Indexed
    private String mesReciboDashboard;

    @Indexed
    private String dataReciboDashboard;

    @Indexed
    @Field("donativoObraMundRecDashboard")
    private Float donativoObraMundRecDashboard; // Usando Float

    @Indexed
    @Field(targetType = FieldType.DECIMAL128)
    private Float donativoDespCongrLocalRecDash; // Usando Float

    @Indexed
    @Field(targetType = FieldType.DECIMAL128)
    private Float arranjoDeOnibus; // Usando Float

    @Indexed
    @Field(targetType = FieldType.STRING)
    private String donativoTipo;

    public void constructor(
            ObjectId id,
            String mesReciboDashboard, String dataReciboDashboard,
            Float donativoObraMundRecDashboard,
            Float donativoDespCongrLocalRecDash,
            Float arranjoDeOnibus,
            String donativoTipo) {
        this.id = id;
        this.mesReciboDashboard = mesReciboDashboard;
        this.dataReciboDashboard = dataReciboDashboard;
        this.donativoObraMundRecDashboard = donativoObraMundRecDashboard;
        this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash;
        this.arranjoDeOnibus = arranjoDeOnibus;
        this.donativoTipo = donativoTipo;
    }

    // Criar métodos para soma dos valores this.donativoObraMundRecDashboard /
    // this.donativoDespCongrLocalRecDash / this.arranjoDeOnibus
    public void constructor(
            Float donativoObraMundRecDashboard,
            Float donativoDespCongrLocalRecDash,
            Float arranjoDeOnibus) {
        this.donativoObraMundRecDashboard = donativoObraMundRecDashboard;
        this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash;
        this.arranjoDeOnibus = arranjoDeOnibus;
    }

    /**
     * create method for sum of values of according to the with same month
     * public <T> T valuesAccordingToTheMonth(Date month, Long id, Class<T> type) {
     * String message = "The month not is the same of the month and id not is equal
     * to id";
     * if (this.mesReciboDashboard.equals(month) && this.id.equals(id)) {
     * BigDecimal sum =
     * this.donativoObraMundRecDashboard.add(this.donativoDespCongrLocalRecDash)
     * .add(this.arranjoDeOnibus);
     * if (type.isAssignableFrom(BigDecimal.class)) {
     * if (type.isAssignableFrom(Float.class)) {
     * return type.cast(sum);
     * } else {
     * throw new IllegalArgumentException("The type is not supported " +
     * type.getName());
     * }
     * } else {
     * System.out.println(message);
     * }
     * return null;
     * }
     * 
     * /**
     * 
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

    // toString method
    @Override
    public String toString() {
        return "ReciboDashboardClasse [arranjoDeOnibus=" + arranjoDeOnibus + ", dataReciboDashboard="
                + dataReciboDashboard + ", donativoDespCongrLocalRecDash=" + donativoDespCongrLocalRecDash
                + ", donativoObraMundRecDashboard=" + donativoObraMundRecDashboard + ", donativoTipo=" + donativoTipo;
    }

}
