import BlogImage from "../../assets/BlogImage/BlogImage.png"
import content1 from "../../assets/BlogImage/content1.png"
import content2 from "../../assets/BlogImage/content2.png"

const Blog = () => {
  return (
    <div className="wrapper flex  justify-center gap-10 mb-32">
      {/* container 1 */}
      <div className="wrapper1">
        <img src={BlogImage} alt="" />
        <h1 className="font-medium text-2xl">Tips and tricks in choosing a house</h1>
        <p className="text-base text-gray-400">
          Tips and trick to buy a house easily here is to buy at a low price
        </p>
      </div>

      {/* container 2 */}
      <div className="wrapper2 space-y-5">
        <img src={content1} alt="" />
        <img src={content2} alt="" />
      </div>
    </div>
  )
}

export default Blog