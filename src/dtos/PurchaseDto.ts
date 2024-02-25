export default class PurchaseDto {
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

  get invoiceNumber(): string {
    return this._invoiceNumber;
  }

  set invoiceNumber(value: string) {
    this._invoiceNumber = value;
  }
  constructor(
    productId: number,
    quantity: number,
    supplierName: string,
    invoiceAmount: number,
    invoiceNumber: string,
  ) {
    this._productId = productId;
    this._quantity = quantity;
    this._supplierName = supplierName;
    this._invoiceAmount = invoiceAmount;
    this._invoiceNumber = invoiceNumber;
  }
  private _productId: number;
  private _quantity: number;
  private _supplierName: string;
  private _invoiceAmount: number;
  private _invoiceNumber: string;
}
