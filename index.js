const { exec } = require("child_process");
const { dirname, basename } = require("path");
const { promisify } = require("util");

module.exports = {
  countCommits
};

async function countCommits(fileLocation) {
  const directory = dirname(fileLocation);
  const file = basename(fileLocation);

  const { stdout, stderr } = await promisify(exec)(
    `git -C ${directory} log -m --oneline --follow --first-parent ${file} | wc -l`
  );

  if (stderr) throw stderr;

  return stdout.trim();
}
