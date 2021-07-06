//const { exec } = require('child_process');
const util = require('util');
const path = require('path');
const childProcess = require('child_process');
const execFile = util.promisify(childProcess.execFile);

const TEN_MEGABYTES = 1000 * 1000 * 10;

exports.IsRemoteDesktopSession = async () => {
    const binPath = path.join(__dirname, "vendor", "RemoteSessionDetector.exe");
    const { stdout } = await execFile(binPath, {
        maxBuffer: TEN_MEGABYTES,
        windowsHide: true
    });
    let result = stdout.trim();
    return (result == "true" || result == "True")
}