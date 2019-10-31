import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Message, MessageType } from "./message";

@Injectable()
export class NetworkService {

    mockedMessages: Message[] = [
        {
            content: "Hello, how do you do?",
            dateArrived: Date.now(),
            favorite: true,
            type: MessageType.TEXT,
        },
        {
            content: "Party this evening!!\n\nWhere: Neverland\nWhen:8pm\n\nDon't forget the party hat!",
            dateArrived: Date.now(),
            favorite: true,
            type: MessageType.TEXT,
        },
        {
            content: "All sparrows back to the base nest!\nI repeat, all sparrows to the base nest!",
            dateArrived: Date.now(),
            favorite: false,
            type: MessageType.TEXT,
        },
    ];

    constructor() { }

    getMessages(): Observable<Message[]> {
        return of(this.mockedMessages);
    }

    sendMessage(content: string) {
        let message: Message = {
            content: content,
            dateArrived: Date.now(),
            favorite: false,
            type: MessageType.TEXT,
        };
        this.mockedMessages.concat(message);
    }
}
