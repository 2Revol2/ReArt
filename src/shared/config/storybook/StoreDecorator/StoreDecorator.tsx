import { StoryFn } from "@storybook/react";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "@/entities/Profile";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "@/features/AddNewComment/model/slices/addNewCommentSlice";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slice";

const defauldAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  function (StoryCom: StoryFn) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defauldAsyncReducers, ...asyncReducers }}>
        <StoryCom />
      </StoreProvider>
    );
  };
