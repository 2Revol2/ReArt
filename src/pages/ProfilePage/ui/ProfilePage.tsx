import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Page } from "@/widgets/Page";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { ProfileRating } from "@/features/ProfileRating";
import { getUserAuthData } from "@/entities/User";

const ProfilePage = () => {
  const { id } = useParams();
  const userData = useSelector(getUserAuthData);
  const isNotOwnProfile = userData?.id !== id;
  return (
    <Page>
      <EditableProfileCard id={id} />
      {isNotOwnProfile && <ProfileRating profileId={id ?? ""} />}
    </Page>
  );
};
export default ProfilePage;
