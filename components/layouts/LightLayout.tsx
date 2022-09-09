import { FC, ReactElement } from 'react';

export const LightLayout:FC<{children:ReactElement}> = ({children}) => {
  return (
    <div style={{
        background: '#fff',
        color: '#000'
    }}>
        {children}
    </div>
  )
}
