import { execa } from 'execa';
import path from "path";


const exePath = path.resolve('bin/yt-dlp_linux');

const stdout = await execa(exePath, ['--version']);

export { stdout };