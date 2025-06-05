import{r as k,a as wd,u as et,b as _d,B as Ed,R as Nd,c as nt}from"./react-vendor-BxbeeCJp.js";import{X as He,L as ic,S as xr,B as Ui,a as Bi,H as zi,M as ac,F as oc,b as lc,c as yn,C as So,d as Jt,A as ti,U as cc,e as jo,f as uc,g as Gs,E as Id,h as hc,i as Td,j as dc,k as fc,l as Sd,m as gi,n as $i,o as dt,P as Be,p as jd,q as Ks,r as mc,s as Ad,t as kd,u as Rd,v as fe,w as Ao,x as Cd,V as pc,y as Pd,z as Dd,D as ko,G as xi,I as Od,J as Vd,K as Md,T as Ld,N as Ro,O as gc,Q as Fd,R as Ud,Z as Bd,W as zd,Y as Co,_ as $d,$ as Hd,a0 as Wd,a1 as qd,a2 as Gd}from"./ui-BrEyNyZq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var xc={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=k,Qd=Symbol.for("react.element"),Jd=Symbol.for("react.fragment"),Xd=Object.prototype.hasOwnProperty,Yd=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function yc(n,e,t){var s,r={},o=null,l=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(s in e)Xd.call(e,s)&&!Zd.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Qd,type:n,key:o,ref:l,props:r,_owner:Yd.current}}yr.Fragment=Jd;yr.jsx=yc;yr.jsxs=yc;xc.exports=yr;var i=xc.exports,vc,Po=wd;vc=Po.createRoot,Po.hydrateRoot;const ef=({items:n})=>{const e=et(),t=_d();return i.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-background",children:i.jsx("div",{className:"max-w-md mx-auto px-4",children:i.jsx("div",{className:"flex justify-between py-2",children:n.map(s=>{const r=t.pathname===s.path,o=s.icon;return i.jsxs("button",{onClick:()=>e(s.path),className:`flex flex-col items-center p-2 rounded-lg transition-colors font-semibold text-xs tracking-wide ${r?"text-primary":"text-text/80 hover:text-primary"}`,children:[i.jsx(o,{className:"w-6 h-6"}),i.jsx("span",{className:"text-xs mt-1",children:s.label})]},s.path)})})})})},tf=({isOpen:n,onClose:e})=>{const t=et(),s=[{icon:xr,label:"Einstellungen",path:"/settings"},{icon:Ui,label:"Benachrichtigungen",path:"/notifications"},{icon:Bi,label:"Datenschutz",path:"/privacy"},{icon:zi,label:"Hilfe & Support",path:"/help"}];return n?i.jsx("div",{className:"fixed inset-0 bg-black/50 z-50",children:i.jsxs("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg",children:[i.jsxs("div",{className:"p-4 flex justify-between items-center border-b",children:[i.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Menü"}),i.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(He,{className:"w-6 h-6 text-gray-600"})})]}),i.jsxs("div",{className:"p-4",children:[i.jsxs("button",{onClick:()=>{t("/profile"),e()},className:"flex items-center gap-4 p-4 bg-gray-100 rounded-xl mb-6 w-full hover:bg-gray-200 transition-colors",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100",alt:"Profile",className:"w-16 h-16 rounded-full object-cover"}),i.jsxs("div",{className:"text-left",children:[i.jsx("h3",{className:"font-bold text-gray-900",children:"Junis Ba"}),i.jsx("p",{className:"text-sm text-gray-600",children:"junis.ba@example.com"})]})]}),i.jsx("div",{className:"space-y-2",children:s.map(r=>{const o=r.icon;return i.jsxs("button",{onClick:()=>{t(r.path),e()},className:"w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors",children:[i.jsx(o,{className:"w-5 h-5 text-gray-600"}),i.jsx("span",{className:"text-gray-900",children:r.label})]},r.label)})}),i.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t",children:i.jsxs("button",{onClick:()=>{e()},className:"w-full flex items-center justify-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors",children:[i.jsx(ic,{className:"w-5 h-5"}),i.jsx("span",{children:"Abmelden"})]})})]})]})}):null};function nf({isOpen:n,onClose:e}){const[t,s]=k.useState(!1),[r,o]=k.useState(!1),[l,u]=k.useState(!1),[d,f]=k.useState(!1),[y,_]=k.useState(""),[T,j]=k.useState({notes:""}),[S,C]=k.useState([]),[R,P]=k.useState(!1),[M,U]=k.useState(""),z=k.useRef(null);if(!n)return null;const K=()=>{if(!("webkitSpeechRecognition"in window||"SpeechRecognition"in window)){alert("Spracherkennung wird von deinem Browser nicht unterstützt.");return}const g=window.SpeechRecognition||window.webkitSpeechRecognition,v=new g;v.lang="de-DE",v.continuous=!0,v.interimResults=!0,v.onresult=w=>{let E="",x="";for(let Q=0;Q<w.results.length;++Q)w.results[Q].isFinal?x+=w.results[Q][0].transcript:E+=w.results[Q][0].transcript;_(x+E)},v.onend=()=>f(!1),z.current=v,v.start(),f(!0)},$=()=>{z.current&&(z.current.stop(),z.current=null),f(!1)},b=()=>{const g={id:Date.now().toString(),date:new Date().toISOString(),stressLevel:5,mood:50,energyLevel:50,location:"",timeOfDay:"",triggers:[],physicalSymptoms:[],emotions:[],thoughts:[],copingStrategies:[],strategyEffectiveness:3,satisfactionLevel:3,gratitude:"",notes:y};C(v=>[g,...v]),u(!1),_("")},p=()=>{const g={id:Date.now().toString(),date:new Date().toISOString(),stressLevel:5,mood:50,energyLevel:50,location:"",timeOfDay:"",triggers:[],physicalSymptoms:[],emotions:[],thoughts:[],copingStrategies:[],strategyEffectiveness:3,satisfactionLevel:3,gratitude:"",notes:T.notes||""};C(v=>[g,...v]),o(!1),j({notes:""})};return i.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative",children:[i.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h2",{className:"text-2xl font-bold mb-6 text-text text-center",children:"Neues mentales Tagebuch"}),r?i.jsxs("div",{className:"bg-card rounded-3xl p-6 mb-6",children:[i.jsx("h3",{className:"text-lg font-semibold mb-4 text-text",children:"Detaillierter Eintrag"}),i.jsx("textarea",{value:T.notes,onChange:g=>j(v=>({...v,notes:g.target.value})),placeholder:"Wie war dein Tag? Schreibe hier deine Gedanken, Gefühle oder Erlebnisse auf...",className:"w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text"}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>o(!1),className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all",children:"Abbrechen"}),i.jsxs("button",{onClick:p,className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all",children:[i.jsx(yn,{className:"w-5 h-5"}),"Speichern"]})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex flex-col gap-6 mb-8",children:[i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-journalgreen relative overflow-hidden min-h-[110px]",onClick:()=>u(!0),children:[i.jsx(ac,{className:"w-20 h-20 text-white/30 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Sprach-Tagebuch"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]}),i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-yellow-300/80 relative overflow-hidden min-h-[110px]",onClick:()=>P(!0),children:[i.jsx(oc,{className:"w-20 h-20 text-yellow-400/40 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Text-Tagebuch"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]}),i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-red-400/80 relative overflow-hidden min-h-[110px]",onClick:()=>o(!0),children:[i.jsx(lc,{className:"w-20 h-20 text-red-200/40 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Detaillierter Eintrag"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]})]}),i.jsx("button",{className:"w-full bg-secondary text-text rounded-3xl p-4 font-medium border-2 border-transparent hover:border-primary transition-all mb-2",onClick:()=>s(!0),children:"Meine Einträge"})]}),t&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>s(!1),className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Meine Einträge"}),S.length===0&&i.jsx("p",{className:"text-text/70",children:"Noch keine Einträge."}),S.map(g=>i.jsxs("div",{className:"bg-card rounded-xl p-4 mb-4",children:[i.jsx("div",{className:"text-xs text-text/70 mb-2",children:new Date(g.date).toLocaleString()}),i.jsx("div",{className:"text-text whitespace-pre-line",children:g.notes})]},g.id))]})}),l&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>{u(!1),f(!1),_("")},className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Sprachaufnahme"}),i.jsxs("div",{className:"mb-4",children:[i.jsx("button",{onClick:d?$:K,className:`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all mb-4 ${d?"bg-red-500 text-white":"bg-primary text-white hover:bg-primary/90"}`,children:d?"Stopp":"Aufnahme starten"}),i.jsx("div",{className:"bg-muted/30 rounded-xl p-4 min-h-[80px] text-text",children:y||"Sprich jetzt, um Text zu transkribieren..."})]}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>{u(!1),f(!1),_("")},className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all",children:"Abbrechen"}),i.jsxs("button",{onClick:b,className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all",disabled:!y,children:[i.jsx(yn,{className:"w-5 h-5"}),"Speichern"]})]})]})}),R&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>{P(!1),U("")},className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Text-Tagebuch"}),i.jsx("textarea",{value:M,onChange:g=>U(g.target.value),placeholder:"Schreibe hier deinen Eintrag...",className:"w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text mb-4"}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>{P(!1),U("")},className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all",children:"Abbrechen"}),i.jsxs("button",{onClick:()=>{const g={id:Date.now().toString(),date:new Date().toISOString(),stressLevel:5,mood:50,energyLevel:50,location:"",timeOfDay:"",triggers:[],physicalSymptoms:[],emotions:[],thoughts:[],copingStrategies:[],strategyEffectiveness:3,satisfactionLevel:3,gratitude:"",notes:M};C(v=>[g,...v]),P(!1),U("")},className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all",disabled:!M.trim(),children:[i.jsx(yn,{className:"w-5 h-5"}),"Speichern"]})]})]})})]})})}const sf=({isOpen:n,onClose:e})=>{const[t,s]=k.useState(null),[r,o]=k.useState(new Set),l=d=>{const f=new Set(r);f.has(d)?f.delete(d):f.add(d),o(f)},u={"Grundlagen des Stressmanagements":{"Was ist Stress?":[{fact:"Stress ist eine natürliche körperliche Reaktion auf Herausforderungen",example:"Vor einem wichtigen Vortrag spürt man Herzklopfen und feuchte Hände - das ist eine normale Stressreaktion, die uns auf Höchstleistung vorbereitet.",strategy:"Akzeptieren Sie diese Reaktionen als normal und nutzen Sie die erhöhte Energie positiv, z.B. durch tiefes Durchatmen und positive Selbstgespräche."},{fact:"Das Stresshormon Cortisol spielt eine wichtige Rolle",example:"Morgendlicher Termindruck führt zu erhöhtem Cortisolspiegel, was sich in Unruhe und Konzentrationsschwierigkeiten äußern kann.",strategy:"Planen Sie bewusst Pausen ein und nutzen Sie Entspannungsübungen wie die 4-7-8-Atemtechnik: 4 Sekunden einatmen, 7 Sekunden halten, 8 Sekunden ausatmen."},{fact:"Es gibt positiven (Eustress) und negativen Stress (Disstress)",example:"Eustress: Die Vorfreude auf den Urlaub. Disstress: Ständige Überlastung im Job ohne Ausgleich.",strategy:"Führen Sie ein Stresstagebuch und unterscheiden Sie zwischen motivierendem und belastendem Stress. Nutzen Sie Eustress als Motivator und entwickeln Sie Strategien für Disstress."},{fact:"Stressreaktionen aktivieren das sympathische Nervensystem",example:"In stressigen Situationen steigen Puls und Blutdruck, die Muskulatur spannt sich an - der Körper geht in 'Kampf-oder-Flucht'-Modus.",strategy:"Aktivieren Sie bewusst das parasympathische Nervensystem durch Progressive Muskelentspannung: Spannen Sie verschiedene Muskelgruppen für 5-7 Sekunden an und entspannen Sie sie dann für 30 Sekunden."},{fact:"Chronischer Stress kann gesundheitliche Folgen haben",example:"Dauerstress im Job führt zu Schlafstörungen, Kopfschmerzen und einem geschwächten Immunsystem.",strategy:"Etablieren Sie tägliche Entspannungsrituale: 10 Minuten Meditation am Morgen, Mittagspause ohne Handy, abendliche Achtsamkeitsübungen."},{fact:"Jeder Mensch reagiert unterschiedlich auf Stressoren",example:"Während Person A in Prüfungssituationen gelassen bleibt, reagiert Person B mit starker Nervosität.",strategy:"Entwickeln Sie Ihr persönliches Stress-Profil: Notieren Sie Ihre typischen Stressauslöser, Reaktionen und erfolgreiche Bewältigungsstrategien."}]},"Kognitive Stressbewältigung":{"Gedanken und Stress":[{fact:"Gedanken beeinflussen direkt unser Stressempfinden",example:"Der Gedanke 'Ich schaffe das nie' verstärkt Stress, während 'Ich gehe es Schritt für Schritt an' beruhigend wirkt.",strategy:"Üben Sie positives Reframing: Formulieren Sie stressende Gedanken um in konstruktive Aussagen. Aus 'Das ist zu viel' wird 'Ich priorisiere und konzentriere mich auf das Wichtigste'."},{fact:"Negative Denkmuster können Stress verstärken",example:"Katastrophendenken wie 'Wenn ich diesen Termin verpasse, verliere ich meinen Job' führt zu unnötigem Stress.",strategy:"Wenden Sie die 3-Spalten-Technik an: Situation | negativer Gedanke | realistischere Alternative. Überprüfen Sie Ihre Gedanken auf ihren Realitätsgehalt."},{fact:"Kognitive Umstrukturierung hilft bei der Stressbewältigung",example:"Statt 'Ich muss perfekt sein' denken Sie 'Ich gebe mein Bestes und das ist gut genug'.",strategy:"Identifizieren Sie Ihre 'Muss-Gedanken' und ersetzen Sie sie durch flexiblere 'Kann-Gedanken'. Üben Sie dies täglich mit kleinen Situationen."},{fact:"Selbstgespräche haben Einfluss auf unsere Stressreaktion",example:"Innere Dialoge wie 'Ruhig bleiben, du hast das schon oft geschafft' können Stress reduzieren.",strategy:"Entwickeln Sie unterstützende Mantras für stressige Situationen. Sprechen Sie in Stressmomenten bewusst beruhigend mit sich selbst."},{fact:"Perspektivwechsel kann Stress reduzieren",example:"Eine Präsentation als Chance zur persönlichen Entwicklung statt als Bedrohung sehen.",strategy:"Üben Sie die 'Zukunfts-Perspektive': Fragen Sie sich 'Wie wichtig wird diese Situation in einem Jahr sein?' oder 'Was kann ich daraus lernen?'"}]},"Physische Stressbewältigung":{"Körper und Stress":[{fact:"Körperliche Aktivität reduziert Stresshormone",example:"30 Minuten zügiges Gehen nach einem stressigen Meeting hilft, Anspannung abzubauen.",strategy:"Bauen Sie 'Bewegungs-Snacks' in Ihren Alltag ein: Treppe statt Aufzug, Spaziergang in der Mittagspause, 5 Minuten Stretching zwischen Meetings."},{fact:"Regelmäßige Bewegung stärkt die Stressresistenz",example:"Menschen, die 3x wöchentlich Sport treiben, berichten von besserer Stresstoleranz.",strategy:"Erstellen Sie einen Wochenplan mit festen Bewegungszeiten. Kombinieren Sie verschiedene Aktivitäten: Ausdauer, Kraft und Entspannung."},{fact:"Entspannungstechniken aktivieren den Parasympathikus",example:"10 Minuten bewusstes Atmen senkt nachweislich Herzfrequenz und Blutdruck.",strategy:"Lernen Sie die 'Box-Breathing'-Technik: 4 Sekunden einatmen, 4 Sekunden halten, 4 Sekunden ausatmen, 4 Sekunden Pause. Wiederholen Sie dies 5-10 Mal."},{fact:"Atmung beeinflusst direkt unser Nervensystem",example:"Flache, schnelle Atmung verstärkt Stress, tiefe Bauchatmung beruhigt.",strategy:"Üben Sie die 'Drei-Minuten-Atemraum'-Meditation: 1. Minute Wahrnehmung, 2. Minute Fokus auf Atmung, 3. Minute Körperempfindungen spüren."},{fact:"Progressive Muskelentspannung löst körperliche Anspannung",example:"Gezielte An- und Entspannung der Schultern löst Verspannungen durch Bildschirmarbeit.",strategy:"Führen Sie 2x täglich eine 'Mini-PMR' durch: Spannen Sie nacheinander Hände, Arme, Schultern, Gesicht für je 5 Sekunden an und lassen Sie dann los."}]}};return n?i.jsx("div",{className:"fixed inset-0 bg-black/50 z-50",children:i.jsxs("div",{className:"fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-lg",children:[i.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[i.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Wichtige Erkenntnisse & Strategien"}),i.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(He,{className:"w-6 h-6 text-gray-600"})})]}),i.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(100vh-5rem)]",children:Object.entries(u).map(([d,f])=>i.jsxs("div",{className:"mb-8",children:[i.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 flex items-center gap-2",onClick:()=>s(t===d?null:d),children:[t===d?i.jsx(So,{className:"w-5 h-5"}):i.jsx(Jt,{className:"w-5 h-5"}),d]}),t===d&&Object.entries(f).map(([y,_])=>i.jsxs("div",{className:"mb-6 ml-4",children:[i.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:y}),i.jsx("div",{className:"space-y-4",children:_.map((T,j)=>{const S=`${d}-${y}-${j}`,C=r.has(S);return i.jsx("div",{className:"bg-white rounded-xl border p-4",children:i.jsxs("div",{className:"flex items-start gap-3 cursor-pointer",onClick:()=>l(S),children:[i.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5",children:i.jsx("span",{className:"text-sm text-blue-600 font-medium",children:j+1})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:"text-gray-900 font-medium",children:T.fact}),C&&i.jsxs("div",{className:"mt-4 space-y-4",children:[i.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[i.jsx("p",{className:"text-sm font-medium text-yellow-800 mb-2",children:"Beispiel:"}),i.jsx("p",{className:"text-sm text-yellow-700",children:T.example})]}),i.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[i.jsx("p",{className:"text-sm font-medium text-green-800 mb-2",children:"Anwendungsstrategie:"}),i.jsx("p",{className:"text-sm text-green-700",children:T.strategy})]})]})]}),C?i.jsx(So,{className:"w-5 h-5 text-gray-400"}):i.jsx(Jt,{className:"w-5 h-5 text-gray-400"})]})},j)})})]},y))]},d))})]})}):null},rf=()=>{};var Do={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},af=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],l=n[t++],u=n[t++],d=((r&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],l=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],l=r+1<n.length,u=l?n[r+1]:0,d=r+2<n.length,f=d?n[r+2]:0,y=o>>2,_=(o&3)<<4|u>>4;let T=(u&15)<<2|f>>6,j=f&63;d||(j=64,l||(T=64)),s.push(t[y],t[_],t[T],t[j])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):af(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],u=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||u==null||f==null||_==null)throw new of;const T=o<<2|u>>4;if(s.push(T),f!==64){const j=u<<4&240|f>>2;if(s.push(j),_!==64){const S=f<<6&192|_;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class of extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lf=function(n){const e=bc(n);return wc.encodeByteArray(e,!0)},Qs=function(n){return lf(n).replace(/\./g,"")},_c=function(n){try{return wc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=()=>cf().__FIREBASE_DEFAULTS__,hf=()=>{if(typeof process>"u"||typeof Do>"u")return;const n=Do.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},df=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_c(n[1]);return e&&JSON.parse(e)},vr=()=>{try{return rf()||uf()||hf()||df()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ec=n=>{var e,t;return(t=(e=vr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ff=n=>{const e=Ec(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Nc=()=>{var n;return(n=vr())===null||n===void 0?void 0:n.config},Ic=n=>{var e;return(e=vr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qs(JSON.stringify(t)),Qs(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function xf(){var n;const e=(n=vr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bf(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wf(){return!xf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sc(){try{return typeof indexedDB=="object"}catch{return!1}}function jc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function _f(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="FirebaseError";class tt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ef,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],l=o?Nf(o,s):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new tt(r,u,s)}}function Nf(n,e){return n.replace(If,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const If=/\{\$([^}]+)}/g;function Tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],l=e[r];if(Oo(o)&&Oo(l)){if(!Dt(o,l))return!1}else if(o!==l)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Oo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sf(n,e){const t=new jf(n,e);return t.subscribe.bind(t)}class jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Af(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=ni),r.error===void 0&&(r.error=ni),r.complete===void 0&&(r.complete=ni);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Af(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ni(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=1e3,Rf=2,Cf=4*60*60*1e3,Pf=.5;function Vo(n,e=kf,t=Rf){const s=e*Math.pow(t,n),r=Math.round(Pf*s*(Math.random()-.5)*2);return Math.min(Cf,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new mf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vf(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);s===u&&l.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const l=this.instances.get(r);return l&&e(l,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Of(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Of(n){return n===Wt?void 0:n}function Vf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Df(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Lf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Ff=Y.INFO,Uf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Bf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Uf[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=Ff,this._logHandler=Bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const zf=(n,e)=>e.some(t=>n instanceof t);let Mo,Lo;function $f(){return Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hf(){return Lo||(Lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,yi=new WeakMap,kc=new WeakMap,si=new WeakMap,Hi=new WeakMap;function Wf(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(Rt(n.result)),r()},l=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Ac.set(t,n)}).catch(()=>{}),Hi.set(e,n),e}function qf(n){if(yi.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),r()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});yi.set(n,e)}let vi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gf(n){vi=n(vi)}function Kf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ri(this),e,...t);return kc.set(s,e.sort?e.sort():[e]),Rt(s)}:Hf().includes(n)?function(...e){return n.apply(ri(this),e),Rt(Ac.get(this))}:function(...e){return Rt(n.apply(ri(this),e))}}function Qf(n){return typeof n=="function"?Kf(n):(n instanceof IDBTransaction&&qf(n),zf(n,$f())?new Proxy(n,vi):n)}function Rt(n){if(n instanceof IDBRequest)return Wf(n);if(si.has(n))return si.get(n);const e=Qf(n);return e!==n&&(si.set(n,e),Hi.set(e,n)),e}const ri=n=>Hi.get(n);function Rc(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const l=indexedDB.open(n,e),u=Rt(l);return s&&l.addEventListener("upgradeneeded",d=>{s(Rt(l.result),d.oldVersion,d.newVersion,Rt(l.transaction),d)}),t&&l.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Jf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],ii=new Map;function Fo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Xf.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jf.includes(t)))return;const o=async function(l,...u){const d=this.transaction(l,r?"readwrite":"readonly");let f=d.store;return s&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),r&&d.done]))[0]};return ii.set(e,o),o}Gf(n=>({...n,get:(e,t,s)=>Fo(e,t)||n.get(e,t,s),has:(e,t)=>!!Fo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Zf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",Uo="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new br("@firebase/app"),em="@firebase/app-compat",tm="@firebase/analytics-compat",nm="@firebase/analytics",sm="@firebase/app-check-compat",rm="@firebase/app-check",im="@firebase/auth",am="@firebase/auth-compat",om="@firebase/database",lm="@firebase/data-connect",cm="@firebase/database-compat",um="@firebase/functions",hm="@firebase/functions-compat",dm="@firebase/installations",fm="@firebase/installations-compat",mm="@firebase/messaging",pm="@firebase/messaging-compat",gm="@firebase/performance",xm="@firebase/performance-compat",ym="@firebase/remote-config",vm="@firebase/remote-config-compat",bm="@firebase/storage",wm="@firebase/storage-compat",_m="@firebase/firestore",Em="@firebase/vertexai",Nm="@firebase/firestore-compat",Im="firebase",Tm="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",Sm={[bi]:"fire-core",[em]:"fire-core-compat",[nm]:"fire-analytics",[tm]:"fire-analytics-compat",[rm]:"fire-app-check",[sm]:"fire-app-check-compat",[im]:"fire-auth",[am]:"fire-auth-compat",[om]:"fire-rtdb",[lm]:"fire-data-connect",[cm]:"fire-rtdb-compat",[um]:"fire-fn",[hm]:"fire-fn-compat",[dm]:"fire-iid",[fm]:"fire-iid-compat",[mm]:"fire-fcm",[pm]:"fire-fcm-compat",[gm]:"fire-perf",[xm]:"fire-perf-compat",[ym]:"fire-rc",[vm]:"fire-rc-compat",[bm]:"fire-gcs",[wm]:"fire-gcs-compat",[_m]:"fire-fst",[Nm]:"fire-fst-compat",[Em]:"fire-vertex","fire-js":"fire-js",[Im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map,jm=new Map,_i=new Map;function Bo(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function at(n){const e=n.name;if(_i.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,n);for(const t of Js.values())Bo(t,n);for(const t of jm.values())Bo(t,n);return!0}function on(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new an("app","Firebase",Am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=Tm;function Cc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(t||(t=Nc()),!t)throw Ct.create("no-options");const o=Js.get(r);if(o){if(Dt(t,o.options)&&Dt(s,o.config))return o;throw Ct.create("duplicate-app",{appName:r})}const l=new Mf(r);for(const d of _i.values())l.addComponent(d);const u=new km(t,s,l);return Js.set(r,u),u}function Wi(n=wi){const e=Js.get(n);if(!e&&n===wi&&Nc())return Cc();if(!e)throw Ct.create("no-app",{appName:n});return e}function We(n,e,t){var s;let r=(s=Sm[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(u.join(" "));return}at(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firebase-heartbeat-database",Cm=1,Zn="firebase-heartbeat-store";let ai=null;function Pc(){return ai||(ai=Rc(Rm,Cm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),ai}async function Pm(n){try{const t=(await Pc()).transaction(Zn),s=await t.objectStore(Zn).get(Dc(n));return await t.done,s}catch(e){if(e instanceof tt)xt.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function zo(n,e){try{const s=(await Pc()).transaction(Zn,"readwrite");await s.objectStore(Zn).put(e,Dc(n)),await s.done}catch(t){if(t instanceof tt)xt.warn(t.message);else{const s=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(s.message)}}}function Dc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1024,Om=30;class Vm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$o();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>Om){const l=Fm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$o(),{heartbeatsToSend:s,unsentEntries:r}=Mm(this._heartbeatsCache.heartbeats),o=Qs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return xt.warn(t),""}}}function $o(){return new Date().toISOString().substring(0,10)}function Mm(n,e=Dm){const t=[];let s=n.slice();for(const r of n){const o=t.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),Ho(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ho(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sc()?jc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return zo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return zo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ho(n){return Qs(JSON.stringify({version:2,heartbeats:n})).length}function Fm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n){at(new Ze("platform-logger",e=>new Yf(e),"PRIVATE")),at(new Ze("heartbeat",e=>new Vm(e),"PRIVATE")),We(bi,Uo,n),We(bi,Uo,"esm2017"),We("fire-js","")}Um("");function qi(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Oc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bm=Oc,Vc=new an("auth","Firebase",Oc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new br("@firebase/auth");function zm(n,...e){Xs.logLevel<=Y.WARN&&Xs.warn(`Auth (${jn}): ${n}`,...e)}function Fs(n,...e){Xs.logLevel<=Y.ERROR&&Xs.error(`Auth (${jn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,...e){throw Gi(n,...e)}function rt(n,...e){return Gi(n,...e)}function Mc(n,e,t){const s=Object.assign(Object.assign({},Bm()),{[e]:t});return new an("auth","Firebase",s).create(e,{appName:n.name})}function Pt(n){return Mc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Vc.create(n,...e)}function H(n,e,...t){if(!n)throw Gi(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function vt(n,e){n||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $m(){return Wo()==="http:"||Wo()==="https:"}function Wo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($m()||Tc()||"connection"in navigator)?navigator.onLine:!0}function Wm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=gf()||vf()}get(){return Hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Km=new ls(3e4,6e4);function cs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ln(n,e,t,s,r={}){return Fc(n,r,async()=>{let o={},l={};s&&(e==="GET"?l=s:o={body:JSON.stringify(s)});const u=os(Object.assign({key:n.config.apiKey},l)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:d},o);return yf()||(f.referrerPolicy="no-referrer"),Lc.fetch()(await Bc(n,n.config.apiHost,t,u),f)})}async function Fc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},qm),e);try{const r=new Jm(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Ps(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[d,f]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(n,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw Ps(n,"email-already-in-use",l);if(d==="USER_DISABLED")throw Ps(n,"user-disabled",l);const y=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Mc(n,y,f);yt(n,y)}}catch(r){if(r instanceof tt)throw r;yt(n,"network-request-failed",{message:String(r)})}}async function Uc(n,e,t,s,r={}){const o=await ln(n,e,t,s,r);return"mfaPendingCredential"in o&&yt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Bc(n,e,t,s){const r=`${e}${t}?${s}`,o=n,l=o.config.emulator?Ki(n.config,r):`${n.config.apiScheme}://${r}`;return Gm.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}function Qm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rt(this.auth,"network-request-failed")),Km.get())})}}function Ps(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=rt(n,e,s);return r.customData._tokenResponse=t,r}function qo(n){return n!==void 0&&n.enterprise!==void 0}class Xm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ym(n,e){return ln(n,"GET","/v2/recaptchaConfig",cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e){return ln(n,"POST","/v1/accounts:delete",e)}async function Ys(n,e){return ln(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ep(n,e=!1){const t=$e(n),s=await t.getIdToken(e),r=Qi(s);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:Gn(oi(r.auth_time)),issuedAtTime:Gn(oi(r.iat)),expirationTime:Gn(oi(r.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function oi(n){return Number(n)*1e3}function Qi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const r=_c(t);return r?JSON.parse(r):(Fs("Failed to decode base64 JWT payload"),null)}catch(r){return Fs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Go(n){const e=Qi(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof tt&&tp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){var e;const t=n.auth,s=await n.getIdToken(),r=await es(n,Ys(t,{idToken:s}));H(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?zc(o.providerUserInfo):[],u=rp(n.providerData,l),d=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),y=d?f:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ni(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,_)}async function sp(n){const e=$e(n);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rp(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zc(n){return n.map(e=>{var{providerId:t}=e,s=qi(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(n,e){const t=await Fc(n,{},async()=>{const s=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,l=await Bc(n,r,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Lc.fetch()(l,{method:"POST",headers:u,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ap(n,e){return ln(n,"POST","/v2/accounts:revokeToken",cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Go(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Go(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:o}=await ip(e,t);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:o}=t,l=new vn;return s&&(H(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),o&&(H(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,o=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ni(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await es(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ep(this,e)}reload(){return sp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await es(this,Zm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,o,l,u,d,f,y;const _=(s=t.displayName)!==null&&s!==void 0?s:void 0,T=(r=t.email)!==null&&r!==void 0?r:void 0,j=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,S=(l=t.photoURL)!==null&&l!==void 0?l:void 0,C=(u=t.tenantId)!==null&&u!==void 0?u:void 0,R=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,P=(f=t.createdAt)!==null&&f!==void 0?f:void 0,M=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:U,emailVerified:z,isAnonymous:K,providerData:$,stsTokenManager:b}=t;H(U&&b,e,"internal-error");const p=vn.fromJSON(this.name,b);H(typeof U=="string",e,"internal-error"),It(_,e.name),It(T,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof K=="boolean",e,"internal-error"),It(j,e.name),It(S,e.name),It(C,e.name),It(R,e.name),It(P,e.name),It(M,e.name);const g=new Xe({uid:U,auth:e,email:T,emailVerified:z,displayName:_,isAnonymous:K,photoURL:S,phoneNumber:j,tenantId:C,stsTokenManager:p,createdAt:P,lastLoginAt:M});return $&&Array.isArray($)&&(g.providerData=$.map(v=>Object.assign({},v))),R&&(g._redirectEventId=R),g}static async _fromIdTokenResponse(e,t,s=!1){const r=new vn;r.updateFromServerResponse(t);const o=new Xe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zs(o),o}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];H(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?zc(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),u=new vn;u.updateFromIdToken(s);const d=new Xe({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ni(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Map;function mt(n){vt(n instanceof Function,"Expected a class definition");let e=Ko.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ko.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$c.type="NONE";const Qo=$c;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e,t){return`firebase:${n}:${e}:${t}`}class bn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=Us(this.userKey,r.apiKey,o),this.fullPersistenceKey=Us("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ys(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new bn(mt(Qo),e,s);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||mt(Qo);const l=Us(s,e.config.apiKey,e.name);let u=null;for(const f of t)try{const y=await f._get(l);if(y){let _;if(typeof y=="string"){const T=await Ys(e,{idToken:y}).catch(()=>{});if(!T)break;_=await Xe._fromGetAccountInfoResponse(e,T,y)}else _=Xe._fromJSON(e,y);f!==o&&(u=_),o=f;break}}catch{}const d=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new bn(o,e,s):(o=d[0],u&&await o._set(l,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new bn(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qc(e))return"Blackberry";if(Jc(e))return"Webos";if(Wc(e))return"Safari";if((e.includes("chrome/")||qc(e))&&!e.includes("edge/"))return"Chrome";if(Kc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hc(n=De()){return/firefox\//i.test(n)}function Wc(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qc(n=De()){return/crios\//i.test(n)}function Gc(n=De()){return/iemobile/i.test(n)}function Kc(n=De()){return/android/i.test(n)}function Qc(n=De()){return/blackberry/i.test(n)}function Jc(n=De()){return/webos/i.test(n)}function Ji(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function op(n=De()){var e;return Ji(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lp(){return bf()&&document.documentMode===10}function Xc(n=De()){return Ji(n)||Kc(n)||Jc(n)||Qc(n)||/windows phone/i.test(n)||Gc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n,e=[]){let t;switch(n){case"Browser":t=Jo(De());break;case"Worker":t=`${Jo(De())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=o=>new Promise((l,u)=>{try{const d=e(o);l(d)}catch(d){u(d)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e={}){return ln(n,"GET","/v2/passwordPolicy",cs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=6;class dp{constructor(e){var t,s,r,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:hp,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,o,l,u;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(s=d.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(r=d.containsLowercaseLetter)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(u=d.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),d}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xo(this),this.idTokenSubscription=new Xo(this),this.beforeStateQueue=new cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var s,r,o;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ys(this,{idToken:e}),s=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&(d!=null&&d.user)&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(Pt(this));const t=e?$e(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await up(this),t=new dp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ap(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,s,r);return()=>{l=!0,d()}}else{const d=e.addObserver(t);return()=>{l=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function An(n){return $e(n)}class Xo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sf(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mp(n){wr=n}function Zc(n){return wr.loadJS(n)}function pp(){return wr.recaptchaEnterpriseScript}function gp(){return wr.gapiScript}function xp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yp{constructor(){this.enterprise=new vp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bp="recaptcha-enterprise",eu="NO_RECAPTCHA";class wp{constructor(e){this.type=bp,this.auth=An(e)}async verify(e="verify",t=!1){async function s(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{Ym(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new Xm(d);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,l(f.siteKey)}}).catch(d=>{u(d)})})}function r(o,l,u){const d=window.grecaptcha;qo(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(f=>{l(f)}).catch(()=>{l(eu)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yp().execute("siteKey",{action:"verify"}):new Promise((o,l)=>{s(this.auth).then(u=>{if(!t&&qo(window.grecaptcha))r(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=pp();d.length!==0&&(d+=u),Zc(d).then(()=>{r(u,o,l)}).catch(f=>{l(f)})}}).catch(u=>{l(u)})})}}async function Yo(n,e,t,s=!1,r=!1){const o=new wp(n);let l;if(r)l=eu;else try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const u=Object.assign({},e);return s?Object.assign(u,{captchaResp:l}):Object.assign(u,{captchaResponse:l}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function _p(n,e,t,s,r){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Yo(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Yo(n,e,t,t==="getOobCode");return s(n,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e){const t=on(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(Dt(o,e??{}))return r;yt(r,"already-initialized")}return t.initialize({options:e})}function Np(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ip(n,e,t){const s=An(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=tu(e),{host:l,port:u}=Tp(e),d=u===null?"":`:${u}`,f={url:`${o}//${l}${d}/`},y=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(Dt(f,s.config.emulator)&&Dt(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Sp()}function tu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tp(n){const e=tu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:Zo(s.substr(o.length+1))}}else{const[o,l]=s.split(":");return{host:o,port:Zo(l)}}}function Zo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,e){return Uc(n,"POST","/v1/accounts:signInWithIdp",cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="http://localhost";class Xt extends nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,o=qi(t,["providerId","signInMethod"]);if(!s||!r)return null;const l=new Xt(s,r);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return wn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,wn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wn(e,t)}buildRequest(){const e={requestUri:jp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=os(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends us{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return jt.credential(t,s)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends us{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends us{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return kt.credential(t,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(n,e){return Uc(n,"POST","/v1/accounts:signUp",cs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const o=await Xe._fromIdTokenResponse(e,s,r),l=el(s);return new Yt({user:o,providerId:l,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=el(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function el(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends tt{constructor(e,t,s,r){var o;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new er(e,t,s,r)}}function ru(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(n,o,e,s):o})}async function kp(n,e,t=!1){const s=await es(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(n,e,t=!1){const{auth:s}=n;if(Qe(s.app))return Promise.reject(Pt(s));const r="reauthenticate";try{const o=await es(n,ru(s,r,e,n),t);H(o.idToken,s,"internal-error");const l=Qi(o.idToken);H(l,s,"internal-error");const{sub:u}=l;return H(n.uid===u,s,"user-mismatch"),Yt._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&yt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e,t=!1){if(Qe(n.app))return Promise.reject(Pt(n));const s="signIn",r=await ru(n,s,e),o=await Yt._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(n){const e=An(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dp(n,e,t){if(Qe(n.app))return Promise.reject(Pt(n));const s=An(n),l=await _p(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ap).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Pp(n),d}),u=await Yt._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(u.user),u}function Op(n,e,t,s){return $e(n).onIdTokenChanged(e,t,s)}function Vp(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function Mp(n,e,t,s){return $e(n).onAuthStateChanged(e,t,s)}const tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=1e3,Fp=10;class au extends iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,d)=>{this.notifyListeners(l,d)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!t&&this.localCache[s]===l||this.notifyListeners(s,l)},o=this.storage.getItem(s);lp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fp):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}au.type="LOCAL";const Up=au;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ou.type="SESSION";const lu=ou;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new _r(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:o}=t.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const u=Array.from(l).map(async f=>f(t.origin,o)),d=await Bp(u);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,l;return new Promise((u,d)=>{const f=Xi("",20);r.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(_){const T=_;if(T.data.eventId===f)switch(T.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(T.data.response);break;default:clearTimeout(y),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function $p(n){it().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function Hp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qp(){return cu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="firebaseLocalStorageDb",Gp=1,nr="firebaseLocalStorage",hu="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Er(n,e){return n.transaction([nr],e?"readwrite":"readonly").objectStore(nr)}function Kp(){const n=indexedDB.deleteDatabase(uu);return new hs(n).toPromise()}function Ii(){const n=indexedDB.open(uu,Gp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(nr,{keyPath:hu})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(nr)?e(s):(s.close(),await Kp(),e(await Ii()))})})}async function tl(n,e,t){const s=Er(n,!0).put({[hu]:e,value:t});return new hs(s).toPromise()}async function Qp(n,e){const t=Er(n,!1).get(e),s=await new hs(t).toPromise();return s===void 0?null:s.value}function nl(n,e){const t=Er(n,!0).delete(e);return new hs(t).toPromise()}const Jp=800,Xp=3;class du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Xp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_r._getInstance(qp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hp(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await tl(e,tr,"1"),await nl(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Qp(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Er(r,!1).getAll();return new hs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}du.type="LOCAL";const Yp=du;new ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n,e){return e?mt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eg(n){return Cp(n.auth,new Yi(n),n.bypassAuthState)}function tg(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Rp(t,new Yi(n),n.bypassAuthState)}async function ng(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),kp(t,new Yi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:t,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eg;case"linkViaPopup":case"linkViaRedirect":return ng;case"reauthViaPopup":case"reauthViaRedirect":return tg;default:yt(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new ls(2e3,1e4);class xn extends fu{constructor(e,t,s,r,o){super(e,t,r,o),this.provider=s,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sg.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="pendingRedirect",Bs=new Map;class ig extends fu{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const s=await ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ag(n,e){const t=cg(e),s=lg(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function og(n,e){Bs.set(n._key(),e)}function lg(n){return mt(n._redirectPersistence)}function cg(n){return Us(rg,n.config.apiKey,n.name)}async function ug(n,e,t=!1){if(Qe(n.app))return Promise.reject(Pt(n));const s=An(n),r=Zp(s,e),l=await new ig(s,r,t).execute();return l&&!t&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=10*60*1e3;class dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!mu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hg&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e={}){return ln(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gg=/^https?/;async function xg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mg(n);for(const t of e)try{if(yg(t))return}catch{}yt(n,"unauthorized-domain")}function yg(n){const e=Ei(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===s}if(!gg.test(t))return!1;if(pg.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new ls(3e4,6e4);function rl(){const n=it().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bg(n){return new Promise((e,t)=>{var s,r,o;function l(){rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rl(),t(rt(n,"network-request-failed"))},timeout:vg.get()})}if(!((r=(s=it().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=it().gapi)===null||o===void 0)&&o.load)l();else{const u=xp("iframefcb");return it()[u]=()=>{gapi.load?l():t(rt(n,"network-request-failed"))},Zc(`${gp()}?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw zs=null,e})}let zs=null;function wg(n){return zs=zs||bg(n),zs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new ls(5e3,15e3),Eg="__/auth/iframe",Ng="emulator/auth/iframe",Ig={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sg(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ki(e,Ng):`https://${n.config.authDomain}/${Eg}`,s={apiKey:e.apiKey,appName:n.name,v:jn},r=Tg.get(n.config.apiHost);r&&(s.eid=r);const o=n._getFrameworks();return o.length&&(s.fw=o.join(",")),`${t}?${os(s).slice(1)}`}async function jg(n){const e=await wg(n),t=it().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Sg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ig,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const l=rt(n,"network-request-failed"),u=it().setTimeout(()=>{o(l)},_g.get());function d(){it().clearTimeout(u),r(s)}s.ping(d).then(d,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kg=500,Rg=600,Cg="_blank",Pg="http://localhost";class il{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dg(n,e,t,s=kg,r=Rg){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let u="";const d=Object.assign(Object.assign({},Ag),{width:s.toString(),height:r.toString(),top:o,left:l}),f=De().toLowerCase();t&&(u=qc(f)?Cg:t),Hc(f)&&(e=e||Pg,d.scrollbars="yes");const y=Object.entries(d).reduce((T,[j,S])=>`${T}${j}=${S},`,"");if(op(f)&&u!=="_self")return Og(e||"",u),new il(null);const _=window.open(e||"",u,y);H(_,n,"popup-blocked");try{_.focus()}catch{}return new il(_)}function Og(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__/auth/handler",Mg="emulator/auth/handler",Lg=encodeURIComponent("fac");async function al(n,e,t,s,r,o){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:jn,eventId:r};if(e instanceof su){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Tf(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))l[y]=_}if(e instanceof us){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const d=await n._getAppCheckToken(),f=d?`#${Lg}=${encodeURIComponent(d)}`:"";return`${Fg(n)}?${os(u).slice(1)}${f}`}function Fg({config:n}){return n.emulator?Ki(n,Mg):`https://${n.authDomain}/${Vg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="webStorageSupport";class Ug{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=ug,this._overrideRedirectResult=og}async _openPopup(e,t,s,r){var o;vt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await al(e,t,s,Ei(),r);return Dg(e,l,Xi())}async _openRedirect(e,t,s,r){await this._originValidation(e);const o=await al(e,t,s,Ei(),r);return $p(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(vt(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jg(e),s=new dg(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(li,{type:li},r=>{var o;const l=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[li];l!==void 0&&t(!!l),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xc()||Wc()||Ji()}}const Bg=Ug;var ol="@firebase/auth",ll="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hg(n){at(new Ze("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=s.options;H(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yc(n)},f=new fp(s,r,o,d);return Np(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),at(new Ze("auth-internal",e=>{const t=An(e.getProvider("auth").getImmediate());return(s=>new zg(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(ol,ll,$g(n)),We(ol,ll,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=5*60,qg=Ic("authIdTokenMaxAge")||Wg;let cl=null;const Gg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>qg)return;const r=t==null?void 0:t.token;cl!==r&&(cl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function pu(n=Wi()){const e=on(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ep(n,{popupRedirectResolver:Bg,persistence:[Yp,Up,lu]}),s=Ic("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const l=Gg(o.toString());Vp(t,l,()=>l(t.currentUser)),Op(t,u=>l(u))}}const r=Ec("auth");return r&&Ip(t,`http://${r}`),t}function Kg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}mp({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const o=rt("internal-error");o.customData=r,t(o)},s.type="text/javascript",s.charset="UTF-8",Kg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hg("Browser");var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,p){function g(){}g.prototype=p.prototype,b.D=p.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(v,w,E){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return p.prototype[w].apply(v,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,p,g){g||(g=0);var v=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)v[w]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(w=0;16>w;++w)v[w]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=b.g[0],g=b.g[1],w=b.g[2];var E=b.g[3],x=p+(E^g&(w^E))+v[0]+3614090360&4294967295;p=g+(x<<7&4294967295|x>>>25),x=E+(w^p&(g^w))+v[1]+3905402710&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(g^E&(p^g))+v[2]+606105819&4294967295,w=E+(x<<17&4294967295|x>>>15),x=g+(p^w&(E^p))+v[3]+3250441966&4294967295,g=w+(x<<22&4294967295|x>>>10),x=p+(E^g&(w^E))+v[4]+4118548399&4294967295,p=g+(x<<7&4294967295|x>>>25),x=E+(w^p&(g^w))+v[5]+1200080426&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(g^E&(p^g))+v[6]+2821735955&4294967295,w=E+(x<<17&4294967295|x>>>15),x=g+(p^w&(E^p))+v[7]+4249261313&4294967295,g=w+(x<<22&4294967295|x>>>10),x=p+(E^g&(w^E))+v[8]+1770035416&4294967295,p=g+(x<<7&4294967295|x>>>25),x=E+(w^p&(g^w))+v[9]+2336552879&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(g^E&(p^g))+v[10]+4294925233&4294967295,w=E+(x<<17&4294967295|x>>>15),x=g+(p^w&(E^p))+v[11]+2304563134&4294967295,g=w+(x<<22&4294967295|x>>>10),x=p+(E^g&(w^E))+v[12]+1804603682&4294967295,p=g+(x<<7&4294967295|x>>>25),x=E+(w^p&(g^w))+v[13]+4254626195&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(g^E&(p^g))+v[14]+2792965006&4294967295,w=E+(x<<17&4294967295|x>>>15),x=g+(p^w&(E^p))+v[15]+1236535329&4294967295,g=w+(x<<22&4294967295|x>>>10),x=p+(w^E&(g^w))+v[1]+4129170786&4294967295,p=g+(x<<5&4294967295|x>>>27),x=E+(g^w&(p^g))+v[6]+3225465664&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^g&(E^p))+v[11]+643717713&4294967295,w=E+(x<<14&4294967295|x>>>18),x=g+(E^p&(w^E))+v[0]+3921069994&4294967295,g=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(g^w))+v[5]+3593408605&4294967295,p=g+(x<<5&4294967295|x>>>27),x=E+(g^w&(p^g))+v[10]+38016083&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^g&(E^p))+v[15]+3634488961&4294967295,w=E+(x<<14&4294967295|x>>>18),x=g+(E^p&(w^E))+v[4]+3889429448&4294967295,g=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(g^w))+v[9]+568446438&4294967295,p=g+(x<<5&4294967295|x>>>27),x=E+(g^w&(p^g))+v[14]+3275163606&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^g&(E^p))+v[3]+4107603335&4294967295,w=E+(x<<14&4294967295|x>>>18),x=g+(E^p&(w^E))+v[8]+1163531501&4294967295,g=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(g^w))+v[13]+2850285829&4294967295,p=g+(x<<5&4294967295|x>>>27),x=E+(g^w&(p^g))+v[2]+4243563512&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^g&(E^p))+v[7]+1735328473&4294967295,w=E+(x<<14&4294967295|x>>>18),x=g+(E^p&(w^E))+v[12]+2368359562&4294967295,g=w+(x<<20&4294967295|x>>>12),x=p+(g^w^E)+v[5]+4294588738&4294967295,p=g+(x<<4&4294967295|x>>>28),x=E+(p^g^w)+v[8]+2272392833&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^g)+v[11]+1839030562&4294967295,w=E+(x<<16&4294967295|x>>>16),x=g+(w^E^p)+v[14]+4259657740&4294967295,g=w+(x<<23&4294967295|x>>>9),x=p+(g^w^E)+v[1]+2763975236&4294967295,p=g+(x<<4&4294967295|x>>>28),x=E+(p^g^w)+v[4]+1272893353&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^g)+v[7]+4139469664&4294967295,w=E+(x<<16&4294967295|x>>>16),x=g+(w^E^p)+v[10]+3200236656&4294967295,g=w+(x<<23&4294967295|x>>>9),x=p+(g^w^E)+v[13]+681279174&4294967295,p=g+(x<<4&4294967295|x>>>28),x=E+(p^g^w)+v[0]+3936430074&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^g)+v[3]+3572445317&4294967295,w=E+(x<<16&4294967295|x>>>16),x=g+(w^E^p)+v[6]+76029189&4294967295,g=w+(x<<23&4294967295|x>>>9),x=p+(g^w^E)+v[9]+3654602809&4294967295,p=g+(x<<4&4294967295|x>>>28),x=E+(p^g^w)+v[12]+3873151461&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^g)+v[15]+530742520&4294967295,w=E+(x<<16&4294967295|x>>>16),x=g+(w^E^p)+v[2]+3299628645&4294967295,g=w+(x<<23&4294967295|x>>>9),x=p+(w^(g|~E))+v[0]+4096336452&4294967295,p=g+(x<<6&4294967295|x>>>26),x=E+(g^(p|~w))+v[7]+1126891415&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~g))+v[14]+2878612391&4294967295,w=E+(x<<15&4294967295|x>>>17),x=g+(E^(w|~p))+v[5]+4237533241&4294967295,g=w+(x<<21&4294967295|x>>>11),x=p+(w^(g|~E))+v[12]+1700485571&4294967295,p=g+(x<<6&4294967295|x>>>26),x=E+(g^(p|~w))+v[3]+2399980690&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~g))+v[10]+4293915773&4294967295,w=E+(x<<15&4294967295|x>>>17),x=g+(E^(w|~p))+v[1]+2240044497&4294967295,g=w+(x<<21&4294967295|x>>>11),x=p+(w^(g|~E))+v[8]+1873313359&4294967295,p=g+(x<<6&4294967295|x>>>26),x=E+(g^(p|~w))+v[15]+4264355552&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~g))+v[6]+2734768916&4294967295,w=E+(x<<15&4294967295|x>>>17),x=g+(E^(w|~p))+v[13]+1309151649&4294967295,g=w+(x<<21&4294967295|x>>>11),x=p+(w^(g|~E))+v[4]+4149444226&4294967295,p=g+(x<<6&4294967295|x>>>26),x=E+(g^(p|~w))+v[11]+3174756917&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~g))+v[2]+718787259&4294967295,w=E+(x<<15&4294967295|x>>>17),x=g+(E^(w|~p))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+p&4294967295,b.g[1]=b.g[1]+(w+(x<<21&4294967295|x>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+E&4294967295}s.prototype.u=function(b,p){p===void 0&&(p=b.length);for(var g=p-this.blockSize,v=this.B,w=this.h,E=0;E<p;){if(w==0)for(;E<=g;)r(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<p;)if(v[w++]=b.charCodeAt(E++),w==this.blockSize){r(this,v),w=0;break}}else for(;E<p;)if(v[w++]=b[E++],w==this.blockSize){r(this,v),w=0;break}}this.h=w,this.o+=p},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var p=1;p<b.length-8;++p)b[p]=0;var g=8*this.o;for(p=b.length-8;p<b.length;++p)b[p]=g&255,g/=256;for(this.u(b),b=Array(16),p=g=0;4>p;++p)for(var v=0;32>v;v+=8)b[g++]=this.g[p]>>>v&255;return b};function o(b,p){var g=u;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=p(b)}function l(b,p){this.h=p;for(var g=[],v=!0,w=b.length-1;0<=w;w--){var E=b[w]|0;v&&E==p||(g[w]=E,v=!1)}this.g=g}var u={};function d(b){return-128<=b&&128>b?o(b,function(p){return new l([p|0],0>p?-1:0)}):new l([b|0],0>b?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return _;if(0>b)return R(f(-b));for(var p=[],g=1,v=0;b>=g;v++)p[v]=b/g|0,g*=4294967296;return new l(p,0)}function y(b,p){if(b.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(b.charAt(0)=="-")return R(y(b.substring(1),p));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),v=_,w=0;w<b.length;w+=8){var E=Math.min(8,b.length-w),x=parseInt(b.substring(w,w+E),p);8>E?(E=f(Math.pow(p,E)),v=v.j(E).add(f(x))):(v=v.j(g),v=v.add(f(x)))}return v}var _=d(0),T=d(1),j=d(16777216);n=l.prototype,n.m=function(){if(C(this))return-R(this).m();for(var b=0,p=1,g=0;g<this.g.length;g++){var v=this.i(g);b+=(0<=v?v:4294967296+v)*p,p*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(C(this))return"-"+R(this).toString(b);for(var p=f(Math.pow(b,6)),g=this,v="";;){var w=z(g,p).g;g=P(g,w.j(p));var E=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=w,S(g))return E+v;for(;6>E.length;)E="0"+E;v=E+v}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var p=0;p<b.g.length;p++)if(b.g[p]!=0)return!1;return!0}function C(b){return b.h==-1}n.l=function(b){return b=P(this,b),C(b)?-1:S(b)?0:1};function R(b){for(var p=b.g.length,g=[],v=0;v<p;v++)g[v]=~b.g[v];return new l(g,~b.h).add(T)}n.abs=function(){return C(this)?R(this):this},n.add=function(b){for(var p=Math.max(this.g.length,b.g.length),g=[],v=0,w=0;w<=p;w++){var E=v+(this.i(w)&65535)+(b.i(w)&65535),x=(E>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);v=x>>>16,E&=65535,x&=65535,g[w]=x<<16|E}return new l(g,g[g.length-1]&-2147483648?-1:0)};function P(b,p){return b.add(R(p))}n.j=function(b){if(S(this)||S(b))return _;if(C(this))return C(b)?R(this).j(R(b)):R(R(this).j(b));if(C(b))return R(this.j(R(b)));if(0>this.l(j)&&0>b.l(j))return f(this.m()*b.m());for(var p=this.g.length+b.g.length,g=[],v=0;v<2*p;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<b.g.length;w++){var E=this.i(v)>>>16,x=this.i(v)&65535,Q=b.i(w)>>>16,Se=b.i(w)&65535;g[2*v+2*w]+=x*Se,M(g,2*v+2*w),g[2*v+2*w+1]+=E*Se,M(g,2*v+2*w+1),g[2*v+2*w+1]+=x*Q,M(g,2*v+2*w+1),g[2*v+2*w+2]+=E*Q,M(g,2*v+2*w+2)}for(v=0;v<p;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=p;v<2*p;v++)g[v]=0;return new l(g,0)};function M(b,p){for(;(b[p]&65535)!=b[p];)b[p+1]+=b[p]>>>16,b[p]&=65535,p++}function U(b,p){this.g=b,this.h=p}function z(b,p){if(S(p))throw Error("division by zero");if(S(b))return new U(_,_);if(C(b))return p=z(R(b),p),new U(R(p.g),R(p.h));if(C(p))return p=z(b,R(p)),new U(R(p.g),p.h);if(30<b.g.length){if(C(b)||C(p))throw Error("slowDivide_ only works with positive integers.");for(var g=T,v=p;0>=v.l(b);)g=K(g),v=K(v);var w=$(g,1),E=$(v,1);for(v=$(v,2),g=$(g,2);!S(v);){var x=E.add(v);0>=x.l(b)&&(w=w.add(g),E=x),v=$(v,1),g=$(g,1)}return p=P(b,w.j(p)),new U(w,p)}for(w=_;0<=b.l(p);){for(g=Math.max(1,Math.floor(b.m()/p.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),E=f(g),x=E.j(p);C(x)||0<x.l(b);)g-=v,E=f(g),x=E.j(p);S(E)&&(E=T),w=w.add(E),b=P(b,x)}return new U(w,b)}n.A=function(b){return z(this,b).h},n.and=function(b){for(var p=Math.max(this.g.length,b.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)&b.i(v);return new l(g,this.h&b.h)},n.or=function(b){for(var p=Math.max(this.g.length,b.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)|b.i(v);return new l(g,this.h|b.h)},n.xor=function(b){for(var p=Math.max(this.g.length,b.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)^b.i(v);return new l(g,this.h^b.h)};function K(b){for(var p=b.g.length+1,g=[],v=0;v<p;v++)g[v]=b.i(v)<<1|b.i(v-1)>>>31;return new l(g,b.h)}function $(b,p){var g=p>>5;p%=32;for(var v=b.g.length-g,w=[],E=0;E<v;E++)w[E]=0<p?b.i(E+g)>>>p|b.i(E+g+1)<<32-p:b.i(E+g);return new l(w,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=y,Zi=l}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gu,qn,xu,$s,Ti,yu,vu,bu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ds=="object"&&Ds];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(a,c){if(c)e:{var h=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in h))break e;h=h[N]}a=a[a.length-1],m=h[a],c=c(m),c!=m&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function o(a,c){a instanceof String&&(a+="");var h=0,m=!1,N={next:function(){if(!m&&h<a.length){var I=h++;return{value:c(I,a[I]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(a){return a||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function f(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function y(a,c,h){return a.call.apply(a.bind,arguments)}function _(a,c,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function T(a,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:_,T.apply(null,arguments)}function j(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,N,I){for(var V=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)V[ie-2]=arguments[ie];return c.prototype[N].apply(m,V)}}function C(a){const c=a.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=a[m];return h}return[]}function R(a,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(d(m)){const N=a.length||0,I=m.length||0;a.length=N+I;for(let V=0;V<I;V++)a[N+V]=m[V]}else a.push(m)}}class P{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var K=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function $(a,c,h){for(const m in a)c.call(h,a[m],m,a)}function b(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function p(a){const c={};for(const h in a)c[h]=a[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,c){let h,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(h in m)a[h]=m[h];for(let I=0;I<g.length;I++)h=g[I],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function w(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function E(a){u.setTimeout(()=>{throw a},0)}function x(){var a=L;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Q{constructor(){this.h=this.g=null}add(c,h){const m=Se.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Se=new P(()=>new q,a=>a.reset());class q{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,oe=!1,L=new Q,se=()=>{const a=u.Promise.resolve(void 0);ee=()=>{a.then(ye)}};var ye=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(h){E(h)}var c=Se;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}oe=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return a}();function B(a,c){if(ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(K){e:{try{z(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ue[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&B.aa.h.call(this)}}S(B,ce);var ue={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),D=0;function J(a,c,h,m,N){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=N,this.key=++D,this.da=this.fa=!1}function qe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function bt(a){this.src=a,this.g={},this.h=0}bt.prototype.add=function(a,c,h,m,N){var I=a.toString();a=this.g[I],a||(a=this.g[I]=[],this.h++);var V=ct(a,c,m,N);return-1<V?(c=a[V],h||(c.fa=!1)):(c=new J(c,this.src,I,!!m,N),c.fa=h,a.push(c)),c};function wt(a,c){var h=c.type;if(h in a.g){var m=a.g[h],N=Array.prototype.indexOf.call(m,c,void 0),I;(I=0<=N)&&Array.prototype.splice.call(m,N,1),I&&(qe(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function ct(a,c,h,m){for(var N=0;N<a.length;++N){var I=a[N];if(!I.da&&I.listener==c&&I.capture==!!h&&I.ha==m)return N}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),Or={};function Sa(a,c,h,m,N){if(Array.isArray(c)){for(var I=0;I<c.length;I++)Sa(a,c[I],h,m,N);return null}return h=ka(h),a&&a[re]?a.K(c,h,f(m)?!!m.capture:!!m,N):qh(a,c,h,!1,m,N)}function qh(a,c,h,m,N,I){if(!c)throw Error("Invalid event type");var V=f(N)?!!N.capture:!!N,ie=Mr(a);if(ie||(a[Dr]=ie=new bt(a)),h=ie.add(c,h,m,V,I),h.proxy)return h;if(m=Gh(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)Ft||(N=V),N===void 0&&(N=!1),a.addEventListener(c.toString(),m,N);else if(a.attachEvent)a.attachEvent(Aa(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gh(){function a(h){return c.call(a.src,a.listener,h)}const c=Kh;return a}function ja(a,c,h,m,N){if(Array.isArray(c))for(var I=0;I<c.length;I++)ja(a,c[I],h,m,N);else m=f(m)?!!m.capture:!!m,h=ka(h),a&&a[re]?(a=a.i,c=String(c).toString(),c in a.g&&(I=a.g[c],h=ct(I,h,m,N),-1<h&&(qe(I[h]),Array.prototype.splice.call(I,h,1),I.length==0&&(delete a.g[c],a.h--)))):a&&(a=Mr(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ct(c,h,m,N)),(h=-1<a?c[a]:null)&&Vr(h))}function Vr(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[re])wt(c.i,a);else{var h=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(h,m,a.capture):c.detachEvent?c.detachEvent(Aa(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Mr(c))?(wt(h,a),h.h==0&&(h.src=null,c[Dr]=null)):qe(a)}}}function Aa(a){return a in Or?Or[a]:Or[a]="on"+a}function Kh(a,c){if(a.da)a=!0;else{c=new B(c,this);var h=a.listener,m=a.ha||a.src;a.fa&&Vr(a),a=h.call(m,c)}return a}function Mr(a){return a=a[Dr],a instanceof bt?a:null}var Lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ka(a){return typeof a=="function"?a:(a[Lr]||(a[Lr]=function(c){return a.handleEvent(c)}),a[Lr])}function je(){pe.call(this),this.i=new bt(this),this.M=this,this.F=null}S(je,pe),je.prototype[re]=!0,je.prototype.removeEventListener=function(a,c,h,m){ja(this,a,c,h,m)};function Oe(a,c){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new ce(c,a);else if(c instanceof ce)c.target=c.target||a;else{var N=c;c=new ce(m,a),v(c,N)}if(N=!0,h)for(var I=h.length-1;0<=I;I--){var V=c.g=h[I];N=xs(V,m,!0,c)&&N}if(V=c.g=a,N=xs(V,m,!0,c)&&N,N=xs(V,m,!1,c)&&N,h)for(I=0;I<h.length;I++)V=c.g=h[I],N=xs(V,m,!1,c)&&N}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],m=0;m<h.length;m++)qe(h[m]);delete a.g[c],a.h--}}this.F=null},je.prototype.K=function(a,c,h,m){return this.i.add(String(a),c,!1,h,m)},je.prototype.L=function(a,c,h,m){return this.i.add(String(a),c,!0,h,m)};function xs(a,c,h,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,I=0;I<c.length;++I){var V=c[I];if(V&&!V.da&&V.capture==h){var ie=V.listener,_e=V.ha||V.src;V.fa&&wt(a.i,V),N=ie.call(_e,m)!==!1&&N}}return N&&!m.defaultPrevented}function Ra(a,c,h){if(typeof a=="function")h&&(a=T(a,h));else if(a&&typeof a.handleEvent=="function")a=T(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(a,c||0)}function Ca(a){a.g=Ra(()=>{a.g=null,a.i&&(a.i=!1,Ca(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Qh extends pe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ca(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(a){pe.call(this),this.h=a,this.g={}}S(Cn,pe);var Pa=[];function Da(a){$(a.g,function(c,h){this.g.hasOwnProperty(h)&&Vr(c)},a),a.g={}}Cn.prototype.N=function(){Cn.aa.N.call(this),Da(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=u.JSON.stringify,Jh=u.JSON.parse,Xh=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function Ur(){}Ur.prototype.h=null;function Oa(a){return a.h||(a.h=a.i())}function Va(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ce.call(this,"d")}S(Br,ce);function zr(){ce.call(this,"c")}S(zr,ce);var Ut={},Ma=null;function ys(){return Ma=Ma||new je}Ut.La="serverreachability";function La(a){ce.call(this,Ut.La,a)}S(La,ce);function Dn(a){const c=ys();Oe(c,new La(c))}Ut.STAT_EVENT="statevent";function Fa(a,c){ce.call(this,Ut.STAT_EVENT,a),this.stat=c}S(Fa,ce);function Ve(a){const c=ys();Oe(c,new Fa(c,a))}Ut.Ma="timingevent";function Ua(a,c){ce.call(this,Ut.Ma,a),this.size=c}S(Ua,ce);function On(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},c)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function Yh(a,c,h,m,N,I){a.info(function(){if(a.g)if(I)for(var V="",ie=I.split("&"),_e=0;_e<ie.length;_e++){var ne=ie[_e].split("=");if(1<ne.length){var Ae=ne[0];ne=ne[1];var ke=Ae.split("_");V=2<=ke.length&&ke[1]=="type"?V+(Ae+"="+ne+"&"):V+(Ae+"=redacted&")}}else V=null;else V=I;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+c+`
`+h+`
`+V})}function Zh(a,c,h,m,N,I,V){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+c+`
`+h+`
`+I+" "+V})}function hn(a,c,h,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+td(a,h)+(m?" "+m:"")})}function ed(a,c){a.info(function(){return"TIMEOUT: "+c})}Vn.prototype.info=function(){};function td(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var I=N[0];if(I!="noop"&&I!="stop"&&I!="close")for(var V=1;V<N.length;V++)N[V]=""}}}}return Fr(h)}catch{return c}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$r;function bs(){}S(bs,Ur),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},$r=new bs;function _t(a,c,h,m){this.j=a,this.i=c,this.l=h,this.R=m||1,this.U=new Cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var $a={},Hr={};function Wr(a,c,h){a.L=1,a.v=Ns(ut(c)),a.m=h,a.P=!0,Ha(a,null)}function Ha(a,c){a.F=Date.now(),ws(a),a.A=ut(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ro(h.i,"t",m),a.C=0,h=a.j.J,a.h=new za,a.g=Eo(a.j,h?c:null,!a.m),0<a.O&&(a.M=new Qh(T(a.Y,a,a.g),a.O)),c=a.U,h=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Pa[0]=N.toString()),N=Pa);for(var I=0;I<N.length;I++){var V=Sa(h,N[I],m||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Dn(),Yh(a.i,a.u,a.A,a.l,a.R,a.m)}_t.prototype.ca=function(a){a=a.target;const c=this.M;c&&ht(a)==3?c.j():this.Y(a)},_t.prototype.Y=function(a){try{if(a==this.g)e:{const ke=ht(this.g);var c=this.g.Ba();const mn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||ho(this.g)))){this.J||ke!=4||c==7||(c==8||0>=mn?Dn(3):Dn(2)),qr(this);var h=this.g.Z();this.X=h;t:if(Wa(this)){var m=ho(this.g);a="";var N=m.length,I=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Mn(this);var V="";break t}this.h.i=new u.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(I&&c==N-1)});m.length=0,this.h.g+=a,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Zh(this.i,this.u,this.A,this.l,this.R,ke,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,_e=this.g;if((ie=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ie)){var ne=ie;break t}}ne=null}if(h=ne)hn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,h);else{this.o=!1,this.s=3,Ve(12),Bt(this),Mn(this);break e}}if(this.P){h=!0;let Ge;for(;!this.J&&this.C<V.length;)if(Ge=nd(this,V),Ge==Hr){ke==4&&(this.s=4,Ve(14),h=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==$a){this.s=4,Ve(15),hn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else hn(this.i,this.l,Ge,null),Gr(this,Ge);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||V.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)hn(this.i,this.l,V,"[Invalid Chunked Response]"),Bt(this),Mn(this);else if(0<V.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Zr(Ae),Ae.M=!0,Ve(11))}}else hn(this.i,this.l,V,null),Gr(this,V);ke==4&&Bt(this),this.o&&!this.J&&(ke==4?vo(this.j,this):(this.o=!1,ws(this)))}else vd(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Bt(this),Mn(this)}}}catch{}finally{}};function Wa(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function nd(a,c){var h=a.C,m=c.indexOf(`
`,h);return m==-1?Hr:(h=Number(c.substring(h,m)),isNaN(h)?$a:(m+=1,m+h>c.length?Hr:(c=c.slice(m,m+h),a.C=m+h,c)))}_t.prototype.cancel=function(){this.J=!0,Bt(this)};function ws(a){a.S=Date.now()+a.I,qa(a,a.I)}function qa(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=On(T(a.ba,a),c)}function qr(a){a.B&&(u.clearTimeout(a.B),a.B=null)}_t.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ed(this.i,this.A),this.L!=2&&(Dn(),Ve(17)),Bt(this),this.s=2,Mn(this)):qa(this,this.S-a)};function Mn(a){a.j.G==0||a.J||vo(a.j,a)}function Bt(a){qr(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Da(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Gr(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Kr(h.h,a))){if(!a.K&&Kr(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)ks(h),js(h);else break e;Yr(h),Ve(18)}}else h.za=N[1],0<h.za-h.T&&37500>N[2]&&h.F&&h.v==0&&!h.C&&(h.C=On(T(h.Za,h),6e3));if(1>=Qa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else $t(h,11)}else if((a.K||h.g==a)&&ks(h),!M(c))for(N=h.Da.g.parse(c),c=0;c<N.length;c++){let ne=N[c];if(h.T=ne[0],ne=ne[1],h.G==2)if(ne[0]=="c"){h.K=ne[1],h.ia=ne[2];const Ae=ne[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const ke=ne[4];ke!=null&&(h.Aa=ke,h.j.info("SVER="+h.Aa));const mn=ne[5];mn!=null&&typeof mn=="number"&&0<mn&&(m=1.5*mn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ge=a.g;if(Ge){const Cs=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cs){var I=m.h;I.g||Cs.indexOf("spdy")==-1&&Cs.indexOf("quic")==-1&&Cs.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Qr(I,I.h),I.h=null))}if(m.D){const ei=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;ei&&(m.ya=ei,le(m.I,m.D,ei))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var V=a;if(m.qa=_o(m,m.J?m.ia:null,m.W),V.K){Ja(m.h,V);var ie=V,_e=m.L;_e&&(ie.I=_e),ie.B&&(qr(ie),ws(ie)),m.g=V}else xo(m);0<h.i.length&&As(h)}else ne[0]!="stop"&&ne[0]!="close"||$t(h,7);else h.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?$t(h,7):Xr(h):ne[0]!="noop"&&h.l&&h.l.ta(ne),h.v=0)}}Dn(4)}catch{}}var sd=class{constructor(a,c){this.g=a,this.map=c}};function Ga(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ka(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qa(a){return a.h?1:a.g?a.g.size:0}function Kr(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Qr(a,c){a.g?a.g.add(c):a.h=c}function Ja(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ga.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xa(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return C(a.i)}function rd(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(d(a)){for(var c=[],h=a.length,m=0;m<h;m++)c.push(a[m]);return c}c=[],h=0;for(m in a)c[h++]=a[m];return c}function id(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(d(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const m in a)c[h++]=m;return c}}}function Ya(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(d(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=id(a),m=rd(a),N=m.length,I=0;I<N;I++)c.call(void 0,m[I],h&&h[I],a)}var Za=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ad(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),N=null;if(0<=m){var I=a[h].substring(0,m);N=a[h].substring(m+1)}else I=a[h];c(I,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function zt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zt){this.h=a.h,_s(this,a.j),this.o=a.o,this.g=a.g,Es(this,a.s),this.l=a.l;var c=a.i,h=new Un;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),eo(this,h),this.m=a.m}else a&&(c=String(a).match(Za))?(this.h=!1,_s(this,c[1]||"",!0),this.o=Ln(c[2]||""),this.g=Ln(c[3]||"",!0),Es(this,c[4]),this.l=Ln(c[5]||"",!0),eo(this,c[6]||"",!0),this.m=Ln(c[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}zt.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Fn(c,to,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Fn(c,to,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Fn(h,h.charAt(0)=="/"?cd:ld,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Fn(h,hd)),a.join("")};function ut(a){return new zt(a)}function _s(a,c,h){a.j=h?Ln(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Es(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function eo(a,c,h){c instanceof Un?(a.i=c,dd(a.i,a.h)):(h||(c=Fn(c,ud)),a.i=new Un(c,a.h))}function le(a,c,h){a.i.set(c,h)}function Ns(a){return le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ln(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fn(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,od),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function od(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var to=/[#\/\?@]/g,ld=/[#\?:]/g,cd=/[#\?]/g,ud=/[#\?@]/g,hd=/#/g;function Un(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Et(a){a.g||(a.g=new Map,a.h=0,a.i&&ad(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Un.prototype,n.add=function(a,c){Et(this),this.i=null,a=dn(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function no(a,c){Et(a),c=dn(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function so(a,c){return Et(a),c=dn(a,c),a.g.has(c)}n.forEach=function(a,c){Et(this),this.g.forEach(function(h,m){h.forEach(function(N){a.call(c,N,m,this)},this)},this)},n.na=function(){Et(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const N=a[m];for(let I=0;I<N.length;I++)h.push(c[m])}return h},n.V=function(a){Et(this);let c=[];if(typeof a=="string")so(this,a)&&(c=c.concat(this.g.get(dn(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},n.set=function(a,c){return Et(this),this.i=null,a=dn(this,a),so(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},n.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ro(a,c,h){no(a,c),0<h.length&&(a.i=null,a.g.set(dn(a,c),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const I=encodeURIComponent(String(m)),V=this.V(m);for(m=0;m<V.length;m++){var N=I;V[m]!==""&&(N+="="+encodeURIComponent(String(V[m]))),a.push(N)}}return this.i=a.join("&")};function dn(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function dd(a,c){c&&!a.j&&(Et(a),a.i=null,a.g.forEach(function(h,m){var N=m.toLowerCase();m!=N&&(no(this,m),ro(this,N,h))},a)),a.j=c}function fd(a,c){const h=new Vn;if(u.Image){const m=new Image;m.onload=j(Nt,h,"TestLoadImage: loaded",!0,c,m),m.onerror=j(Nt,h,"TestLoadImage: error",!1,c,m),m.onabort=j(Nt,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=j(Nt,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function md(a,c){const h=new Vn,m=new AbortController,N=setTimeout(()=>{m.abort(),Nt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(I=>{clearTimeout(N),I.ok?Nt(h,"TestPingServer: ok",!0,c):Nt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Nt(h,"TestPingServer: error",!1,c)})}function Nt(a,c,h,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(h)}catch{}}function pd(){this.g=new Xh}function gd(a,c,h){const m=h||"";try{Ya(a,function(N,I){let V=N;f(N)&&(V=Fr(N)),c.push(m+I+"="+encodeURIComponent(V))})}catch(N){throw c.push(m+"type="+encodeURIComponent("_badmap")),N}}function Is(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Is,Ur),Is.prototype.g=function(){return new Ts(this.l,this.j)},Is.prototype.i=function(a){return function(){return a}}({});function Ts(a,c){je.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ts,je),n=Ts.prototype,n.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,zn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;io(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function io(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Bn(this):zn(this),this.readyState==3&&io(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Bn(this))},n.Qa=function(a){this.g&&(this.response=a,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zn(a)}n.setRequestHeader=function(a,c){this.u.append(a,c)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function zn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ao(a){let c="";return $(a,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Jr(a,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=ao(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):le(a,c,h))}function de(a){je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(de,je);var xd=/^https?$/i,yd=["POST","PUT"];n=de.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$r.g(),this.v=this.o?Oa(this.o):Oa($r),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(I){oo(this,I);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)h.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const I of m.keys())h.set(I,m.get(I));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(I=>I.toLowerCase()=="content-type"),N=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(yd,c,void 0))||m||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,V]of h)this.g.setRequestHeader(I,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uo(this),this.u=!0,this.g.send(a),this.u=!1}catch(I){oo(this,I)}};function oo(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,lo(a),Ss(a)}function lo(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Oe(this,"complete"),Oe(this,"abort"),Ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?co(this):this.bb())},n.bb=function(){co(this)};function co(a){if(a.h&&typeof l<"u"&&(!a.v[1]||ht(a)!=4||a.Z()!=2)){if(a.u&&ht(a)==4)Ra(a.Ea,0,a);else if(Oe(a,"readystatechange"),ht(a)==4){a.h=!1;try{const V=a.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=V===0){var N=String(a.D).match(Za)[1]||null;!N&&u.self&&u.self.location&&(N=u.self.location.protocol.slice(0,-1)),m=!xd.test(N?N.toLowerCase():"")}h=m}if(h)Oe(a,"complete"),Oe(a,"success");else{a.m=6;try{var I=2<ht(a)?a.g.statusText:""}catch{I=""}a.l=I+" ["+a.Z()+"]",lo(a)}}finally{Ss(a)}}}}function Ss(a,c){if(a.g){uo(a);const h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Oe(a,"ready");try{h.onreadystatechange=m}catch{}}}function uo(a){a.I&&(u.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function ht(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Jh(c)}};function ho(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(a){const c={};a=(a.g&&2<=ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var h=w(a[m]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const I=c[N]||[];c[N]=I,I.push(h)}b(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function fo(a){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,a),this.cb=$n("retryDelaySeedMs",1e4,a),this.Wa=$n("forwardChannelMaxRetries",2,a),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ga(a&&a.concurrentRequestLimit),this.Da=new pd,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fo.prototype,n.la=8,n.G=1,n.connect=function(a,c,h,m){Ve(0),this.W=a,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=_o(this,null,this.W),As(this)};function Xr(a){if(mo(a),a.G==3){var c=a.U++,h=ut(a.I);if(le(h,"SID",a.K),le(h,"RID",c),le(h,"TYPE","terminate"),Hn(a,h),c=new _t(a,a.j,c),c.L=2,c.v=Ns(ut(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Eo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ws(c)}wo(a)}function js(a){a.g&&(Zr(a),a.g.cancel(),a.g=null)}function mo(a){js(a),a.u&&(u.clearTimeout(a.u),a.u=null),ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function As(a){if(!Ka(a.h)&&!a.s){a.s=!0;var c=a.Ga;ee||se(),oe||(ee(),oe=!0),L.add(c,a),a.B=0}}function bd(a,c){return Qa(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=On(T(a.Ga,a,c),bo(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new _t(this,this.j,a);let I=this.o;if(this.S&&(I?(I=p(I),v(I,this.S)):I=this.S),this.m!==null||this.O||(N.H=I,I=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=go(this,N,c),h=ut(this.I),le(h,"RID",a),le(h,"CVER",22),this.D&&le(h,"X-HTTP-Session-Id",this.D),Hn(this,h),I&&(this.O?c="headers="+encodeURIComponent(String(ao(I)))+"&"+c:this.m&&Jr(h,this.m,I)),Qr(this.h,N),this.Ua&&le(h,"TYPE","init"),this.P?(le(h,"$req",c),le(h,"SID","null"),N.T=!0,Wr(N,h,null)):Wr(N,h,c),this.G=2}}else this.G==3&&(a?po(this,a):this.i.length==0||Ka(this.h)||po(this))};function po(a,c){var h;c?h=c.l:h=a.U++;const m=ut(a.I);le(m,"SID",a.K),le(m,"RID",h),le(m,"AID",a.T),Hn(a,m),a.m&&a.o&&Jr(m,a.m,a.o),h=new _t(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=go(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qr(a.h,h),Wr(h,m,c)}function Hn(a,c){a.H&&$(a.H,function(h,m){le(c,m,h)}),a.l&&Ya({},function(h,m){le(c,m,h)})}function go(a,c,h){h=Math.min(a.i.length,h);var m=a.l?T(a.l.Na,a.l,a):null;e:{var N=a.i;let I=-1;for(;;){const V=["count="+h];I==-1?0<h?(I=N[0].g,V.push("ofs="+I)):I=0:V.push("ofs="+I);let ie=!0;for(let _e=0;_e<h;_e++){let ne=N[_e].g;const Ae=N[_e].map;if(ne-=I,0>ne)I=Math.max(0,N[_e].g-100),ie=!1;else try{gd(Ae,V,"req"+ne+"_")}catch{m&&m(Ae)}}if(ie){m=V.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,m}function xo(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ee||se(),oe||(ee(),oe=!0),L.add(c,a),a.v=0}}function Yr(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=On(T(a.Fa,a),bo(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,yo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=On(T(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),js(this),yo(this))};function Zr(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function yo(a){a.g=new _t(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=ut(a.qa);le(c,"RID","rpc"),le(c,"SID",a.K),le(c,"AID",a.T),le(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&le(c,"TO",a.ja),le(c,"TYPE","xmlhttp"),Hn(a,c),a.m&&a.o&&Jr(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Ns(ut(c)),h.m=null,h.P=!0,Ha(h,a)}n.Za=function(){this.C!=null&&(this.C=null,js(this),Yr(this),Ve(19))};function ks(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function vo(a,c){var h=null;if(a.g==c){ks(a),Zr(a),a.g=null;var m=2}else if(Kr(a.h,c))h=c.D,Ja(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;m=ys(),Oe(m,new Ua(m,h)),As(a)}else xo(a);else if(N=c.s,N==3||N==0&&0<c.X||!(m==1&&bd(a,c)||m==2&&Yr(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),N){case 1:$t(a,5);break;case 4:$t(a,10);break;case 3:$t(a,6);break;default:$t(a,2)}}}function bo(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function $t(a,c){if(a.j.info("Error code "+c),c==2){var h=T(a.fb,a),m=a.Xa;const N=!m;m=new zt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_s(m,"https"),Ns(m),N?fd(m.toString(),h):md(m.toString(),h)}else Ve(2);a.G=0,a.l&&a.l.sa(c),wo(a),mo(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function wo(a){if(a.G=0,a.ka=[],a.l){const c=Xa(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function _o(a,c,h){var m=h instanceof zt?ut(h):new zt(h);if(m.g!="")c&&(m.g=c+"."+m.g),Es(m,m.s);else{var N=u.location;m=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var I=new zt(null);m&&_s(I,m),c&&(I.g=c),N&&Es(I,N),h&&(I.l=h),m=I}return h=a.D,c=a.ya,h&&c&&le(m,h,c),le(m,"VER",a.la),Hn(a,m),m}function Eo(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new de(new Is({eb:h})):new de(a.pa),c.Ha(a.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function No(){}n=No.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rs(){}Rs.prototype.g=function(a,c){return new Ue(a,c)};function Ue(a,c){je.call(this),this.g=new fo(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!M(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new fn(this)}S(Ue,je),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Xr(this.g)},Ue.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Fr(a),a=h);c.i.push(new sd(c.Ya++,a)),c.G==3&&As(c)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Xr(this.g),delete this.g,Ue.aa.N.call(this)};function Io(a){Br.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}S(Io,Br);function To(){zr.call(this),this.status=1}S(To,zr);function fn(a){this.g=a}S(fn,No),fn.prototype.ua=function(){Oe(this.g,"a")},fn.prototype.ta=function(a){Oe(this.g,new Io(a))},fn.prototype.sa=function(a){Oe(this.g,new To)},fn.prototype.ra=function(){Oe(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,bu=function(){return new Rs},vu=function(){return ys()},yu=Ut,Ti={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,$s=vs,Ba.COMPLETE="complete",xu=Ba,Va.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",je.prototype.listen=je.prototype.K,qn=Va,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,gu=de}).apply(typeof Ds<"u"?Ds:typeof self<"u"?self:typeof window<"u"?window:{});const hl="@firebase/firestore",dl="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new br("@firebase/firestore");function pn(){return Zt.logLevel}function F(n,...e){if(Zt.logLevel<=Y.DEBUG){const t=e.map(ea);Zt.debug(`Firestore (${kn}): ${n}`,...t)}}function en(n,...e){if(Zt.logLevel<=Y.ERROR){const t=e.map(ea);Zt.error(`Firestore (${kn}): ${n}`,...t)}}function Nr(n,...e){if(Zt.logLevel<=Y.WARN){const t=e.map(ea);Zt.warn(`Firestore (${kn}): ${n}`,...t)}}function ea(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n="Unexpected state"){const e=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+n;throw en(e),new Error(e)}function me(n,e){n||X()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class Jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Xg{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await r(this.currentUser)})},u=d=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new wu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Ce(e)}}class Yg{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Zg{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Yg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ex{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Qe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){me(this.o===void 0);const s=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new fl(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string"),this.R=t.token,new fl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=tx(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function te(n,e){return n<e?-1:n>e?1:0}function Si(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return te(s,r);{const o=nx(),l=sx(o.encode(ml(n,t)),o.encode(ml(e,t)));return l!==0?l:te(s,r)}}t+=s>65535?2:1}return te(n.length,e.length)}function ml(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sx(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return te(n[t],e[t]);return te(n.length,e.length)}function En(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=-62135596800,gl=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*gl);return new we(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pl)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gl}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-pl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new we(0,0))}static max(){return new he(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="__name__";class st{constructor(e,t,s){t===void 0?t=0:t>e.length&&X(),s===void 0?s=e.length-t:s>e.length-t&&X(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=st.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const s=st.isNumericId(e),r=st.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?st.extractNumericId(e).compare(st.extractNumericId(t)):Si(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zi.fromString(e.substring(4,e.length-2))}}class xe extends st{construct(e,t,s){return new xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends st{construct(e,t,s){return new Ie(e,t,s)}static isValidIdentifier(e){return rx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xl}static keyField(){return new Ie([xl])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let l=!1;for(;r<e.length;){const u=e[r];if(u==="\\"){if(r+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else u==="`"?(l=!l,r++):u!=="."||l?(s+=u,r++):(o(),r++)}if(o(),l)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(xe.fromString(e))}static fromName(e){return new G(xe.fromString(e).popFirst(5))}static empty(){return new G(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new xe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=-1;function ix(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new we(t+1,0):new we(t,s));return new Ot(r,G.empty(),e)}function ax(n){return new Ot(n.readTime,n.key,ts)}class Ot{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ot(he.min(),G.empty(),ts)}static max(){return new Ot(he.max(),G.empty(),ts)}}function ox(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==lx)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,s)=>{t(e)})}static reject(e){return new A((t,s)=>{s(e)})}static waitFor(e){return new A((t,s)=>{let r=0,o=0,l=!1;e.forEach(u=>{++r,u.next(()=>{++o,l&&o===r&&t()},d=>s(d))}),l=!0,o===r&&t()})}static or(e){let t=A.resolve(!1);for(const s of e)t=t.next(r=>r?A.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,o)=>{s.push(t.call(this,r,o))}),this.waitFor(s)}static mapArray(e,t){return new A((s,r)=>{const o=e.length,l=new Array(o);let u=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next(y=>{l[f]=y,++u,u===o&&s(l)},y=>r(y))}})}static doWhile(e,t){return new A((s,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):s()};o()})}}function ux(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ds(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}na.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=-1;function ra(n){return n==null}function sr(n){return n===0&&1/n==-1/0}function hx(n){return typeof n=="number"&&Number.isInteger(n)&&!sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="";function dx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yl(e)),e=fx(n.get(t),e);return yl(e)}function fx(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case Eu:t+="";break;default:t+=o}}return t}function yl(n){return n+Eu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??Ee.RED,this.left=r??Ee.EMPTY,this.right=o??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new Ee(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ee.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,s,r,o){return this}insert(e,t,s){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bl(this.data.getIterator())}getIteratorFrom(e){return new bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Te(Ie.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mx("Invalid base64 string: "+o):o}}(e);return new ot(t)}static fromUint8Array(e){const t=function(r){let o="";for(let l=0;l<r.length;++l)o+=String.fromCharCode(r[l]);return o}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(n){if(me(!!n),typeof n=="string"){let e=0;const t=px.exec(n);if(me(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nn(n){return typeof n=="string"?ot.fromBase64String(n):ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="server_timestamp",Tu="__type__",Su="__previous_value__",ju="__local_write_time__";function ia(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tu])===null||t===void 0?void 0:t.stringValue)===Iu}function aa(n){const e=n.mapValue.fields[Su];return ia(e)?aa(e):e}function rr(n){const e=tn(n.mapValue.fields[ju].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t,s,r,o,l,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f}}const ir="(default)";class ar{constructor(e,t){this.projectId=e,this.database=t||ir}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===ir}isEqual(e){return e instanceof ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="__type__",ku="__max__",Vs={mapValue:{fields:{__type__:{stringValue:ku}}}},Ru="__vector__",ji="value";function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ia(n)?4:yx(n)?9007199254740991:xx(n)?10:11:X()}function lt(n,e){if(n===e)return!0;const t=nn(n);if(t!==nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rr(n).isEqual(rr(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const l=tn(r.timestampValue),u=tn(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return Nn(r.bytesValue).isEqual(Nn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return Ne(r.geoPointValue.latitude)===Ne(o.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Ne(r.integerValue)===Ne(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const l=Ne(r.doubleValue),u=Ne(o.doubleValue);return l===u?sr(l)===sr(u):isNaN(l)&&isNaN(u)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(r,o){const l=r.mapValue.fields||{},u=o.mapValue.fields||{};if(vl(l)!==vl(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!lt(l[d],u[d])))return!1;return!0}(n,e);default:return X()}}function ns(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function In(n,e){if(n===e)return 0;const t=nn(n),s=nn(e);if(t!==s)return te(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(o,l){const u=Ne(o.integerValue||o.doubleValue),d=Ne(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,e);case 3:return wl(n.timestampValue,e.timestampValue);case 4:return wl(rr(n),rr(e));case 5:return Si(n.stringValue,e.stringValue);case 6:return function(o,l){const u=Nn(o),d=Nn(l);return u.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,l){const u=o.split("/"),d=l.split("/");for(let f=0;f<u.length&&f<d.length;f++){const y=te(u[f],d[f]);if(y!==0)return y}return te(u.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,l){const u=te(Ne(o.latitude),Ne(l.latitude));return u!==0?u:te(Ne(o.longitude),Ne(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _l(n.arrayValue,e.arrayValue);case 10:return function(o,l){var u,d,f,y;const _=o.fields||{},T=l.fields||{},j=(u=_[ji])===null||u===void 0?void 0:u.arrayValue,S=(d=T[ji])===null||d===void 0?void 0:d.arrayValue,C=te(((f=j==null?void 0:j.values)===null||f===void 0?void 0:f.length)||0,((y=S==null?void 0:S.values)===null||y===void 0?void 0:y.length)||0);return C!==0?C:_l(j,S)}(n.mapValue,e.mapValue);case 11:return function(o,l){if(o===Vs.mapValue&&l===Vs.mapValue)return 0;if(o===Vs.mapValue)return 1;if(l===Vs.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),f=l.fields||{},y=Object.keys(f);d.sort(),y.sort();for(let _=0;_<d.length&&_<y.length;++_){const T=Si(d[_],y[_]);if(T!==0)return T;const j=In(u[d[_]],f[y[_]]);if(j!==0)return j}return te(d.length,y.length)}(n.mapValue,e.mapValue);default:throw X()}}function wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=tn(n),s=tn(e),r=te(t.seconds,s.seconds);return r!==0?r:te(t.nanos,s.nanos)}function _l(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=In(t[r],s[r]);if(o)return o}return te(t.length,s.length)}function Tn(n){return Ai(n)}function Ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=tn(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Nn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=Ai(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const l of s)o?o=!1:r+=",",r+=`${l}:${Ai(t.fields[l])}`;return r+"}"}(n.mapValue):X()}function Hs(n){switch(nn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=aa(n);return e?16+Hs(e):16;case 5:return 2*n.stringValue.length;case 6:return Nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,o)=>r+Hs(o),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Rn(s.fields,(o,l)=>{r+=o.length+Hs(l)}),r}(n.mapValue);default:throw X()}}function ki(n){return!!n&&"integerValue"in n}function oa(n){return!!n&&"arrayValue"in n}function Ws(n){return!!n&&"mapValue"in n}function xx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Au])===null||t===void 0?void 0:t.stringValue)===Ru}function Kn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Kn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ku}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kn(t)}setAll(e){let t=Ie.emptyPath(),s={},r=[];e.forEach((l,u)=>{if(!t.isImmediateParentOf(u)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=u.popLast()}l?s[u.lastSegment()]=Kn(l):r.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Rn(t,(r,o)=>e[r]=o);for(const r of s)delete e[r]}clone(){return new Je(Kn(this.value))}}function Cu(n){const e=[];return Rn(n.fields,(t,s)=>{const r=new Ie([t]);if(Ws(s)){const o=Cu(s.mapValue).fields;if(o.length===0)e.push(r);else for(const l of o)e.push(r.child(l))}else e.push(r)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,s,r,o,l,u){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(e){return new Ke(e,0,he.min(),he.min(),he.min(),Je.empty(),0)}static newFoundDocument(e,t,s,r){return new Ke(e,1,t,he.min(),s,r,0)}static newNoDocument(e,t){return new Ke(e,2,t,he.min(),he.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Ke(e,3,t,he.min(),he.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.position=e,this.inclusive=t}}function El(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],l=n.position[r];if(o.field.isKeyField()?s=G.comparator(G.fromName(l.referenceValue),t.key):s=In(l,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t="asc"){this.field=e,this.dir=t}}function vx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{}class be extends Pu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new wx(e,t,s):t==="array-contains"?new Nx(e,s):t==="in"?new Ix(e,s):t==="not-in"?new Tx(e,s):t==="array-contains-any"?new Sx(e,s):new be(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new _x(e,s):new Ex(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&nn(this.value)===nn(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Pu{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Vt(e,t)}matches(e){return Du(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Du(n){return n.op==="and"}function Ou(n){return bx(n)&&Du(n)}function bx(n){for(const e of n.filters)if(e instanceof Vt)return!1;return!0}function Ri(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(Ou(n))return n.filters.map(e=>Ri(e)).join(",");{const e=n.filters.map(t=>Ri(t)).join(",");return`${n.op}(${e})`}}function Vu(n,e){return n instanceof be?function(s,r){return r instanceof be&&s.op===r.op&&s.field.isEqual(r.field)&&lt(s.value,r.value)}(n,e):n instanceof Vt?function(s,r){return r instanceof Vt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((o,l,u)=>o&&Vu(l,r.filters[u]),!0):!1}(n,e):void X()}function Mu(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`}(n):n instanceof Vt?function(t){return t.op.toString()+" {"+t.getFilters().map(Mu).join(" ,")+"}"}(n):"Filter"}class wx extends be{constructor(e,t,s){super(e,t,s),this.key=G.fromName(s.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class _x extends be{constructor(e,t){super(e,"in",t),this.keys=Lu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ex extends be{constructor(e,t){super(e,"not-in",t),this.keys=Lu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>G.fromName(s.referenceValue))}class Nx extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oa(t)&&ns(t.arrayValue,this.value)}}class Ix extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class Tx extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ns(this.value.arrayValue,t)}}class Sx extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ns(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t=null,s=[],r=[],o=null,l=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=l,this.endAt=u,this.le=null}}function Il(n,e=null,t=[],s=[],r=null,o=null,l=null){return new jx(n,e,t,s,r,o,l)}function la(n){const e=ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ri(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),ra(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Tn(s)).join(",")),e.le=t}return e.le}function ca(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nl(n.startAt,e.startAt)&&Nl(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t=null,s=[],r=[],o=null,l="F",u=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=d,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Ax(n,e,t,s,r,o,l,u){return new Ir(n,e,t,s,r,o,l,u)}function kx(n){return new Ir(n)}function Tl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rx(n){return n.collectionGroup!==null}function Qn(n){const e=ae(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new Te(Ie.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new lr(o,s))}),t.has(Ie.keyField().canonicalString())||e.he.push(new lr(Ie.keyField(),s))}return e.he}function Qt(n){const e=ae(n);return e.Pe||(e.Pe=Cx(e,Qn(n))),e.Pe}function Cx(n,e){if(n.limitType==="F")return Il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new lr(r.field,o)});const t=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return Il(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ci(n,e,t){return new Ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fu(n,e){return ca(Qt(n),Qt(e))&&n.limitType===e.limitType}function Uu(n){return`${la(Qt(n))}|lt:${n.limitType}`}function Wn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>Mu(r)).join(", ")}]`),ra(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Tn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Tn(r)).join(",")),`Target(${s})`}(Qt(n))}; limitType=${n.limitType})`}function ua(n,e){return e.isFoundDocument()&&function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):G.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,e)&&function(s,r){for(const o of Qn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(l,u,d){const f=El(l,u,d);return l.inclusive?f<=0:f<0}(s.startAt,Qn(s),r)||s.endAt&&!function(l,u,d){const f=El(l,u,d);return l.inclusive?f>=0:f>0}(s.endAt,Qn(s),r))}(n,e)}function Px(n){return(e,t)=>{let s=!1;for(const r of Qn(n)){const o=Dx(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Dx(n,e,t){const s=n.field.isKeyField()?G.comparator(e.key,t.key):function(o,l,u){const d=l.data.field(o),f=u.data.field(o);return d!==null&&f!==null?In(d,f):X()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,s)=>{for(const[r,o]of s)e(r,o)})}isEmpty(){return Nu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new Fe(G.comparator);function cr(){return Ox}const Bu=new Fe(G.comparator);function Ms(...n){let e=Bu;for(const t of n)e=e.insert(t.key,t);return e}function zu(n){let e=Bu;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function qt(){return Jn()}function $u(){return Jn()}function Jn(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vx=new Fe(G.comparator),Mx=new Te(G.comparator);function Pe(...n){let e=Mx;for(const t of n)e=e.add(t);return e}const Lx=new Te(te);function Fx(){return Lx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(e)?"-0":e}}function Hu(n){return{integerValue:""+n}}function Ux(n,e){return hx(e)?Hu(e):ha(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this._=void 0}}function Bx(n,e,t){return n instanceof ur?function(r,o){const l={fields:{[Tu]:{stringValue:Iu},[ju]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&ia(o)&&(o=aa(o)),o&&(l.fields[Su]=o),{mapValue:l}}(t,e):n instanceof ss?qu(n,e):n instanceof rs?Gu(n,e):function(r,o){const l=Wu(r,o),u=Sl(l)+Sl(r.Ie);return ki(l)&&ki(r.Ie)?Hu(u):ha(r.serializer,u)}(n,e)}function zx(n,e,t){return n instanceof ss?qu(n,e):n instanceof rs?Gu(n,e):t}function Wu(n,e){return n instanceof hr?function(s){return ki(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class ur extends Tr{}class ss extends Tr{constructor(e){super(),this.elements=e}}function qu(n,e){const t=Ku(e);for(const s of n.elements)t.some(r=>lt(r,s))||t.push(s);return{arrayValue:{values:t}}}class rs extends Tr{constructor(e){super(),this.elements=e}}function Gu(n,e){let t=Ku(e);for(const s of n.elements)t=t.filter(r=>!lt(r,s));return{arrayValue:{values:t}}}class hr extends Tr{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Sl(n){return Ne(n.integerValue||n.doubleValue)}function Ku(n){return oa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $x(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof ss&&r instanceof ss||s instanceof rs&&r instanceof rs?En(s.elements,r.elements,lt):s instanceof hr&&r instanceof hr?lt(s.Ie,r.Ie):s instanceof ur&&r instanceof ur}(n.transform,e.transform)}class Hx{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Sr{}function Qu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xu(n.key,pt.none()):new fs(n.key,n.data,pt.none());{const t=n.data,s=Je.empty();let r=new Te(Ie.comparator);for(let o of e.fields)if(!r.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?s.delete(o):s.set(o,l),r=r.add(o)}return new un(n.key,s,new Ye(r.toArray()),pt.none())}}function Wx(n,e,t){n instanceof fs?function(r,o,l){const u=r.value.clone(),d=Al(r.fieldTransforms,o,l.transformResults);u.setAll(d),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,e,t):n instanceof un?function(r,o,l){if(!qs(r.precondition,o))return void o.convertToUnknownDocument(l.version);const u=Al(r.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(Ju(r)),d.setAll(u),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,e,t):function(r,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Xn(n,e,t,s){return n instanceof fs?function(o,l,u,d){if(!qs(o.precondition,l))return u;const f=o.value.clone(),y=kl(o.fieldTransforms,d,l);return f.setAll(y),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,e,t,s):n instanceof un?function(o,l,u,d){if(!qs(o.precondition,l))return u;const f=kl(o.fieldTransforms,d,l),y=l.data;return y.setAll(Ju(o)),y.setAll(f),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,e,t,s):function(o,l,u){return qs(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,e,t)}function qx(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=Wu(s.transform,r||null);o!=null&&(t===null&&(t=Je.empty()),t.set(s.field,o))}return t||null}function jl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&En(s,r,(o,l)=>$x(o,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fs extends Sr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class un extends Sr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ju(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Al(n,e,t){const s=new Map;me(n.length===t.length);for(let r=0;r<t.length;r++){const o=n[r],l=o.transform,u=e.data.field(o.field);s.set(o.field,zx(l,u,t[r]))}return s}function kl(n,e,t){const s=new Map;for(const r of n){const o=r.transform,l=t.data.field(r.field);s.set(r.field,Bx(o,l,e))}return s}class Xu extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gx extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&Wx(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Xn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Xn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=$u();return this.mutations.forEach(r=>{const o=e.get(r.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=t.has(r.key)?null:u;const d=Qu(l,u);d!==null&&s.set(r.key,d),l.isValidDocument()||l.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,s)=>jl(t,s))&&En(this.baseMutations,e.baseMutations,(t,s)=>jl(t,s))}}class da{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){me(e.mutations.length===s.length);let r=function(){return Vx}();const o=e.mutations;for(let l=0;l<o.length;l++)r=r.insert(o[l].key,s[l].version);return new da(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,Z;function Jx(n){switch(n){case O.OK:return X();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return X()}}function Xx(n){if(n===void 0)return en("GRPC error has no .code"),O.UNKNOWN;switch(n){case ge.OK:return O.OK;case ge.CANCELLED:return O.CANCELLED;case ge.UNKNOWN:return O.UNKNOWN;case ge.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ge.INTERNAL:return O.INTERNAL;case ge.UNAVAILABLE:return O.UNAVAILABLE;case ge.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ge.NOT_FOUND:return O.NOT_FOUND;case ge.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ge.ABORTED:return O.ABORTED;case ge.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ge.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(Z=ge||(ge={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zi([4294967295,4294967295],0);class Yx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zx(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ey(n,e){return Pi(n,e.toTimestamp())}function _n(n){return me(!!n),he.fromTimestamp(function(t){const s=tn(t);return new we(s.seconds,s.nanos)}(n))}function Yu(n,e){return Di(n,e).canonicalString()}function Di(n,e){const t=function(r){return new xe(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ty(n){const e=xe.fromString(n);return me(cy(e)),e}function Oi(n,e){return Yu(n.databaseId,e.path)}function ny(n){const e=ty(n);return e.length===4?xe.emptyPath():ry(e)}function sy(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ry(n){return me(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rl(n,e,t){return{name:Oi(n,e),fields:t.value.mapValue.fields}}function iy(n,e){let t;if(e instanceof fs)t={update:Rl(n,e.key,e.value)};else if(e instanceof Xu)t={delete:Oi(n,e.key)};else if(e instanceof un)t={update:Rl(n,e.key,e.data),updateMask:ly(e.fieldMask)};else{if(!(e instanceof Gx))return X();t={verify:Oi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,l){const u=l.transform;if(u instanceof ur)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ss)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof rs)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof hr)return{fieldPath:l.field.canonicalString(),increment:u.Ie};throw X()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:ey(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:X()}(n,e.precondition)),t}function ay(n,e){return n&&n.length>0?(me(e!==void 0),n.map(t=>function(r,o){let l=r.updateTime?_n(r.updateTime):_n(o);return l.isEqual(he.min())&&(l=_n(o)),new Hx(l,r.transformResults||[])}(t,e))):[]}function oy(n){let e=ny(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){me(s===1);const y=t.from[0];y.allDescendants?r=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(_){const T=Zu(_);return T instanceof Vt&&Ou(T)?T.getFilters():[T]}(t.where));let l=[];t.orderBy&&(l=function(_){return _.map(T=>function(S){return new lr(gn(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(_){let T;return T=typeof _=="object"?_.value:_,ra(T)?null:T}(t.limit));let d=null;t.startAt&&(d=function(_){const T=!!_.before,j=_.values||[];return new or(j,T)}(t.startAt));let f=null;return t.endAt&&(f=function(_){const T=!_.before,j=_.values||[];return new or(j,T)}(t.endAt)),Ax(e,r,l,o,u,"F",d,f)}function Zu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=gn(t.unaryFilter.field);return be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=gn(t.unaryFilter.field);return be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=gn(t.unaryFilter.field);return be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=gn(t.unaryFilter.field);return be.create(l,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(t){return be.create(gn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Vt.create(t.compositeFilter.filters.map(s=>Zu(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(n):X()}function gn(n){return Ie.fromServerFormat(n.fieldPath)}function ly(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.Tt=e}}function hy(n){const e=oy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ci(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.Tn=new fy}addToCollectionParentIndex(e,t){return this.Tn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Ot.min())}updateCollectionGroup(e,t,s){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class fy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Te(xe.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Te(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eh=41943040;class Me{static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(eh,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Sn(0)}static Kn(){return new Sn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="LruGarbageCollector",my=1048576;function Dl([n,e],[t,s]){const r=te(n,t);return r===0?te(e,s):r}class py{constructor(e){this.Hn=e,this.buffer=new Te(Dl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Dl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gy{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){F(Pl,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ds(t)?F(Pl,"Ignoring IndexedDB error during garbage collection: ",t):await ta(t)}await this.er(3e5)})}}class xy{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return A.resolve(na.ae);const s=new py(t);return this.tr.forEachTarget(e,r=>s.Zn(r.sequenceNumber)).next(()=>this.tr.rr(e,r=>s.Zn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Cl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cl):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,r,o,l,u,d,f;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,l=Date.now(),this.nthSequenceNumber(e,r))).next(_=>(s=_,u=Date.now(),this.removeTargets(e,s,t))).next(_=>(o=_,d=Date.now(),this.removeOrphanedDocuments(e,s))).next(_=>(f=Date.now(),pn()<=Y.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${r} in `+(u-l)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${_} documents in `+(f-d)+`ms
Total Duration: ${f-y}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:_})))}}function yy(n,e){return new xy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?A.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Xn(s.mutation,r,Ye.empty(),we.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const r=qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(o=>{let l=Ms();return o.forEach((u,d)=>{l=l.insert(u,d.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const s=qt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const r=[];return s.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((l,u)=>{t.set(l,u)})})}computeViews(e,t,s,r){let o=cr();const l=Jn(),u=function(){return Jn()}();return t.forEach((d,f)=>{const y=s.get(f.key);r.has(f.key)&&(y===void 0||y.mutation instanceof un)?o=o.insert(f.key,f):y!==void 0?(l.set(f.key,y.mutation.getFieldMask()),Xn(y.mutation,f,y.mutation.getFieldMask(),we.now())):l.set(f.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((f,y)=>l.set(f,y)),t.forEach((f,y)=>{var _;return u.set(f,new by(y,(_=l.get(f))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(e,t){const s=Jn();let r=new Fe((l,u)=>l-u),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const u of l)u.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let y=s.get(d)||Ye.empty();y=u.applyToLocalView(f,y),s.set(d,y);const _=(r.get(u.batchId)||Pe()).add(d);r=r.insert(u.batchId,_)})}).next(()=>{const l=[],u=r.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,y=d.value,_=$u();y.forEach(T=>{if(!o.has(T)){const j=Qu(t.get(T),s.get(T));j!==null&&_.set(T,j),o=o.add(T)}}),l.push(this.documentOverlayCache.saveOverlays(e,f,_))}return A.waitFor(l)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(l){return G.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(o=>{const l=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):A.resolve(qt());let u=ts,d=o;return l.next(f=>A.forEach(f,(y,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),o.get(y)?A.resolve():this.remoteDocumentCache.getEntry(e,y).next(T=>{d=d.insert(y,T)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,d,f,Pe())).next(y=>({batchId:u,changes:zu(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(s=>{let r=Ms();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let l=Ms();return this.indexManager.getCollectionParents(e,o).next(u=>A.forEach(u,d=>{const f=function(_,T){return new Ir(T,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,s,r).next(y=>{y.forEach((_,T)=>{l=l.insert(_,T)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r))).next(l=>{o.forEach((d,f)=>{const y=f.getKey();l.get(y)===null&&(l=l.insert(y,Ke.newInvalidDocument(y)))});let u=Ms();return l.forEach((d,f)=>{const y=o.get(d);y!==void 0&&Xn(y.mutation,f,Ye.empty(),we.now()),ua(t,f)&&(u=u.insert(d,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return A.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:_n(r.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(r){return{name:r.name,query:hy(r.bundledQuery),readTime:_n(r.readTime)}}(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.overlays=new Fe(G.comparator),this.Rr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const s=qt();return A.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&s.set(r,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,o)=>{this.Et(e,t,o)}),A.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Rr.get(s);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(s)),A.resolve()}getOverlaysForCollection(e,t,s){const r=qt(),o=t.length+1,l=new G(t.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>s&&r.set(d.getKey(),d)}return A.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new Fe((f,y)=>f-y);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let y=o.get(f.largestBatchId);y===null&&(y=qt(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const u=qt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,y)=>u.set(f,y)),!(u.size()>=r)););return A.resolve(u)}Et(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const l=this.Rr.get(r.largestBatchId).delete(s.key);this.Rr.set(r.largestBatchId,l)}this.overlays=this.overlays.insert(s.key,new Qx(t,s));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.Vr=new Te(ve.mr),this.gr=new Te(ve.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new ve(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new ve(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new G(new xe([])),s=new ve(t,e),r=new ve(t,e+1),o=[];return this.gr.forEachInRange([s,r],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new G(new xe([])),s=new ve(t,e),r=new ve(t,e+1);let o=Pe();return this.gr.forEachInRange([s,r],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new ve(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ve{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return G.comparator(e.key,t.key)||te(e.Cr,t.Cr)}static pr(e,t){return te(e.Cr,t.Cr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Te(ve.mr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Kx(o,t,s,r);this.mutationQueue.push(l);for(const u of r)this.Mr=this.Mr.add(new ve(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return A.resolve(l)}lookupMutationBatch(e,t){return A.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Nr(s),o=r<0?0:r;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?sa:this.Fr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ve(t,0),r=new ve(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([s,r],l=>{const u=this.Or(l.Cr);o.push(u)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Te(te);return t.forEach(r=>{const o=new ve(r,0),l=new ve(r,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],u=>{s=s.add(u.Cr)})}),A.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;G.isDocumentKey(o)||(o=o.child(""));const l=new ve(new G(o),0);let u=new Te(te);return this.Mr.forEachWhile(d=>{const f=d.key.path;return!!s.isPrefixOf(f)&&(f.length===r&&(u=u.add(d.Cr)),!0)},l),A.resolve(this.Br(u))}Br(e){const t=[];return e.forEach(s=>{const r=this.Or(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){me(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return A.forEach(t.mutations,r=>{const o=new ve(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new ve(t,0),r=this.Mr.firstAfterOrEqual(s);return A.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.kr=e,this.docs=function(){return new Fe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,l=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return A.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(t))}getEntries(e,t){let s=cr();return t.forEach(r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Ke.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=cr();const l=t.path,u=new G(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:y}}=d.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||ox(ax(y),s)<=0||(r.has(y.key)||ua(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(e,t,s,r){X()}qr(e,t){return A.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Sy(this)}getSize(e){return A.resolve(this.size)}}class Sy extends vy{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(s)}),A.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.persistence=e,this.Qr=new cn(t=>la(t),ca),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.$r=0,this.Ur=new fa,this.targetCount=0,this.Kr=Sn.Un()}forEachTarget(e,t){return this.Qr.forEach((s,r)=>t(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),A.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.zn(t),A.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.Qr.forEach((l,u)=>{u.sequenceNumber<=t&&s.get(u.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),r++)}),A.waitFor(o).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return A.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),A.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(l=>{o.push(r.markPotentiallyOrphaned(e,l))}),A.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),A.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return A.resolve(s)}containsKey(e,t){return A.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new na(0),this.zr=!1,this.zr=!0,this.jr=new Ny,this.referenceDelegate=e(this),this.Hr=new jy(this),this.indexManager=new dy,this.remoteDocumentCache=function(r){return new Ty(r)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new uy(t),this.Yr=new _y(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ey,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new Iy(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){F("MemoryPersistence","Starting transaction:",e);const r=new Ay(this.Gr.next());return this.referenceDelegate.Zr(),s(r).next(o=>this.referenceDelegate.Xr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}ei(e,t){return A.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class Ay extends cx{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.ti=new fa,this.ni=null}static ri(e){return new ma(e)}get ii(){if(this.ni)return this.ni;throw X()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),A.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),A.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(r=>this.ii.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.ii.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.ii,s=>{const r=G.fromPath(s);return this.si(e,r).next(o=>{o||t.removeEntry(r,he.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return A.or([()=>A.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class dr{constructor(e,t){this.persistence=e,this.oi=new cn(s=>dx(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=yy(this,t)}static ri(e,t){return new dr(e,t)}Zr(){}Xr(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return A.forEach(this.oi,(s,r)=>this.ar(e,s,r).next(o=>o?A.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.qr(e,l=>this.ar(e,l,t).next(u=>{u||(s++,o.removeEntry(l,he.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),A.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),A.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hs(e.data.value)),t}ar(e,t,s){return A.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.oi.get(t);return A.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=r}static Yi(e,t){let s=Pe(),r=Pe();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new pa(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return wf()?8:ux(De())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.rs(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(e,t,r,s).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new ky;return this._s(e,t,l).next(u=>{if(o.result=u,this.Xi)return this.us(e,t,l,u.size)})}).next(()=>o.result)}us(e,t,s,r){return s.documentReadCount<this.es?(pn()<=Y.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),A.resolve()):(pn()<=Y.DEBUG&&F("QueryEngine","Query:",Wn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ts*r?(pn()<=Y.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(t))):A.resolve())}rs(e,t){if(Tl(t))return A.resolve(null);let s=Qt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ci(t,null,"F"),s=Qt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const l=Pe(...o);return this.ns.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,s).next(d=>{const f=this.cs(t,u);return this.ls(t,f,l,d.readTime)?this.rs(e,Ci(t,null,"F")):this.hs(e,f,t,d)}))})))}ss(e,t,s,r){return Tl(t)||r.isEqual(he.min())?A.resolve(null):this.ns.getDocuments(e,s).next(o=>{const l=this.cs(t,o);return this.ls(t,l,s,r)?A.resolve(null):(pn()<=Y.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wn(t)),this.hs(e,l,t,ix(r,ts)).next(u=>u))})}cs(e,t){let s=new Te(Px(e));return t.forEach((r,o)=>{ua(e,o)&&(s=s.add(o))}),s}ls(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}_s(e,t,s){return pn()<=Y.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Wn(t)),this.ns.getDocumentsMatchingQuery(e,t,Ot.min(),s)}hs(e,t,s,r){return this.ns.getDocumentsMatchingQuery(e,s,r).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="LocalStore";class Py{constructor(e,t,s,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new Fe(te),this.Is=new cn(o=>la(o),ca),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wy(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Dy(n,e,t,s){return new Py(n,e,t,s)}async function nh(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(o=>(r=o,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const l=[],u=[];let d=Pe();for(const f of r){l.push(f.batchId);for(const y of f.mutations)d=d.add(y.key)}for(const f of o){u.push(f.batchId);for(const y of f.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(s,d).next(f=>({Rs:f,removedBatchIds:l,addedBatchIds:u}))})})}function Oy(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(u,d,f,y){const _=f.batch,T=_.keys();let j=A.resolve();return T.forEach(S=>{j=j.next(()=>y.getEntry(d,S)).next(C=>{const R=f.docVersions.get(S);me(R!==null),C.version.compareTo(R)<0&&(_.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),y.addEntry(C)))})}),j.next(()=>u.mutationQueue.removeMutationBatch(d,_))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(u){let d=Pe();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Vy(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function My(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=sa),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Ol{constructor(){this.activeTargetIds=Fx()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ly{constructor(){this.ho=new Ol,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ol,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="ConnectivityMonitor";class Ml{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){F(Vl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){F(Vl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls=null;function Vi(){return Ls===null?Ls=function(){return 268435456+Math.round(2147483648*Math.random())}():Ls++,"0x"+Ls.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="RestConnection",Uy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class By{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${r}`,this.wo=this.databaseId.database===ir?`project_id=${s}`:`project_id=${s}&database_id=${r}`}So(e,t,s,r,o){const l=Vi(),u=this.bo(e,t.toUriEncodedString());F(ci,`Sending RPC '${e}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(d,r,o),this.vo(e,u,d,s).then(f=>(F(ci,`Received RPC '${e}' ${l}: `,f),f),f=>{throw Nr(ci,`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Co(e,t,s,r,o,l){return this.So(e,t,s,r,o)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}bo(e,t){const s=Uy[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class $y extends By{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,r){const o=Vi();return new Promise((l,u)=>{const d=new gu;d.setWithCredentials(!0),d.listenOnce(xu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case $s.NO_ERROR:const y=d.getResponseJson();F(Re,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),l(y);break;case $s.TIMEOUT:F(Re,`RPC '${e}' ${o} timed out`),u(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const _=d.getStatus();if(F(Re,`RPC '${e}' ${o} failed with status:`,_,"response text:",d.getResponseText()),_>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const j=T==null?void 0:T.error;if(j&&j.status&&j.message){const S=function(R){const P=R.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(P)>=0?P:O.UNKNOWN}(j.status);u(new W(S,j.message))}else u(new W(O.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new W(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{F(Re,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(r);F(Re,`RPC '${e}' ${o} sending request:`,r),d.send(t,"POST",f,s,15)})}Wo(e,t,s){const r=Vi(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=bu(),u=vu(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Do(d.initMessageHeaders,t,s),d.encodeInitMessageHeaders=!0;const y=o.join("");F(Re,`Creating RPC '${e}' stream ${r}: ${y}`,d);const _=l.createWebChannel(y,d);let T=!1,j=!1;const S=new zy({Fo:R=>{j?F(Re,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(T||(F(Re,`Opening RPC '${e}' stream ${r} transport.`),_.open(),T=!0),F(Re,`RPC '${e}' stream ${r} sending:`,R),_.send(R))},Mo:()=>_.close()}),C=(R,P,M)=>{R.listen(P,U=>{try{M(U)}catch(z){setTimeout(()=>{throw z},0)}})};return C(_,qn.EventType.OPEN,()=>{j||(F(Re,`RPC '${e}' stream ${r} transport opened.`),S.Qo())}),C(_,qn.EventType.CLOSE,()=>{j||(j=!0,F(Re,`RPC '${e}' stream ${r} transport closed`),S.Uo())}),C(_,qn.EventType.ERROR,R=>{j||(j=!0,Nr(Re,`RPC '${e}' stream ${r} transport errored:`,R),S.Uo(new W(O.UNAVAILABLE,"The operation could not be completed")))}),C(_,qn.EventType.MESSAGE,R=>{var P;if(!j){const M=R.data[0];me(!!M);const U=M,z=(U==null?void 0:U.error)||((P=U[0])===null||P===void 0?void 0:P.error);if(z){F(Re,`RPC '${e}' stream ${r} received error:`,z);const K=z.status;let $=function(g){const v=ge[g];if(v!==void 0)return Xx(v)}(K),b=z.message;$===void 0&&($=O.INTERNAL,b="Unknown error status: "+K+" with message "+z.message),j=!0,S.Uo(new W($,b)),_.close()}else F(Re,`RPC '${e}' stream ${r} received:`,M),S.Ko(M)}}),C(u,yu.STAT_EVENT,R=>{R.stat===Ti.PROXY?F(Re,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===Ti.NOPROXY&&F(Re,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){return new Yx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=r,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="PersistentStream";class Hy{constructor(e,t,s,r,o,l,u,d){this.Ti=e,this.n_=s,this.r_=r,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sh(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(en(t.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.i_===t&&this.V_(s,r)},s=>{e(()=>{const r=new W(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(r)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(r=>{s(()=>this.m_(r))}),this.stream.onMessage(r=>{s(()=>++this.__==1?this.g_(r):this.onNext(r))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return F(Ll,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(F(Ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wy extends Hy{constructor(e,t,s,r,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=ay(e.writeResults,e.commitTime),s=_n(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=sy(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>iy(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{}class Gy extends qy{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(e,Di(t,s),r,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(O.UNKNOWN,o.toString())})}Co(e,t,s,r,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Co(e,Di(t,s),r,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new W(O.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Ky{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(en(t),this.N_=!1):F("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RemoteStore";class Qy{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{s.enqueueAndForget(async()=>{gs(this)&&(F(ms,"Restarting streams for network reachability change."),await async function(d){const f=ae(d);f.W_.add(4),await ps(f),f.j_.set("Unknown"),f.W_.delete(4),await Ar(f)}(this))})}),this.j_=new Ky(s,r)}}async function Ar(n){if(gs(n))for(const e of n.G_)await e(!0)}async function ps(n){for(const e of n.G_)await e(!1)}function gs(n){return ae(n).W_.size===0}async function rh(n,e,t){if(!ds(e))throw e;n.W_.add(1),await ps(n),n.j_.set("Offline"),t||(t=()=>Vy(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(ms,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ar(n)})}function ih(n,e){return e().catch(t=>rh(n,t,e))}async function kr(n){const e=ae(n),t=Mt(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:sa;for(;Jy(e);)try{const r=await My(e.localStore,s);if(r===null){e.U_.length===0&&t.P_();break}s=r.batchId,Xy(e,r)}catch(r){await rh(e,r)}ah(e)&&oh(e)}function Jy(n){return gs(n)&&n.U_.length<10}function Xy(n,e){n.U_.push(e);const t=Mt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function ah(n){return gs(n)&&!Mt(n).u_()&&n.U_.length>0}function oh(n){Mt(n).start()}async function Yy(n){Mt(n).C_()}async function Zy(n){const e=Mt(n);for(const t of n.U_)e.b_(t.mutations)}async function ev(n,e,t){const s=n.U_.shift(),r=da.from(s,e,t);await ih(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await kr(n)}async function tv(n,e){e&&Mt(n).S_&&await async function(s,r){if(function(l){return Jx(l)&&l!==O.ABORTED}(r.code)){const o=s.U_.shift();Mt(s).h_(),await ih(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r)),await kr(s)}}(n,e),ah(n)&&oh(n)}async function Fl(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),F(ms,"RemoteStore received new credentials");const s=gs(t);t.W_.add(3),await ps(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ar(t)}async function nv(n,e){const t=ae(n);e?(t.W_.delete(2),await Ar(t)):e||(t.W_.add(2),await ps(t),t.j_.set("Unknown"))}function Mt(n){return n.Y_||(n.Y_=function(t,s,r){const o=ae(t);return o.M_(),new Wy(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Yy.bind(null,n),Lo:tv.bind(null,n),D_:Zy.bind(null,n),v_:ev.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await kr(n)):(await n.Y_.stop(),n.U_.length>0&&(F(ms,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const l=Date.now()+s,u=new ga(e,t,l,r,o);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lh(n,e){if(en("AsyncQueue",`${e}: ${n}`),ds(n))return new W(O.UNAVAILABLE,`${e}: ${n}`);throw n}class sv{constructor(){this.queries=Ul(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const r=ae(t),o=r.queries;r.queries=Ul(),o.forEach((l,u)=>{for(const d of u.ta)d.onError(s)})})(this,new W(O.ABORTED,"Firestore shutting down"))}}function Ul(){return new cn(n=>Uu(n),Fu)}function rv(n){n.ia.forEach(e=>{e.next()})}var Bl,zl;(zl=Bl||(Bl={}))._a="default",zl.Cache="cache";const iv="SyncEngine";class av{constructor(e,t,s,r,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new cn(u=>Uu(u),Fu),this.qa=new Map,this.Qa=new Set,this.$a=new Fe(G.comparator),this.Ua=new Map,this.Ka=new fa,this.Wa={},this.Ga=new Map,this.za=Sn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ov(n,e,t){const s=hv(n);try{const r=await function(l,u){const d=ae(l),f=we.now(),y=u.reduce((j,S)=>j.add(S.key),Pe());let _,T;return d.persistence.runTransaction("Locally write mutations","readwrite",j=>{let S=cr(),C=Pe();return d.ds.getEntries(j,y).next(R=>{S=R,S.forEach((P,M)=>{M.isValidDocument()||(C=C.add(P))})}).next(()=>d.localDocuments.getOverlayedDocuments(j,S)).next(R=>{_=R;const P=[];for(const M of u){const U=qx(M,_.get(M.key).overlayedDocument);U!=null&&P.push(new un(M.key,U,Cu(U.value.mapValue),pt.exists(!0)))}return d.mutationQueue.addMutationBatch(j,f,P,u)}).next(R=>{T=R;const P=R.applyToLocalDocumentSet(_,C);return d.documentOverlayCache.saveOverlays(j,R.batchId,P)})}).then(()=>({batchId:T.batchId,changes:zu(_)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(l,u,d){let f=l.Wa[l.currentUser.toKey()];f||(f=new Fe(te)),f=f.insert(u,d),l.Wa[l.currentUser.toKey()]=f}(s,r.batchId,t),await Rr(s,r.changes),await kr(s.remoteStore)}catch(r){const o=lh(r,"Failed to persist write");t.reject(o)}}function $l(n,e,t){const s=ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ka.forEach((o,l)=>{const u=l.view.sa(e);u.snapshot&&r.push(u.snapshot)}),function(l,u){const d=ae(l);d.onlineState=u;let f=!1;d.queries.forEach((y,_)=>{for(const T of _.ta)T.sa(u)&&(f=!0)}),f&&rv(d)}(s.eventManager,e),r.length&&s.La.p_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lv(n,e){const t=ae(n),s=e.batch.batchId;try{const r=await Oy(t.localStore,e);uh(t,s,null),ch(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rr(t,r)}catch(r){await ta(r)}}async function cv(n,e,t){const s=ae(n);try{const r=await function(l,u){const d=ae(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let y;return d.mutationQueue.lookupMutationBatch(f,u).next(_=>(me(_!==null),y=_.keys(),d.mutationQueue.removeMutationBatch(f,_))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,y,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y)).next(()=>d.localDocuments.getDocuments(f,y))})}(s.localStore,e);uh(s,e,t),ch(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rr(s,r)}catch(r){await ta(r)}}function ch(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function uh(n,e,t){const s=ae(n);let r=s.Wa[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.Wa[s.currentUser.toKey()]=r}}async function Rr(n,e,t){const s=ae(n),r=[],o=[],l=[];s.ka.isEmpty()||(s.ka.forEach((u,d)=>{l.push(s.Ha(d,e,t).then(f=>{var y;if((f||t)&&s.isPrimaryClient){const _=f?!f.fromCache:(y=void 0)===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){r.push(f);const _=pa.Yi(d.targetId,f);o.push(_)}}))}),await Promise.all(l),s.La.p_(r),await async function(d,f){const y=ae(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>A.forEach(f,T=>A.forEach(T.Hi,j=>y.persistence.referenceDelegate.addReference(_,T.targetId,j)).next(()=>A.forEach(T.Ji,j=>y.persistence.referenceDelegate.removeReference(_,T.targetId,j)))))}catch(_){if(!ds(_))throw _;F(Cy,"Failed to update sequence numbers: "+_)}for(const _ of f){const T=_.targetId;if(!_.fromCache){const j=y.Ts.get(T),S=j.snapshotVersion,C=j.withLastLimboFreeSnapshotVersion(S);y.Ts=y.Ts.insert(T,C)}}}(s.localStore,o))}async function uv(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){F(iv,"User change. New user:",e.toKey());const s=await nh(t.localStore,e);t.currentUser=e,function(o,l){o.Ga.forEach(u=>{u.forEach(d=>{d.reject(new W(O.CANCELLED,l))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rr(t,s.Rs)}}function hv(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jr(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Dy(this.persistence,new Ry,e.initialUser,this.serializer)}Xa(e){return new th(ma.ri,this.serializer)}Za(e){return new Ly}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class dv extends fr{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){me(this.persistence.referenceDelegate instanceof dr);const s=this.persistence.referenceDelegate.garbageCollector;return new gy(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new th(s=>dr.ri(s,t),this.serializer)}}class Mi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uv.bind(null,this.syncEngine),await nv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sv}()}createDatastore(e){const t=jr(e.databaseInfo.databaseId),s=function(o){return new $y(o)}(e.databaseInfo);return function(o,l,u,d){return new Gy(o,l,u,d)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,o,l,u){return new Qy(s,r,o,l,u)}(this.localStore,this.datastore,e.asyncQueue,t=>$l(this.syncEngine,t,0),function(){return Ml.D()?new Ml:new Fy}())}createSyncEngine(e,t){return function(r,o,l,u,d,f,y){const _=new av(r,o,l,u,d,f);return y&&(_.ja=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=ae(r);F(ms,"RemoteStore shutting down."),o.W_.add(5),await ps(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Mi.provider={build:()=>new Mi};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="FirestoreClient";class fv{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ce.UNAUTHENTICATED,this.clientId=_u.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async l=>{F(Lt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(s,l=>(F(Lt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=lh(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hi(n,e){n.asyncQueue.verifyOperationInProgress(),F(Lt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await nh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mv(n);F(Lt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Fl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Fl(e.remoteStore,r)),n._onlineComponents=e}async function mv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(Lt,"Using user provided OfflineComponentProvider");try{await hi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Nr("Error using user provided cache. Falling back to memory cache: "+t),await hi(n,new fr)}}else F(Lt,"Using default OfflineComponentProvider"),await hi(n,new dv(void 0));return n._offlineComponents}async function pv(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(Lt,"Using user provided OnlineComponentProvider"),await Hl(n,n._uninitializedComponentsProvider._online)):(F(Lt,"Using default OnlineComponentProvider"),await Hl(n,new Mi))),n._onlineComponents}function gv(n){return pv(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,e,t){if(!t)throw new W(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yv(n,e,t,s){if(e===!0&&s===!0)throw new W(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ql(n){if(!G.isDocumentKey(n))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function Li(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xa(n);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="firestore.googleapis.com",Gl=!0;class Kl{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dh,this.ssl=Gl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gl;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<my)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hh((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ya{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Qg;switch(s.type){case"firstParty":return new Zg(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Wl.get(t);s&&(F("ComponentProvider","Removing Datastore"),Wl.delete(t),s.terminate())}(this),Promise.resolve()}}function vv(n,e,t,s={}){var r;const o=(n=Li(n,ya))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;o.host!==dh&&o.host!==u&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:s});if(!Dt(d,l)&&(n._setSettings(d),s.mockUserToken)){let f,y;if(typeof s.mockUserToken=="string")f=s.mockUserToken,y=Ce.MOCK_USER;else{f=pf(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new W(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ce(_)}n._authCredentials=new Jg(new wu(f,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new va(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class is extends va{constructor(e,t,s){super(e,t,kx(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new G(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function bv(n,e,...t){if(n=$e(n),arguments.length===1&&(e=_u.newId()),xv("doc","path",e),n instanceof ya){const s=xe.fromString(e,...t);return ql(s),new gt(n,null,new G(s))}{if(!(n instanceof gt||n instanceof is))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(xe.fromString(e,...t));return ql(s),new gt(n.firestore,n instanceof is?n.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="AsyncQueue";class Jl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sh(this,"async_queue_retry"),this.Su=()=>{const s=ui();s&&F(Ql,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Kt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ds(e))throw e;F(Ql,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const r=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(s);throw en("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=ga.createAndSchedule(this,e,t,s,o=>this.Fu(o));return this.fu.push(r),r}Du(){this.gu&&X()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class fh extends ya{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Jl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jl(e),this._firestoreClient=void 0,await e}}}function mh(n,e){const t=typeof n=="object"?n:Wi(),s=typeof n=="string"?n:ir,r=on(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=ff("firestore");o&&vv(r,...o)}return r}function wv(n){if(n._terminated)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_v(n),n._firestoreClient}function _v(n){var e,t,s;const r=n._freezeSettings(),o=function(u,d,f,y){return new gx(u,d,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,hh(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new fv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(ot.fromBase64String(e))}catch(t){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new as(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=/^__.*__$/;class Nv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new fs(e,this.data,t,this.fieldTransforms)}}function vh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class ba{constructor(e,t,s,r,o,l){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ba(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:s,Qu:!1});return r.$u(e),r}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:s,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return mr(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(vh(this.Lu)&&Ev.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Iv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||jr(e)}ju(e,t,s,r=!1){return new ba({Lu:e,methodName:t,zu:s,path:Ie.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tv(n){const e=n._freezeSettings(),t=jr(n._databaseId);return new Iv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sv(n,e,t,s,r,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,e,t,r);Eh("Data must be an object, but it was:",l,s);const u=wh(s,l);let d,f;if(o.merge)d=new Ye(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const _ of o.mergeFields){const T=jv(e,_,t);if(!l.contains(T))throw new W(O.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Rv(y,T)||y.push(T)}d=new Ye(y),f=l.fieldTransforms.filter(_=>d.covers(_.field))}else d=null,f=l.fieldTransforms;return new Nv(new Je(u),d,f)}function bh(n,e){if(_h(n=$e(n)))return Eh("Unsupported field value:",e,n),wh(n,e);if(n instanceof gh)return function(s,r){if(!vh(r.Lu))throw r.Wu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Wu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,r){const o=[];let l=0;for(const u of s){let d=bh(u,r.Ku(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,e)}return function(s,r){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ux(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=we.fromDate(s);return{timestampValue:Pi(r.serializer,o)}}if(s instanceof we){const o=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pi(r.serializer,o)}}if(s instanceof xh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof as)return{bytesValue:Zx(r.serializer,s._byteString)};if(s instanceof gt){const o=r.databaseId,l=s.firestore._databaseId;if(!l.isEqual(o))throw r.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Yu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof yh)return function(l,u){return{mapValue:{fields:{[Au]:{stringValue:Ru},[ji]:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return ha(u.serializer,f)})}}}}}}(s,r);throw r.Wu(`Unsupported field value: ${xa(s)}`)}(n,e)}function wh(n,e){const t={};return Nu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(n,(s,r)=>{const o=bh(r,e.qu(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function _h(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof xh||n instanceof as||n instanceof gt||n instanceof gh||n instanceof yh)}function Eh(n,e,t){if(!_h(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=xa(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function jv(n,e,t){if((e=$e(e))instanceof ph)return e._internalPath;if(typeof e=="string")return kv(n,e);throw mr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Av=new RegExp("[~\\*/\\[\\]]");function kv(n,e,t){if(e.search(Av)>=0)throw mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ph(...e.split("."))._internalPath}catch{throw mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mr(n,e,t,s,r){const o=s&&!s.isEmpty(),l=r!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${s}`),l&&(d+=` in document ${r}`),d+=")"),new W(O.INVALID_ARGUMENT,u+n+d)}function Rv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n,e,t){let s;return s=n?n.toFirestore(e):e,s}function Pv(n,e,t){n=Li(n,gt);const s=Li(n.firestore,fh),r=Cv(n.converter,e);return Dv(s,[Sv(Tv(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,pt.none())])}function Dv(n,e){return function(s,r){const o=new Kt;return s.asyncQueue.enqueueAndForget(async()=>ov(await gv(s),r,o)),o.promise}(wv(n),e)}(function(e,t=!0){(function(r){kn=r})(jn),at(new Ze("firestore",(s,{instanceIdentifier:r,options:o})=>{const l=s.getProvider("app").getImmediate(),u=new fh(new Xg(s.getProvider("auth-internal")),new ex(l,s.getProvider("app-check-internal")),function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(f.options.projectId,y)}(l,r),l);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),We(hl,dl,e),We(hl,dl,"esm2017")})();const Ov=({isOpen:n,onClose:e,onLoginClick:t})=>{const[s,r]=k.useState(""),[o,l]=k.useState(""),[u,d]=k.useState(""),[f,y]=k.useState(""),[_,T]=k.useState(!1),[j,S]=k.useState(null),[C,R]=k.useState(!1),[P,M]=k.useState(!1),[U,z]=k.useState(!1),[K,$]=k.useState(!1),[b,p]=k.useState(!1),[g,v]=k.useState({name:null,email:null,password:null}),w=q=>{const ee=q.length>=2&&q.length<=50;return v(oe=>({...oe,name:ee})),ee},E=q=>{const ee=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q);return v(oe=>({...oe,email:ee})),ee},x=q=>{const ee=q.length>=8&&/[A-Z]/.test(q)&&/[a-z]/.test(q)&&/[0-9]/.test(q)&&/[^A-Za-z0-9]/.test(q);return v(oe=>({...oe,password:ee})),ee},Q=async q=>{if(console.log("handleRegister function started."),q.preventDefault(),!P||!U||!K){S("Bitte akzeptieren Sie die erforderlichen Einwilligungen");return}if(!w(s)){S("Bitte geben Sie einen gültigen Namen ein");return}if(!E(o)){S("Bitte geben Sie eine gültige E-Mail-Adresse ein");return}if(!x(u)){S("Das Passwort erfüllt nicht die Sicherheitsanforderungen");return}if(u!==f){S("Die Passwörter stimmen nicht überein");return}try{R(!0),S(null);const ee=pu(),L=(await Dp(ee,o,u)).user;console.log("User created, attempting profile update:",{userId:L.uid,name:s});const se=mh(),ye={name:s,email:o};console.log("Attempting to save (simplified) to Firestore:",{userId:L.uid,data:ye}),console.log("Firestore: Writing data:",ye),console.log("Firestore: For user:",ee.currentUser),await Pv(bv(se,"users",L.uid),ye),e()}catch(ee){ee.code==="auth/email-already-in-use"?S("Diese E-Mail-Adresse wird bereits verwendet"):ee.code==="auth/invalid-email"?S("Ungültige E-Mail-Adresse"):ee.code==="auth/weak-password"?S("Das Passwort ist zu schwach"):(S("Bei der Registrierung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."),console.error("Registration Error:",ee))}finally{R(!1)}},Se=q=>{const ee="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none transition-colors duration-200";return q===null?`${ee} border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`:q?`${ee} border-green-500 bg-green-50`:`${ee} border-red-500 bg-red-50`};return n?i.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto",children:[i.jsxs("div",{className:"text-center mb-6",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Registrierung"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Erstellen Sie Ihr kostenloses Konto"})]}),j&&i.jsxs("div",{className:"mb-4 p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-700",children:[i.jsx(ti,{className:"w-5 h-5 flex-shrink-0"}),i.jsx("p",{children:j})]}),i.jsxs("form",{onSubmit:Q,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),i.jsxs("div",{className:"relative",children:[i.jsx(cc,{className:"w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),i.jsx("input",{type:"text",id:"name",name:"name",value:s,onChange:q=>{r(q.target.value),w(q.target.value)},required:!0,className:Se(g.name),placeholder:"Max Mustermann"}),g.name!==null&&i.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:g.name?i.jsx(jo,{className:"w-5 h-5 text-green-500"}):i.jsx(ti,{className:"w-5 h-5 text-red-500"})})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"E-Mail-Adresse"}),i.jsxs("div",{className:"relative",children:[i.jsx(uc,{className:"w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),i.jsx("input",{type:"email",id:"email",name:"email",value:o,onChange:q=>{l(q.target.value),E(q.target.value)},required:!0,className:Se(g.email),placeholder:"email@beispiel.de"}),g.email!==null&&i.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:g.email?i.jsx(jo,{className:"w-5 h-5 text-green-500"}):i.jsx(ti,{className:"w-5 h-5 text-red-500"})})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Passwort"}),i.jsxs("div",{className:"relative",children:[i.jsx(Gs,{className:"w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),i.jsx("input",{type:_?"text":"password",id:"password",name:"password",value:u,onChange:q=>{d(q.target.value),x(q.target.value)},required:!0,className:Se(g.password),placeholder:"••••••••"}),i.jsx("button",{type:"button",onClick:()=>T(!_),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:_?i.jsx(Id,{className:"w-5 h-5"}):i.jsx(hc,{className:"w-5 h-5"})})]}),i.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Mindestens 8 Zeichen, mit Groß- und Kleinbuchstaben, Zahl und Sonderzeichen"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-1",children:"Passwort bestätigen"}),i.jsxs("div",{className:"relative",children:[i.jsx(Gs,{className:"w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),i.jsx("input",{type:_?"text":"password",id:"confirmPassword",name:"confirmPassword",value:f,onChange:q=>y(q.target.value),required:!0,className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"••••••••"})]})]}),i.jsxs("div",{className:"pt-4 border-t border-gray-200",children:[i.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:"Datenschutz & Einwilligungen"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx("input",{type:"checkbox",id:"terms",checked:U,onChange:q=>z(q.target.checked),required:!0,className:"mt-1"}),i.jsxs("label",{htmlFor:"terms",className:"text-sm text-gray-600",children:["Ich akzeptiere die"," ",i.jsx("a",{href:"/terms",className:"text-blue-600 hover:underline",children:"Nutzungsbedingungen"}),"*"]})]}),i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx("input",{type:"checkbox",id:"privacy",checked:P,onChange:q=>M(q.target.checked),required:!0,className:"mt-1"}),i.jsxs("label",{htmlFor:"privacy",className:"text-sm text-gray-600",children:["Ich habe die"," ",i.jsx("a",{href:"/privacy",className:"text-blue-600 hover:underline",children:"Datenschutzerklärung"})," ","gelesen und verstanden*"]})]}),i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx("input",{type:"checkbox",id:"dataProcessing",checked:K,onChange:q=>$(q.target.checked),required:!0,className:"mt-1"}),i.jsx("label",{htmlFor:"dataProcessing",className:"text-sm text-gray-600",children:"Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu*"})]}),i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx("input",{type:"checkbox",id:"marketing",checked:b,onChange:q=>p(q.target.checked),className:"mt-1"}),i.jsx("label",{htmlFor:"marketing",className:"text-sm text-gray-600",children:"Ich möchte regelmäßig Neuigkeiten und personalisierte Angebote per E-Mail erhalten (optional)"})]}),i.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"* Pflichtfelder"})]})]}),i.jsxs("div",{className:"flex gap-4 mt-6",children:[i.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",children:"Abbrechen"}),i.jsx("button",{type:"submit",disabled:C,className:`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2
                ${C?"opacity-50 cursor-not-allowed":"hover:bg-blue-700"}`,children:C?i.jsxs(i.Fragment,{children:[i.jsx(Td,{className:"w-5 h-5 animate-spin"}),"Wird registriert..."]}):"Registrieren"})]}),t&&i.jsx("div",{className:"text-center mt-4",children:i.jsxs("p",{className:"text-sm text-gray-600",children:["Bereits registriert?"," ",i.jsx("button",{type:"button",onClick:t,className:"text-blue-600 hover:underline",children:"Hier anmelden"})]})})]})]})}):null},Vv=()=>{const n=et(),[e,t]=k.useState(null),[s,r]=k.useState(50),[o,l]=k.useState(!1),[u,d]=k.useState(!1),[f,y]=k.useState(!1),[_,T]=k.useState(!1),[j,S]=k.useState(0),[C,R]=k.useState(!1),[P,M]=k.useState(null),[U,z]=k.useState(!1),[K,$]=k.useState("right"),b=k.useRef([]),p=k.useRef(null),g=["Jeder Schritt zählt auf deinem Weg zur Entspannung","Du bist stärker als dein Stress","Atme tief durch - dieser Moment gehört dir","Heute ist ein neuer Tag voller Möglichkeiten","Deine innere Ruhe ist deine Superkraft","Kleine Fortschritte führen zu großen Veränderungen","Du gestaltest dein Wohlbefinden selbst","Stress ist vorübergehend, deine Stärke bleibt","Jeder Tag ist eine neue Chance zur Veränderung","Vertraue deinem eigenen Tempo"],v={title:"Achtsamkeitsübung",description:"Präsenz im Moment und Akzeptanz",duration:"15 min",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000"},w=[{title:"Experiencing Genuine Happiness",duration:"40 min",image:"https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?auto=format&fit=crop&q=80&w=2000",category:"Meditation"},{title:"Finding Inner Peace",duration:"25 min",image:"https://images.unsplash.com/photo-1499810631641-541e76d678a2?auto=format&fit=crop&q=80&w=2000",category:"Achtsamkeit"}],E=[{title:"Stress verstehen",expert:"Dr. Sarah Meyer",duration:"35 min",image:"https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=2000"},{title:"Resilienz aufbauen",expert:"Prof. Michael Schmidt",duration:"28 min",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000"},{title:"Moderne Therapie",expert:"Dr. Lisa Wagner",duration:"42 min",image:"https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=2000"}];k.useEffect(()=>{const B=setInterval(()=>{S(ue=>(ue+1)%g.length)},5e3);return()=>clearInterval(B)},[]);const x=[{id:"great",label:"Großartig",icon:mc,color:"bg-card text-text"},{id:"okay",label:"In Ordnung",icon:Ad,color:"bg-secondary text-text"},{id:"down",label:"Niedergeschlagen",icon:kd,color:"bg-depressed text-text"},{id:"stressed",label:"Gestresst",icon:Rd,color:"bg-stressed text-text"}],Q={title:"Grundlagen des Stressmanagements",description:"Einführung in Stress und Stressbewältigung",progress:25,duration:"45 min",color:"bg-card",textColor:"text-text"},Se=()=>{n("/exercises")},q=B=>B<=30?"text-green-600":B<=70?"text-yellow-600":"text-red-600",ee=B=>B<=30?"Niedrig":B<=70?"Mittel":"Hoch",oe=()=>{R(!0),setTimeout(()=>{R(!1)},2e3)},L=B=>{if(P===B&&U){const ue=b.current[B],re=p.current;if(ue&&re){const D=ue.getBoundingClientRect();re.style.transition="all 0.3s ease-out",re.style.transform=`
          translate(${D.left}px, ${D.top}px)
          scale(${D.width/window.innerWidth})
        `,setTimeout(()=>{z(!1),M(null)},300)}}else{$(P!==null&&B>P?"left":"right"),M(B);const ue=b.current[B];if(ue){const re=ue.getBoundingClientRect();p.current&&(p.current.style.transition="none",p.current.style.transform=`
            translate(${re.left}px, ${re.top}px)
            scale(${re.width/window.innerWidth})
          `),requestAnimationFrame(()=>{z(!0),p.current&&(p.current.style.transition="all 0.3s ease-out",p.current.style.transform="translate(0, 0) scale(1)")})}}},se=()=>{if(P===null)return;$("left");const B=(P+1)%w.length;M(B)},ye=()=>{if(P===null)return;$("right");const B=P===0?w.length-1:P-1;M(B)},pe=()=>{if(!U||P===null)return null;const B=w[P];return i.jsx("div",{ref:p,className:"fixed inset-0 bg-black z-50 overflow-hidden",style:{transformOrigin:"0 0"},children:i.jsxs("div",{className:"relative h-full",children:[i.jsx("button",{onClick:ye,className:"absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors",children:i.jsx(fe,{className:"w-6 h-6 text-white"})}),i.jsx("button",{onClick:se,className:"absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors",children:i.jsx(Jt,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{className:"absolute inset-0 flex",children:[i.jsxs("div",{className:"flex-shrink-0 w-full transition-transform duration-300 ease-out",style:{transform:`translateX(${K==="left"?"-100%":"100%"})`},children:[i.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"})]}),i.jsxs("div",{className:"flex-shrink-0 w-full transition-transform duration-300 ease-out",style:{transform:"translateX(0%)"},children:[i.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"})]})]}),i.jsx("button",{onClick:()=>L(P),className:"absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md z-20",children:i.jsx(He,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-8 z-10",children:[i.jsx("div",{className:"mb-2",children:i.jsx("span",{className:"text-sm font-medium text-blue-400",children:B.category})}),i.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:B.title}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2 text-white/90",children:[i.jsx(dt,{className:"w-5 h-5"}),i.jsx("span",{children:B.duration})]}),i.jsxs("button",{className:"bg-white text-gray-900 px-6 py-3 rounded-xl font-medium flex items-center gap-2",children:[i.jsx(Be,{className:"w-5 h-5"}),"Jetzt starten"]})]})]}),i.jsx("div",{className:"absolute bottom-32 left-0 right-0 flex justify-center gap-2 z-10",children:w.map((ue,re)=>i.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${re===P?"bg-white":"bg-white/40"}`},re))})]})})},ce=()=>i.jsxs("div",{className:"mb-8",children:[i.jsx("div",{className:"flex items-center justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"🎬 Empfohlene Übungen"}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Basierend auf deinem Stresslevel"})]})}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide",children:w.map((B,ue)=>i.jsx("div",{ref:re=>b.current[ue]=re,className:"flex-none w-[85vw] max-w-[400px] first:pl-0 last:pr-4 snap-start",onClick:()=>L(ue),children:i.jsxs("div",{className:"relative aspect-video rounded-xl overflow-hidden group cursor-pointer",children:[i.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),i.jsx("div",{className:"absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full",children:i.jsx("span",{className:"text-white text-sm font-medium",children:B.duration})}),i.jsx("button",{className:"absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors",onClick:re=>re.stopPropagation(),children:i.jsx(Ks,{className:"w-4 h-4"})}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[i.jsx("div",{className:"mb-2",children:i.jsx("span",{className:"text-sm font-medium text-blue-400",children:B.category})}),i.jsx("h3",{className:"text-white font-semibold mb-2 line-clamp-2",children:B.title}),i.jsxs("button",{className:"bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors",children:[i.jsx(Be,{className:"w-4 h-4"}),"Jetzt starten"]})]})]})},ue))}),i.jsx("div",{className:"pointer-events-none absolute right-0 top-0 bottom-4 w-20 peek-gradient"})]})]}),Ft=()=>{console.log("Opening login modal...")};return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen",children:[i.jsxs("div",{className:"flex items-center justify-between mb-8",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100",alt:"Profile",className:"w-12 h-12 rounded-full object-cover"}),i.jsx("div",{children:i.jsx("h1",{className:"text-2xl font-bold text-text",children:"Guten Morgen, Junis"})})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("button",{onClick:()=>T(!0),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(dc,{className:"w-6 h-6 text-text"})}),i.jsx("button",{onClick:()=>y(!0),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(fc,{className:"w-6 h-6 text-primary"})}),i.jsx("button",{onClick:()=>n("/diary-overview"),className:"bg-journalgreen text-white rounded-3xl p-6 flex items-center justify-between shadow-lg hover:shadow-xl transition-all",children:i.jsx(Sd,{className:"w-6 h-6"})}),i.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(gi,{className:"w-6 h-6 text-text"})})]})]}),i.jsx("p",{className:"text-text/80 text-center text-lg mb-4 animate-fade-in",children:g[j]},j),i.jsxs("button",{onClick:()=>n("/exercises"),className:"w-full bg-primary text-white py-4 px-6 rounded-xl font-medium mb-8 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors",children:[i.jsx($i,{className:"w-5 h-5"}),"Zu den Übungen"]}),i.jsxs("div",{className:`${Q.color} rounded-3xl p-6 mb-8 cursor-pointer transition-all duration-300 hover:scale-[1.02]`,onClick:Se,children:[i.jsx("h2",{className:`text-3xl font-bold ${Q.textColor} mb-2`,children:Q.title}),i.jsx("p",{className:`${Q.textColor} opacity-75 mb-4`,children:Q.description}),i.jsx("div",{className:"w-full bg-accent rounded-full h-2 mb-4",children:i.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-500",style:{width:`${Q.progress}%`}})}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:`w-5 h-5 ${Q.textColor} opacity-75`}),i.jsx("span",{className:`${Q.textColor} opacity-75`,children:Q.duration})]}),i.jsx("button",{className:`bg-background rounded-full p-3 ${Q.textColor}`,children:i.jsx(Be,{className:"w-6 h-6"})})]})]}),i.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Wie fühlst du dich heute?"}),i.jsx("div",{className:"grid grid-cols-2 gap-4 mb-6",children:x.map(({id:B,label:ue,icon:re,color:D})=>i.jsxs("button",{onClick:()=>t(B),className:`${D} p-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all border-2 ${e===B?"scale-105 border-primary ring-2 ring-offset-2 ring-primary":"border-transparent hover:scale-102"}`,children:[i.jsx(re,{className:"w-8 h-8"}),i.jsx("span",{className:"font-medium text-sm",children:ue})]},B))}),i.jsxs("div",{className:"bg-card rounded-xl border-none p-6 mb-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("h3",{className:"font-semibold text-text",children:"Stressbarometer"}),i.jsx("span",{className:`font-medium ${q(s)}`,children:ee(s)})]}),i.jsx("input",{type:"range",min:"0",max:"100",value:s,onChange:B=>r(parseInt(B.target.value)),className:"w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer mb-4"}),i.jsxs("div",{className:"flex justify-between mb-4 text-sm text-text/70",children:[i.jsx("span",{children:"Entspannt"}),i.jsx("span",{children:"Gestresst"})]}),i.jsx("button",{onClick:oe,disabled:C,className:`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${C?"bg-primary/80 text-white":"bg-primary text-white hover:bg-primary/90"}`,children:C?i.jsxs(i.Fragment,{children:[i.jsx(jd,{className:"w-5 h-5"}),"Bestätigt"]}):"Bestätigen"})]}),i.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Tagesübung"}),i.jsxs("div",{className:"bg-cover bg-center rounded-3xl p-6 mb-8 relative h-48 overflow-hidden",style:{backgroundImage:`url(${v.image})`},children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"}),i.jsxs("div",{className:"relative h-full flex flex-col justify-end",children:[i.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:v.title}),i.jsx("p",{className:"text-white/90 mb-4",children:v.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:"w-5 h-5 text-white/90"}),i.jsx("span",{className:"text-white/90",children:v.duration})]}),i.jsx("button",{className:"absolute bottom-0 right-0 bg-white rounded-full p-3",children:i.jsx(Be,{className:"w-6 h-6 text-gray-900"})})]})]}),ce(),i.jsxs("div",{className:"mb-8",children:[i.jsx("div",{className:"flex items-center justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"👩‍⚕️ Experteninterviews"}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Professionelle Einblicke"})]})}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide",children:E.map((B,ue)=>i.jsx("div",{className:"flex-none w-[280px] first:pl-0 last:pr-4 snap-start",children:i.jsxs("div",{className:"relative aspect-video rounded-xl overflow-hidden group",children:[i.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),i.jsx("div",{className:"absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full",children:i.jsx("span",{className:"text-white text-sm font-medium",children:B.duration})}),i.jsx("button",{className:"absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors",children:i.jsx(Ks,{className:"w-4 h-4"})}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[i.jsx("h3",{className:"text-white font-semibold mb-2",children:B.title}),i.jsx("p",{className:"text-white/90 text-sm",children:B.expert}),i.jsxs("button",{className:"mt-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors",children:[i.jsx(Be,{className:"w-4 h-4"}),"Ansehen"]})]})]})},ue))}),i.jsx("div",{className:"pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent"})]})]}),pe(),i.jsx(tf,{isOpen:o,onClose:()=>l(!1)}),i.jsx(nf,{isOpen:u,onClose:()=>d(!1)}),i.jsx(sf,{isOpen:f,onClose:()=>y(!1)}),i.jsx(Ov,{isOpen:_,onClose:()=>T(!1),onLoginClick:()=>{T(!1),Ft()}})]})},Tt=[{id:1,text:"In den letzten vier Wochen, wie oft fühlten Sie sich verärgert wegen etwas, das unerwartet passiert ist?"},{id:2,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, die wichtigen Dinge in Ihrem Leben nicht unter Kontrolle zu haben?"},{id:3,text:"In den letzten vier Wochen, wie oft fühlten Sie sich nervös und gestresst?"},{id:4,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie Ihre Aufgaben nicht bewältigen können?"},{id:5,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass alles nach Ihren Wünschen verläuft?",isReversed:!0},{id:6,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie nicht mit all den Dingen zurechtkommen, die Sie erledigen müssen?"},{id:7,text:"In den letzten vier Wochen, wie oft konnten Sie sich entspannen?",isReversed:!0},{id:8,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie die Kontrolle über die Dinge behalten?",isReversed:!0},{id:9,text:"In den letzten vier Wochen, wie oft waren Sie verärgert, weil Dinge außerhalb Ihrer Kontrolle lagen?"},{id:10,text:"In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Schwierigkeiten sich so sehr anhäufen, dass Sie sie nicht überwinden können?"}],Mv=[{value:0,label:"Nie"},{value:1,label:"Fast nie"},{value:2,label:"Manchmal"},{value:3,label:"Häufig"},{value:4,label:"Sehr oft"}],Lv=({onClose:n})=>{const[e,t]=k.useState(0),[s,r]=k.useState({}),[o,l]=k.useState(!1),[u,d]=k.useState(!1),[f,y]=k.useState(!1),[_,T]=k.useState(0),j=k.useCallback(()=>{let P=0;return Tt.forEach((M,U)=>{const z=s[U]||0;P+=M.isReversed?4-z:z}),P},[s]),S=k.useCallback(P=>{if(r(M=>({...M,[e]:P})),e<Tt.length-1)t(M=>M+1);else{const M=j();T(M),l(!0)}},[e,j]),C=P=>P<=13?{level:"Niedrig",color:"text-green-600"}:P<=26?{level:"Mittel",color:"text-yellow-600"}:{level:"Hoch",color:"text-red-600"},R=(e+1)/Tt.length*100;if(f)return i.jsx("div",{className:"fixed inset-0 bg-white z-50 flex flex-col",children:i.jsxs("div",{className:"flex-1 p-6 flex flex-col items-center justify-center text-center",children:[i.jsx("div",{className:"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6",children:i.jsx(Ao,{className:"w-10 h-10 text-green-600"})}),i.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Herzlichen Glückwunsch!"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-sm",children:"Sie haben alle Fragen erfolgreich beantwortet. Nun können wir mit dem ersten Modul beginnen."}),i.jsx("button",{onClick:n,className:"bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors",children:"Zum Modul 1"})]})});if(u)return i.jsx("div",{className:"fixed inset-0 bg-white z-50 flex flex-col",children:i.jsxs("div",{className:"flex-1 p-6 flex flex-col items-center justify-center text-center",children:[i.jsx("div",{className:"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6",children:i.jsx(Ao,{className:"w-10 h-10 text-green-600"})}),i.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Vielen Dank!"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-sm",children:"Sie haben den PSS-10 Fragebogen erfolgreich abgeschlossen. Nun können wir mit dem Kurs beginnen."}),i.jsx("button",{onClick:()=>y(!0),className:"bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors",children:"Weiter"})]})});if(o){const{level:P,color:M}=C(_);return i.jsxs("div",{className:"fixed inset-0 bg-white z-50 flex flex-col",children:[i.jsxs("div",{className:"p-4 border-b flex items-center justify-between",children:[i.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Ihre Ergebnisse"}),i.jsx("div",{className:"w-10"})," "]}),i.jsxs("div",{className:"flex-1 p-6 flex flex-col items-center justify-center",children:[i.jsx("div",{className:"w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center mb-8",children:i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-4xl font-bold mb-2",children:_}),i.jsx("p",{className:`text-xl font-semibold ${M}`,children:P})]})}),i.jsxs("div",{className:"text-center max-w-sm",children:[i.jsxs("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:["Ihr Stresslevel ist ",P]}),i.jsxs("p",{className:"text-gray-600 mb-8",children:["Basierend auf Ihren Antworten haben Sie ein ",P.toLowerCase(),"es Stressniveau.",P==="Hoch"&&" Wir empfehlen Ihnen, die Stressmanagement-Übungen regelmäßig durchzuführen.",P==="Mittel"&&" Die Übungen in diesem Kurs werden Ihnen helfen, besser mit Stress umzugehen.",P==="Niedrig"&&" Sie haben bereits gute Strategien im Umgang mit Stress entwickelt."]}),i.jsx("button",{onClick:()=>d(!0),className:"bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors",children:"Weiter"})]})]})]})}return i.jsxs("div",{className:"fixed inset-0 bg-white z-50 flex flex-col",children:[i.jsxs("div",{className:"p-4 border-b flex items-center justify-between",children:[i.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"PSS-10 Fragebogen"}),i.jsx("div",{className:"w-10"})," "]}),i.jsxs("div",{className:"flex-1 p-6 flex flex-col",children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:i.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${R}%`}})}),i.jsxs("div",{className:"mt-2 text-sm text-gray-600 text-center",children:["Frage ",e+1," von ",Tt.length]})]}),i.jsxs("div",{className:"flex-1 flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-8",children:Tt[e].text}),i.jsx("div",{className:"space-y-4",children:Mv.map(P=>i.jsx("button",{onClick:()=>S(P.value),className:"w-full p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left",children:i.jsx("span",{className:"font-medium text-gray-900",children:P.label})},P.value))})]}),i.jsxs("div",{className:"flex justify-between mt-8",children:[i.jsx("button",{onClick:()=>t(P=>Math.max(0,P-1)),disabled:e===0,className:`p-2 rounded-lg ${e===0?"text-gray-400 cursor-not-allowed":"text-gray-600 hover:bg-gray-100"}`,children:i.jsx(fe,{className:"w-6 h-6"})}),i.jsx("button",{onClick:()=>t(P=>Math.min(Tt.length-1,P+1)),disabled:e===Tt.length-1,className:`p-2 rounded-lg ${e===Tt.length-1?"text-gray-400 cursor-not-allowed":"text-gray-600 hover:bg-gray-100"}`,children:i.jsx(Jt,{className:"w-6 h-6"})})]})]})]})]})},Fv=({isOpen:n,onClose:e})=>{const[t,s]=k.useState(0),[r,o]=k.useState(!1),[l,u]=k.useState({work:[],personal:[],daily:[]}),[d,f]=k.useState(""),y=[{title:"Beruflicher Stress",icon:"💼",color:"bg-blue-100 text-blue-900",items:["Arbeit","Zeitdruck","Konflikte","Termine","Lange Arbeitszeiten","Mangelnde Anerkennung","Hohe Verantwortung","Unsichere Jobsituation"]},{title:"Privater Stress",icon:"🏠",color:"bg-green-100 text-green-900",items:["Familie","Beziehung","Erziehung","Finanzielle Sorgen","Haushalt","Pflegeverantwortung","Gesundheit","Krankheit in der Familie"]},{title:"Alltäglicher Stress",icon:"🔁",color:"bg-orange-100 text-orange-900",items:["Lärm","Verkehr","Soziale Medien","Informationsflut","Soziale Verpflichtungen","Reizüberflutung","Wenig Zeit für mich","Schlafmangel","Bewegungsmangel"]}],_=(R,P)=>{u(M=>{const U=M[R]||[],z=U.includes(P)?U.filter(K=>K!==P):[...U,P];return{...M,[R]:z}})},T=()=>{const R=Object.values(l).reduce((P,M)=>P+M.length,0);return R===0?{work:0,personal:0,daily:0}:{work:l.work.length/R*100,personal:l.personal.length/R*100,daily:l.daily.length/R*100}};if(!n)return null;const j=()=>i.jsxs("div",{className:"text-center px-6",children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Was stresst dich aktuell?"}),i.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 mb-8 relative",children:[i.jsx("button",{onClick:()=>o(!r),className:"absolute top-4 right-4 p-2 bg-white rounded-full shadow-md",children:r?i.jsx(Cd,{className:"w-6 h-6 text-blue-600"}):i.jsx(Be,{className:"w-6 h-6 text-blue-600"})}),i.jsx(pc,{className:"w-8 h-8 text-blue-600 mb-4"}),i.jsx("p",{className:"text-blue-800",children:'"Stress entsteht oft durch viele kleine Auslöser im Alltag. Diese Übung hilft dir, deine persönlichen Stressquellen zu erkennen und besser zu verstehen. Wähle alle Punkte aus, die aktuell auf dich zutreffen - auch kleine Stressoren sind wichtig."'})]})]}),S=()=>i.jsxs("div",{className:"px-6",children:[y.map((R,P)=>i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("span",{className:"text-2xl",children:R.icon}),i.jsx("h2",{className:"text-xl font-bold text-gray-900",children:R.title})]}),i.jsx("div",{className:"grid grid-cols-2 gap-3",children:R.items.map((M,U)=>{var K;const z=(K=l[R.title.toLowerCase().split(" ")[0]])==null?void 0:K.includes(M);return i.jsx("button",{onClick:()=>_(R.title.toLowerCase().split(" ")[0],M),className:`p-4 rounded-xl text-left transition-all ${z?`${R.color} ring-2 ring-offset-2 ring-blue-500`:"bg-gray-50 hover:bg-gray-100"}`,children:M},U)})})]},P)),i.jsxs("div",{className:"mb-8",children:[i.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-4",children:"Individueller Stress"}),i.jsx("textarea",{value:d,onChange:R=>f(R.target.value),placeholder:"Gibt es weitere Stressoren, die dich belasten?",className:"w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500",rows:4})]})]}),C=()=>{const R=T();return i.jsxs("div",{className:"px-6",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 text-center",children:"Dein Stressprofil"}),i.jsxs("div",{className:"bg-white rounded-xl border p-6 mb-8",children:[i.jsx("div",{className:"flex items-center justify-center mb-8",children:i.jsx(Pd,{className:"w-32 h-32 text-blue-600"})}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Beruflicher Stress"}),i.jsxs("span",{className:"font-medium",children:[Math.round(R.work),"%"]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Privater Stress"}),i.jsxs("span",{className:"font-medium",children:[Math.round(R.personal),"%"]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Alltäglicher Stress"}),i.jsxs("span",{className:"font-medium",children:[Math.round(R.daily),"%"]})]})]})]}),i.jsx("div",{className:"bg-green-50 rounded-xl p-6 mb-8",children:i.jsx("p",{className:"text-green-800 font-medium text-center",children:"Gut gemacht! Du hast den ersten Schritt zur besseren Stressbewältigung gemacht."})})]})};return i.jsxs("div",{className:"fixed inset-0 bg-white z-50 flex flex-col",children:[i.jsxs("div",{className:"flex-shrink-0 bg-white p-4 border-b flex items-center justify-between",children:[i.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(He,{className:"w-6 h-6 text-gray-600"})}),i.jsx("div",{className:"flex gap-2",children:[0,1,2].map(R=>i.jsx("div",{className:`w-2 h-2 rounded-full ${R<=t?"bg-blue-600":"bg-gray-200"}`},R))}),i.jsx("div",{className:"w-10"})," "]}),i.jsx("div",{className:"flex-1 overflow-y-auto",children:i.jsxs("div",{className:"py-8",children:[t===0&&j(),t===1&&S(),t===2&&C()]})}),i.jsx("div",{className:"flex-shrink-0 bg-white p-6 border-t",children:i.jsxs("div",{className:"flex gap-4 max-w-md mx-auto",children:[t>0&&i.jsxs("button",{onClick:()=>s(R=>R-1),className:"flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2",children:[i.jsx(fe,{className:"w-5 h-5"}),"Zurück"]}),t<2?i.jsxs("button",{onClick:()=>s(R=>R+1),className:"flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg",children:["Weiter",i.jsx(Jt,{className:"w-5 h-5"})]}):i.jsx("button",{onClick:e,className:"flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg",children:"Abschließen"})]})})]})},Uv=()=>{et(),k.useState(!1);const[n,e]=k.useState(null),[t,s]=k.useState(!1),[r,o]=k.useState(!1),[l,u]=k.useState(!1),[d,f]=k.useState(!1),[y,_]=k.useState(!1),[T,j]=k.useState([]),[S,C]=k.useState(!1),[R,P]=k.useState(0),[M,U]=k.useState(!1),z=k.useRef(0),K=[{title:"Einführung: Was ist Stress?",subtitle:"Woche 1",description:"Grundlagen & persönliche Analyse",duration:"45 min",color:"bg-card",textColor:"text-text",progress:0},{title:"Achtsamkeit & Selbstwahrnehmung",subtitle:"Woche 2",description:"Gedanken und Stressreaktionen erkennen",duration:"50 min",color:"bg-primary/30",textColor:"text-text",progress:0},{title:"Denkfallen aufdecken",subtitle:"Woche 3",description:"Kognitive Verzerrungen bei Stress",duration:"40 min",color:"bg-primary/40",textColor:"text-text",progress:0},{title:"Kognitive Umstrukturierung I",subtitle:"Woche 4",description:"Negative Gedanken hinterfragen",duration:"45 min",color:"bg-yellow-100",textColor:"text-yellow-900",progress:0},{title:"Kognitive Umstrukturierung II",subtitle:"Woche 5",description:"Neue Perspektiven üben (Anwendung)",duration:"45 min",color:"bg-red-100",textColor:"text-red-900",progress:0},{title:"Emotionsregulation",subtitle:"Woche 6",description:"Umgang mit stressbedingten Gefühlen",duration:"50 min",color:"bg-indigo-100",textColor:"text-indigo-900",progress:0},{title:"Ressourcen & Selbstwirksamkeit",subtitle:"Woche 7",description:"Eigene Stärken nutzen",duration:"45 min",color:"bg-pink-100",textColor:"text-pink-900",progress:0},{title:"Abschluss & Transfer",subtitle:"Woche 8",description:"Rückblick, Festigung und Zukunftsplan",duration:"40 min",color:"bg-teal-100",textColor:"text-teal-900",progress:0}],$={"Einführung: Was ist Stress?":{theorie:[{title:"Einleitung",type:"Fragebogen",duration:"10 min",description:"PSS-10 Fragebogen zur Stresseinschätzung",onClick:()=>f(!0)},{title:"Was ist Stress?",type:"Video",duration:"10 min",description:"Definition und Grundlagen von Stress",onClick:()=>{u(!0),j([]),z.current=Math.floor(Date.now()/1e3),o(!0)},keyFacts:["Stress ist eine natürliche körperliche Reaktion auf Herausforderungen","Das Stresshormon Cortisol spielt eine wichtige Rolle","Es gibt positiven (Eustress) und negativen Stress (Disstress)","Stressreaktionen aktivieren das sympathische Nervensystem","Chronischer Stress kann gesundheitliche Folgen haben","Jeder Mensch reagiert unterschiedlich auf Stressoren"]},{title:"Persönliche Stressanalyse",type:"Lektion",duration:"15 min",description:"Identifikation persönlicher Stressoren",onClick:()=>_(!0)}],praxis:[{title:"Atemübungen",type:"Übung",duration:"15 min",description:"Grundlegende Entspannungstechnik",onClick:()=>C(!0)},{title:"Stressbarometer",type:"Übung",duration:"10 min",description:"Einschätzung des persönlichen Stresslevels"}],reflexion:[{title:"Stresstagebuch",type:"Journal",duration:"10 min",description:"Dokumentation von Stresssituationen"},{title:"Persönliche Stressanalyse",type:"Fragebogen",duration:"10 min",description:"Erfassung individueller Stressmuster"}]},"Achtsamkeit & Selbstwahrnehmung":{theorie:[{title:"Grundlagen der Achtsamkeit",type:"Video",duration:"12 min",description:"Einführung in achtsame Wahrnehmung"},{title:"Stressreaktionen erkennen",type:"Lektion",duration:"15 min",description:"Körperliche und mentale Anzeichen"}],praxis:[{title:"Body Scan",type:"Übung",duration:"10 min",description:"Körperwahrnehmungsübung"},{title:"Achtsames Atmen",type:"Meditation",duration:"15 min",description:"Fokussierte Atembeobachtung"}],reflexion:[{title:"Achtsamkeitstagebuch",type:"Journal",duration:"10 min",description:"Dokumentation der Wahrnehmungen"}]},"Denkfallen aufdecken":{theorie:[{title:"Kognitive Verzerrungen",type:"Video",duration:"15 min",description:"Typische Denkmuster bei Stress"},{title:"Denkfallen erkennen",type:"Lektion",duration:"12 min",description:"Analyse von Gedankenmustern"}],praxis:[{title:"Gedankenprotokoll",type:"Übung",duration:"15 min",description:"Dokumentation von Denkfallen"}],reflexion:[{title:"Selbstreflexion",type:"Journal",duration:"10 min",description:"Analyse eigener Denkmuster"}]},"Kognitive Umstrukturierung I":{theorie:[{title:"Gedanken hinterfragen",type:"Video",duration:"12 min",description:"Methoden der Gedankenanalyse"}],praxis:[{title:"Realitätscheck",type:"Übung",duration:"15 min",description:"Überprüfung von Gedanken"}],reflexion:[{title:"Gedankentagebuch",type:"Journal",duration:"10 min",description:"Dokumentation der Analyse"}]},"Kognitive Umstrukturierung II":{theorie:[{title:"Neue Perspektiven",type:"Video",duration:"15 min",description:"Alternative Sichtweisen entwickeln"}],praxis:[{title:"Perspektivwechsel",type:"Übung",duration:"20 min",description:"Übungen zur Neuinterpretation"}],reflexion:[{title:"Erfolgsjournal",type:"Journal",duration:"10 min",description:"Dokumentation positiver Veränderungen"}]},Emotionsregulation:{theorie:[{title:"Emotionen verstehen",type:"Video",duration:"12 min",description:"Grundlagen der Emotionsregulation"}],praxis:[{title:"Gefühlskompass",type:"Übung",duration:"15 min",description:"Emotionen erkennen und steuern"}],reflexion:[{title:"Emotionstagebuch",type:"Journal",duration:"10 min",description:"Dokumentation emotionaler Erfahrungen"}]},"Ressourcen & Selbstwirksamkeit":{theorie:[{title:"Stärken erkennen",type:"Video",duration:"12 min",description:"Identifikation persönlicher Ressourcen"}],praxis:[{title:"Ressourcenaktivierung",type:"Übung",duration:"15 min",description:"Stärkung vorhandener Ressourcen"}],reflexion:[{title:"Erfolgsjournal",type:"Journal",duration:"10 min",description:"Dokumentation von Erfolgserlebnissen"}]},"Abschluss & Transfer":{theorie:[{title:"Rückblick",type:"Video",duration:"15 min",description:"Zusammenfassung der Kernkonzepte"}],praxis:[{title:"Zukunftsplan",type:"Übung",duration:"20 min",description:"Entwicklung nachhaltiger Strategien"}],reflexion:[{title:"Abschlussreflexion",type:"Journal",duration:"15 min",description:"Gesamtreflexion und Ausblick"}]}},b=[{category:"Beruflich",factors:["Hohe Arbeitsbelastung und Termindruck","Konflikte mit Kollegen oder Vorgesetzten","Unsichere Jobsituation","Lange Arbeitszeiten","Mangelnde Anerkennung"]},{category:"Privat",factors:["Finanzielle Sorgen","Familiäre Konflikte","Zeitmangel für Hobbys","Beziehungsprobleme","Gesundheitliche Probleme"]},{category:"Alltäglich",factors:["Verkehr und Pendeln","Haushaltspflichten","Soziale Verpflichtungen","Informationsüberflutung","Schlafmangel"]}],p=[{title:"Bewusstes Atmen",description:"Entdecken Sie die Kraft der Atemtechnik für mehr Ruhe und Gelassenheit im Alltag.",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000"},{title:"4-7-8 Atemtechnik",description:"Eine wissenschaftlich fundierte Methode zur Stressreduktion und Entspannung.",image:"https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=2000"},{title:"Bereit für die Übung?",description:"Nehmen Sie sich einen ruhigen Moment und finden Sie eine bequeme Position.",image:"https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2000"}];k.useEffect(()=>{if(r){const L=setInterval(()=>{const se=Math.floor(Date.now()/1e3)-z.current,pe=($[n==null?void 0:n.title]||$["Einführung: Was ist Stress?"]).theorie.find(ue=>ue.type==="Video"),ce=(pe==null?void 0:pe.keyFacts)||[],Ft=Array.from({length:ce.length},(ue,re)=>re*5),B=ce.filter((ue,re)=>Ft[re]<=se);j(B),B.length===ce.length&&clearInterval(L)},1e3);return()=>clearInterval(L)}},[r,n]);const g=()=>{u(!0),o(!0),z.current=Math.floor(Date.now()/1e3)},v=()=>{u(!1),o(!1),j([])},w=()=>{s(!1),e(null)},E=$[n==null?void 0:n.title]||$["Einführung: Was ist Stress?"],x=L=>{switch(L){case"Video":return Od;case"Lektion":return xi;case"Übung":return $i;case"Meditation":case"Journal":case"Fragebogen":return Ks;default:return xi}},Q=L=>{e(L),s(!0)},Se=()=>i.jsx("div",{className:"fixed inset-0 bg-background z-50",children:i.jsxs("div",{className:"relative h-screen flex flex-col",children:[i.jsx("div",{className:"p-6 flex justify-between items-start border-b",children:i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("button",{onClick:()=>U(!1),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-text"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Stressoren im Alltag"}),i.jsx("p",{className:"text-gray-600",children:"Identifizieren Sie Ihre persönlichen Stressauslöser"})]})]})}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[i.jsx("div",{className:"bg-card rounded-xl p-4 mb-6",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"p-2 bg-accent rounded-lg",children:i.jsx(fc,{className:"w-5 h-5 text-primary"})}),i.jsx("p",{className:"text-sm text-text",children:"Nehmen Sie sich einen Moment Zeit, um über Ihre persönlichen Stressauslöser nachzudenken. Das Erkennen dieser Faktoren ist der erste Schritt zu einem besseren Stressmanagement."})]})}),i.jsx("div",{className:"space-y-6",children:b.map((L,se)=>i.jsxs("div",{className:"bg-card rounded-xl border-none p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:L.category}),i.jsx("div",{className:"space-y-4",children:L.factors.map((ye,pe)=>i.jsxs("div",{className:"flex items-start gap-3 p-4 bg-accent rounded-xl hover:bg-card transition-colors cursor-pointer",children:[i.jsx("div",{className:"w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5",children:i.jsx("span",{className:"text-sm text-primary font-medium",children:pe+1})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-gray-900",children:ye}),i.jsx("textarea",{placeholder:"Notieren Sie hier Ihre persönlichen Erfahrungen...",className:"mt-2 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",rows:2})]})]},pe))})]},se))}),i.jsx("div",{className:"mt-8",children:i.jsx("button",{className:"w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors",children:"Speichern"})})]})]})}),q=()=>i.jsx("div",{className:"fixed inset-0 bg-background z-50",children:R<p.length?i.jsxs("div",{className:"relative h-screen",children:[i.jsx("div",{className:"absolute inset-0 bg-cover bg-center transition-opacity duration-500",style:{backgroundImage:`url(${p[R].image})`},children:i.jsx("div",{className:"absolute inset-0 bg-black/30"})}),i.jsxs("div",{className:"relative h-full flex flex-col",children:[i.jsx("div",{className:"p-6 flex justify-between items-start",children:i.jsx("button",{onClick:()=>{P(0),C(!1)},className:"w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md",children:i.jsx(fe,{className:"w-6 h-6 text-primary"})})}),i.jsxs("div",{className:"flex-1 flex flex-col justify-end p-8",children:[i.jsx("h1",{className:"text-4xl font-bold text-white mb-4 animate-fade-in",children:p[R].title}),i.jsx("p",{className:"text-white/90 text-lg mb-8 animate-fade-in",children:p[R].description}),i.jsx("button",{onClick:()=>P(L=>L+1),className:"w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors animate-fade-in",children:"Weiter"})]}),i.jsx("div",{className:"absolute bottom-32 left-0 right-0 flex justify-center gap-2",children:p.map((L,se)=>i.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${se===R?"bg-primary":"bg-primary/30"}`},se))})]})]}):i.jsxs("div",{className:"relative h-screen",children:[i.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:'url("https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2000")'},children:i.jsx("div",{className:"absolute inset-0 bg-black/30"})}),i.jsxs("div",{className:"relative h-full flex flex-col",children:[i.jsxs("div",{className:"p-6 flex justify-between items-start",children:[i.jsx("button",{onClick:()=>{P(0),C(!1)},className:"w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md",children:i.jsx(fe,{className:"w-6 h-6 text-primary"})}),i.jsx("button",{className:"w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md",children:i.jsx(ko,{className:"w-6 h-6 text-primary"})})]}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center",children:[i.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Atemübungen"}),i.jsx("p",{className:"text-white/90 text-lg mb-8",children:"Finden Sie innere Ruhe durch bewusstes Atmen"}),i.jsx("div",{className:"w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center mb-8",children:i.jsx(Be,{className:"w-12 h-12 text-primary"})}),i.jsx("p",{className:"text-text/80",children:"10 Minuten • Anfänger"})]}),i.jsxs("div",{className:"bg-card rounded-t-3xl p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Übungsablauf"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0",children:i.jsx("span",{className:"text-primary font-medium",children:"1"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-gray-900",children:"Einatmen"}),i.jsx("p",{className:"text-gray-600",children:"4 Sekunden lang tief durch die Nase einatmen"})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0",children:i.jsx("span",{className:"text-primary font-medium",children:"2"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-gray-900",children:"Halten"}),i.jsx("p",{className:"text-gray-600",children:"7 Sekunden lang den Atem anhalten"})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0",children:i.jsx("span",{className:"text-primary font-medium",children:"3"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-gray-900",children:"Ausatmen"}),i.jsx("p",{className:"text-gray-600",children:"8 Sekunden lang durch den Mund ausatmen"})]})]})]})]})]})]})}),ee=()=>i.jsxs("div",{className:"fixed inset-0 bg-black/90 z-50 flex flex-col",children:[i.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[i.jsx("button",{onClick:v,className:"absolute top-4 right-4 z-10 bg-primary/20 hover:bg-primary/30 rounded-full p-2 transition-colors",children:i.jsx(He,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"absolute inset-0",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",alt:"Video thumbnail",className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center",children:i.jsx("button",{onClick:g,className:"w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300",children:i.jsx(Be,{className:"w-8 h-8 text-primary"})})})]})]}),i.jsxs("div",{className:"bg-card rounded-t-3xl p-6 max-h-[40vh] overflow-y-auto z-10",children:[i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Wichtige Erkenntnisse"}),i.jsx("div",{className:"space-y-3",children:T.map((L,se)=>i.jsxs("div",{className:"flex items-start gap-3 animate-fade-in",children:[i.jsx("div",{className:"w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5",children:i.jsx("span",{className:"text-sm text-primary font-medium",children:se+1})}),i.jsx("p",{className:"text-text",children:L})]},se))})]})]}),oe=()=>i.jsx("div",{className:"fixed inset-0 bg-background z-40 overflow-y-auto",children:i.jsxs("div",{className:"min-h-screen",children:[i.jsxs("div",{className:"relative h-96 bg-cover bg-center cursor-pointer",style:{backgroundImage:'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000")'},onClick:g,children:[i.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center",children:i.jsx("button",{onClick:g,className:"w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300",children:i.jsx(Be,{className:"w-8 h-8 text-primary"})})}),i.jsx("div",{onClick:L=>{L.stopPropagation(),w()},className:"absolute top-4 left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-card active:bg-muted transition-colors shadow-lg z-50",children:i.jsx(fe,{className:"w-8 h-8 text-primary"})}),i.jsx("button",{onClick:L=>L.stopPropagation(),className:"absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center",children:i.jsx(gi,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl p-6 z-10",children:[i.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:n==null?void 0:n.title}),i.jsx("p",{className:"text-text/80 mb-2",children:n==null?void 0:n.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:"w-5 h-5 text-primary"}),i.jsx("span",{className:"text-text/80",children:n==null?void 0:n.duration})]})]})]}),i.jsxs("div",{className:"px-4 py-8",children:[i.jsxs("section",{className:"mb-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Theorie"}),i.jsx("div",{className:"space-y-4",children:E.theorie.map((L,se)=>{const ye=x(L.type);return i.jsx("div",{className:"bg-accent rounded-2xl p-4",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-card p-3 rounded-xl",children:i.jsx(ye,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"font-semibold text-text",children:L.title}),i.jsx("p",{className:"text-sm text-text/80 mb-2",children:L.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:"w-4 h-4 text-primary"}),i.jsx("span",{className:"text-sm text-text/80",children:L.duration})]})]}),i.jsx("button",{className:"bg-background p-2 rounded-full",onClick:L.onClick,children:i.jsx(Be,{className:"w-5 h-5 text-primary"})})]})},se)})})]}),i.jsxs("section",{className:"mb-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Praxis"}),i.jsx("div",{className:"space-y-4",children:E.praxis.map((L,se)=>{const ye=x(L.type);return i.jsx("div",{className:"bg-accent rounded-2xl p-4",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-card p-3 rounded-xl",children:i.jsx(ye,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"font-semibold text-text",children:L.title}),i.jsx("p",{className:"text-sm text-text/80 mb-2",children:L.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:"w-4 h-4 text-primary"}),i.jsx("span",{className:"text-sm text-text/80",children:L.duration})]})]}),i.jsx("button",{className:"bg-background p-2 rounded-full",onClick:L.onClick,children:i.jsx(Be,{className:"w-5 h-5 text-primary"})})]})},se)})})]}),i.jsxs("section",{children:[i.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Reflexion"}),i.jsx("div",{className:"space-y-4",children:E.reflexion.map((L,se)=>{const ye=x(L.type);return i.jsx("div",{className:"bg-accent rounded-2xl p-4",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-card p-3 rounded-xl",children:i.jsx(ye,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"font-semibold text-text",children:L.title}),i.jsx("p",{className:"text-sm text-text/80 mb-2",children:L.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:"w-4 h-4 text-primary"}),i.jsx("span",{className:"text-sm text-text/80",children:L.duration})]})]}),i.jsx("button",{className:"bg-background p-2 rounded-full",children:i.jsx(Be,{className:"w-5 h-5 text-primary"})})]})},se)})})]})]})]})});return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen",children:[!t&&i.jsxs("div",{className:"flex items-center justify-between mb-8",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Übungen"}),i.jsx("button",{className:"p-2",children:i.jsx(gi,{className:"w-6 h-6 text-gray-600"})})]}),!t&&i.jsxs("div",{className:"relative mb-8",children:[i.jsx(Dd,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Suche nach Übungen",className:"w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),!t&&i.jsx("div",{className:"space-y-4",children:K.map((L,se)=>i.jsxs("div",{className:`${L.color} rounded-3xl p-6 relative transition-all duration-300 hover:scale-[1.02] cursor-pointer`,onClick:()=>Q(L),children:[i.jsxs("div",{className:"flex justify-between items-start mb-4",children:[i.jsxs("div",{children:[i.jsx("h2",{className:`text-2xl font-bold ${L.textColor} mb-1`,children:L.title}),i.jsx("p",{className:`${L.textColor} opacity-75 text-sm`,children:L.subtitle})]}),i.jsx("button",{className:"p-1",children:i.jsx(ko,{className:`w-5 h-5 ${L.textColor}`})})]}),i.jsx("p",{className:`${L.textColor} opacity-75 mb-4`,children:L.description}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dt,{className:`w-5 h-5 ${L.textColor} opacity-75`}),i.jsx("span",{className:`${L.textColor} opacity-75`,children:L.duration})]}),i.jsx("button",{className:`absolute bottom-6 right-6 bg-white rounded-full p-3 ${L.textColor}`,children:i.jsx(Be,{className:"w-6 h-6"})})]},se))}),t&&oe(),l&&ee(),d&&i.jsx(Lv,{onClose:()=>f(!1)}),y&&i.jsx(Fv,{isOpen:y,onClose:()=>_(!1)}),S&&q(),M&&Se()]})},Bv=()=>{const[n,e]=k.useState("week"),[t,s]=k.useState("March 11-17"),r=[{day:"Mon",value:80,note:"Stressmanagement-Übungen abgeschlossen",stressLevel:7,activities:["Meditation","Atemübungen"]},{day:"Tue",value:65,note:"Atemübungen durchgeführt",stressLevel:5,activities:["Atemübungen"]},{day:"Wed",value:90,note:"Erfolgreich Stressoren identifiziert",stressLevel:8,activities:["Stressanalyse"]},{day:"Thu",value:75,note:"Progressive Muskelentspannung praktiziert",stressLevel:6,activities:["PMR"]},{day:"Fri",value:85,note:"Kognitive Übungen absolviert",stressLevel:4,activities:["Gedankenjournal"]},{day:"Sat",value:95,note:"Entspannungstechniken angewendet",stressLevel:3,activities:["Yoga","Meditation"]},{day:"Sun",value:88,note:"Ressourcen aktiviert",stressLevel:2,activities:["Naturspaziergang"]}],o=[{title:"7-Tage-Serie",description:"Tägliche Stressmanagement-Übungen",date:"March 17"},{title:"Modul-Meilenstein",description:"Grundlagen des Stressmanagements abgeschlossen",date:"March 15"},{title:"Entspannungs-Experte",description:"10 Entspannungsübungen durchgeführt",date:"March 12"}];return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen",children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("h1",{className:"text-2xl font-bold text-text",children:"Fortschritt"}),i.jsxs("button",{className:"flex items-center gap-2 text-sm text-blue-600",children:[i.jsx(Vd,{className:"w-4 h-4 text-primary"}),"Daten exportieren"]})]}),i.jsxs("div",{className:"bg-card rounded-xl shadow-sm p-4 mb-6",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Md,{className:"w-5 h-5 text-primary"}),i.jsx("h2",{className:"text-lg font-semibold text-text",children:"Stresslevel-Verlauf"})]}),i.jsx("div",{className:"flex gap-2",children:["week","month","year"].map(l=>i.jsx("button",{onClick:()=>e(l),className:`px-3 py-1 rounded-full text-sm ${n===l?"bg-primary text-white":"text-text/80 hover:bg-accent"}`,children:l==="week"?"Woche":l==="month"?"Monat":"Jahr"},l))})]}),i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{className:"p-1 hover:bg-accent rounded-full",children:i.jsx(fe,{className:"w-5 h-5 text-text"})}),i.jsx("span",{className:"font-medium text-text",children:t}),i.jsx("button",{className:"p-1 hover:bg-accent rounded-full",children:i.jsx(Jt,{className:"w-5 h-5 text-text"})})]}),i.jsxs("div",{className:"relative h-40 flex items-end gap-2 mb-6",children:[i.jsx("div",{className:"absolute inset-0 flex flex-col justify-between",children:[10,8,6,4,2].map(l=>i.jsx("div",{className:"border-b border-gray-100 h-8 flex items-center",children:i.jsx("span",{className:"text-xs text-muted w-6",children:l})},l))}),r.map(l=>i.jsxs("div",{className:"flex-1 flex flex-col items-center gap-2 relative group z-10",children:[i.jsxs("div",{className:"absolute bottom-full mb-2 w-48 bg-gray-900 text-white text-sm rounded-lg p-2 hidden group-hover:block",children:[i.jsxs("p",{className:"font-medium",children:["Stresslevel: ",l.stressLevel,"/10"]}),i.jsx("p",{className:"text-gray-300 text-xs",children:l.note}),l.activities.length>0&&i.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:l.activities.map(u=>i.jsx("span",{className:"px-1.5 py-0.5 bg-gray-700 rounded-full text-xs",children:u},u))})]}),i.jsx("div",{className:"w-4 h-4 rounded-full bg-primary border-4 border-card shadow-lg absolute cursor-pointer transition-transform hover:scale-110",style:{bottom:`${l.stressLevel*10}%`}}),i.jsx("div",{className:"h-full w-px bg-gray-100"}),i.jsx("span",{className:"text-xs text-text/80 mt-2",children:l.day})]},l.day))]}),i.jsx("div",{className:"flex items-center justify-center gap-4 text-sm text-text/80",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-primary"}),i.jsx("span",{className:"text-text/80",children:"Stresslevel"})]})})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[i.jsxs("div",{className:"bg-card rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsx(Ld,{className:"w-5 h-5 text-primary"}),i.jsx("h3",{className:"font-semibold text-text",children:"Aktuelle Serie"})]}),i.jsx("p",{className:"text-2xl font-bold text-text",children:"7 Tage"}),i.jsx("p",{className:"text-sm text-text/80",children:"Bestleistung: 14 Tage"})]}),i.jsxs("div",{className:"bg-primary/30 rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsx(Ro,{className:"w-5 h-5 text-primary"}),i.jsx("h3",{className:"font-semibold text-text",children:"Übungszeit"})]}),i.jsx("p",{className:"text-2xl font-bold text-text",children:"120 min"}),i.jsx("p",{className:"text-sm text-text/80",children:"Diese Woche"})]})]}),i.jsxs("div",{className:"bg-card rounded-xl shadow-sm p-4 mb-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-text mb-4",children:"Aktuelle Erfolge"}),i.jsx("div",{className:"space-y-4",children:o.map(l=>i.jsxs("div",{className:"flex items-start gap-4 py-2 border-b border-gray-100 last:border-0",children:[i.jsx("div",{className:"bg-accent p-2 rounded-lg",children:i.jsx(Ro,{className:"w-5 h-5 text-primary"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-text",children:l.title}),i.jsx("p",{className:"text-sm text-text/80",children:l.description}),i.jsx("p",{className:"text-xs text-muted mt-1",children:l.date})]})]},l.title))})]}),i.jsxs("div",{className:"bg-card rounded-xl shadow-sm p-4",children:[i.jsx("h2",{className:"text-lg font-semibold text-text mb-4",children:"Aktivitätsübersicht"}),i.jsx("div",{className:"space-y-4",children:[{name:"Stressmanagement-Grundlagen",completed:4,total:8,progress:50},{name:"Entspannungsübungen",completed:10,total:12,progress:83},{name:"Kognitive Übungen",completed:6,total:8,progress:75}].map(l=>i.jsxs("div",{className:"space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("p",{className:"text-sm font-medium text-text",children:l.name}),i.jsxs("p",{className:"text-sm text-text/80",children:[l.completed,"/",l.total]})]}),i.jsx("div",{className:"w-full bg-accent rounded-full h-2",children:i.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-500",style:{width:`${l.progress}%`}})})]},l.name))})]})]})},zv=()=>{const n=et(),[e,t]=k.useState(!1),s=[{icon:xr,label:"Einstellungen",description:"App-Einstellungen verwalten",path:"/settings"},{icon:Ui,label:"Benachrichtigungen",description:"Benachrichtigungen verwalten",path:"/notifications"},{icon:Bi,label:"Datenschutz",description:"Datenschutzeinstellungen anpassen",path:"/privacy"},{icon:zi,label:"Hilfe & Support",description:"Hilfe und Kontakt",path:"/help"}],r=[{id:"mindfulness",emoji:"🌀",name:"Achtsamkeits-Einsteiger",unlocked:!0},{id:"diary",emoji:"📔",name:"Tagebuch-Held:in",unlocked:!0},{id:"relaxation",emoji:"🌿",name:"Entspannungsmeister:in",unlocked:!1},{id:"thinking",emoji:"🔄",name:"Flex-Denker:in",unlocked:!0},{id:"streak",emoji:"🔥",name:"7-Tage-Serie",unlocked:!1},{id:"reflection",emoji:"🎯",name:"Selbstreflexion-Profi",unlocked:!1}],o={title:"Fülle heute dein Barometer aus",reward:"+10 XP",emoji:"🎯"};return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-text"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-text",children:"Profil"}),i.jsx("p",{className:"text-text/80",children:"Verwalten Sie Ihr Konto"})]})]}),i.jsx("div",{className:"bg-card rounded-xl shadow-sm p-6 mb-8",children:i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150",alt:"Profile",className:"w-20 h-20 rounded-full object-cover"}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-xl font-bold text-text",children:"Junis Ba"}),i.jsx("p",{className:"text-text/80",children:"Junis.ba@example.com"}),i.jsx("p",{className:"text-sm text-muted",children:"Mitglied seit März 2024"})]})]})}),i.jsxs("div",{className:"bg-primary/30 rounded-xl shadow-sm p-6 mb-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("h2",{className:"text-xl font-bold text-text",children:"🎖️ Dein Fortschritt"}),i.jsx("button",{onClick:()=>t(!0),className:"p-2 hover:bg-accent rounded-full",children:i.jsx(gc,{className:"w-5 h-5 text-primary"})})]}),i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-text",children:"Level 2"}),i.jsx("p",{className:"text-sm text-text/80",children:"Du entwickelst mentale Stärke"})]}),i.jsxs("div",{className:"text-right",children:[i.jsx("p",{className:"text-sm font-medium text-text",children:"120 / 200 XP"}),i.jsx("p",{className:"text-xs text-muted",children:"bis zum nächsten Level"})]})]}),i.jsx("div",{className:"w-full h-3 bg-accent rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-primary rounded-full",style:{width:"60%"}})})]}),i.jsxs("div",{className:"relative h-32 mb-8",children:[i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("div",{className:"text-6xl animate-bounce",children:"🌱"})}),i.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:i.jsx("p",{className:"text-sm text-center text-text/80",children:"Dein Baum wächst weiter – stark! 🌱"})})]}),i.jsxs("div",{className:"mb-8",children:[i.jsx("h3",{className:"font-medium text-text mb-4",children:"Freigeschaltete Erfolge"}),i.jsx("div",{className:"grid grid-cols-3 gap-4",children:r.map(l=>i.jsxs("div",{className:`aspect-square rounded-xl flex flex-col items-center justify-center p-2 ${l.unlocked?"bg-accent text-text":"bg-muted text-muted"}`,children:[i.jsx("span",{className:"text-2xl mb-1",children:l.emoji}),i.jsx("span",{className:"text-xs text-center",children:l.unlocked?l.name:"???"}),!l.unlocked&&i.jsx("span",{className:"text-xs mt-1",children:"Noch 2 Übungen"})]},l.id))})]}),i.jsxs("div",{className:"bg-primary rounded-xl p-6 text-white",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("h3",{className:"font-medium",children:"Meine tägliche Challenge"}),i.jsx("span",{className:"text-2xl",children:o.emoji})]}),i.jsx("p",{className:"text-lg font-medium mb-2",children:o.title}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Fd,{className:"w-4 h-4"}),i.jsx("span",{className:"text-sm",children:o.reward})]})]})]}),i.jsx("div",{className:"space-y-4",children:s.map(l=>{const u=l.icon;return i.jsxs("button",{onClick:()=>n(l.path),className:"w-full bg-card rounded-xl shadow-sm p-4 flex items-center gap-4 hover:bg-accent transition-colors",children:[i.jsx("div",{className:"bg-accent p-2 rounded-lg",children:i.jsx(u,{className:"w-6 h-6 text-primary"})}),i.jsxs("div",{className:"flex-1 text-left",children:[i.jsx("h3",{className:"font-semibold text-text",children:l.label}),i.jsx("p",{className:"text-sm text-text/80",children:l.description})]}),i.jsx(Jt,{className:"w-5 h-5 text-muted"})]},l.label)})}),i.jsx("div",{className:"mt-8",children:i.jsxs("button",{className:"w-full bg-primary/20 text-primary py-3 rounded-lg font-medium hover:bg-primary/30 transition-colors flex items-center justify-center gap-2",children:[i.jsx(ic,{className:"w-5 h-5"}),"Abmelden"]})}),e&&i.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",children:i.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6",children:[i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Wie sammle ich XP?"}),i.jsxs("div",{className:"space-y-4 mb-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Tagebuch-Eintrag"}),i.jsx("span",{className:"font-medium text-blue-600",children:"+10 XP"})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Übung abgeschlossen"}),i.jsx("span",{className:"font-medium text-blue-600",children:"+15 XP"})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Barometer genutzt"}),i.jsx("span",{className:"font-medium text-blue-600",children:"+5 XP"})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{children:"Modul abgeschlossen"}),i.jsx("span",{className:"font-medium text-blue-600",children:"+50 XP"})]})]}),i.jsx("button",{onClick:()=>t(!1),className:"w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors",children:"Verstanden"})]})})]})},$v=()=>{const n=et();return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Datenschutz"}),i.jsx("p",{className:"text-gray-600",children:"Verwalten Sie Ihre Datenschutzeinstellungen"})]})]}),i.jsx("div",{className:"bg-blue-50 rounded-xl p-4 mb-8",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:i.jsx(Bi,{className:"w-5 h-5 text-blue-600"})}),i.jsx("div",{children:i.jsx("p",{className:"text-sm text-blue-900",children:"Ihre Daten werden sicher verschlüsselt und nach den höchsten Datenschutzstandards verarbeitet."})})]})}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(Gs,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Datenzugriff"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Anonyme Nutzungsdaten"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Hilft uns die App zu verbessern"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",defaultChecked:!0}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(hc,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Sichtbarkeit"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Profilsichtbarkeit"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Nur für Sie sichtbar"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer"}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(dc,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Kontodaten"})]}),i.jsx("div",{className:"space-y-4",children:i.jsx("button",{className:"w-full text-left text-red-600 font-medium",children:"Konto löschen"})})]})]})]})},Hv=()=>{const n=et(),[e,t]=k.useState(!0),[s,r]=k.useState(!0),[o,l]=k.useState(!0);return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Benachrichtigungen"}),i.jsx("p",{className:"text-gray-600",children:"Verwalten Sie Ihre Benachrichtigungen"})]})]}),i.jsx("div",{className:"bg-blue-50 rounded-xl p-4 mb-8",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:i.jsx(Ui,{className:"w-5 h-5 text-blue-600"})}),i.jsx("div",{children:i.jsx("p",{className:"text-sm text-blue-900",children:"Aktivieren Sie Benachrichtigungen, um keine wichtigen Übungen und Erfolge zu verpassen."})})]})}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(dt,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Tägliche Erinnerungen"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Tägliche Push-Erinnerung"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Erinnert Sie an Ihre täglichen Übungen"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e,onChange:u=>t(u.target.checked)}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(Ud,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Wöchentliche Updates"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Wöchentlicher Fortschrittsbericht"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Erhalten Sie eine Zusammenfassung Ihrer Fortschritte"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s,onChange:u=>r(u.target.checked)}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(Bd,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Erfolge"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Erfolgsmeldungen"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Benachrichtigungen über neue Erfolge"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",checked:o,onChange:u=>l(u.target.checked)}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]})]})]})},Wv=()=>{const n=et(),e=[{question:"Wie funktioniert das Stresstagebuch?",answer:"Das Stresstagebuch ermöglicht es Ihnen, Ihre täglichen Stresslevel, Emotionen und Bewältigungsstrategien zu dokumentieren. Sie können schnelle oder detaillierte Einträge erstellen und Ihre Fortschritte über Zeit verfolgen."},{question:"Wie oft sollte ich die Übungen machen?",answer:"Wir empfehlen, täglich mindestens eine Übung durchzuführen. Die besten Ergebnisse erzielen Sie mit regelmäßiger Praxis von 10-15 Minuten pro Tag."},{question:"Kann ich meine Daten exportieren?",answer:"Ja, Sie können Ihre Fortschrittsdaten und Tagebucheinträge über die Profileinstellungen exportieren. Die Daten werden in einem gängigen Format bereitgestellt."}];return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Hilfe & Support"}),i.jsx("p",{className:"text-gray-600",children:"Finden Sie Antworten und Unterstützung"})]})]}),i.jsx("div",{className:"bg-blue-50 rounded-xl p-4 mb-8",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:i.jsx(zi,{className:"w-5 h-5 text-blue-600"})}),i.jsx("div",{children:i.jsx("p",{className:"text-sm text-blue-900",children:"Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen. Durchsuchen Sie unsere FAQ oder kontaktieren Sie uns direkt."})})]})}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[i.jsxs("button",{className:"bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2",children:[i.jsx("div",{className:"p-2 bg-purple-100 rounded-lg",children:i.jsx(zd,{className:"w-6 h-6 text-purple-600"})}),i.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Live Chat"}),i.jsx("span",{className:"text-xs text-gray-600",children:"Response in 5 min"})]}),i.jsxs("button",{className:"bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2",children:[i.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:i.jsx(xi,{className:"w-6 h-6 text-blue-600"})}),i.jsx("span",{className:"text-sm font-medium text-gray-900",children:"Dokumentation"}),i.jsx("span",{className:"text-xs text-gray-600",children:"Ausführliche Guides"})]})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-8",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Häufig gestellte Fragen"}),i.jsx("div",{className:"space-y-6",children:e.map((t,s)=>i.jsxs("div",{className:"border-b border-gray-100 last:border-0 pb-4 last:pb-0",children:[i.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:t.question}),i.jsx("p",{className:"text-sm text-gray-600",children:t.answer})]},s))})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Kontakt"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("a",{href:"mailto:support@example.com",className:"flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors",children:[i.jsx(uc,{className:"w-5 h-5 text-gray-600"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"E-Mail Support"}),i.jsx("p",{className:"text-sm text-gray-600",children:"support@example.com"})]}),i.jsx(Co,{className:"w-4 h-4 text-gray-400 ml-auto"})]}),i.jsxs("a",{href:"tel:+49123456789",className:"flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors",children:[i.jsx($d,{className:"w-5 h-5 text-gray-600"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Telefon-Support"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Mo-Fr 9:00-17:00"})]}),i.jsx(Co,{className:"w-4 h-4 text-gray-400 ml-auto"})]})]})]})]})},qv=()=>{const n=et(),[e,t]=k.useState(!1),[s,r]=k.useState(!0),[o,l]=k.useState("de");return i.jsxs("div",{className:"max-w-md mx-auto px-4 pt-6 pb-24",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 hover:bg-gray-100 rounded-full",children:i.jsx(fe,{className:"w-6 h-6 text-gray-600"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Einstellungen"}),i.jsx("p",{className:"text-gray-600",children:"Passen Sie die App an Ihre Bedürfnisse an"})]})]}),i.jsx("div",{className:"bg-blue-50 rounded-xl p-4 mb-8",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:i.jsx(xr,{className:"w-5 h-5 text-blue-600"})}),i.jsx("div",{children:i.jsx("p",{className:"text-sm text-blue-900",children:"Hier können Sie grundlegende App-Einstellungen anpassen und verwalten."})})]})}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(mc,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Erscheinungsbild"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Dark Mode"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Dunkles Erscheinungsbild"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e,onChange:u=>t(u.target.checked)}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(pc,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Audio"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Sound-Effekte"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Akustisches Feedback"})]}),i.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[i.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s,onChange:u=>r(u.target.checked)}),i.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(Hd,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Sprache"})]}),i.jsx("div",{className:"space-y-4",children:i.jsxs("select",{value:o,onChange:u=>l(u.target.value),className:"w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[i.jsx("option",{value:"de",children:"Deutsch"}),i.jsx("option",{value:"en",children:"English"}),i.jsx("option",{value:"fr",children:"Français"}),i.jsx("option",{value:"es",children:"Español"})]})})]}),i.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx(Gs,{className:"w-5 h-5 text-gray-600"}),i.jsx("h2",{className:"font-semibold text-gray-900",children:"Sicherheit"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("button",{onClick:()=>n("/privacy"),className:"w-full text-left flex items-center justify-between py-2 hover:text-blue-600",children:[i.jsx("span",{children:"Datenschutzeinstellungen"}),i.jsx(fe,{className:"w-5 h-5 rotate-180"})]}),i.jsxs("button",{onClick:()=>n("/notifications"),className:"w-full text-left flex items-center justify-between py-2 hover:text-blue-600",children:[i.jsx("span",{children:"Benachrichtigungen"}),i.jsx(fe,{className:"w-5 h-5 rotate-180"})]})]})]})]})]})},di=[{id:"anger",label:"Wut",emoji:"😠"},{id:"fear",label:"Angst",emoji:"😰"},{id:"sadness",label:"Traurigkeit",emoji:"😢"},{id:"overwhelm",label:"Überforderung",emoji:"😩"},{id:"helpless",label:"Hilflosigkeit",emoji:"😞"},{id:"neutral",label:"Neutral",emoji:"😐"},{id:"satisfied",label:"Zufriedenheit",emoji:"🙂"},{id:"joy",label:"Freude",emoji:"😄"}],Gv=[{id:"work",label:"Arbeit",emoji:"⏰"},{id:"family",label:"Familie",emoji:"👪"},{id:"health",label:"Gesundheit",emoji:"💊"},{id:"social",label:"Soziale Kontakte",emoji:"💬"},{id:"time",label:"Zeitdruck",emoji:"⏳"},{id:"money",label:"Finanzen",emoji:"💸"},{id:"other",label:"Sonstiges",emoji:"➕"}],Kv=[{id:"tremble",label:"Zittern"},{id:"heartbeat",label:"Herzklopfen"},{id:"sweat",label:"Schwitzen"},{id:"breath",label:"Atemprobleme"},{id:"stomach",label:"Magenbeschwerden"},{id:"muscle",label:"Muskelanspannung"},{id:"tired",label:"Müdigkeit"},{id:"none",label:"Keine"},{id:"other",label:"Sonstiges"}];function Qv(){const n=et(),[e,t]=k.useState(!1),[s,r]=k.useState(!1),[o,l]=k.useState(!1),[u,d]=k.useState(!1),[f,y]=k.useState(""),[_,T]=k.useState(""),[j,S]=k.useState(""),[C,R]=k.useState([]),P=k.useRef(null),[M,U]=k.useState(""),[z,K]=k.useState(""),[$,b]=k.useState({date:new Date().toISOString().slice(0,16),stressLevel:5,situation:"",trigger:[],triggerOther:"",physical:[],physicalOther:"",emotional:[],emotionalOther:"",thoughts:"",retrospectiveRating:5,reflectionHelpful:"",reflectionText:"",whatWouldHelp:[],whatWouldHelpOther:"",wishBehavior:"",practiceOpportunity:""}),[p,g]=k.useState(1),[v,w]=k.useState(!1);k.useState("");const[E,x]=k.useState([]),[Q,Se]=k.useState(""),[q,ee]=k.useState(""),[oe,L]=k.useState([]),[se,ye]=k.useState("");k.useEffect(()=>{const D=localStorage.getItem("diaryEntries");D&&R(JSON.parse(D))},[]);const pe=D=>{localStorage.setItem("diaryEntries",JSON.stringify(D)),R(D)},ce=()=>{if(!("webkitSpeechRecognition"in window||"SpeechRecognition"in window)){alert("Spracherkennung wird von deinem Browser nicht unterstützt.");return}const D=window.SpeechRecognition||window.webkitSpeechRecognition,J=new D;J.lang="de-DE",J.continuous=!0,J.interimResults=!0,J.onresult=qe=>{let bt="",wt="";for(let ct=0;ct<qe.results.length;++ct)qe.results[ct].isFinal?wt+=qe.results[ct][0].transcript:bt+=qe.results[ct][0].transcript;y(wt+bt)},J.onend=()=>d(!1),P.current=J,J.start(),d(!0)},Ft=()=>{P.current&&(P.current.stop(),P.current=null),d(!1)},B=()=>{const J=[{id:Date.now().toString(),date:new Date().toISOString(),notes:f,mood:M},...C];pe(J),t(!1),y(""),U(""),n("/diary-overview")},ue=()=>{const J=[{id:Date.now().toString(),date:new Date().toISOString(),notes:_,mood:z},...C];pe(J),r(!1),T(""),K(""),n("/diary-overview")},re=()=>{const D={...$,emotional:E,trigger:Q?[Q]:[],triggerOther:q,physical:oe,physicalOther:se},{date:J,...qe}=D,wt=[{id:Date.now().toString(),date:J,notes:D.situation,...qe},...C];pe(wt),l(!1),S(""),b({date:new Date().toISOString().slice(0,16),stressLevel:5,situation:"",trigger:[],triggerOther:"",physical:[],physicalOther:"",emotional:[],emotionalOther:"",thoughts:"",retrospectiveRating:5,reflectionHelpful:"",reflectionText:"",whatWouldHelp:[],whatWouldHelpOther:"",wishBehavior:"",practiceOpportunity:""}),x([]),Se(""),ee(""),L([]),ye(""),g(1),w(!0),setTimeout(()=>{w(!1),n("/diary-overview")},2e3)};return i.jsx("div",{className:"fixed inset-0 z-50 bg-background animate-slide-in-right overflow-y-auto",children:i.jsxs("div",{className:"max-w-md mx-auto min-h-screen p-6 relative",children:[i.jsx("button",{onClick:()=>n(-1),className:"absolute top-4 left-4 p-2 rounded-full hover:bg-accent",children:i.jsx(fe,{className:"w-6 h-6 text-text"})}),i.jsx("h2",{className:"text-2xl font-bold mb-8 text-text text-center",children:"Neues mentales Tagebuch"}),i.jsxs("div",{className:"flex flex-col gap-6 mb-8",children:[i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-journalgreen relative overflow-hidden min-h-[110px]",onClick:()=>t(!0),children:[i.jsx(ac,{className:"w-20 h-20 text-white/30 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Sprach-Tagebuch"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]}),i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-yellow-300/80 relative overflow-hidden min-h-[110px]",onClick:()=>r(!0),children:[i.jsx(oc,{className:"w-20 h-20 text-yellow-400/40 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Text-Tagebuch"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]}),i.jsxs("button",{className:"flex items-center rounded-2xl p-6 bg-red-400/80 relative overflow-hidden min-h-[110px]",onClick:()=>l(!0),children:[i.jsx(lc,{className:"w-20 h-20 text-red-200/40 absolute left-4 top-1/2 -translate-y-1/2"}),i.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center z-10",children:[i.jsx("span",{className:"text-white font-bold text-lg mb-2 drop-shadow",children:"Detaillierter Eintrag"}),i.jsx("span",{className:"border-2 border-white text-white rounded-full px-6 py-1 font-semibold",children:"Jetzt starten"})]})]})]}),e&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>{t(!1),d(!1),y(""),U("")},className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Sprachaufnahme"}),i.jsxs("div",{className:"mb-4",children:[i.jsx("span",{className:"text-lg font-bold text-text block mb-3",children:"Wie fühlst du dich?"}),i.jsx("div",{className:"grid grid-cols-2 gap-2",children:di.map(D=>i.jsxs("button",{type:"button",onClick:()=>U(D.id),className:`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-semibold border-2 ${M===D.id?"bg-journalgreen/20 border-journalgreen":"bg-[#F6F6F2] border-transparent"} hover:shadow-md`,children:[i.jsx("span",{className:"text-lg",children:D.emoji}),i.jsx("span",{className:"text-text font-bold",children:D.label})]},D.id))})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("button",{onClick:u?Ft:ce,className:`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all mb-4 ${u?"bg-red-500 text-white":"bg-primary text-white hover:bg-primary/90"}`,children:u?"Stopp":"Aufnahme starten"}),i.jsx("div",{className:"bg-muted/30 rounded-xl p-4 min-h-[80px] text-text",children:f||"Sprich jetzt, um Text zu transkribieren..."})]}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>{t(!1),d(!1),y(""),U("")},className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all",children:"Abbrechen"}),i.jsxs("button",{onClick:B,className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all",disabled:!f||!M,children:[i.jsx(yn,{className:"w-5 h-5"}),"Speichern"]})]})]})}),s&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>{r(!1),T(""),K("")},className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Text-Tagebuch"}),i.jsxs("div",{className:"mb-4",children:[i.jsx("span",{className:"text-lg font-bold text-text block mb-3",children:"Wie fühlst du dich?"}),i.jsx("div",{className:"grid grid-cols-2 gap-2",children:di.map(D=>i.jsxs("button",{type:"button",onClick:()=>K(D.id),className:`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-semibold border-2 ${z===D.id?"bg-journalgreen/20 border-journalgreen":"bg-[#F6F6F2] border-transparent"} hover:shadow-md`,children:[i.jsx("span",{className:"text-lg",children:D.emoji}),i.jsx("span",{className:"text-text font-bold",children:D.label})]},D.id))})]}),i.jsx("textarea",{value:_,onChange:D=>T(D.target.value),placeholder:"Schreibe hier deinen Eintrag...",className:"w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text mb-4"}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>{r(!1),T(""),K("")},className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all",children:"Abbrechen"}),i.jsxs("button",{onClick:ue,className:"w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all",disabled:!_.trim()||!z,children:[i.jsx(yn,{className:"w-5 h-5"}),"Speichern"]})]})]})}),o&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-y-auto",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[95vh] overflow-y-auto",children:[i.jsx("button",{onClick:()=>{l(!1),g(1)},className:"absolute top-4 right-4 p-2 rounded-full hover:bg-accent",children:i.jsx(He,{className:"w-6 h-6 text-text"})}),i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(gc,{className:"w-5 h-5 text-primary"}),i.jsx("span",{className:"text-sm text-primary font-medium",children:"Empfohlen: Mit dem detaillierten Eintrag erkennst du Muster und kannst gezielt an deinem Umgang mit Stress arbeiten."})]}),i.jsx("h3",{className:"text-xl font-bold mb-4 text-text",children:"Detaillierter Eintrag"}),p===1&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mb-4",children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"text-sm font-bold text-text",children:"Schritt 1 von 2"}),i.jsx("button",{className:"text-xs text-primary font-bold underline",onClick:()=>{},children:"Quick-Log"})]}),i.jsx("div",{className:"w-full h-2 bg-muted rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-journalgreen rounded-full transition-all",style:{width:"50%"}})})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Datum & Uhrzeit"}),i.jsx("input",{type:"datetime-local",value:$.date,onChange:D=>b(J=>({...J,date:D.target.value})),className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsxs("span",{className:"text-xl font-bold text-text block mb-4",children:["Emotionale Reaktion ",i.jsx("span",{className:"text-xs text-muted",children:"(max. 3)"})]}),i.jsx("div",{className:"grid grid-cols-2 gap-3",children:di.map(D=>i.jsxs("button",{type:"button",onClick:()=>{E.includes(D.id)?x(E.filter(J=>J!==D.id)):E.length<3&&x([...E,D.id])},className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${E.includes(D.id)?"bg-journalgreen/20 border-journalgreen":"bg-[#F6F6F2] border-transparent"} hover:shadow-md`,children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"text-2xl",children:D.emoji}),i.jsx("span",{className:"text-text font-bold",children:D.label})]}),i.jsx("span",{className:`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${E.includes(D.id)?"border-journalgreen bg-journalgreen":"border-muted bg-white"}`,children:E.includes(D.id)&&i.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white block"})})]},D.id))})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Stresslevel"}),i.jsx("input",{type:"range",min:0,max:10,value:$.stressLevel,onChange:D=>b(J=>({...J,stressLevel:Number(D.target.value)})),className:"w-full mb-2 accent-journalgreen"}),i.jsxs("div",{className:"flex justify-between text-base text-muted mb-1",children:[i.jsx("span",{children:"0"}),i.jsx("span",{children:"5"}),i.jsx("span",{children:"10"})]}),i.jsxs("div",{className:"flex justify-between text-xs text-muted",children:[i.jsx("span",{children:"kein Stress"}),i.jsx("span",{children:"mittel"}),i.jsx("span",{children:"extrem"})]})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Was war der Auslöser?"}),i.jsx("div",{className:"grid grid-cols-2 gap-3 mb-2",children:Gv.map(D=>i.jsxs("button",{type:"button",onClick:()=>Se(D.id),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${Q===D.id?"bg-journalgreen/20 border-journalgreen":"bg-[#F6F6F2] border-transparent"} hover:shadow-md`,children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"text-2xl",children:D.emoji}),i.jsx("span",{className:"text-text font-bold",children:D.label})]}),i.jsx("span",{className:`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${Q===D.id?"border-journalgreen bg-journalgreen":"border-muted bg-white"}`,children:Q===D.id&&i.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white block"})})]},D.id))}),Q==="other"&&i.jsx("input",{type:"text",value:q,onChange:D=>ee(D.target.value),placeholder:"Beschreibe den Auslöser...",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Was ist genau passiert?"}),i.jsx("textarea",{value:$.situation,onChange:D=>b(J=>({...J,situation:D.target.value})),placeholder:"Beispiel: Im Meeting wurde ich kritisiert. Ich war überrascht und habe mich zurückgezogen.",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[80px]"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Gedanken in der Situation"}),i.jsx("textarea",{value:$.thoughts,onChange:D=>b(J=>({...J,thoughts:D.target.value})),placeholder:"Beispiel: 'Ich kann das nicht.' 'Immer ich.' 'Das ist unfair.'",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Körperliche Reaktionen"}),i.jsx("div",{className:"grid grid-cols-2 gap-3",children:Kv.map(D=>i.jsxs("button",{type:"button",onClick:()=>{oe.includes(D.id)?L(oe.filter(J=>J!==D.id)):L([...oe,D.id])},className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${oe.includes(D.id)?"bg-journalgreen/20 border-journalgreen":"bg-[#F6F6F2] border-transparent"} hover:shadow-md`,children:[i.jsx("span",{className:"text-text font-bold",children:D.label}),i.jsx("span",{className:`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${oe.includes(D.id)?"border-journalgreen bg-journalgreen":"border-muted bg-white"}`,children:oe.includes(D.id)&&i.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white block"})})]},D.id))}),oe.includes("other")&&i.jsx("input",{type:"text",value:se,onChange:D=>ye(D.target.value),placeholder:"Beschreibe weitere körperliche Reaktionen...",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary mt-3"})]}),i.jsx("button",{onClick:()=>g(2),className:"w-full bg-journalgreen text-white rounded-3xl py-4 text-lg font-bold mt-2 shadow-md hover:bg-journalgreen/90 transition-all",children:"Weiter zur Reflexion"})]}),p===2&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Wie bewertest du die Situation im Nachhinein?"}),i.jsx("input",{type:"range",min:0,max:10,value:$.retrospectiveRating,onChange:D=>b(J=>({...J,retrospectiveRating:Number(D.target.value)})),className:"w-full mb-2 accent-journalgreen"}),i.jsx("div",{className:"flex justify-between text-base text-muted",children:[0,1,2,3,4,5,6,7,8,9,10].map(D=>i.jsx("span",{children:D},D))})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"War meine Reaktion hilfreich?"}),i.jsxs("div",{className:"flex gap-4 mb-2",children:[i.jsxs("label",{className:"flex items-center gap-2 text-lg font-semibold",children:[i.jsx("input",{type:"radio",name:"reflectionHelpful",checked:$.reflectionHelpful==="Ja",onChange:()=>b(D=>({...D,reflectionHelpful:"Ja"}))})," Ja"]}),i.jsxs("label",{className:"flex items-center gap-2 text-lg font-semibold",children:[i.jsx("input",{type:"radio",name:"reflectionHelpful",checked:$.reflectionHelpful==="Nein",onChange:()=>b(D=>({...D,reflectionHelpful:"Nein"}))})," Nein"]})]}),$.reflectionHelpful==="Nein"&&i.jsx("textarea",{value:$.reflectionText,onChange:D=>b(J=>({...J,reflectionText:D.target.value})),placeholder:"Was war nicht hilfreich? (optional)",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px] mt-2"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Was hätte besser geholfen?"}),i.jsx("textarea",{value:$.whatWouldHelpOther,onChange:D=>b(J=>({...J,whatWouldHelpOther:D.target.value})),placeholder:"Was hätte dir geholfen?",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Wunschverhalten für das nächste Mal"}),i.jsx("textarea",{value:$.wishBehavior,onChange:D=>b(J=>({...J,wishBehavior:D.target.value})),placeholder:"Wie möchtest du künftig reagieren?",className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]"})]}),i.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-6 mb-6",children:[i.jsx("span",{className:"text-xl font-bold text-text block mb-4",children:"Erinnerung setzen zum Üben (optional)"}),i.jsx("input",{type:"date",value:$.practiceOpportunity,onChange:D=>b(J=>({...J,practiceOpportunity:D.target.value})),className:"w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),i.jsxs("div",{className:"flex gap-2 mt-4",children:[i.jsx("button",{onClick:()=>g(1),className:"w-1/2 py-4 rounded-3xl font-bold flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all text-lg",children:"Zurück"}),i.jsxs("button",{onClick:re,className:"w-1/2 py-4 rounded-3xl font-bold flex items-center justify-center gap-2 bg-journalgreen text-white hover:bg-journalgreen/90 transition-all text-lg",children:[i.jsx(yn,{className:"w-5 h-5"}),"Eintrag speichern"]})]})]})]})}),v&&i.jsx("div",{className:"fixed inset-0 bg-black/40 z-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-background rounded-2xl w-full max-w-xs p-6 text-center",children:[i.jsx("div",{className:"text-3xl mb-2",children:"💪"}),i.jsx("div",{className:"text-lg font-bold mb-2 text-primary",children:"Du hast heute achtsam reflektiert – stark!"}),i.jsx("button",{onClick:()=>w(!1),className:"mt-4 w-full py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-all",children:"Schließen"})]})})]})})}const Jv=[{id:"anger",label:"Wut",emoji:"😠"},{id:"fear",label:"Angst",emoji:"😰"},{id:"sadness",label:"Traurigkeit",emoji:"😢"},{id:"overwhelm",label:"Überforderung",emoji:"😩"},{id:"helpless",label:"Hilflosigkeit",emoji:"😞"},{id:"neutral",label:"Neutral",emoji:"😐"},{id:"satisfied",label:"Zufriedenheit",emoji:"🙂"},{id:"joy",label:"Freude",emoji:"😄"}],Ht=[{id:"overjoyed",label:"Overjoyed",emoji:"😄",color:"bg-journalgreen"},{id:"happy",label:"Happy",emoji:"😊",color:"bg-yellow-400"},{id:"satisfied",label:"Satisfied",emoji:"🙂",color:"bg-green-400"},{id:"neutral",label:"Neutral",emoji:"😐",color:"bg-gray-400"},{id:"sad",label:"Sad",emoji:"😢",color:"bg-orange-400"},{id:"depressed",label:"Depressed",emoji:"😔",color:"bg-gray-500"}];function Xv(){const n=et(),[e,t]=k.useState("list"),[s,r]=k.useState([]),[o,l]=k.useState(new Date);k.useEffect(()=>{const j=localStorage.getItem("diaryEntries");j&&r(JSON.parse(j))},[]),k.useEffect(()=>{localStorage.setItem("diaryEntries",JSON.stringify(s))},[s]);const u=j=>{if(j.stressLevel!==void 0)return j.stressLevel<=3?Ht.find(S=>S.id==="happy"):j.stressLevel<=6?Ht.find(S=>S.id==="neutral"):Ht.find(S=>S.id==="sad");if(j.mood){const S=Jv.find(C=>C.id===j.mood);if(S){if(["joy","satisfied"].includes(S.id))return Ht.find(C=>C.id==="happy");if(["neutral"].includes(S.id))return Ht.find(C=>C.id==="neutral");if(["sadness","anger","fear","overwhelm","helpless"].includes(S.id))return Ht.find(C=>C.id==="sad")}}return Ht.find(S=>S.id==="neutral")},d=j=>{const S=new Date(j);return{day:S.getDate(),month:S.toLocaleDateString("de-DE",{month:"short"}),time:S.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),weekday:S.toLocaleDateString("de-DE",{weekday:"short"})}},f=j=>{const S=j.getFullYear(),C=j.getMonth(),R=new Date(S,C,1),M=new Date(S,C+1,0).getDate(),U=R.getDay(),z=[];for(let K=U-1;K>=0;K--){const $=new Date(S,C,-K);z.push({date:$,isCurrentMonth:!1})}for(let K=1;K<=M;K++)z.push({date:new Date(S,C,K),isCurrentMonth:!0});return z},y=j=>s.find(S=>new Date(S.date).toDateString()===j.toDateString()),_=()=>i.jsx("div",{className:"space-y-4",children:s.length===0?i.jsxs("div",{className:"text-center py-12",children:[i.jsx("div",{className:"text-6xl mb-4",children:"📝"}),i.jsx("p",{className:"text-text/70 text-lg",children:"Noch keine Einträge vorhanden"}),i.jsx("p",{className:"text-text/50",children:"Tippe auf + um deinen ersten Eintrag zu erstellen"})]}):s.map(j=>{const S=u(j),C=d(j.date);return i.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("div",{className:`w-12 h-12 rounded-full ${(S==null?void 0:S.color)||"bg-gray-400"} flex items-center justify-center text-white font-bold text-sm`,children:C.day}),i.jsx("span",{className:"text-xs text-gray-500 mt-1",children:C.month})]}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx("span",{className:"text-2xl",children:(S==null?void 0:S.emoji)||"😐"}),i.jsx("span",{className:"font-bold text-lg text-gray-900",children:(S==null?void 0:S.label)||"Neutral"})]}),i.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500",children:[i.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full"}),i.jsx("span",{children:"96bpm"}),i.jsx("span",{children:"•"}),i.jsx("span",{children:"12lsys"})]})]}),i.jsx("div",{className:"text-right",children:i.jsx("div",{className:"text-xs text-gray-400",children:C.time})})]},j.id)})}),T=()=>{const j=f(o),S=o.toLocaleDateString("de-DE",{month:"long",year:"numeric"});return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("button",{onClick:()=>l(new Date(o.getFullYear(),o.getMonth()-1)),className:"p-2 rounded-full hover:bg-gray-100",children:i.jsx(fe,{className:"w-5 h-5"})}),i.jsx("h3",{className:"text-lg font-bold capitalize",children:S}),i.jsx("button",{onClick:()=>l(new Date(o.getFullYear(),o.getMonth()+1)),className:"p-2 rounded-full hover:bg-gray-100",children:i.jsx(fe,{className:"w-5 h-5 rotate-180"})})]}),i.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["M","T","W","T","F","S","S"].map(C=>i.jsx("div",{className:"text-center text-sm font-medium text-gray-500 py-2",children:C},C))}),i.jsx("div",{className:"grid grid-cols-7 gap-1",children:j.map((C,R)=>{const P=y(C.date),M=P?u(P):null;return i.jsxs("div",{className:"aspect-square flex flex-col items-center justify-center relative",children:[i.jsx("span",{className:`text-sm ${C.isCurrentMonth?"text-gray-900":"text-gray-300"}`,children:C.date.getDate().toString().padStart(2,"0")}),M&&i.jsx("span",{className:"text-lg mt-1",children:M.emoji})]},R)})})]})};return i.jsx("div",{className:"min-h-screen bg-background",children:i.jsxs("div",{className:"max-w-md mx-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 pb-4",children:[i.jsx("button",{onClick:()=>n(-1),className:"p-2 rounded-full hover:bg-accent",children:i.jsx(fe,{className:"w-6 h-6 text-text"})}),i.jsx("h1",{className:"text-xl font-bold text-text",children:"My Mood"}),i.jsx("div",{className:"w-10"})]}),i.jsx("div",{className:"px-6 mb-6",children:i.jsxs("div",{className:"bg-journalgreen/20 rounded-full p-1 flex",children:[i.jsx("button",{onClick:()=>t("list"),className:`flex-1 py-3 px-6 rounded-full font-medium transition-all ${e==="list"?"bg-journalgreen text-white shadow-md":"text-journalgreen"}`,children:"History"}),i.jsx("button",{onClick:()=>t("calendar"),className:`flex-1 py-3 px-6 rounded-full font-medium transition-all ${e==="calendar"?"bg-journalgreen text-white shadow-md":"text-journalgreen"}`,children:"AI Suggestion"})]})}),i.jsx("div",{className:"px-6 mb-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h2",{className:"text-2xl font-bold text-text",children:"Mood History"}),i.jsxs("button",{className:"text-sm text-text/70 flex items-center gap-1",children:[e==="list"?"List View":"Calendar View",i.jsx(fe,{className:"w-4 h-4 rotate-90"})]})]})}),i.jsx("div",{className:"px-6 pb-24",children:e==="list"?_():T()}),i.jsxs("div",{className:"fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4",children:[i.jsx("button",{className:"w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200",children:i.jsx(xr,{className:"w-6 h-6 text-gray-600"})}),i.jsx("button",{onClick:()=>n("/diary"),className:"w-16 h-16 bg-journalgreen rounded-full shadow-lg flex items-center justify-center",children:i.jsx(Wd,{className:"w-8 h-8 text-white"})}),i.jsx("button",{className:"w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200",children:i.jsx(qd,{className:"w-6 h-6 text-gray-600"})})]})]})})}function Yv(){return i.jsx(Ed,{children:i.jsxs("div",{className:"min-h-screen bg-gray-50",children:[i.jsx("main",{className:"pb-20",children:i.jsxs(Nd,{children:[i.jsx(nt,{path:"/",element:i.jsx(Vv,{})}),i.jsx(nt,{path:"/exercises",element:i.jsx(Uv,{})}),i.jsx(nt,{path:"/progress",element:i.jsx(Bv,{})}),i.jsx(nt,{path:"/profile",element:i.jsx(zv,{})}),i.jsx(nt,{path:"/privacy",element:i.jsx($v,{})}),i.jsx(nt,{path:"/notifications",element:i.jsx(Hv,{})}),i.jsx(nt,{path:"/help",element:i.jsx(Wv,{})}),i.jsx(nt,{path:"/settings",element:i.jsx(qv,{})}),i.jsx(nt,{path:"/diary",element:i.jsx(Qv,{})}),i.jsx(nt,{path:"/diary-overview",element:i.jsx(Xv,{})})]})}),i.jsx(ef,{items:[{icon:Ks,label:"Home",path:"/"},{icon:$i,label:"Exercises",path:"/exercises"},{icon:Gd,label:"Progress",path:"/progress"},{icon:cc,label:"Profile",path:"/profile"}]})]})})}var Zv="firebase",eb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Zv,eb,"app");const Nh="@firebase/installations",wa="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=1e4,Th=`w:${wa}`,Sh="FIS_v2",tb="https://firebaseinstallations.googleapis.com/v1",nb=60*60*1e3,sb="installations",rb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new an(sb,rb,ib);function jh(n){return n instanceof tt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah({projectId:n}){return`${tb}/projects/${n}/installations`}function kh(n){return{token:n.token,requestStatus:2,expiresIn:ob(n.expiresIn),creationTime:Date.now()}}async function Rh(n,e){const s=(await e.json()).error;return sn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ch({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ab(n,{refreshToken:e}){const t=Ch(n);return t.append("Authorization",lb(e)),t}async function Ph(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ob(n){return Number(n.replace("s","000"))}function lb(n){return`${Sh} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Ah(n),r=Ch(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const l={fid:t,authVersion:Sh,appId:n.appId,sdkVersion:Th},u={method:"POST",headers:r,body:JSON.stringify(l)},d=await Ph(()=>fetch(s,u));if(d.ok){const f=await d.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:kh(f.authToken)}}else throw await Rh("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=/^[cdef][\w-]{21}$/,Fi="";function db(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=fb(n);return hb.test(t)?t:Fi}catch{return Fi}}function fb(n){return ub(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Map;function Vh(n,e){const t=Cr(n);Mh(t,e),mb(t,e)}function Mh(n,e){const t=Oh.get(n);if(t)for(const s of t)s(e)}function mb(n,e){const t=pb();t&&t.postMessage({key:n,fid:e}),gb()}let Gt=null;function pb(){return!Gt&&"BroadcastChannel"in self&&(Gt=new BroadcastChannel("[Firebase] FID Change"),Gt.onmessage=n=>{Mh(n.data.key,n.data.fid)}),Gt}function gb(){Oh.size===0&&Gt&&(Gt.close(),Gt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="firebase-installations-database",yb=1,rn="firebase-installations-store";let fi=null;function _a(){return fi||(fi=Rc(xb,yb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(rn)}}})),fi}async function pr(n,e){const t=Cr(n),r=(await _a()).transaction(rn,"readwrite"),o=r.objectStore(rn),l=await o.get(t);return await o.put(e,t),await r.done,(!l||l.fid!==e.fid)&&Vh(n,e.fid),e}async function Lh(n){const e=Cr(n),s=(await _a()).transaction(rn,"readwrite");await s.objectStore(rn).delete(e),await s.done}async function Pr(n,e){const t=Cr(n),r=(await _a()).transaction(rn,"readwrite"),o=r.objectStore(rn),l=await o.get(t),u=e(l);return u===void 0?await o.delete(t):await o.put(u,t),await r.done,u&&(!l||l.fid!==u.fid)&&Vh(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n){let e;const t=await Pr(n.appConfig,s=>{const r=vb(s),o=bb(n,r);return e=o.registrationPromise,o.installationEntry});return t.fid===Fi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function vb(n){const e=n||{fid:db(),registrationStatus:0};return Fh(e)}function bb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(sn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wb(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_b(n)}:{installationEntry:e}}async function wb(n,e){try{const t=await cb(n,e);return pr(n.appConfig,t)}catch(t){throw jh(t)&&t.customData.serverCode===409?await Lh(n.appConfig):await pr(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _b(n){let e=await Xl(n.appConfig);for(;e.registrationStatus===1;)await Dh(100),e=await Xl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ea(n);return s||t}return e}function Xl(n){return Pr(n,e=>{if(!e)throw sn.create("installation-not-found");return Fh(e)})}function Fh(n){return Eb(n)?{fid:n.fid,registrationStatus:0}:n}function Eb(n){return n.registrationStatus===1&&n.registrationTime+Ih<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb({appConfig:n,heartbeatServiceProvider:e},t){const s=Ib(n,t),r=ab(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const l={installation:{sdkVersion:Th,appId:n.appId}},u={method:"POST",headers:r,body:JSON.stringify(l)},d=await Ph(()=>fetch(s,u));if(d.ok){const f=await d.json();return kh(f)}else throw await Rh("Generate Auth Token",d)}function Ib(n,{fid:e}){return`${Ah(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(n,e=!1){let t;const s=await Pr(n.appConfig,o=>{if(!Uh(o))throw sn.create("not-registered");const l=o.authToken;if(!e&&jb(l))return o;if(l.requestStatus===1)return t=Tb(n,e),o;{if(!navigator.onLine)throw sn.create("app-offline");const u=kb(o);return t=Sb(n,u),u}});return t?await t:s.authToken}async function Tb(n,e){let t=await Yl(n.appConfig);for(;t.authToken.requestStatus===1;)await Dh(100),t=await Yl(n.appConfig);const s=t.authToken;return s.requestStatus===0?Na(n,e):s}function Yl(n){return Pr(n,e=>{if(!Uh(e))throw sn.create("not-registered");const t=e.authToken;return Rb(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Sb(n,e){try{const t=await Nb(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await pr(n.appConfig,s),t}catch(t){if(jh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Lh(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pr(n.appConfig,s)}throw t}}function Uh(n){return n!==void 0&&n.registrationStatus===2}function jb(n){return n.requestStatus===2&&!Ab(n)}function Ab(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+nb}function kb(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Rb(n){return n.requestStatus===1&&n.requestTime+Ih<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(n){const e=n,{installationEntry:t,registrationPromise:s}=await Ea(e);return s?s.catch(console.error):Na(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(n,e=!1){const t=n;return await Db(t),(await Na(t,e)).token}async function Db(n){const{registrationPromise:e}=await Ea(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n){if(!n||!n.options)throw mi("App Configuration");if(!n.name)throw mi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw mi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mi(n){return sn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="installations",Vb="installations-internal",Mb=n=>{const e=n.getProvider("app").getImmediate(),t=Ob(e),s=on(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Lb=n=>{const e=n.getProvider("app").getImmediate(),t=on(e,Bh).getImmediate();return{getId:()=>Cb(t),getToken:r=>Pb(t,r)}};function Fb(){at(new Ze(Bh,Mb,"PUBLIC")),at(new Ze(Vb,Lb,"PRIVATE"))}Fb();We(Nh,wa);We(Nh,wa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="analytics",Ub="firebase_id",Bb="origin",zb=60*1e3,$b="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ia="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new br("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ze=new an("analytics","Analytics",Hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(n){if(!n.startsWith(Ia)){const e=ze.create("invalid-gtag-resource",{gtagURL:n});return Le.warn(e.message),""}return n}function zh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Gb(n,e){const t=qb("firebase-js-sdk-policy",{createScriptURL:Wb}),s=document.createElement("script"),r=`${Ia}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Kb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Qb(n,e,t,s,r,o){const l=s[r];try{if(l)await e[l];else{const d=(await zh(t)).find(f=>f.measurementId===r);d&&await e[d.appId]}}catch(u){Le.error(u)}n("config",r,o)}async function Jb(n,e,t,s,r){try{let o=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const u=await zh(t);for(const d of l){const f=u.find(_=>_.measurementId===d),y=f&&e[f.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",s,r||{})}catch(o){Le.error(o)}}function Xb(n,e,t,s){async function r(o,...l){try{if(o==="event"){const[u,d]=l;await Jb(n,e,t,u,d)}else if(o==="config"){const[u,d]=l;await Qb(n,e,t,s,u,d)}else if(o==="consent"){const[u,d]=l;n("consent",u,d)}else if(o==="get"){const[u,d,f]=l;n("get",u,d,f)}else if(o==="set"){const[u]=l;n("set",u)}else n(o,...l)}catch(u){Le.error(u)}}return r}function Yb(n,e,t,s,r){let o=function(...l){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Xb(o,n,e,t),{gtagCore:o,wrappedGtag:window[r]}}function Zb(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ia)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=30,t0=1e3;class n0{constructor(e={},t=t0){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $h=new n0;function s0(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function r0(n){var e;const{appId:t,apiKey:s}=n,r={method:"GET",headers:s0(s)},o=$b.replace("{app-id}",t),l=await fetch(o,r);if(l.status!==200&&l.status!==304){let u="";try{const d=await l.json();!((e=d.error)===null||e===void 0)&&e.message&&(u=d.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function i0(n,e=$h,t){const{appId:s,apiKey:r,measurementId:o}=n.options;if(!s)throw ze.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:s};throw ze.create("no-api-key")}const l=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new l0;return setTimeout(async()=>{u.abort()},zb),Hh({appId:s,apiKey:r,measurementId:o},l,u,e)}async function Hh(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=$h){var o;const{appId:l,measurementId:u}=n;try{await a0(s,e)}catch(d){if(u)return Le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw d}try{const d=await r0(n);return r.deleteThrottleMetadata(l),d}catch(d){const f=d;if(!o0(f)){if(r.deleteThrottleMetadata(l),u)return Le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw d}const y=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Vo(t,r.intervalMillis,e0):Vo(t,r.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return r.setThrottleMetadata(l,_),Le.debug(`Calling attemptFetch again in ${y} millis`),Hh(n,_,s,r)}}function a0(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(o),s(ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function o0(n){if(!(n instanceof tt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class l0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function c0(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const o=await e,l=Object.assign(Object.assign({},s),{send_to:o});n("event",t,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(){if(Sc())try{await jc()}catch(n){return Le.warn(ze.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Le.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function h0(n,e,t,s,r,o,l){var u;const d=i0(n);d.then(j=>{t[j.measurementId]=j.appId,n.options.measurementId&&j.measurementId!==n.options.measurementId&&Le.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>Le.error(j)),e.push(d);const f=u0().then(j=>{if(j)return s.getId()}),[y,_]=await Promise.all([d,f]);Zb(o)||Gb(o,y.measurementId),r("js",new Date);const T=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return T[Bb]="firebase",T.update=!0,_!=null&&(T[Ub]=_),r("config",y.measurementId,T),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.app=e}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Zl=[];const ec={};let pi="dataLayer",f0="gtag",tc,Wh,nc=!1;function m0(){const n=[];if(Tc()&&n.push("This is a browser extension environment."),_f()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=ze.create("invalid-analytics-context",{errorInfo:e});Le.warn(t.message)}}function p0(n,e,t){m0();const s=n.options.appId;if(!s)throw ze.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(Yn[s]!=null)throw ze.create("already-exists",{id:s});if(!nc){Kb(pi);const{wrappedGtag:o,gtagCore:l}=Yb(Yn,Zl,ec,pi,f0);Wh=o,tc=l,nc=!0}return Yn[s]=h0(n,Zl,ec,e,tc,pi,t),new d0(n)}function g0(n=Wi()){n=$e(n);const e=on(n,gr);return e.isInitialized()?e.getImmediate():x0(n)}function x0(n,e={}){const t=on(n,gr);if(t.isInitialized()){const r=t.getImmediate();if(Dt(e,t.getOptions()))return r;throw ze.create("already-initialized")}return t.initialize({options:e})}function y0(n,e,t,s){n=$e(n),c0(Wh,Yn[n.app.options.appId],e,t,s).catch(r=>Le.error(r))}const sc="@firebase/analytics",rc="0.10.12";function v0(){at(new Ze(gr,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return p0(s,r,t)},"PUBLIC")),at(new Ze("analytics-internal",n,"PRIVATE")),We(sc,rc),We(sc,rc,"esm2017");function n(e){try{const t=e.getProvider(gr).getImmediate();return{logEvent:(s,r,o)=>y0(t,s,r,o)}}catch(t){throw ze.create("interop-component-reg-failed",{reason:t})}}}v0();const b0={apiKey:"AIzaSyBizDpAJj0-AasnP5O0uSL-RKeAYQqI48g",authDomain:"app-stress-112e4.firebaseapp.com",projectId:"app-stress-112e4",storageBucket:"app-stress-112e4.firebasestorage.app",messagingSenderId:"789838527918",appId:"1:789838527918:web:b1a2f144170766845e1c3f",measurementId:"G-M113HY2E6X"},Ta=Cc(b0),w0=pu(Ta);mh(Ta);g0(Ta);const _0=k.createContext(void 0),E0=({children:n})=>{const[e,t]=k.useState(null),[s,r]=k.useState(!0);k.useEffect(()=>Mp(w0,u=>{t(u),r(!1)}),[]);const o={currentUser:e,loading:s};return i.jsx(_0.Provider,{value:o,children:!s&&n})};vc(document.getElementById("root")).render(i.jsx(k.StrictMode,{children:i.jsx(E0,{children:i.jsx(Yv,{})})}));
//# sourceMappingURL=index-BMw2jSXk.js.map
