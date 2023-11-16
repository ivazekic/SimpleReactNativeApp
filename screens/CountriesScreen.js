import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetCountries {
    countries {
      name
      capital
    }
  }
`;

const CountriesScreen = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GET_DATA);

  const countries = data ? data.countries : [];

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Country Details", { name: item.name })
            }
          >
            <View>
              <Text>{item.name}</Text>
              <Text>{item.capital}</Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "gray",
                  marginVertical: 5,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CountriesScreen;
