const btn = document.querySelector('.btn');
const search = document.getElementById("search");
const boardListWrap = document.getElementById("board-list-wrap");

const cookies = document.cookie.split(';').map(cookie => cookie.trim());

const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
const makePostHtml = ({ num, content, date }) => {
  return `
    <td>${num}</td>
    <th>${content}</th>
    <td>${date}</td>`
}
const applyPostHtml = (postHtmlData) => {
  const trTag = document.createElement('tr');
  trTag.innerHTML = postHtmlData;
  boardListWrap.prepend(trTag);
}


const makeDateTime = (date) => {
  const today = new Date(date);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}



const addList = () => {
  if(!search.value) return alert("내용을 입력해주세요.");

  const firstChild = boardListWrap.firstElementChild;
  const maxNum = firstChild.getElementsByTagName("td")[0].innerText
  const nextNum = Number(maxNum) + 1;
  const currentDateTime = makeDateTime(new Date);
  const postHtmlData = makePostHtml({num: nextNum, content: search.value, date: currentDateTime});
  applyPostHtml(postHtmlData);
  
  setCookie(`list${nextNum}`, JSON.stringify({num: nextNum, content: search.value, date: currentDateTime}), 30)
  search.value = "";
}
const value = localStorage.getItem('username');
if(!value)  {
  alert("잘못된 접근입니다.")
  location.href = "/";
}


for(let i = 0; i < cookies.length; i++) {
  const cookieKey = cookies[i].split("=")[0];
  if (cookieKey.includes("list")) {
    const listCookie = getCookie(cookieKey);
    const listData = JSON.parse(listCookie);
    const postHtmlData = makePostHtml(listData);
    applyPostHtml(postHtmlData);
  }
}


btn.addEventListener('click', addList)