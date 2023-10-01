export const socketUrl = 'https://socket.riversense.tw'
// export const socketUrl = 'ws://192.168.40.2:33960'

export const socketOpts = {
  reconnection: true,
  'force new connection': true,
  transports: ['websocket', 'polling'],
  allowEIO3: true,
}

export interface ServerToClientEvents {
  alert: (res: { status: number; message: string }) => void
  // sendMessage: (_in: historyType) => void
}
export interface ClientToServerEvents {
  lobbyInitial: (pam: { token: string; clientType: string }) => void
  lobbyPlay: (pam: { token: string; clientType: string; code: string }) => void
}
