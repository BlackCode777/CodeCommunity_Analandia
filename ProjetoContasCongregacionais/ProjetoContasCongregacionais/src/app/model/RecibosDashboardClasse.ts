export class RecibosDashboardClasse {
  mesReciboDashboard: string; //<h4>Recibos do mês {{ "Fevereiro" }}</h4>
  dataReciboDashboard: string; //<h6>Data {{ "01/02/2024" }}</h6>
  donativoObraMundRecDashboard: number; //<p>Donativos para Obra Mundial: R$ {{ "250,00" }}</p>
  donativoDespCongrLocalRecDash: number; //<p>Donativo - Desp.Congregação local: R${{ "1200,00" }}</p>
  donativoTipo: string; //<p>Tipo: {{ "Donativo" }}</p>
  arranjoDeOnibus: number; //<p>Arranjo de ônibus: R$ {{ "3500,00" }}</p>

  constructor(
    mesReciboDashboard: string,
    dataReciboDashboard: string,
    donativoObraMundRecDashboard: number,
    donativoDespCongrLocalRecDash: number,
    donativoTipo: string,
    arranjoDeOnibus: number
  ) {
    (this.mesReciboDashboard = mesReciboDashboard),
      (this.dataReciboDashboard = dataReciboDashboard),
      (this.donativoObraMundRecDashboard = donativoObraMundRecDashboard);
    this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash;
    this.donativoTipo = donativoTipo;
    this.arranjoDeOnibus = arranjoDeOnibus;
  }
}
