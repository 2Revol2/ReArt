const interfaceConst = "interface";

module.exports = (componentName) => `import { useTranslation } from "react-i18next";
import { memo } from "react";
import s from "./${componentName}.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

${interfaceConst} ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(s.${componentName}, {}, [className])}>${componentName}</div>;
});
`;
