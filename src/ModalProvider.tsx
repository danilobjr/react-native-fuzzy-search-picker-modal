import * as React from 'react'

export interface ModalContextParam {
  gate?: React.ReactNode
  teleport?(element: React.ReactNode): void
}

export const ModalContext = React.createContext<ModalContextParam>({
  gate: undefined,
  teleport: undefined,
})

interface ModalProvider {
  children: React.ReactNode
}
export const ModalProvider = ({ children }: ModalProvider) => {
  const [gate, setGate] = React.useState<React.ReactNode>(undefined)
  const teleport = (element: React.ReactNode) => setGate(element)
  return (
    <ModalContext.Provider value={{ gate, teleport }}>
      {children}
      {gate}
    </ModalContext.Provider>
  )
}
