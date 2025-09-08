import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { Text } from "@/shared/ui/Text/Text";

const ProfilePage = () => {
  const { id } = useParams();
  const { t } = useTranslation("profile");

  if (!id) {
    return <Text text={t("Data not found")} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};
export default ProfilePage;
