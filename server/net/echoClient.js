var s = new require("net").Socket();
process.stdin.pipe(s).pipe(process.stdout);

s.connect(1234, "localhost");

