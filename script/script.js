/*===========================
<|-Variables              -|>
===========================*/
let recording;
let text = document.getElementById('text');

/*=====================================================
<|-We Check That The API Can Be Used                -|>
=====================================================*/
if (!("webkitSpeechRecognition" in window)) {
    text.innerHTML = '<p class="errorMessage">Sorry, you cannot use the speech recognition API at this time, remember that this API only works with browsers that have <samp>Chromium</samp> as a rendering engine, therefore this API will not work in browsers like <span>Mozilla Firefox.</span> <br><br> Make sure you are using a browser with <samp>Chromium</samp> such as: <span>Google Chrome,</span> <span>Microsoft Edge</span> or <span>Brave.</span></p>';

} else {
    /*=====================================================
    <|-Parameters For Speech Recognition                -|>
    =====================================================*/
    recording = new webkitSpeechRecognition();
    recording.lang = "es-AR";
    recording.continuous = true;
    recording.interim = true;
    recording.addEventListener("result", runningRecording);
}

/*=====================================================
<|-Function To Start Transcribing Speech To Text    -|>
=====================================================*/
// ! This Function Will Store Each Word That We Say Inside An Array And In Turn The For Loop Will Go Through Word By Word And Will Transcribe Them.
function runningRecording(event){
    for (let i = event.resultIndex; i < event.results.length; i++){
        text.innerHTML += event.results[i][0].transcript;
    }   
}

// ! We Execute The Permission To Use The Microphone And Its Configuration.
recording.start();