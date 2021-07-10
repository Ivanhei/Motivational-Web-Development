
import speech from '@google-cloud/speech'
import { Duplex, PassThrough } from 'stream';

const client = new speech.SpeechClient();

/**

			const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000
        }
      })
      try {
			  mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm; codecs=opus" });
      }
      catch (e) {
				stream.getTracks().forEach(track => track.stop());
        throw e;
      }

 */
function speechMain() {

  const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  const sampleRateHertz = 16000;
  const languageCode = 'BCP-47 language code, e.g. en-US';

  const request = {
    config: {
      //encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
      enableAutomaticPunctuation: true,
    },
    interimResults: false, // If you want interim results, set this to true
  };

  // Create a recognize stream
  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data =>
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : '\n\nReached transcription time limit, press Ctrl+C\n'
      )
    );

  const audioStream = new PassThrough();
  audioStream.write()

  // Start recording and send the microphone input to the Speech API.
  // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
  recorder
    .record({
      sampleRateHertz: sampleRateHertz,
      threshold: 0,
      // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
      verbose: false,
      recordProgram: 'rec', // Try also "arecord" or "sox"
      silence: '10.0',
    })
    .stream()
    .on('error', console.error)
    .pipe(recognizeStream);

}
