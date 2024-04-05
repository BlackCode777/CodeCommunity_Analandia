export interface RecibosDashboardClasse {
  id: number;
  mesReciboDashboard: string;
  dataReciboDashboard: string;
  donativoObraMundRecDashboard: Number;
  donativoDespCongrLocalRecDash: Number;
  donativoTipo: string;
  arranjoDeOnibus: Number;

  /*
  
    id: number | undefined;
  mesReciboDashboard: string | null; //<h4>Recibos do mês {{ "Fevereiro" }}</h4>
  dataReciboDashboard: string | null; //<h6>Data {{ "01/02/2024" }}</h6>
  donativoObraMundRecDashboard: number | undefined; //<p>Donativos para Obra Mundial: R$ {{ "250,00" }}</p>
  donativoDespCongrLocalRecDash: number | undefined; //<p>Donativo - Desp.Congregação local: R${{ "1200,00" }}</p>
  donativoTipo: string | null; //<p>Tipo: {{ "Donativo" }}</p>
  arranjoDeOnibus: number | undefined; //<p>Arranjo de ônibus: R$ {{ "3500,00" }}</p>

  constructor(
    id: number = 0,
    mesReciboDashboard: string = '',
    dataReciboDashboard: string = '',
    donativoObraMundRecDashboard: number = 0,
    donativoDespCongrLocalRecDash: number = 0,
    donativoTipo: string = '',
    arranjoDeOnibus: number = 0
  ) {
    this.id = id;
    this.mesReciboDashboard = mesReciboDashboard;
    this.dataReciboDashboard = dataReciboDashboard;
    this.donativoObraMundRecDashboard = donativoObraMundRecDashboard;
    this.donativoDespCongrLocalRecDash = donativoDespCongrLocalRecDash;
    this.donativoTipo = donativoTipo;
    this.arranjoDeOnibus = arranjoDeOnibus;
  }
  
  */
}
