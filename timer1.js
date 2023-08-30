const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please include positive numbers for the delays at which beeps should occur.");
}

const beep = () => process.stdout.write('\x07');

for (const timeInSeconds of args) {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) {
    console.error(`Invalid time: ${timeInSeconds} (Time must be a positive number)`);
  } else {
    setTimeout(beep, timeInSeconds * 1000);
  }
}


