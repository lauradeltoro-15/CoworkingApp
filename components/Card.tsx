import { View, Image, Text } from "react-native";
import { Facility } from "../models";

type CardProps = {
  facility: Facility;
};

export const Card = ({ facility }: CardProps) => {
  return (
    <View>
      <Image
        source={{ uri: facility.images[0] }}
        resizeMode={"cover"}
        style={{ width: "100%", height: 200 }}
      />
      <Text>{facility.name}</Text>
      <Text>{facility.description}</Text>
    </View>
  );
};
