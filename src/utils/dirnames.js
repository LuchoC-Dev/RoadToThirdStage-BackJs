import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __utilsDir = path.dirname(__filename);
export const __srcDir = path.join(__utilsDir, '..');
export const __proyectDir = path.join(__srcDir, '..');
