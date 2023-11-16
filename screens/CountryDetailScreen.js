import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetCountryDetails($countryName: StringQueryOperatorInput) {
    countries(filter: { name: $countryName }) {
      name
      capital
      currency
      languages {
        name
      }
      phone
      emoji
    }
  }
`;

const CountryDetailScreen = ({ route }) => {
  const { name } = route.params;

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { countryName: { eq: name } },
  });

  const country = data ? data.countries[0] : {};

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <Text>{country.emoji} </Text>
      <Text>{country.name} </Text>
      <Text>{country.capital} </Text>
      <Text>{country.currency} </Text>
      <Text>{country.phone} </Text>
    </View>
  );
};

export default CountryDetailScreen;
