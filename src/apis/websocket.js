import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

let stompClient = null

export const connectWebSocket = (onNewLead) => {
  const socket = new SockJS('http://localhost:8080/ws')
  stompClient = Stomp.over(socket)

  stompClient.connect({Authorization: `Bearer ${token}`}, () => {
    stompClient.subscribe('/topic/new-lead', (msg) => {
      console.log(msg)
      onNewLead(JSON.parse(msg.body))
    })
  })
}
