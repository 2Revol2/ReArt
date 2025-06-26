import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";

interface CreateAndEditArticlePageProps {
  className?: string;
}

const CreateAndEditArticlePage = memo((props: CreateAndEditArticlePageProps) => {
  const { className } = props;
  const { id } = useParams();
  const isEdit = Boolean(id);

  if (isEdit) {
    return <Page>edit</Page>;
  }
  return <Page>Create</Page>;
});
export default CreateAndEditArticlePage;
