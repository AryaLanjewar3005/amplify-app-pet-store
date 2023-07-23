/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Per } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardOverridesProps = {
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    Breed?: PrimitiveOverrideProps<TextProps>;
    "About: Great animal"?: PrimitiveOverrideProps<TextProps>;
    "Age: 23"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    Button3848427?: PrimitiveOverrideProps<ButtonProps>;
    Button38501379?: PrimitiveOverrideProps<ButtonProps>;
    Button38501430?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    per?: Per;
} & {
    overrides?: ProfileCardOverridesProps | undefined | null;
}>;
export default function ProfileCard(props: ProfileCardProps): React.ReactElement;
