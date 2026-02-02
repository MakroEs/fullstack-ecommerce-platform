"use client";

import Avatar from "@/app/general/Avatar";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:1/3 p-2 rounded-lg">
      {/* <Avatar image={prd?.user?.image} />  */}
      <div className="flex items-center gap-1">
        <RxAvatar size="25" />
        <div>{prd?.user?.name}</div>
      </div>
      <div className="text-slate-500">{prd.comment}asdasdasdasdasdasdasdas</div>
    </div>
  );
};

export default Comment;
