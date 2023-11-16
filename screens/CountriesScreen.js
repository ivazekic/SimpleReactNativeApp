import React from "react";
import { View, Text, FlatList } from "react-native";

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
  const { loading, error, data } = useQuery(GET_DATA);

  const countries = data ? data.countries : [];

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Capital: {item.capital}</Text>
            <View
              style={{ height: 1, backgroundColor: "gray", marginVertical: 5 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CountriesScreen;
