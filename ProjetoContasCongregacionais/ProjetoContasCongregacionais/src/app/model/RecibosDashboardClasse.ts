export class ClasseRecibosDashboard {
  _id: string;
  mesReciboDashboard: string;
  dataReciboDashboard: string; // considerando que pode ser nulo, você pode querer formatar isso de alguma maneira especial
  donativoObraMundRecDashboard: any;
  donativoDespCongrLocalRecDash: number;
  donativoTipo: string;
  arranjoDeOnibus: number;

  constructor(data: any) {
    this._id = data._id || 'ID não informado'; ;
    this.mesReciboDashboard = data.mesReciboDashboard || 'Data não informada'; // Exemplo de fallback
    this.dataReciboDashboard = data.dataReciboDashboard || 'Data não disponível';
    this.donativoObraMundRecDashboard = data.donativoObraMundRecDashboard || 0;
    this.donativoDespCongrLocalRecDash = data.donativoDespCongrLocalRecDash || 0;
    this.donativoTipo = data.donativoTipo || 'Não especificado';
    this.arranjoDeOnibus = data.arranjoDeOnibus || 0;
  }
}


export interface RecibosDashboardClasse {
  id: string;
  mesReciboDashboard: string;
  dataReciboDashboard: any;
  donativoObraMundRecDashboard: number;
  donativoDespCongrLocalRecDash: number;
  donativoTipo: string;
  arranjoDeOnibus: number;
  
}

