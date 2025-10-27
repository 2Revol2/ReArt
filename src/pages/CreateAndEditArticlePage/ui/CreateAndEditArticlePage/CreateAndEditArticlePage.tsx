import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Page } from "@/widgets/Page";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  createAndEditArticlePageActions,
  createAndEditArticlePageReducer,
} from "../../model/slices/createAndEditArticlePageSlice";
import { ArticleForm } from "@/widgets/ArticleForm";
import {
  getCreateAndEditArticleData,
  getCreateAndEditArticleIsLoading,
  getCreateAndEditArticleValidateErrors,
} from "../../model/selectors/createAndEditArticlePage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import {
  ArticleBlockType,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
  ArticleType,
} from "@/entities/Article";
import { createNewArticle } from "../../model/services/createNewArticle/createNewArticle";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { fetchArticleData } from "../../model/services/fetchArticleData/fetchArticleData";
import { PageLoader } from "@/widgets/PageLoader";
import { updateArticleData } from "../../model/services/updateArticleData/updateArticleData";
import { RoutePaths } from "@/shared/constants/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ValidateArticleError } from "../../model/consts/consts";
import { Text, TextTheme } from "@/shared/ui/Text";

interface CreateAndEditArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  createAndEditArticlePage: createAndEditArticlePageReducer,
};

const CreateAndEditArticlePage = memo((props: CreateAndEditArticlePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const isLoading = useSelector(getCreateAndEditArticleIsLoading);
  const data = useSelector(getCreateAndEditArticleData);
  const validateErrors = useSelector(getCreateAndEditArticleValidateErrors);
  const { t } = useTranslation("createAndEditArticle");

  const validateErrorTranslates = {
    [ValidateArticleError.NO_DATA]: t("No article data found"),
    [ValidateArticleError.SERVER_ERROR]: t("Server error while saving"),
    [ValidateArticleError.INCORRECT_TITLE]: t("Title is required"),
    [ValidateArticleError.INCORRECT_SUBTITLE]: t("Subtitle is required"),
    [ValidateArticleError.INCORRECT_TYPE]: t("Select article type"),
    [ValidateArticleError.NO_BLOCK]: t("Add at least one block"),
    [ValidateArticleError.INCORRECT_TEXT_BLOCK]: t("Fill text block"),
    [ValidateArticleError.INCORRECT_CODE_BLOCK]: t("Fill code block"),
    [ValidateArticleError.INCORRECT_IMAGE_BLOCK]: t("Fill image block"),
  };

  const navigate = useNavigate();
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleData(id));
    }
  });

  const onChangeTitle = useCallback(
    (title: string) => {
      dispatch(createAndEditArticlePageActions.setArticleTitle(title));
    },
    [dispatch],
  );

  const onChangeSubtitle = useCallback(
    (subtitle: string) => {
      dispatch(createAndEditArticlePageActions.setArticleSubtitle(subtitle));
    },
    [dispatch],
  );

  const onChangeImage = useCallback(
    (image: string) => {
      dispatch(createAndEditArticlePageActions.setArticleImage(image));
    },
    [dispatch],
  );

  const onChangeTypes = useCallback(
    (type: ArticleType) => {
      dispatch(createAndEditArticlePageActions.setArticleType(type));
    },
    [dispatch],
  );

  const addArticleBlock = useCallback(
    (type: ArticleBlockType) => {
      dispatch(createAndEditArticlePageActions.addArticleBlock(type));
    },
    [dispatch],
  );

  const removeArticleBlock = useCallback(
    (id: string) => {
      dispatch(createAndEditArticlePageActions.removeArticleBlock(id));
    },
    [dispatch],
  );

  const updateImageBlock = useCallback(
    (id: string, changes: Partial<ArticleImageBlock>) => {
      dispatch(createAndEditArticlePageActions.updateImageBlock({ id, changes }));
    },
    [dispatch],
  );

  const updateCodeBlock = useCallback(
    (id: string, changes: Partial<ArticleCodeBlock>) => {
      dispatch(createAndEditArticlePageActions.updateCodeBlock({ id, changes }));
    },
    [dispatch],
  );

  const updateTextBlock = useCallback(
    (id: string, changes: Partial<ArticleTextBlock>) => {
      dispatch(createAndEditArticlePageActions.updateTextBlock({ id, changes }));
    },
    [dispatch],
  );

  const onCreateArticle = useCallback(async () => {
    const resultAction = await dispatch(createNewArticle());

    if (!Array.isArray(resultAction.payload)) {
      navigate(RoutePaths.acticles);
    }
  }, [dispatch, navigate]);

  const onUpdateArticle = useCallback(async () => {
    const resultAction = await dispatch(updateArticleData());

    if (!Array.isArray(resultAction.payload)) {
      navigate(RoutePaths.acticles);
    }
  }, [dispatch, navigate]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
      <Page className={classNames("", {}, [className])}>
        {validateErrors?.length &&
          validateErrors.map((error) => (
            <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslates[error]} />
          ))}
        <ArticleForm
          data={data}
          isEdit={isEdit}
          onChangeTitle={onChangeTitle}
          onChangeSubtitle={onChangeSubtitle}
          onChangeImage={onChangeImage}
          onChangeTypes={onChangeTypes}
          addArticleBlock={addArticleBlock}
          updateImageBlock={updateImageBlock}
          updateCodeBlock={updateCodeBlock}
          updateTextBlock={updateTextBlock}
          onCreateArticle={onCreateArticle}
          onUpdateArticle={onUpdateArticle}
          removeArticleBlock={removeArticleBlock}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
export default CreateAndEditArticlePage;
