import { StoryFn } from "@storybook/react";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
// TODO
// eslint-disable-next-line revol/public-api-imports
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
// eslint-disable-next-line revol/public-api-imports
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
// eslint-disable-next-line revol/public-api-imports
import { addNewCommentReducer } from "@/features/AddNewComment/model/slices/addNewCommentSlice";
// eslint-disable-next-line revol/public-api-imports
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slice";
// eslint-disable-next-line revol/public-api-imports
import { profileReducer } from "@/features/EditableProfileCard/model/slice/profileSlice";

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
