import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import s from "./ArticleSortSelector.module.scss";
import { Select, SelectOptions } from "@/shared/ui/Select/Select";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleSortField } from "../../model/consts/consts";
import { SortOrder } from "@/shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions[]>(
    () => [
      {
        value: "asc",
        content: t("Ascending"),
      },
      {
        value: "desc",
        content: t("Descending"),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOptions[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("Date of creation"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("Title"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("Views"),
      },
    ],
    [t],
  );

  const onChangeSortHandler = useCallback(
    (newValue: string) => {
      onChangeSort(newValue as ArticleSortField);
    },
    [onChangeSort],
  );

  const onChangeOrderHandler = useCallback(
    (newValue: string) => {
      onChangeOrder(newValue as SortOrder);
    },
    [onChangeOrder],
  );

  return (
    <div className={classNames(s.sort, {}, [className])}>
      <Select label={t("Sort By")} options={sortFieldOptions} value={sort} onChange={onChangeSortHandler} />
      <Select label={t("By")} options={orderOptions} value={order} onChange={onChangeOrderHandler} />
    </div>
  );
});
