import Review from "../components/Review/Review"
import ReviewNav from "../components/Navbar/ReviewNav"

const ReviewPages = () => {
  return (
    <div className="container px-3 py-2 mx-auto">
      <ReviewNav />
      <Review />
    </div>
  );
}

export default ReviewPages