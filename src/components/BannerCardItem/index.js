// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="desc">{description}</p>
      <p className="show">Show More</p>
    </li>
  )
}
export default BannerCardItem
