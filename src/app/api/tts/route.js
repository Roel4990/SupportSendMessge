import { NextResponse } from 'next/server';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';

const client = new TextToSpeechClient();

export async function POST(request) {
    const { text } = await request.json();
    const synthesis_input = { text };
    const voice = {
        languageCode: 'ko-KR',
        ssmlGender: 'NEUTRAL',
    };
    const audioConfig = { audioEncoding: 'MP3' };

    try {
        const [response] = await client.synthesizeSpeech({ input: synthesis_input, voice, audioConfig });
        const audioContent = response.audioContent;

        return new NextResponse(audioContent, {
            status: 200,
            headers: {
                'Content-Type': 'audio/mp3'
            }
        });
    } catch (error) {
        console.error('Error at Text-to-Speech API:', error);
        return new NextResponse('Error synthesizing speech', { status: 500 });
    }
}
