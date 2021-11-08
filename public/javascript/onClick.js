console.log('sanity check')
/*----------------- Constants -----------------*/

/*------------- Variables (state) -------------*/

/*--------- Cached Element References ---------*/

let linkName = document.querySelectorAll('.link')
let test = document.querySelector('.testing')

/*-------------- Event Listeners --------------*/

linkName.forEach((element,idx)=>{linkName[idx].addEventListener('click',getLink)})

/*----------------- Functions -----------------*/

console.log(test)