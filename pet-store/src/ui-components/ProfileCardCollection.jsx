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
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProfileCard from "./ProfileCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ProfileCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Per,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      searchPlaceholder="Search..."
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ProfileCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ProfileCard
          per={item}
          height="auto"
          width="auto"
          margin="1rem 1rem 1px 1rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProfileCard>
      )}
    </Collection>
  );
}
