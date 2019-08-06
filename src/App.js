import React from 'react'
import {
    View
} from 'react-native'
import ConferenceContainer from './containers/conferenceContainer';

export default function App() {
    return(
        <View style={{ flex: 1 }}>
            <ConferenceContainer />
        </View>
    )
}