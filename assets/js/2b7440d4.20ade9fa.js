"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1982],{1850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(5893),s=r(1151);const o={sidebar_position:2},a="Prepare the SD card",i={id:"sdcard_structure",title:"Prepare the SD card",description:"In order to use some feature of the capibaraZero you need to prepare a SD card with the following requirements:",source:"@site/docs/sdcard_structure.md",sourceDirName:".",slug:"/sdcard_structure",permalink:"/docs/docs/sdcard_structure",draft:!1,unlisted:!1,editUrl:"https://github.com/CapibaraZero/docs/tree/main/docs/sdcard_structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CapibaraZero Docs",permalink:"/docs/docs/intro"},next:{title:"The WIFI module",permalink:"/docs/docs/category/the-wifi-module"}},c={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"prepare-the-sd-card",children:"Prepare the SD card"}),"\n",(0,n.jsx)(t.p,{children:"In order to use some feature of the capibaraZero you need to prepare a SD card with the following requirements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It must be formatted in FAT32"}),"\n",(0,n.jsx)(t.li,{children:"You must create the following directory structure to avoid issues:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\u251c\u2500\u2500 captive_portal\n\u251c\u2500\u2500 dhcp_glutton\n\u251c\u2500\u2500 arp_poisoner\n\u251c\u2500\u2500 NFC\n\u251c\u2500\u2500 subghz\n    \u251c\u2500\u2500 raw_capture\n\u251c\u2500\u2500 ducky\n\u251c\u2500\u2500 wifi\n\u251c\u2500\u2500 bluetooth\n\u2514\u2500\u2500 IR\n    \u251c\u2500\u2500 signals\n    \u251c\u2500\u2500 signal_rc\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you are on a Linux based distribution with wipefs, parted and mkfs.fat installed, you can use ",(0,n.jsx)(t.a,{href:"https://github.com/CapibaraZero/resources/blob/main/scripts/make_sdcard.sh",children:"this script"})," to make the SD card structure"]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(7294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);