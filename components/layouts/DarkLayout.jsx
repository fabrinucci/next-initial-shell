
export const DarkLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '5px',
        padding: '10px'
      }}>
        { children }
    </div>
  )
}
