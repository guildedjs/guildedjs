const { writeFile } = require("fs/promises");
const { join } = require("path");

(async () => {
    await writeFile(join(__dirname, "..", "docs", "CNAME"), "guilded.js.org");
    console.log("CREATED CNAME");
})();