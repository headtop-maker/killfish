import React, { FC } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useAppSelector } from "../../../shared/models/storeHooks";
import {
  selectBarId,
  selectCityId,
  selectParentId,
} from "../../MenuList/models/selectors";

import { useGetCurrentMenuItemQuery } from "../../../shared/models/cityBarsApi";
import ProductCard from "../../../entities/ProductCard/ui/ProductCard";
import { IProduct } from "../../../shared/models/types";

const CurrentMenuItem: FC = () => {
  const barId = useAppSelector(selectBarId);
  const cityId = useAppSelector(selectCityId);
  const parentId = useAppSelector(selectParentId);

  if (!barId || !cityId || !parentId) {
    return null;
  }

  const { data, isLoading } = useGetCurrentMenuItemQuery({
    barId,
    cityId,
    parentId,
  });
  if (!data) {
    return null;
  }

  const renderItem = ({ item }: { item: IProduct }) => {
    return <ProductCard item={item} />;
  };

  return (
    <View>
      {isLoading && <ActivityIndicator size={"large"} />}
      <FlatList
        data={data.items}
        keyExtractor={(item) => "Product" + item.item_id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CurrentMenuItem;
