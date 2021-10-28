const { inquirerMenu, stop, leerInput } = require("./inquierer");

require("colors");

console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await stop();
  } while (opt !== "0");
};

main();
