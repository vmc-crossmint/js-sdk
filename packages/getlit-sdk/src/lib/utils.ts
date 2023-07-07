const version = '0.0.1';
const PREFIX = 'GetLit SDK';
const logBuffer: Array<any[]> = [];

function log(...args: any[]): void {
  args.unshift(`\x1b[34m[${PREFIX} v${version} INFO]\x1b[39m`);
  printLog(args);
}

log.info = log;

log.error = (...args: any[]): void => {
  args.unshift(`\x1b[31m[${PREFIX} v${version} ERROR]\x1b[39m`);
  printLog(args);
};

log.warning = (...args: any[]): void => {
  args.unshift(`\x1b[33m[${PREFIX} v${version} WARNING]\x1b[39m`);
  printLog(args);
};

log.success = (...args: any[]): void => {
  args.unshift(`\x1b[32m[${PREFIX} v${version} SUCCESS]\x1b[39m`);
  printLog(args);
};

log.h1 = (...args: any[]): void => {
  args.unshift(`\x1b[35m[${PREFIX} v${version}] ----------`);
  args = [...args, '----------\x1b[39m']
  printLog(args);
};

const printLog = (args: any[]): void => {
  if (!globalThis) {
    // there is no globalThis, just print the log
    console.log(...args);
    return;
  }

  // check if config is loaded yet
  if (!globalThis?.LitDebug) {
    // config isn't loaded yet, push into buffer
    logBuffer.push(args);
    return;
  }

  if (globalThis?.LitDebug !== true) {
    return;
  }
  // config is loaded, and debug is true

  // if there are logs in buffer, print them first and empty the buffer.
  while (logBuffer.length > 0) {
    const bufferedLog = logBuffer.shift() ?? [];
    console.log(...bufferedLog);
  }

  console.log(...args);
};

export { log };
