import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
export interface CardInfo {
    mainIcon: IconDefinition;
    bgColor: string;
    headerContent?: string;
    blockContent?: string;
    footerContent?: string;
    footerIcon?: string;
}