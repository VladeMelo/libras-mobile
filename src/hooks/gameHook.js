import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const GameContext = createContext()

export const GameProvider = (props) => {
    const [game, setGame] = useState(
        Array(props.level === 'easy' ? 12 : 20).map((_, index) => ({
            
        }))
    )

    useEffect(() => {
        socket.on('chat.message', newMessage => {
            setMessages([...messages, newMessage])
            console.log(socket.id)
        })
    }, [messages])

    const frontToBack = useCallback((id, message) => { // manda a mensagem para o back
        socket.emit('chat.message', { id, message })
    }, [])

    const openCard = useCallback(() => {

    }, [])

    return (
        <GameContext.Provider
            value={{
                messagesHook: messages,
                frontToBack
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export const useSocket = () => {
    const context = useContext(GameContext);
  
    if (!context) {
      // se o AuthContext não foi criado, ou seja, caso não haja .Provider ao redor
      throw new Error('The context must be used within an .Provider');
    }
  
    return context;
}