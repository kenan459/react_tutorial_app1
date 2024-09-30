function FeedbackItem({item}) {
//   const handleClick = () => {
//     setRating(((prev) => {
//         return prev + 1
//     }))
//   }

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-dsiplay">{item.text}</div>

    </div>
  );
}

export default FeedbackItem;
