import React from "react";
import { AiFillStar  } from 'react-icons/ai';
import { FaStarHalfAlt  } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

function  Rating(props) {
  const  {rating} = props;
  return (
    <div className=" {rating}">
      <span>

             {rating  >= 1 ? <AiFillStar  className="font-weight-bold text-warning"/>
              : rating >= 0.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
          
      </span>
      <span>

      {rating  >= 2 ? <AiFillStar className="text-warning"/>
              : rating >= 1.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
          
      </span>
      <span>

      {rating  >= 3 ? <AiFillStar className="text-warning"/>
              : rating >= 2.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
          
      </span>
      <span>

      {rating  >= 4 ? <AiFillStar className="text-warning"/>
              : rating >= 3.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
      </span>
      <span>
      {rating  >= 5 ? <AiFillStar className="text-warning"/>
              : rating >= 4.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
      </span>
      <span>
      {rating  >= 6 ? <AiFillStar className="text-warning"/>
              : rating >= 5.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
      </span>
      <span>

      {rating  >= 7 ? <AiFillStar className="text-warning"/>
              : rating >= 6.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
 
      </span>
      <span>

      {rating  >= 8 ? <AiFillStar className="text-warning"/>
              : rating >= 7.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
      </span>
      <span>
      {rating  >= 9 ? <AiFillStar className="text-warning"/>
              : rating >= 8.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
          
      </span>
      <span>
      {rating  >= 10 ? <AiFillStar className="text-warning"/>
              : rating >= 9.5
              ? <FaStarHalfAlt  className="text-warning"/>
              : <AiOutlineStar className="text-warning"/>}
          
      </span>
      {" "}
      <span  className="text-warning font-weight-bold"> {' '} {rating} </span>
    </div>
  );
}

export default Rating;
