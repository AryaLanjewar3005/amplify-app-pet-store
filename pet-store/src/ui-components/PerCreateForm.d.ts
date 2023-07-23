/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PerCreateFormInputValues = {
    name?: string;
    age?: number;
    breed?: string;
    about?: string;
    image?: string;
    color?: string;
};
export declare type PerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    breed?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerCreateFormOverridesProps = {
    PerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PerCreateFormProps = React.PropsWithChildren<{
    overrides?: PerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PerCreateFormInputValues) => PerCreateFormInputValues;
    onSuccess?: (fields: PerCreateFormInputValues) => void;
    onError?: (fields: PerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerCreateFormInputValues) => PerCreateFormInputValues;
    onValidate?: PerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PerCreateForm(props: PerCreateFormProps): React.ReactElement;
