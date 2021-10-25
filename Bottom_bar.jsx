import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

const Bottom_bar = () => {
    return(
        <>
            <div className="bottom_bar">
                      <button className="heart_btn"><FaHeart/></button>
                      <button className="addlist_btn"><MdPlaylistAdd/></button>
                      <button className="share_btn"><FaShareAlt/></button>

            </div>
        </>
    )
}
export default Bottom_bar;