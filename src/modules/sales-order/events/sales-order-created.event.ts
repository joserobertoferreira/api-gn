/**
 * Represents the event that is emitted when an Intercompany Sales Order
 * is successfully created.
 *
 * It carries the necessary data payload for listeners to act upon.
 */
export class SalesOrderCreatedEvent {
  constructor() {}
  /**
   * An object representing the complete Sales Order that was created,
   * including its lines.
   */
  //   public readonly salesOrder: CrossSiteSalesOrder,

  //   /**
  //    * The Prisma transaction ID, if a listener needs to join
  //    * the same transaction. (This is an advanced pattern, but useful to have).
  //    */
  //   public readonly transactionId?: string; // Optional

  //   /**
  //    * The original input lines used to create the sales order.
  //    * This can be useful for listeners that need to reference
  //    * the initial request data.
  //    */
  //   public readonly orderLines?: SalesOrderLineInput[]; // Optional

  // constructor(salesOrder: CrossSiteSalesOrder, originalOrderLines: SalesOrderLineInput[], transactionId?: string) {
  //   this.salesOrder = salesOrder;
  //   this.transactionId = transactionId;
  //   this.orderLines = originalOrderLines;
  // }

  // public get createdDocument(): ICreatedDocumentWithLines {
  //   return { documentNumber: this.salesOrder.orderNumber, documentLines: this.salesOrder.orderLines };
  // }

  // public get originalInputLines(): ILineWithTextInput[] {
  //   return ;
  // }
}
