import { execa } from 'execa';
import path from "path";


const exePath = path.resolve('bin/yt-dlp.exe');

const stdout = await execa(exePath, ['--version']);

export { stdout };