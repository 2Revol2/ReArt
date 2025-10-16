import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Text } from "@/shared/ui/Text/Text";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Textarea } from "@/shared/ui/Textarea/Textarea";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  classNames?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (stars: number) => void;
  onAccept?: (stars: number, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
  const { classNames, title, feedbackTitle, hasFeedback, onCancel, onAccept } = props;
  const { t } = useTranslation("article");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const content = (
    <>
      <Text title={feedbackTitle} />
      <Textarea placeholder={t("Your review")} value={feedback} onChange={setFeedback} />
    </>
  );

  return (
    <Card>
      <VStack gap="16" align="center" className={classNames}>
        <Text title={title} />
        <StarRating onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="32" max>
            {content}
            <HStack max justify="end" gap="4">
              <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                {t("Cancel")}
              </Button>
              <Button onClick={acceptHandler}>{t("Send")}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
          {content}
          <Button onClick={acceptHandler} fullWidth>
            {t("Send")}
          </Button>
        </Drawer>
      </MobileView>
    </Card>
  );
};
