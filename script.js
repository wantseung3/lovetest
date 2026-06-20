const questions = [
"애인이 소개팅 어플 깔아만 두기",
"애인이 이성친구에게 후드집업 빌려주기",
"애인 차에 이성친구가 블루투스 연결하기",
"애인이 사랑한다고 절대 말 안함",
"애인이 일주일에 한 번 잠수타기",
"애인과 하는 2시간 영상통화가 부담스럽다",
"애인이 여행가서 연락이 안되면 눈물이 난다",
"여성일 경우 O, 남성일 경우 X 선택"
];

const results = {

"권효주":{
title:"🌊 잠수형",
content:`당신은 시도때도 없이 잠수를 타서 상대방을 불안형으로 만드는 타입입니다.

당신의 보안법은 스쿠버다이빙 자격증을 따는 것입니다.`
},

"김송현":{
title:"😌 안정형 (회피형)",
content:`당신은 대체로 안정적입니다.

그러나 때에 따라 불안해서가 아니라 귀찮아서 회피하는 성향을 보입니다.

밤톨티비.`
},

"신하음":{
title:"😭 불안형",
content:`당신은 불안형입니다.

당신은 최은지 차단을 풀어줄 필요가 있습니다.

황희찬은 죄가 없다.

흥이다.

뿡아.

똥!`
},

"이수민":{
title:"💖 안정형",
content:`당신은 또라이들 중 유일하게 연애중인 안정형입니다.

앞으로도 행복한 연애 이어 가시길 바랍니다.

단, 당신의 결혼식 날 또라이들이 신부 대기실에서 당신의 웨딩드레스 입은 모습을 보고 난리가 날 수 있습니다.`
},

"전가빈":{
title:"😵 불안형",
content:`당신은 불안형입니다.

당신은 불안형입니다.

당신은 불안형입니다.

쌍둥이 권효주와 함께 있을 때 더 심한 증상을 보입니다.

개인적인 의견입니다.

참고 바랍니다.`
},

"정다경":{
title:"💀 불안형",
content:`멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.
멘헤라다경.`
},

"최윤서":{
title:"🤨 불안형",
content:`당신은 안정형으로 착각할 수 있으나 불안형입니다.

당신은 연애썰을 또라이들에게 풀 필요가 있습니다.

당신은 권효주에게 집착하는 모습을 보였습니다.

고로, 당신은 멘헤라 끼가 있는 불안형입니다.

겉으로는 아닌 것 같아 보이지만 당신은 불안형입니다.

믿으십시오.`
},

"최은지":{
title:"👑 안정형",
content:`당신은 안정형입니다.

당신은 안정형이 맞습니다.

축하합니다.`
}

};

let currentQuestion = 0;
let userName = "";

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");

const currentNum = document.getElementById("currentNum");
const totalNum = document.getElementById("totalNum");

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");

const progressBar = document.getElementById("progressBar");

const resultTitle = document.getElementById("resultTitle");
const resultContent = document.getElementById("resultContent");

totalNum.textContent = questions.length;

function showScreen(screen){

[startScreen,
questionScreen,
loadingScreen,
resultScreen]
.forEach(s => s.classList.remove("active"));

screen.classList.add("active");
}

document
.getElementById("startBtn")
.addEventListener("click", () => {

userName =
document
.getElementById("nameInput")
.value
.trim();

if(!userName){

alert("이름을 입력해주세요!");
return;

}

currentQuestion = 0;

showScreen(questionScreen);

renderQuestion();

});

function renderQuestion(){

questionText.textContent =
questions[currentQuestion];

questionNumber.textContent =
`Q${currentQuestion + 1}`;

currentNum.textContent =
currentQuestion + 1;

progressBar.style.width =
`${((currentQuestion+1)/questions.length)*100}%`;

}

document
.querySelectorAll(".answer-btn")
.forEach(btn => {

btn.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < questions.length){

renderQuestion();

}else{

startLoading();

}

});

});

function startLoading(){

showScreen(loadingScreen);

const texts = [
"💖 애착유형 계산중...",
"💕 연애 데이터 분석중...",
"💗 집착력 측정중...",
"💘 최종 결과 생성중..."
];

let i = 0;

const loadingText =
document.getElementById("loadingText");

const interval =
setInterval(() => {

i++;

if(i < texts.length){

loadingText.textContent =
texts[i];

}

},700);

setTimeout(() => {

clearInterval(interval);

showResult();

},3000);

}

function showResult(){

showScreen(resultScreen);

const result =
results[userName];

if(result){

resultTitle.textContent =
result.title;

resultContent.textContent =
result.content;

if(userName === "정다경"){

document.body.style.animation =
"shake .2s infinite";

setTimeout(() => {

document.body.style.animation =
"";

},4000);

}

}else{

resultTitle.textContent =
"⚠️ 오류";

resultContent.textContent =
`다시 한 번 이름을 작성하고 질문에 답해주세요.`;

}

}

document
.getElementById("copyBtn")
.addEventListener("click", () => {

navigator.clipboard.writeText(
resultTitle.textContent +
"\n\n" +
resultContent.textContent
);

alert("결과가 복사되었습니다 💖");

});

document
.getElementById("restartBtn")
.addEventListener("click", () => {

currentQuestion = 0;
userName = "";

document.getElementById("nameInput").value = "";

showScreen(startScreen);

});

function createHeart(){

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML =
["💖","💕","💗","💘","💞"]
[Math.floor(Math.random()*5)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(6 + Math.random()*4) + "s";

document
.getElementById("floatingHearts")
.appendChild(heart);

setTimeout(() => {

heart.remove();

},10000);

}

setInterval(createHeart,500);

const style =
document.createElement("style");

style.innerHTML = `
@keyframes shake{
0%{transform:translate(0);}
25%{transform:translate(3px);}
50%{transform:translate(-3px);}
75%{transform:translate(3px);}
100%{transform:translate(0);}
}
`;

document.head.appendChild(style);