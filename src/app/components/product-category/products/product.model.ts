export class Product {
  public id: number;
  public name: string;
  public price:number;
  public description: string;
  public imagePath: string;


  constructor(id:number,name: string,price:number, desc: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
