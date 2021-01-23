export interface ClientMessengerComponetProps {
  socketIOConstants: {
    socketIOServerURL: string;
  },
  socketIOListeners?: {
    receiveVendorConnection?: string;
    receiveVendorDisconnect?: string;
    receiveForNewMessage?: string; 
  }
  socketIOEmitters?: {
    emitClientCredentials?: string;
    emitNewClientMessage?: string;
  }
  style?: {

  }
}

export type VendorInformation = {
  socketIOclientId?: string;
  socketIOnamespace?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}