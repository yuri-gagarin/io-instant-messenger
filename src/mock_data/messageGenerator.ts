import faker from "faker";
import { MessageData, MessageSender } from "../components/client/messages/custom_types/typeDeclratations";

export const generateMessage = (sender: MessageSender): MessageData => {
  return {
    sender: sender,
    content: faker.lorem.words(Math.ceil(Math.random() * 10)),
    sentAt: new Date(Date.now()).toString()
  }
};

export const generateMockMessages = (numberOfMessages: number): MessageData[] => {
  const messageData: MessageData[] = [];
  for (let i = 0; i < numberOfMessages; i++) {
    const sender: MessageSender = Math.round(Math.random()) === 1 ? "user" : "vendor";
    messageData.push(generateMessage(sender));
  }
  return messageData;
};
