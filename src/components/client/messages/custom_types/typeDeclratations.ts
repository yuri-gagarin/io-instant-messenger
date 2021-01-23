export type MessageSender = "vendor" | "user";

export type MessageData = {
  sender: MessageSender;
  content: string;
  sentAt?: string;
}