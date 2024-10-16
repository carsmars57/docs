"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7329],{3337:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=s(5893),t=s(1151);const d={sidebar_position:1,title:"Record Signal"},i="Record Signal",l={id:"ir/record_signal",title:"Record Signal",description:"CapibaraZero is able to capture and decode many IR protocol but can also works with RAW protocol.",source:"@site/docs/ir/record_signal.md",sourceDirName:"ir",slug:"/ir/record_signal",permalink:"/docs/docs/ir/record_signal",draft:!1,unlisted:!1,editUrl:"https://github.com/CapibaraZero/docs/tree/main/docs/ir/record_signal.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Record Signal"},sidebar:"tutorialSidebar",previous:{title:"IR",permalink:"/docs/docs/category/ir"},next:{title:"Emulate Signal",permalink:"/docs/docs/ir/emulate_signal"}},c={},o=[{value:"How to record an IR signal?",id:"how-to-record-an-ir-signal",level:2},{value:"Supported Protocols:",id:"supported-protocols",level:3}];function h(e){const r={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"record-signal",children:"Record Signal"}),"\n",(0,n.jsx)(r.p,{children:"CapibaraZero is able to capture and decode many IR protocol but can also works with RAW protocol."}),"\n",(0,n.jsx)(r.p,{children:"Recorded signal can be used for protocol analysis or can be sent by an IR emitter."}),"\n",(0,n.jsx)(r.h1,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ESP32-S3"}),"\n",(0,n.jsx)(r.li,{children:"IR receiver"}),"\n",(0,n.jsx)(r.li,{children:"SD card"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"how-to-record-an-ir-signal",children:"How to record an IR signal?"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Go to the IR section"}),"\n",(0,n.jsx)(r.li,{children:"Select Record Signal"}),"\n",(0,n.jsx)(r.li,{children:"Put the remote controller near to the capibaraZero's IR receiver"}),"\n",(0,n.jsx)(r.li,{children:"Press the button that you want to record"}),"\n",(0,n.jsx)(r.li,{children:"Press save when the signal got received by the capibaraZero"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The recorded signal will saved under /IR/signals make sure that directory exists on SD, otherwise it will fail."}),"\n",(0,n.jsx)(r.h3,{id:"supported-protocols",children:"Supported Protocols:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Keyword"}),(0,n.jsx)(r.th,{children:"Supported"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NEC"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NEC2"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Onkyo"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Apple"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Denon"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sharp"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Panasonic"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Kaseikyo"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JVC"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"LG"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"LG2"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"RC5"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"RC6"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Samsung"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sony"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pulse Distance"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pulse Width"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pulse Distance Width"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Hash"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pronto"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"BoseWave"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Bang & Olufsen"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Lego"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"FAST"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Whynter"}),(0,n.jsx)(r.td,{children:"\u2705"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MagiQuest"}),(0,n.jsx)(r.td,{children:"\u2705"})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>i});var n=s(7294);const t={},d=n.createContext(t);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);