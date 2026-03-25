import {test} from '@playwright/test';
import { DBCommons } from '../../commons/db/db-commons';

test.describe('DB Tests', ()=>{

let db : DBCommons;

test.beforeAll(()=>{
    db = new DBCommons();
});

//Test case : get top 10 horror movies from the DVD Rental Database whose movie name contains Devil, arranged in ascending order based on the title with English language. 
test('validate the database data', async ()=>{

const query = `SELECT FILM.TITLE AS MOVIE_NAME, CATEGORY.NAME AS MOVIE_CATEGORY, LANGUAGE.NAME AS MOVIE_LANGUAGE FROM CATEGORY 
JOIN
FILM_CATEGORY
ON 
CATEGORY.CATEGORY_ID = FILM_CATEGORY.CATEGORY_ID 
JOIN 
FILM
ON
FILM_CATEGORY.FILM_ID = FILM.FILM_ID
JOIN
LANGUAGE
ON
FILM.LANGUAGE_ID = LANGUAGE.LANGUAGE_ID
WHERE 
CATEGORY.NAME = 'Horror'
AND
LANGUAGE.NAME = 'English'
AND 
FILM.TITLE LIKE '%Devil'
ORDER BY FILM.TITLE ASC
LIMIT 10 `

const data  = await db.getData(query);

console.log(data);

console.log(data[1].movie_name);

});



})