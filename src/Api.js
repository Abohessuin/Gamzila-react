const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () =>{
     const month =new Date().getMonth()+1
     if(month<10){
         return `0${month}`;
     }else{
         return month;
     } 
}

const getCurrentDay = () =>{
    const day =new Date().getDate()+1
    if(day<10){
        return `0${day}`;
    }else{
        return day;
    } 
}


const getCurrentYear=new Date().getFullYear();

const month=getCurrentMonth();
const day=getCurrentDay();
const year=getCurrentYear;

const currentDate=`${year}-${month}-${day}`;
const lastYear=`${year-1}-${month}-${day}`;
const nextYear=`${year+1}-${month}-${day}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl= () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;
export const searchGameURL=(game_name)=> `${base_url}games?search=${game_name}&page_size=9`;