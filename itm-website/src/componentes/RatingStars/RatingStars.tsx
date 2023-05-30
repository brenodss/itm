import './style.css'
import ReactStars from 'react-stars'

interface IStarIconProps {
  color: string
}

function StarIcon({color}: IStarIconProps) {
  return (
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill={color}>
      <g id="SVGRepo_bgCarrier">
        <path d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  )
}

function RatingStars(props: { rating: number }) {
  const { rating } = props

  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} color="white" />)
  }

  return (
    <div className='display-row'>
      {stars}
      
      <h1 className='text-slate-100 text-2xl'>({rating})</h1>
    </div>
  )
}

export default RatingStars