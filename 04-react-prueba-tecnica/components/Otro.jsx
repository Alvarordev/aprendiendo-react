import { useCatImage } from '../hooks/useCatImage'

const Otro = () => {
  const { imageUrl } = useCatImage({ fact: 'Otro Gato' })
  return (
    <div>{imageUrl && <img src={imageUrl} alt='Imagen de otro gato' />}</div>
  )
}

export default Otro
