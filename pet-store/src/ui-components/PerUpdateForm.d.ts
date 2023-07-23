/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Per } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PerUpdateFormInputValues = {
    name?: string;
    age?: number;
    breed?: string;
    about?: string;
    image?: string;
    color?: string;
};
export declare type PerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    breed?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerUpdateFormOverridesProps = {
    PerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PerUpdateFormProps = React.PropsWithChildren<{
    overrides?: PerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    per?: Per;
    onSubmit?: (fields: PerUpdateFormInputValues) => PerUpdateFormInputValues;
    onSuccess?: (fields: PerUpdateFormInputValues) => void;
    onError?: (fields: PerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerUpdateFormInputValues) => PerUpdateFormInputValues;
    onValidate?: PerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PerUpdateForm(props: PerUpdateFormProps): React.ReactElement;
