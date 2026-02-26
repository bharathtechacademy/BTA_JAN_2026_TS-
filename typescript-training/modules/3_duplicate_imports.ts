//Importing duplicate functions and data
import { PI, add, subtract } from './1_named_exports.ts';
import { PI as pi, add as sum, subtract as sub } from './2_export_all.ts';

console.log(pi);
console.log(sum(5, 3));
console.log(sub(5, 3));