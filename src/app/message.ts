export enum MessageType {
    IMAGE = 'image',
    TEXT = 'text',
    SOUND = 'sound',
    VIDEO = 'video',
    EVENT = 'event',
}

export interface Message {
    content: string;
    dateArrived: number;
    favorite: boolean;
    type: MessageType;
    sender?: string;
}