import CustomButton from "./CustomButton";
import React from "react";

function User({ user, handleDelete, completeListHandler }) {
  return (
    <div className="square-style">
      <div>
        <h2>{user.title}</h2>
        <div>{user.contents}</div>
      </div>
      <div>
        <CustomButton
          color="red"
          onClick={() => {
            handleDelete(user.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="green"
          onClick={() => {
            completeListHandler(user.id);
          }}
        >
          {user.isDone ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
}

export default User;
