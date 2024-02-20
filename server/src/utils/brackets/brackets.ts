import { JsonDatabase } from 'brackets-json-db';
import { BracketsManager } from 'brackets-manager';

const storage = new JsonDatabase();

export const manager = new BracketsManager(storage);