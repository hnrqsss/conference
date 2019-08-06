import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

import styles from './styles'

function ConferenceScreen({ 
    startCall = () => console.log('trying to start call'),
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => startCall()}
            >
                <Text style={styles.buttonText}>{'Start Call'.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConferenceScreen