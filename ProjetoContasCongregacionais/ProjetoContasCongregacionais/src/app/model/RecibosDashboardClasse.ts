export interface RecibosDashboardClasse {
  _id: string;
  mesReciboDashboard: string;
  dataReciboDashboard: any;
  donativoObraMundRecDashboard: number;
  donativoDespCongrLocalRecDash: number;
  donativoTipo: string;
  arranjoDeOnibus: number;
  
}

/*

copilot redefina o campo id para receber um tipo object do mongodb

export interface RecibosDashboardClasse {
  _id: any;
  mesReciboDashboard: string;
  dataReciboDashboard: any;
  donativoObraMundRecDashboard: any;
  donativoDespCongrLocalRecDash: any;
  donativoTipo: string;
  arranjoDeOnibus: any;

}

*/
