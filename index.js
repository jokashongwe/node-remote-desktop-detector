const { exec } = require('child_process');

exports.IsRemoteDesktopSession = function (callback) {
    if (process.platform == "win32") {
        exec("./win/RemoteSessionDetector.exe | findstr /i true", callback);
    } else {
        return "Not Supported!"
    }
}