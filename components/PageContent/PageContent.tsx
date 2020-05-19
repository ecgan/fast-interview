interface Props {
  children: React.ReactNode
}

const PageContent = (props: Props) => {
  const { children } = props

  return (
    <div
      style={{ paddingLeft: 24, paddingRight: 24 }}
    >
      {children}
    </div>
  )
}

export default PageContent
