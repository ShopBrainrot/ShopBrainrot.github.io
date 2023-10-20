
// CODE CSS IN JS
/*var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./VietKhanhft-data/css/index.css";
document.head.appendChild(link);*/
var style = document.createElement("style");
style.innerHTML = `
body {
  background-color: #000;
/*background-image: url('https://api.ipxi.cn/wp/api.php'); 
background-size: cover;
background-repeat: no-repeat;
background-position: center;*/
position: relative;
font-family: Concert One;
}
.Border {
    font-size: 12px;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  padding: 0px;
  margin: 8px;
  border-style: double;
  border-radius: 15px;
  border-color: rgb(236, 11, 11);
  border-width: 2px;
  animation-name: bodyborder;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: right;
}
.BlurWebs {
  animation: blur 5s linear 1 0s forwards;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
          THANH BAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
::-webkit-scrollbar {
  width: 8px;
  height: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(106, 96, 255); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 255, 98); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00ffbc; 
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        HOME VIETKHANH
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.MangXaHoiFtVietKhanh div {
  border: 2px solid white;
  font-family: Righteous;
  border-radius: 5px; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer;  
  width: unset;
  margin: auto;
  transition: 0.5s;
  text-align: center;
  text-shadow: -1px 0 5px CYAN, 
               0 1px 5px RED, 
               1px 0 5px CYAN, 
               0 -1px 5px RED;
}
/* Phân giải trên mobile */
@media only screen and (max-width: 768px) {
  .MangXaHoiFtVietKhanh div {
    width: 65%;
  }
}
/* Phân giải trên PC */
@media only screen and (min-width: 769px) {
  .MangXaHoiFtVietKhanh div {
    width: 30%;
  }
}
.MangXaHoiFtVietKhanh:after {
  content: "";
  clear: both;
  display: table;
}
.MangXaHoiFtVietKhanh div:not(:last-child) {
  border-right: none; 
}
.MangXaHoiFtVietKhanh div:hover {
  transform: translateY(-3px);
  transition: 0.5s;
}
.Facebook { 
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgb(73, 89, 255) 50%,
    rgba(0, 198, 255, 0.84) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
.Youtube {
  position: relative;
  background: rgb(221,105,105);
  background: linear-gradient(138deg, 
    rgba(221,105,105,1) 0%, 
    rgba(222,94,94,1) 21%, 
    rgba(223,86,86,1) 37%, 
    rgba(223,86,86,1) 46%, 
    rgba(235,49,43,1) 66%);
    color: var(--accentColor);
    border: solid var(--accentColor) 2px;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px; /* 17px */
    text-decoration: none;
    /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
    -webkit-tap-highlight-color: transparent;
}
.Discord {
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgba(88,101,242,1) 41%, 
    rgba(152,100,241,1) 85%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}

.Instagram{
  position: relative;
  background: rgb(131,58,180); 
  background: linear-gradient(90deg, 
    rgba(131,58,180,1) 0%, 
    rgba(253,29,29,1) 50%, 
    rgba(252,176,69,1) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
    THONG TIN THANH TOAN
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.ThongTinThanhToan {
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #252525;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 1px #555;
  color: #ffffff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToan:hover {
  background-color: #353535;
  box-shadow: 0 2px 2px 1px #555;
  transform: scale(0.95);
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToanTitle {
  padding: 0 0;
  margin: 0 0;
  font-size: 23px;
  font-weight: 700;
  color: #00FFFF;}
.ThongTinThanhToanText {
  padding: 0 0;
  margin: 5 0;
  font-size: 20px;
  font-weight: 500;
  color: #00CC33;
  margin-top: 5px;
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        BO TRÒN AVATAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.Blob {
  background: black;
  border-radius: 50%;
  margin: 10px;
  height: 150px;
  width: 150px; 
  box-shadow: 0 1px 13px lime;
  transform: scale(.5);
  animation: pulse 2s infinite;
  margin-top: 50px;
}

@keyframes pulse {
  0% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px cyan;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 1px 13px lime;
  }
  100% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px magenta;
  }
}
.Cuoi {
  font-size: 15px;
  padding: 40px 0;
  color: #4b4c4d;
}
.Trang {
  color: white;
  -webkit-mask: linear-gradient(-60deg,
                                white 30%,
                                #0004,
                                white 70%) 
                                right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 1s infinite;
}
.Footer .VietKhanhFtCopyright {
  text-align: center;
  color: #aaa;
  margin-bottom: 0;
}
`;
document.head.appendChild(style);
            // SKILL LANGUAGE
            $('.skill-per').each(function() {
              var $this = $(this);
              var per = $this.attr('per');
              $this.css("width", per + '%');
              $({
                animatedValue: 0
              }).animate({
                animatedValue: per
              }, {
                duration: 15000,
                step: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
              });
            });
