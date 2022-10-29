export default ({ link, text }: { link?: string; text: string }) => {
  const className =
    'mt-2 px-4 py-2 rounded-lg text-slate-100 bg-purple-800 hover:bg-purple-700 transition-colors'

  if (link) {
    return (
      <a href={link}>
        <button class={className}>{text}</button>
      </a>
    )
  }

  return <button class={className}>{text}</button>
}
