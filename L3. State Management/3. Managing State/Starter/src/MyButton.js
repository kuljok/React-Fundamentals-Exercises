const MyButton = ({title, onLike}) => {
   return (
      <button onClick={onLike}>
         {title}
      </button>
   );
}

export default MyButton;
