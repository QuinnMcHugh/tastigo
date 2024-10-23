export interface IDeal {
  id: number;
  title: string;
  description: string;
  image: string;
  establishment: string;

  occurrence?: string; // todo: make these required, update where needed
  location?: string;
  createdDateTime?: Date;
  dealProof?: string;
  neighborhood?: string;
}
