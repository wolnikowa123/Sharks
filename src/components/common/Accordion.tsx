
import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Wrap = styled.div`
  border: 1px solid ${({theme}) => theme.colors.silver};
  border-radius: ${({theme}) => theme.radius.md};
  overflow: hidden;
  background: rgba(255,255,255,.02);
  backdrop-filter: blur(2px);
`
const Head = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.colors.white};
  background: linear-gradient(180deg, rgba(15,124,143,.25), transparent);
  &:hover { box-shadow: ${({theme}) => theme.shadow.glow}; }
`
const Body = styled(motion.div)`
  padding: 0 20px 18px;
  color: ${({theme}) => theme.colors.white};
`

export const Accordion: React.FC<{title: string, children: React.ReactNode, defaultOpen?: boolean}> = ({title, children, defaultOpen}) => {
  const [open, setOpen] = React.useState(!!defaultOpen)
  return (
    <Wrap>
      <Head onClick={() => setOpen(o=>!o)}>
        <strong>{title}</strong>
        <span>{open ? '−' : '+'}</span>
      </Head>
      <AnimatePresence initial={false}>
        {open && (
          <Body
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .25 }}
          >
            <div style={{paddingTop: 14}}>{children}</div>
          </Body>
        )}
      </AnimatePresence>
    </Wrap>
  )
}
