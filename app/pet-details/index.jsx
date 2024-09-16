import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';

export default function PetDetails() {
    const pet = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ''
        })
    },[])
  return (
    <View>
        {/* Pet Info */}
        <PetInfo pet={pet} />

        {/* Pet SubInfo */}
        <PetSubInfo pet={pet} />
        {/* about */}


        {/* owner deatails */}

        {/* Adopt me button */}
    </View>
  )
}