const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statediv = document.getElementById('statediv');
const logdiv = document.getElementById('logdiv');

 
startBtn.addEventListener( "click", () => {
  document.addEventListener('keydown',handleDown);
  document.addEventListener('keyup', handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});
stopBtn.addEventListener( "click", () => {
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup', handleUp);
    statediv.textContent = "";
    logdiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;
  });
function handleDown(e){
     logdiv.textContent = `key ${e.key} pressed down`;
    statediv.textContent = 'key is down';
  }
function handleUp(e){
    logdiv.textContent = `key ${e.key}  pressed up`;
    statediv.textContent = 'key is up';
  }
 
 