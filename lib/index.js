import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.bold.gray("-----------------------------------------\n"));
console.log(chalk.red(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣄⡀⠀⠀⣀⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣦⣾⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀
⠀⠀⠀⠀⢀⣀⣤⣤⣤⣄⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⡇
⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⢰⣿⣿⣿⣿⣿⠟⠁
⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠛⠀⢀⣿⣿⣿⣿⠟⠁⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⣀⣀⣀⣀⣤⣴⣿⣿⣿⡟⠁⠀⠀⠀⠀
⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠙⢿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠻⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</> Welcome To My Baileys </>

⟢ Creator : 
╰┄> PAPA•QUEEN亗
⟢ Contact : 
╰┄> wa.me//628973824776
╰┄> t.me/papaqueenoffc
⟢ Channel WhatsApp : 
╰┄> https://whatsapp.com/channel/0029Vb6pIlxDTkKBpOvPqD22
`))
console.log(chalk.bold.gray("--------------------------------------------\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
