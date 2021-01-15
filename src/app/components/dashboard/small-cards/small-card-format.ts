import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SmallCardFormat {
    mainIcon: IconDefinition;
    bgColor: string;
    headerContent?: string;
    blockContent?: string;
    footerContent?: string;
    footerIcon?: string;
}