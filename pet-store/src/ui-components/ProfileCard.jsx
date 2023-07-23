/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Per } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileCard(props) {
  const { per, overrides, ...rest } = props;
  const buttonThreeEightFiveZeroOneFourThreeZeroOnClick =
    useDataStoreDeleteAction({ id: per?.id, model: Per, schema: schema });
  return (
    <Flex
      gap="15px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="19px"
      padding="32px 25px 32px 25px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfileCard")}
      {...rest}
    >
      <Image
        width="167.09px"
        height="167.09px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="167.08624267578125px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={per?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8.3543119430542px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20.885780334472656px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="26.10722541809082px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={per?.name}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16.7086238861084px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="25.06293487548828px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.02px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed: "}${per?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16.7086238861084px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="25.06293487548828px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.02px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About: "}${per?.about}`}
          {...getOverrideProps(overrides, "About: Great animal")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16.7086238861084px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="25.06293487548828px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.02px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${per?.age}`}
          {...getOverrideProps(overrides, "Age: 23")}
        ></Text>
      </Flex>
      <View
        width="284.05px"
        height="147.13px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Button
          width="284.05px"
          height="unset"
          position="absolute"
          border="1.04px SOLID rgba(0,0,0,0)"
          borderRadius="4.1771559715271px"
          padding="7.310022950172424px 15.664334893226624px 7.310022950172424px 15.664334893226624px"
          top="0px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="View Profile"
          {...getOverrideProps(overrides, "Button3848427")}
        ></Button>
        <Button
          width="284.05px"
          height="unset"
          position="absolute"
          border="1.04px SOLID rgba(0,0,0,0)"
          borderRadius="4.1771559715271px"
          padding="7.310022950172424px 15.664334893226624px 7.310022950172424px 15.664334893226624px"
          top="49.71px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button38501379")}
        ></Button>
        <Button
          width="284.05px"
          height="unset"
          position="absolute"
          border="1.04px SOLID rgba(4,125,149,1)"
          borderRadius="4.1771559715271px"
          padding="7.310022950172424px 15.664334893226624px 7.310022950172424px 15.664334893226624px"
          top="99.42px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Delete"
          onClick={() => {
            buttonThreeEightFiveZeroOneFourThreeZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Button38501430")}
        ></Button>
      </View>
    </Flex>
  );
}
