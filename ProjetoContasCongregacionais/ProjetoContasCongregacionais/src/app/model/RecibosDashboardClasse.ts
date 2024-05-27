export class ClasseRecibosDashboard {
  id: string | undefined;
  mesReciboDashboard: string | undefined;
  dataReciboDashboard: string | undefined; 
  donativoObraMundRecDashboard: number;
  donativoDespCongrLocalRecDash: number;
  donativoTipo: string | undefined;
  arranjoDeOnibus: number;

  constructor(data: any) {
    this.id = data.id || '';
    this.mesReciboDashboard = data.mesReciboDashboard || '';
    this.dataReciboDashboard = data.dataReciboDashboard || '';
    this.donativoObraMundRecDashboard = data.donativoObraMundRecDashboard || undefined;
    this.donativoDespCongrLocalRecDash = data.donativoDespCongrLocalRecDash || undefined;
    this.donativoTipo = data.donativoTipo || '';
    this.arranjoDeOnibus = data.arranjoDeOnibus || undefined;
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