// USER NAME + TÍCH XANH
var _0xea0f=["\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x75\x73\x65\x72\x4E\x61\x6D\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x4C\xEA\x20\x48\x6F\xE0\x6E\x67\x20\x50\x68\xFA\x63\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x75\x70\x6C\x6F\x61\x64\x2E\x77\x69\x6B\x69\x6D\x65\x64\x69\x61\x2E\x6F\x72\x67\x2F\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x2F\x63\x6F\x6D\x6D\x6F\x6E\x73\x2F\x74\x68\x75\x6D\x62\x2F\x65\x2F\x65\x34\x2F\x54\x77\x69\x74\x74\x65\x72\x5F\x56\x65\x72\x69\x66\x69\x65\x64\x5F\x42\x61\x64\x67\x65\x2E\x73\x76\x67\x2F\x35\x31\x32\x70\x78\x2D\x54\x77\x69\x74\x74\x65\x72\x5F\x56\x65\x72\x69\x66\x69\x65\x64\x5F\x42\x61\x64\x67\x65\x2E\x73\x76\x67\x2E\x70\x6E\x67\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x37\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x37\x22\x20\x61\x6C\x74\x3D\x22\x54\xED\x63\x68\x20\x58\x61\x6E\x68\x22\x3E","\x66\x70\x73","\x6E\x6F\x77","\x74\x6F\x46\x69\x78\x65\x64","\x72\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65","\x2E\x47\x69\x6F\x69\x54\x68\x69\x65\x75","\x48\x69\x20\x6D\x79\x20\x6E\x61\x6D\x65\x20\x69\x73\x20\x6C\x65\x68\x6F\x61\x6E\x67\x70\x68\x75\x63","\x48\x65\x79\x20\x62\x72\x6F\x74\x68\x65\x72\x2C\x20\x49\x27\x6D\x20\x61\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x2E","\x49\x20\x6C\x69\x6B\x65\x20\x77\x65\x62\x73\x69\x74\x65\x20\x64\x65\x73\x69\x67\x6E\x20\x3D\x5D\x5D"];document[_0xea0f[2]](_0xea0f[1])[_0xea0f[0]]= _0xea0f[3];var fps=document[_0xea0f[2]](_0xea0f[4]);var startTime=Date[_0xea0f[5]]();var frame=0;function CheckFps(){var _0x54bbx5=Date[_0xea0f[5]]();frame++;if(_0x54bbx5- startTime> 1000){fps[_0xea0f[0]]= (frame/ ((_0x54bbx5- startTime)/ 1000))[_0xea0f[6]](1);startTime= _0x54bbx5;frame= 0};window[_0xea0f[7]](CheckFps)}let typed= new Typed(_0xea0f[8],{strings:[_0xea0f[9],_0xea0f[10],_0xea0f[11]],typeSpeed:95,backSpeed:75,loop:true})
// MUSIC PLAY
const VietKhanh_List = [
"//files.catbox.moe/9l1tw8.mp3", //muon roi ma sao con
"//files.catbox.moe/gaklfz.mp3", // tuyet sac
"//files.catbox.moe/9meje5.mp3", // neu ngay ay
"//files.catbox.moe/2rbcei.mp3", // 05 khong phai
"//files.catbox.moe/iwdrpc.mp3", // pho da len den
"//files.catbox.moe/4aqenk.mp3", // co chac yeu la day
"//files.catbox.moe/q5ts8g.mp3", // om em lan cuoi
"//files.catbox.moe/winub4.mp3", // sai gon simple love
"//files.catbox.moe/r20fad.mp3", // Cuu van kip khong
"//files.catbox.moe/71gf6e.mp3", // Đánh mat em
"//files.catbox.moe/d8oatb.mp3", // Em gai mua
"//files.catbox.moe/e1r8fu.mp3", // 2AM
"//files.catbox.moe/2f8l0y.mp3", // Em da xa anh
  "//files.catbox.moe/l0y6x5.mp3", // Thời gian sẽ trả lời
  "//files.catbox.moe/sly2n7.mp3", // Cho em 1 lần yêu
  "//files.catbox.moe/l49x11.mp3", // Que boi
];
let index = parseInt(localStorage.getItem('currentAudioIndex')) || Math.floor(Math.random() * VietKhanh_List.length);
const audio = new Audio(VietKhanh_List[index]);
function VietKhanhAudio() {audio.play();}
document.addEventListener('click', VietKhanhAudio);
audio.addEventListener("ended", function() {
index = (index + 1) % VietKhanh_List.length;
localStorage.setItem('currentAudioIndex', index);
audio.src = VietKhanh_List[index];
audio.play();
});
function onCreate() {
  CheckFps();
  HomeVietKhanh();
  VietKhanhAudio();
  ShowToast();
}
// LOADER SCREEN ----------
let spin = document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 5000);
});
function ShowToast() {
	var x = document.getElementById("Toast");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

function Youtube() {
  setTimeout(function() {
    window.open('https://youtube.com/@lehoangphucreg', '_blank')},
  100);
}
function Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/lehoangphuc.abcd', '_blank')},
  100);
}
function Discord() {
  setTimeout(function() {
    window.open('https://tiktok.com/lehoangphuc.site', '_blank')},
  100);
}
function Instagram() {
  setTimeout(function() {
    window.open('https://t.me/hoangphucsiucuti', '_blank')},
  100);
}
function HomeVietKhanh() {
  Swal.fire({
    title: '𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !',
    text: '=>> 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙃𝙪𝙣𝙣𝙞𝙚 𝘽𝙖𝙘𝙠 𝙏𝙤 𝙏𝙝𝙚 𝙃𝙤𝙢𝙚𝙋𝙖𝙜𝙚 🐬 <<=',
    showConfirmButton: false
  });
}
const toastDiv = document.createElement('div');
toastDiv.id = 'Toast';
toastDiv.textContent = '𝘿𝙚𝙨𝙞𝙜𝙣 𝙗𝙮 Lê Hoàng Phúc 🌝 =))';
document.body.appendChild(toastDiv);var maxtheard;
var testurl;
var lsat_date = 0;
var CountryCode_VietKhanh = {
    US: "United States",
    CA: "California",
    HK: "HongKong (Trung Quốc)",
    TW: "Taiwan (Đài Loan)",
    SG: "Singapore",
    JP: "Japan",
    KR: "Korea",
    AU: "Australia",
    NZ: "New Zealand",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa (United States)",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    VG: "British Virgin Islands (United Kingdom)",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CV: "Cape Verde",
    KY: "Cayman Islands (United Kingdom)",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo (Kinshasa)",
    CK: "Cook Islands (New Zealand)",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FO: "Faroe Islands (Denmark)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana (France)",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar (United Kingdom)",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam (United States)",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Republic of Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao (China)",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Republic of Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique (France)",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat (UK)",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia (France)",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Northern Mariana Islands (USA)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    CN: "China",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico (United States)",
    QA: "Qatar",
    CG: "Republic of the Congo",
    ZW: "Zimbabwe",
    RE: "Reunion (France)",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon (France)",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Republic of Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Türkiye",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (United Kingdom)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna (France)",
    YE: "Yemen",
    ZM: "Zambia"
};
var all_down_sum = 0;
var run = false;
var checkIP = false;
var visibl = true;
var thread_down = [];
var lsat_all_down = 0;
var refresh_lay = 5e3;
async function start_thread(index) {
    try {
        const response = await fetch(testurl, {
            cache: "no-store",
            mode: "cors",
            referrerPolicy: "no-referrer"
        });
        const reader = response.body.getReader();
        while (true) {
            const {
                value,
                done
            } = await reader.read();
            if (done) {
                reader.cancel();
                start_thread(index);
                break;
            }
            if (!run) {
                reader.cancel();
                break;
            }
            thread_down[index] += value.length;
        }
    } catch (err) {
        console.log(err);
        if (run) start_thread(index);
    }
}
var gbip = ""; 
function checkip_address() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.ip + " " + data.isp;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(checkip_address, 3000);
}
function noisong() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.region + " " + data.country;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(noisong, 5000);
}
checkip_address();
noisong();

