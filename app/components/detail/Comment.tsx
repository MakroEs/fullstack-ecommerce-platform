"use client";

import Avatar from "@/app/general/Avatar";
import { Rating } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:1/3 p-2 rounded-lg my-3">
      {/* <Avatar image={prd?.user?.image} />  */}
      <div className="flex items-center gap-1">
        <RxAvatar size="45" />
        <div>
          <div>{prd?.user?.name}</div>
          <Rating name="read-only" value={prd?.user?.rating} precision={0.5} />
        </div>
      </div>
      <div className="text-slate-500">{prd.comment}asdasdasdasdasdasdasdas</div>
    </div>
  );
};

export default Comment;
