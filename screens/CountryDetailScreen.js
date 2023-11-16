import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetCountryDetails($countryName: StringQueryOperatorInput) {
    countries(filter: { name: $countryName }) {
      name
      capital
      currency
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
    <View style={styles.container}>
      <Text style={styles.emoji}>{country.emoji} </Text>
      <Text style={styles.text}>{country.name} </Text>
      <Text style={styles.text}>{country.capital} </Text>
      <Text style={styles.text}>{country.currency} </Text>
      <Text style={styles.text}>{country.phone} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CountryDetailScreen;
