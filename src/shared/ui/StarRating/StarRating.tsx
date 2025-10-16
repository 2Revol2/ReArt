import { useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import StarIcon from "@/shared/assets/icons/star.svg";
import { Icon } from "../Icon/Icon";
import s from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (star: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
  const { className, selectedStars = 0, onSelect, size = 30 } = props;
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStar, setCurrentStar] = useState(0);

  const onHover = (star: number) => {
    if (!isSelected) {
      setCurrentStar(star);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStar(0);
    }
  };

  const onClick = (star: number) => {
    if (!isSelected) {
      onSelect?.(star);
      setCurrentStar(star);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames("", {}, [className])}>
      {stars.map((star) => (
        <Icon
          onMouseEnter={() => onHover(star)}
          onClick={() => onClick(star)}
          onMouseLeave={onLeave}
          className={classNames(s.starIcon, { [s.hovered]: currentStar >= star, [s.selected]: isSelected }, [s.normal])}
          height={size}
          width={size}
          Svg={StarIcon}
          key={star}
        />
      ))}
    </div>
  );
};
