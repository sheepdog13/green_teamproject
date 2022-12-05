import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
// 아래에 전역 스타일을 추가

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

/* 가운데 영역 */
.container {position: relative; width: 1280px; margin: 0 auto; background: rgb(0, 0, 0, 0);}

/* 로우 영역 */
.My_row {padding: 0 28px;}

/* 여백 초기화 */
body, div, ul, li, dl, dd, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form, figure, figcaption {margin:0; padding:0;}

/* a 링크 초기화 */
a {color: #222; text-decoration: none;}
a:hover {color: #390;}

/* 폰트 초기화 */
body, input, textarea, select, button, table{  font-family:'Noto Sans KR', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 
    color: #222; font-size: 13px; line-height: 1.5;}

/* 폰트 스타일 초기화 */
em, address {font-style: normal;}

/* 블릿기호 초기화 */
dl,ul,li,ol,menu {list-style: none;}

/* 제목 태그 초기화 */
h1,h2,h3,h4,h5,h6{font-size: 13px; color: #222; font-weight: normal;}

/* 테두리 초기화 */
img, fieldset {border: 0 none;}

/* 버튼 초기화 */
button {border: 0;}

/* 반응형 이미지 */
img, video {width: 100%;}

/* clearfix */
.clearfix{*zoom:1;}
.clearfix:before, .clearfix:after {display: block; content: ''; line-height: 0;}
.clearfix:after {clear: both;}

/* IR 효과 */
/* 의미있는 이미지의 대체 텍스트를 제공하는 경우 */
.ir_pm {display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;}
/* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 태체 텍스트를 보여주고자 할 때 */
.ir_wa {display: block; overflow: hidden; position: relative; z-index: -1; width: 100%; height: 100%;}
/* 대체 텍스트가 아니 접근성을 위한 숨김 텍스트를 제공할 때 */
.ir_so {overflow: hidden; position: absolute; width: 0; height: 0; line-height: 0; text-indent: -9999px;}

/* margin, padding */
.mt10 {margin-top: 10px !important;}
.mt15 {margin-top: 15px !important;}
.mt20 {margin-top: 20px !important;}
.mt25 {margin-top: 25px !important;}
.mt30 {margin-top: 30px !important;}
.mt35 {margin-top: 35px !important;}
.mt40 {margin-top: 40px !important;}
.mt45 {margin-top: 45px !important;}
.mt50 {margin-top: 50px !important;}

/* 아이콘 이미지 최적화 작업 */
.icon {background-image: url(/img/icon.png);}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
       only screen and (min-device-pixel-ratio: 1.5),
       only screen and (min-resolution: 1.5dppx){
            .icon {background-image: url(./img/icon@2.png); background-size: 500px;}
       }

       /* input style */
       input {background-image: none;}
       input[type=button],
       input[type=reset],
       input[type=text],
       input[type=password],
       input[type=submit],
       input[type=search],
       input[type=tel],
       input[type=email] {
           -webkit-appearance: none;
           border-radius: 0
       }
       input[type=search]::-webkit-search-cancel-button,
       input[type=search]::-webkit-search-decoration {
           -webkit-appearance: none
       }
       input:checked[type=checkbox] {
           background-color: #666;
           -webkit-appearance: checkbox
       }
       
       /* 셀렉트 메뉴 메인 스타일 */
       .ui_select2 {
           width: 100%; box-sizing: border-box;
           background: #2c2f34; color: #fff;
           display: inline-block; height: 36px;
           border: 0 none; padding: 0 10px; margin: 0;
           font-family: inherit; font-size: inherit;
           vertical-align: middle; text-align: left;
           white-space: nowrap;
           background: #2c2f34 url(../img/down.svg) no-repeat right 10px center;
           background-size: 10px;
           -webkit-appearance: none;
           -moz-appearance : none;
           appearance : none;
       }
       /* 메인 텍스트 박스 스타일1 */
        .ui_input3 {
            background: #2c2f34; color: #fff; width: 100%; height: 36px; padding: 0 10px;
        }
`;

export default GlobalStyles;