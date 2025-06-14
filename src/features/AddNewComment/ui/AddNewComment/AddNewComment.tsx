import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import s from "./AddNewComment.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { addNewCommentActions, addNewCommentReducer } from "../../model/slices/addNewCommentSlice";
import { getAddNewCommentError, getAddNewCommentText } from "../../model/selectors/getAddNewComment";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}
const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment = memo((props: AddNewCommentProps) => {
  const { className, onSendComment } = props;
  const text = useSelector(getAddNewCommentText);
  const dispatch = useAppDispatch();
  const error = useSelector(getAddNewCommentError);
  const { t } = useTranslation();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
      <div className={classNames(s.addNewComment, {}, [className])}>
        <Input className={s.input} value={text} placeholder={t("Enter comment text")} onChange={onCommentTextChange} />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t("Send")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddNewComment;
