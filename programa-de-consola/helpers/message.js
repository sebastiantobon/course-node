require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=======================".green);
    console.log("   Select an option   ".green);
    console.log("=======================\n".green);

    console.log(`${"1".green}. Create task`);
    console.log(`${"2".green}. List tasks`);
    console.log(`${"3".green}. List completed tasks`);
    console.log(`${"4".green}. List pending tasks`);
    console.log(`${"5".green}. Complete homework`);
    console.log(`${"6".green}. Delete task`);
    console.log(`${"0".green}. GET OUT\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Select an option:   `, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const stop = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(
      `\nSelect an option ${"ENTER".green} to continue\n`,
      () => {
        readLine.close();
        resolve()
      }
    );
  });
};

module.exports = {
  showMenu,
  stop,
};
