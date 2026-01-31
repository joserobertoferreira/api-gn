// Em 'src/modules/document-texts/document-text.service.ts' (novo nome/local)

import { Injectable } from '@nestjs/common';
// import { OnEvent } from '@nestjs/event-emitter';
// import { IDocumentCreatedEvent } from 'src/common/types/document-text.types';
import { PrismaService } from 'src/prisma/prisma.service';

// Defina os nomes dos eventos como constantes
export const SALES_ORDER_CREATED_EVENT = 'salesOrder.created.intercompany';
export const PURCHASE_ORDER_CREATED_EVENT = 'purchaseOrder.created'; // Evento futuro

@Injectable()
export class DocumentTextService {
  constructor(private readonly prisma: PrismaService) {}

  // O método agora "ouve" um array de eventos
  // @OnEvent([SALES_ORDER_CREATED_EVENT, PURCHASE_ORDER_CREATED_EVENT], { async: true })
  // async handleDocumentCreated(event: IDocumentCreatedEvent): Promise<void> {
  //   const { createdDocument, originalInputLines } = event;

  //   console.log(`[DocumentTextService] Evento recebido para o documento: ${createdDocument.orderNumber}`);

  //   const createdLinesMap = new Map(createdDocument.orderLines.map((line) => [line.lineNumber, line]));

  //   for (const inputLine of originalInputLines) {
  //     if (inputLine.orderTextLine && inputLine.orderTextLine.trim() !== '') {
  //       const createdLine = createdLinesMap.get(inputLine.lineNumber);

  //       if (createdLine) {
  //         console.log(` -> A processar texto para a linha #${createdLine.lineNumber}: "${inputLine.orderTextLine}"`);

  //         // A sua lógica de INSERT genérica
  //         // Agora você pode precisar de um 'documentType' no evento para saber em qual tabela inserir
  //         /*
  //         await this.prisma.yourTextTable.create({
  //           data: {
  //             documentNumber: createdDocument.orderNumber,
  //             documentType: createdDocument.documentType, // Exemplo
  //             lineId: createdLine.ROWID,
  //             text: inputLine.orderTextLine,
  //           }
  //         });
  //         */
  //       }
  //     }
  //   }
  // }
}
