export interface IProduct {
  appId: number;
  applicationName: string;
  createDate: string ;
  active: string;
  adent: string;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface TableSchema {
  tableName: string;
  isparent: string;
  retentionDays: number ;
  Action: string;
  parentTable: string;
  classCode: string;
  legalHold: number;
  primaryColumn: string;
  condition: string;
  notes: string;
}
