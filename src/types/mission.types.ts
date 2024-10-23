export interface Mission {
  id: string;
  type: string;
  missionResponsible: string;
  missionResponsibleNumber: string;
  fromAddress: string;
  toAddress: string;
  city: string;
  price: number;
  executeDateTime: string;
  state: string;
  description: string;
  sellerId: string;
  buyerId: string;
}
