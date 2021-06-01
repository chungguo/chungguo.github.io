export default function Container(props: {
  children: React.ReactNode
}) {
  const { children } = props;
  return (
    <article className="container mx-auto px-5">
      {children}
    </article>
  )
}