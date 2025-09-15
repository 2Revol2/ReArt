import { DropdownDirection } from "@/shared/types/ui";
import s from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": s.optionsBottomLeft,
  "bottom right": s.optionsBottomRight,
  "top left": s.optionsTopLeft,
  "top right": s.optionsTopRight,
};
