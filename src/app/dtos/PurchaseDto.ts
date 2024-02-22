export default class PurchaseDto {
  get purchaseDate(): string {
    return this._purchaseDate;
  }

  set purchaseDate(value: string) {
    this._purchaseDate = value;
  }

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get supplierName(): string {
    return this._supplierName;
  }

  set supplierName(value: string) {
    this._supplierName = value;
  }

  get invoiceAmount(): number {
    return this._invoiceAmount;
  }

  set invoiceAmount(value: number) {
    this._invoiceAmount = value;
  }

  get invoiceNo(): string {
    return this._invoiceNo;
  }

  set invoiceNo(value: string) {
    this._invoiceNo = value;
  }
  constructor(
    purchaseDate: string,
    productId: number,
    quantity: number,
    supplierName: string,
    invoiceAmount: number,
    invoiceNo: string,
  ) {
    this._purchaseDate = purchaseDate;
    this._productId = productId;
    this._quantity = quantity;
    this._supplierName = supplierName;
    this._invoiceAmount = invoiceAmount;
    this._invoiceNo = invoiceNo;
  }

  private _purchaseDate: string;
  private _productId: number;
  private _quantity: number;
  private _supplierName: string;
  private _invoiceAmount: number;
  private _invoiceNo: string;
}
