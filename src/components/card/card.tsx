import Button from '../button/button'

export default ({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) => (
  <div class=" w-48 p-4 rounded-lg drop-shadow-xl transition-shadow bg-slate-800">
    <h3 class="text-xl font-semibold">{title}</h3>
    <p>{description}</p>

    <Button link={link} text="Learn more" />
  </div>
)
