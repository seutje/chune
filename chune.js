(function(Tone) {
channels = [
  {
    'label': 'kick',
    'vol': 5,
    'init': function() {return new Tone.MembraneSynth({
      'octaves': 10,
      'envelope': {
        'attack': 0.001,
        'decay': 0.1,
        'sustain': 1.1,
        'release': 0.4
      }
    });},
    'timing': '4n',
    'interval': '8n',
    'mel': ['C1', null, 'C1', null,
            'C1', null, 'C1',  null,
            'C1', null, 'C1', null,
            'C1', null, 'C1',  'C1'],
    'sched': [ 0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1 ]
  },
  {
    'label': 'hihat',
    'vol': -30,
    'init': function() {return new Tone.MetalSynth({
      "harmonicity" : 2,
      "resonance" : 1000,
      "modulationIndex" : 30,
      "envelope" : {
        "decay" : 1.9,
      },
      "volume" : -30
    })},
    'interval': '8n',
    'mel': [null, '8n', null, '32n',
            null, '8n', null, '32n'],
    'sched': [0, 0, 1, 1,
              0, 0, 0, 0,
              0, 0, 1, 0,
              0, 0, 1, 0,
              
              0, 0, 0, 0,
              0, 0, 0, 0,
              1, 0, 1, 0,
              0, 0, 0, 0],
    'effects': [
      new Tone.Freeverb(.9, 5000)
    ]
  },
  {
    'label': 'hihat2',
    'vol': -30,
    'init': function() {return new Tone.MetalSynth({
      'frequency': 200,
      'envelope': {
        'attack': 0.001,
        'decay': 1.4,
        'release': 0.2,
      },
      'harmonicity': 5.1,
      'modulationIndex': 32,
      'resonance': 4000,
      'octaves': 0.2,
      'volume' : -15
    })},
    'interval': '16n',
    'mel': [null, null, null, null,
            null, null, null, null,
            null, null, null, null,
            null, null, null, null,
            
            '32n', null, '32n', null,
            '32n', null, '32n', null,
            '8n', null, null, null,
            null, null, null, null],
    'effects': [
      new Tone.Freeverb(.9, 5000)
    ],
    'sched': [ 0, 0, 0, 0,
               1, 1, 1, 1,
               0, 0, 0, 0,
               0, 0, 0, 0,
               
               0, 0, 0, 0,
               1, 1, 1, 1,
               0, 0, 0, 0,
               1, 1, 1, 1 ]
  },
  {
    'label': 'conga',
    'vol': 10,
    'init': function() {return new Tone.MembraneSynth({
      "pitchDecay" : 0.008,
      "octaves" : 2,
      "envelope" : {
        "attack" : 0.006,
        "decay" : 0.009,
        "sustain" : 0.2
      }
    })},
    'timing': '16n',
    'interval': '8n', 
    'mel': ['G3', 'C4', 'C4', 'C4',
            null, null, null, null,
            'G3', 'C4', 'C4', 'C4',
            null, null, null, null,
            
            'G3', 'C4', 'G3', 'C4',
            null, null, null, null,
            'G3', 'C4', 'C4', 'C4',
            null, null, null, null],
    'sched': [ 0, 1, 0, 0,
               1, 1, 1, 1,
               0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1],
    'effects': [
      new Tone.StereoXFeedbackEffect(1)
    ]
  },
  {
    'label': 'bass',
    'vol': 5,
    'init': function() {return new Tone.FMSynth()},
    'timing': '16n',
    'interval': '8n',
    'mel': ['C2', 'C1', 'C3', 'C1',
            'C2', 'C1', 'C2', null],
    'sched': [ 0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1 ],
    'effects': [
      new Tone.Distortion(2.5),
      new Tone.Freeverb(),
      new Tone.Phaser({
        "frequency" : 15, 
        "octaves" : 15, 
        "baseFrequency" : 3000
      })
    ]
  },
  {
    'label': 'bass2',
    'vol': 10,
    'init': function() {return new Tone.AMSynth()},
    'timing': '8n',
    'interval': '4n',
    'mel': ['C2', 'C1', 'C3', 'C1',
            'C2', 'C1', 'C2', null],
    'sched': [  0, 0, 0, 0,
                0, 0, 0, 0,
                1, 1, 1, 1,
                1, 1, 1, 1 ],
    'effects': [
      new Tone.Freeverb(),
      new Tone.Phaser({
        "frequency" : 15, 
        "octaves" : 15, 
        "baseFrequency" : 3000
      })
    ]
  },
  {
    'label': 'synth',
    'vol': 8,
    'init': function() {return new Tone.FMSynth({
      'harmonicity': 5,
      'modulationIndex': 15,
      'detune': 0,
      'oscillator': {
        'type': 'sine'
      },
      'envelope': {
        'attack': 0.02,
        'decay': 0.5,
        'sustain': 1,
        'release': 0.5
      },
      "modulation": {
        'type': 'sine'
      },
      'modulationEnvelope': {
        'attack': 0.9,
        'decay': 0.02,
        'sustain': 1,
        'release': 0.5
      }
    })},
    'timing': '8n',
    'interval': '8n',
    'mel': ['C1', null, 'E4', null,
            'F2', null, 'F3', null,
            'A1', null, 'G3', null, 
            'D2', null, 'C3', null ],
    'sched': [ 1, 1, 1, 1,
               0, 0, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1,
               
               1, 1, 1, 1,
               0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1 ]
  },
  {
    'label': 'synth2',
    'vol': -15,
    'init': function() {return new Tone.DuoSynth()},
    'timing': '8n',
    'interval': '8n',
    'mel': ['C1', 'E4', 'F2', 'F3', 
            'A1', 'G3', 'D2', 'C3',
            null, null, null, null,
            null, null, null, null],
    'sched': [ 0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1,
               
               1, 1, 1, 1,
               0, 0, 0, 0,
               1, 1, 1, 1,
               1, 1, 1, 1],
    'effects': [
      new Tone.Freeverb(),
      new Tone.Distortion(2.5)
    ]
  },
  {
    'label': 'clap',
    'vol': -5,
    'init': function() {return new Tone.PluckSynth({
      attackNoise: 3,
      dampening: 500,
      resonance: .5
    })},
    'timing': '8n',
    'interval': '4n',
    'mel': [null, null, 'C1', null,
            null, null, 'E1', null],
    'sched': [ 0, 0, 0, 0,
               1, 1, 1, 1,
               0, 0, 0, 0,
               1, 1, 1, 1 ],
    'effects': [
      new Tone.Distortion(5)
    ]
  },
  {
    'label': 'clap2',
    'vol': 0,
    'init': function() {return new Tone.PluckSynth({
      attackNoise: 3,
      dampening: 500,
      resonance: .3
    })},
    'timing': '8n',
    'interval': '4n',
    'mel': [null, 'C1', null, 'C1'],
    'sched': [ 0, 0, 0, 0,
               0, 0, 0, 0,
               0, 0, 0, 0,
               0, 0, 0, 0,
               
               1, 1, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1,
               1, 1, 1, 1 ],
    'effects': [
      new Tone.Vibrato(),
      new Tone.Phaser(),
      new Tone.JCReverb(.5),
      new Tone.Distortion(2.5)
    ]
  }
];

var masterVol = -20;
var masterVolume = new Tone.Volume(masterVol);

var triggerInstrument = function(instr) {
  return function(time) {
    var trigger, inc;
    instr.sched = instr.sched || [ 1 ];
    instr.ind = instr.ind || 0;
    if (instr.rnd === undefined || instr.rnd >= instr.sched.length) {
      instr.rnd = 0;
    }
    trigger = instr.sched[instr.rnd];
    if (instr.ind >= instr.mel.length) {
      instr.ind = 0;
      instr.rnd++;
    }
    if (instr.mel[instr.ind] && trigger) {
      if (!instr.timing) {
        instr.instrument.triggerAttackRelease(instr.mel[instr.ind], time);
      }
      else {
        instr.instrument.triggerAttackRelease(instr.mel[instr.ind], instr.timing, time);
      }
    }
    Tone.Draw.schedule(function() {
      instr.muteCtrl.checked = instr.sched[instr.rnd];
      instr.output = instr.output || instr.element.querySelector('#' + instr.label).parentNode;
      instr.output.classList.toggle('active');
    }, time);
    instr.ind++;
  }
}

var bpmCtrl = document.createElement('div');
bpmCtrl.classList.add('control');
var bpmContent = '<span>bpm</span> ';
bpmContent += '<input type="range" value="160" min="80" max="200" id="bpm"/> ';
bpmContent += '<span id="bpmoutput">160</span>';
bpmCtrl.innerHTML = bpmContent;

var volCtrl = document.createElement('div');
volCtrl.classList.add('control');
var volContent = '<span>vol</span> '
volContent += '<input type="range" value="' + masterVol + '" min="-50" max="50" id="vol"/> ';
volContent += '<span id="voloutput">' + masterVol + '</span>';
volCtrl.innerHTML = volContent;

var content = document.querySelector('#content');
content.appendChild(bpmCtrl);
content.appendChild(volCtrl);

//analyse the frequency/amplitude of the incoming signal  
var fft = new Tone.Analyser({type: "fft", size: 512, maxDecibels: -10, minDecibels: -150});
//get the waveform data for the audio
var waveform = new Tone.Analyser({type: "waveform", size: 1024, maxDecibels: 0, minDecibels: -31});

document.querySelector('#bpm').addEventListener('input', function(e){
  Tone.Transport.bpm.value = parseInt(e.target.value);
  document.querySelector('#bpmoutput').innerHTML = e.target.value;
});
document.querySelector('#vol').addEventListener('input', function(e){
  masterVolume.volume.value = parseInt(e.target.value);
  document.querySelector('#voloutput').innerHTML = e.target.value;
});

for (var i = 0, max = channels.length; i < max; i++) {
  let channel = channels[i];
  addControls(channel);
  channel.volume = new Tone.Volume();
  channel.instrument = channel.init();
  channel.instrument.chain(channel.volume, masterVolume, Tone.Master);
  //channel.instrument.chain(channel.volume, masterVolume, fft);
  //channel.instrument.chain(channel.volume, masterVolume, waveform);
  channel.instrument.volume.rampTo(channel.vol, 0.1);
  channel.triggered = 0;
  if (channel.effects && channel.effects.length) {
    for (var j = 0, x = channel.effects.length; j < x; j++) {
      channel.instrument.chain(channel.effects[j], channel.volume);
    }
  }
  channel.loop = new Tone.Loop(triggerInstrument(channel), channel.interval || '8n');
  channel.loop.probability = channel.probability || 1;
  channel.loop.start(0);

  channel.volumeCtrl = document.querySelector('#' + channel.label);
  channel.volumeCtrl.addEventListener('input', function(e) {
    channel.instrument.volume.rampTo(e.target.value, 0.1);
    document.querySelector('#' + channel.label + 'output').innerHTML = e.target.value;
  });
  channel.muteCtrl = document.querySelector('#' + channel.label + 'mute');
  channel.muteCtrl.addEventListener('click', function(e) {
    channel.volume.mute = !e.target.checked;
  });
}

function addControls(channel) {
  var wrapper = document.querySelector('#content');
  var el = document.createElement('div');
  var content = '';
  content += '<input type="checkbox" id="' + channel.label + 'mute" checked /> ';
  content += '<span>' + channel.label + '</span>';
  content += ' <input type="range" min="-50" max="50" id="' + channel.label + '" value="' + channel.vol + '"> ';
  content += '<span id="' + channel.label + 'output">' + channel.vol + '</span>';
  content += '<span id="' + channel.label + 'mel"></span>';
  content += '<span id="' + channel.label + 'sched"></span>';
  el.innerHTML = content;
  el.setAttribute('class', 'channel');
  wrapper.appendChild(el);
  channel.element = el;
};

//Tone.Transport.loopEnd = '4n'
Tone.Transport.loop = true;
Tone.Transport.swing = .5;
Tone.Transport.bpm.value = 160;

document.querySelector('.playToggle').addEventListener('change', function(e){
  if (e.target.checked){
    Tone.Transport.start('+0.1');
  } else {
    Tone.Transport.stop();
  }
})
var canvases = document.querySelector('#canvases');
//drawing the FFT
var fftEl = document.createElement('canvas');
fftEl.setAttribute('id', 'fft');
canvases.appendChild(fftEl);
var fftContext = fftEl.getContext('2d');

function drawFFT(values){
  values = values || fft.analyse();
  fftContext.clearRect(0, 0, canvasWidth, canvasHeight);
  var barWidth = canvasWidth / fft.size;
  for (var i = 0, len = values.length; i < len; i++){
    var val = values[i] / 255;
    var x = canvasWidth * (i / len);
    var y = val * canvasHeight;
    fftContext.fillStyle = "rgba(0, 0, 0, " + val + ")";
    fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
  }
}
//the waveform data
//drawing the waveform
var waveEl = document.createElement('canvas');
waveEl.setAttribute('id', 'waveform');
canvases.appendChild(waveEl);
var waveContext = waveEl.getContext('2d');

var waveformGradient;
function drawWaveform(values){
  //draw the waveform
  waveContext.clearRect(0, 0, canvasWidth, canvasHeight);
  var values = values || waveform.analyse();
  waveContext.beginPath();
  waveContext.lineJoin = "round";
  waveContext.lineWidth = 6;
  waveContext.strokeStyle = waveformGradient;
  waveContext.moveTo(0, (values[0] / 255) * canvasHeight);
  for (var i = 1, len = values.length; i < len; i++){
    var val = values[i] / 255;
    var x = canvasWidth * (i / len);
    var y = val * canvasHeight;
    waveContext.lineTo(x, y);
  }
  waveContext.stroke();
}
//size the canvases
var canvasWidth, canvasHeight;
function sizeCanvases(){
  canvasWidth = canvases.offsetWidth;
  canvasHeight = canvases.offsetHeight;
  waveContext.canvas.width = canvasWidth;
  fftContext.canvas.width = canvasWidth;
  waveContext.canvas.height = canvasHeight;
  fftContext.canvas.height = canvasHeight;
  //make the gradient
  waveformGradient = waveContext.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  waveformGradient.addColorStop(0, "#ddd");
  waveformGradient.addColorStop(1, "#000");
}
sizeCanvases();
window.addEventListener('resize', sizeCanvases);
function loop(){
  requestAnimationFrame(loop);
  //get the fft data and draw it
  var fftValues = fft.analyse();
  drawFFT(fftValues);
  //get the waveform valeus and draw it
  var waveformValues = waveform.analyse();
  drawWaveform(waveformValues);
}
//loop();

})(Tone);