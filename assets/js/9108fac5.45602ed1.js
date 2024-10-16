"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1951],{550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(5893),s=n(1151);const r={sidebar_position:2,title:"Create key list to read tag"},i="Why you need a key?",o={id:"nfc/create_key",title:"Create key list to read tag",description:"The key is used to read or write the tag sectors and it's needed for the read and dump features. Each sector have Key A and Key B, more details here. In the section we will see how to save a list of authentication keys in the SD card.",source:"@site/docs/nfc/create_key.md",sourceDirName:"nfc",slug:"/nfc/create_key",permalink:"/docs/docs/nfc/create_key",draft:!1,unlisted:!1,editUrl:"https://github.com/CapibaraZero/docs/tree/main/docs/nfc/create_key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Create key list to read tag"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/docs/nfc/getting_started"},next:{title:"Dump a card in the SD",permalink:"/docs/docs/nfc/dump_tag_sd"}},c={},d=[{value:"Key format",id:"key-format",level:2},{value:"Save key in SD card",id:"save-key-in-sd-card",level:3},{value:"Keys collection",id:"keys-collection",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"why-you-need-a-key",children:"Why you need a key?"}),"\n",(0,a.jsxs)(t.p,{children:["The key is used to read or write the tag sectors and it's needed for the read and dump features. Each sector have Key A and Key B, more details ",(0,a.jsx)(t.a,{href:"https://github.com/XaviTorello/mifare-classic-toolkit/blob/master/README.md#Keys",children:"here"}),". In the section we will see how to save a list of authentication keys in the SD card."]}),"\n",(0,a.jsx)(t.h2,{id:"key-format",children:"Key format"}),"\n",(0,a.jsx)(t.p,{children:"The key is composed by a 6 hexadecimal bytes and allow NFC reader to read the sectors."}),"\n",(0,a.jsx)(t.p,{children:"The key format followed by CapibaraZero(and Mifare app) is the following: FFFFFFFFFFFF"}),"\n",(0,a.jsx)(t.h3,{id:"save-key-in-sd-card",children:"Save key in SD card"}),"\n",(0,a.jsxs)(t.p,{children:["To save key in SD card you will need to create a file called ",(0,a.jsx)("strong",{children:"keys.txt"})," under the path ",(0,a.jsx)("strong",{children:"/NFC/"}),". Full path will be: /NFC/keys.txt"]}),"\n",(0,a.jsx)(t.p,{children:"An example can be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:"FFFFFFFFFFFF\nB4C132439EEF\n7BBEBOC8FB49\n1BC1F6FF32CC\nD9D923DAE083\n990AEB52D8AC\n90DEAB425EA5\n40A061DABC43\n43D65DC2363C\n5AFE558BC710\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also create comment using the # character."}),"\n",(0,a.jsx)(t.h3,{id:"keys-collection",children:"Keys collection"}),"\n",(0,a.jsx)(t.p,{children:"Here a list of some NFC keys:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/UberGuidoZ/Flipper/tree/main/NFC/mf_classic_dict",children:"FlipperZero Mifare keys collection"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/ikarus23/MifareClassicTool/blob/master/Mifare%20Classic%20Tool/app/src/main/assets/key-files/extended-std.keys",children:"MifareClassicTool keys"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);