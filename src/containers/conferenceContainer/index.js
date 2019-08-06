import React, { useState, useEffect } from 'react'
import JitsiMeet, { JitsiMeetEvents } from 'react-native-jitsi-meet'

import ConferenceScreen from '../../screens/conferenceScreen';

function ConferenceContainer() {

    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        //somehow i will receive this roomUrl
        setVideoUrl('meet.jit.si/FlyingElvesWorshipRecklessly')

        return () => JitsiMeetEvents.removeListener('CONFERENCE_LEFT', eventData)
    }, [])

    function startCall() {
        JitsiMeet.initialize()
        
        JitsiMeetEvents.addListener('CONFERENCE_LEFT', eventData);

        setTimeout(() => {
            JitsiMeet.call(videoUrl);
        }, 1000)
    }

    function eventData(data) {
        console.log('CONFERENCE_LEFT')
    }

    return (
        <ConferenceScreen 
            startCall={startCall}
        />
    )
}


export default ConferenceContainer