import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import MarkFav from "../MarkFav";

export default function PetInfo({ pet }) {
  return (
    <View>
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
      <View style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 27 }}>
            {pet?.name}
          </Text>
          <Text
            style={{ fontFamily: "outfit", fontSize: 16, color: Colors.GRAY }}
          >
            {pet?.address || "Mountain View, CA"}
          </Text>
        </View>
        <MarkFav pet={pet} />
      </View>
    </View>
  );
}
