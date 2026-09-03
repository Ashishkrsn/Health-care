import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import * as I from 'lucide-react';
import './styles.css';
import doctorImg from './assets/doctor.png';
import ambulanceImg from './assets/ambulance.png';
import robotImg from './assets/ai-robot.png';
import mapImg from './assets/map-reference.png';

const nav = [
  ['Home', I.Home], ['Doctors', I.Stethoscope], ['Hospitals', I.Hospital], ['Medicines', I.Pill],
  ['Community', I.UsersRound], ['Blood Donor', I.Droplets], ['Health Info', I.BookOpen], ['News', I.Newspaper]
];
const quick = [
  {icon:I.Stethoscope,title:'Quick Checkup',sub:'Consult doctors online',tone:'blue',href:'#ai'},
  {icon:I.MapPinned,title:'Find Nearby Care',sub:'Doctors, hospitals, clinics',tone:'blue',href:'#nearby'},
  {icon:I.Pill,title:'Search Medicine',sub:'Find and order medicines',tone:'cyan',href:'#services'},
  {icon:I.HeartPulse,title:'Health Guidance',sub:'AI-powered health assistant',tone:'pink',href:'#ai'},
  {icon:I.Siren,title:'Need Emergency Help',sub:'Get immediate assistance',tone:'pink',href:'#urgent'},
  {icon:I.BookOpen,title:'Health Info',sub:'Diseases, symptoms & blogs',tone:'blue',href:'#health-info'},
  {icon:I.UsersRound,title:'Community',sub:'Ask, share & connect',tone:'violet',href:'#community'},
  {icon:I.Droplets,title:'Find Blood',sub:'Request or donate blood',tone:'pink',href:'#blood'},
  {icon:I.HandHeart,title:'Volunteer',sub:'Help others & join campaigns',tone:'green',href:'#volunteer'},
  {icon:I.Newspaper,title:'Health News',sub:'Latest health news & research',tone:'violet',href:'#news'}
];
const services = [
  {icon:I.Bot,title:'Quick Checkup',desc:'Get general health guidance and find the right next step.',cta:'Start Checkup',tone:'blue',image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85'},
  {icon:I.UserRoundSearch,title:'Find Doctors',desc:'Compare specialists by rating, distance and availability.',cta:'Search Doctors',tone:'blue',image:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85'},
  {icon:I.Building2,title:'Hospitals & Clinics',desc:'Discover nearby facilities, services and emergency care.',cta:'Find Care',tone:'cyan',image:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=85'},
  {icon:I.Pill,title:'Medicines',desc:'Search medicine information and nearby pharmacies.',cta:'Search Medicines',tone:'green',image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85'},
  {icon:I.BookOpen,title:'Health Information',desc:'Explore diseases, symptoms, prevention and first aid.',cta:'Explore Health',tone:'orange',image:'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85'}
];
const doctors=[['Dr. Anjali Mehta','Cardiologist','4.8','1.8 km','Available today'],['Dr. Rohan Kapoor','Dermatologist','4.7','2.4 km','Available now'],['Dr. Sara Khan','Pediatrician','4.9','3.1 km','Tomorrow']];
const articles=[
 ['DISEASE','Understanding Diabetes and How to Manage It','Learn about types, symptoms, diet, and lifestyle tips.','12.4K','6 min','https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=700&q=80'],
 ['SYMPTOMS','Why Do I Get Headaches and How to Relieve?','Common causes, warning signs and when to seek help.','8.7K','5 min','https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80'],
 ['PREVENTION','10 Simple Habits for a Healthier Lifestyle','Small daily changes that can improve your overall health.','15.1K','7 min','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80'],
 ['NUTRITION','Best Foods to Boost Immunity Naturally','Practical nutrition ideas for everyday wellbeing.','9.3K','5 min','https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80']
];
const news=[
 ['HEALTH NEWS','New Guidelines for Seasonal Flu Vaccination Released','2 hours ago','https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'],
 ['RESEARCH','Breakthrough in Cancer Treatment Shows Promise','5 hours ago','https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80'],
 ['INNOVATION','AI Wearables Can Detect Heart Risks Early, Study Finds','1 day ago','https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80'],
 ['HEALTH NEWS','India Launches Nationwide Mental Health Initiative','1 day ago','https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80']
];
const nearbyLocations={
  'New Delhi, India': [
    {type:'Hospital',name:'Max Super Specialty Hospital',meta:'Multi-specialty Hospital · 1.2 km',rating:'4.6',reviews:'128 reviews',tags:['Emergency','ICU','Cardiology'],open:true,image:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=500&q=85'},
    {type:'Doctor',name:'Dr. Riya Sharma',meta:'General Physician · 1.5 km',rating:'4.8',reviews:'98 reviews',tags:['General Care','Online'],open:true,image:null},
    {type:'Pharmacy',name:'WellCare Pharmacy',meta:'Pharmacy · 1.8 km',rating:'4.5',reviews:'76 reviews',tags:['24/7','Home Delivery'],open:true,image:'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=500&q=85'}
  ],
  'Noida, India': [
    {type:'Hospital',name:'Fortis Hospital Noida',meta:'Multi-specialty Hospital · 1.4 km',rating:'4.7',reviews:'214 reviews',tags:['Emergency','ICU','Cardiology'],open:true,image:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=85'},
    {type:'Doctor',name:'Dr. Meera Kapoor',meta:'General Physician · 1.8 km',rating:'4.9',reviews:'112 reviews',tags:['General Care','Online'],open:true,image:null},
    {type:'Pharmacy',name:'Apollo Pharmacy',meta:'Pharmacy · 2.1 km',rating:'4.5',reviews:'83 reviews',tags:['24/7','Home Delivery'],open:true,image:'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=500&q=85'}
  ],
  'Gurugram, India': [
    {type:'Hospital',name:'Artemis Hospital',meta:'Multi-specialty Hospital · 1.6 km',rating:'4.6',reviews:'187 reviews',tags:['Emergency','ICU','Oncology'],open:true,image:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=500&q=85'},
    {type:'Doctor',name:'Dr. Aisha Verma',meta:'Internal Medicine · 2.0 km',rating:'4.8',reviews:'91 reviews',tags:['General Care','Online'],open:true,image:null},
    {type:'Pharmacy',name:'MedPlus Pharmacy',meta:'Pharmacy · 2.4 km',rating:'4.6',reviews:'69 reviews',tags:['Open now','Delivery'],open:true,image:'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=500&q=85'}
  ]
};
const locationAliases={newdelhi:'New Delhi, India',delhi:'New Delhi, India',noida:'Noida, India',gurgaon:'Gurugram, India',gurugram:'Gurugram, India'};
const communities=[
 ['Diabetes Support','How do you manage blood sugar spikes after meals?','42 replies','128 helpful'],
 ['General Health','What helped you build a consistent sleep routine?','31 replies','87 helpful'],
 ['Women’s Health','What questions should I ask at my first gynecology visit?','26 replies','64 helpful']
];
const volunteers=[
 ['Blood Donation Drive','2.4 km away','This Saturday','Help collect blood and connect donors with hospitals.','Blood Donation','https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=500&q=80'],
 ['Patient Support Volunteer','New Delhi','3 openings','Provide emotional support and practical assistance to patients.','Care Support','https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=500&q=80'],
 ['Health Awareness Campaign','3.1 km away','Next Week','Spread awareness about hygiene and healthy living.','Awareness','https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=500&q=80'],
 ['Child Health Screening','5.2 km away','Aug 24, 2026','Volunteer for free health checkups for children.','Health Checkup','https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=500&q=80']
];

function Icon({name:Icon,size=18}){return <Icon size={size} strokeWidth={1.8}/>}
function SectionHead({eyebrow,title,desc,action}){return <div className="section-head"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>{action&&<button className="outline-btn">{action}<I.ArrowRight size={16}/></button>}</div>}
function AuthModal({onClose}){return <div className="modal-backdrop" onMouseDown={onClose}><div className="auth-modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose}><I.X/></button><div className="modal-logo"><I.HeartPulse/> MediCare+</div><h3>Sign in to MediCare+</h3><p>Your private medical information is available only to your account.</p><button className="primary-btn full" onClick={onClose}>Create Account</button><button className="secondary-btn full" onClick={onClose}>Sign In</button><button className="text-btn" onClick={onClose}>Continue browsing</button></div></div>}

function App(){
 const [scrolled,setScrolled]=useState(false);
 const [auth,setAuth]=useState(false); const [search,setSearch]=useState(''); const [toast,setToast]=useState(''); const [nearLocation,setNearLocation]=useState('New Delhi, India'); const [nearQuery,setNearQuery]=useState(''); const [nearMode,setNearMode]=useState('map'); const [nearCategory,setNearCategory]=useState('Doctors'); const [communityQuery,setCommunityQuery]=useState('');
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>12); onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); return ()=>window.removeEventListener('scroll',onScroll)},[]);
 const showToast=(t)=>{setToast(t);setTimeout(()=>setToast(''),2200)};
 const normalizeLocation=(value)=>{const cleaned=value.trim().toLowerCase(); const compact=cleaned.replace(/\s+/g,''); if(locationAliases[compact]) return locationAliases[compact]; if(cleaned.includes('noida')) return 'Noida, India'; if(cleaned.includes('gurgaon')||cleaned.includes('gurugram')) return 'Gurugram, India'; if(cleaned.includes('delhi')) return 'New Delhi, India'; return 'New Delhi, India'};
 const normalizedNearKey=normalizeLocation(nearLocation);
 const nearbyData=nearbyLocations[normalizedNearKey];
 const filteredNearby=nearCategory==='All'?nearbyData:nearbyData.filter(item=>nearCategory==='Doctors'?item.type==='Doctor':nearCategory==='Hospitals & Clinics'?item.type==='Hospital':nearCategory==='Pharmacies'?item.type==='Pharmacy':true);
 const markerSets={'New Delhi, India':[[18,36,'blue'],[40,54,'red'],[57,27,'green'],[74,61,'purple'],[82,31,'red'],[29,73,'green']],'Noida, India':[[25,28,'blue'],[45,48,'red'],[61,30,'green'],[79,55,'purple'],[70,75,'red'],[36,68,'green']],'Gurugram, India':[[17,55,'blue'],[38,31,'red'],[57,57,'green'],[76,35,'purple'],[84,68,'red'],[30,77,'green']]};
 const nearbyMarkers=markerSets[normalizedNearKey] || markerSets['New Delhi, India'];
 const markerToneForCategory={Doctors:'blue','Hospitals & Clinics':'red',Pharmacies:'green','Blood Resources':'purple'};
 const visibleMarkers=nearCategory==='All'?nearbyMarkers:nearbyMarkers.filter(([, ,tone])=>tone===markerToneForCategory[nearCategory]);
 const searchResults=useMemo(()=>search?['Doctors','Hospitals & Clinics','Medicines','Health Information','Community'].filter(x=>x.toLowerCase().includes(search.toLowerCase())||search.toLowerCase().includes('health')):[],[search]);
 const protectedClick=(label)=>{showToast('This feature requires an account.');setAuth(true)};
 return <div className="app">
  <header className={`site-header ${scrolled?'is-scrolled':''}`}>
   <div className="top-header">
    <div className="brand" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
      <div className="brand-mark"><I.HeartPulse/></div>
      <div><strong>MediCare<span>+</span></strong><small>Care. Connect. Better Health.</small></div>
    </div>
    <div className="header-actions">
      <button className="location-pill"><I.MapPin size={17}/> New Delhi, India <I.ChevronDown size={14}/></button>
      <button className="icon-btn"><I.Bell/><span>2</span></button>
      <button className="profile" onClick={()=>protectedClick('My Medical Profile')}><div className="avatar">T</div><b>Tasreen</b><I.ChevronDown size={15}/></button>
    </div>
   </div>
   <div className="nav-row">
    <nav>{nav.map(([n,NavIcon],i)=>{const destinations=['#top','#services','#nearby','#services','#community','#blood','#health-info','#news'];return <a key={n} className={i===0?'active':''} href={destinations[i]}><NavIcon size={17} strokeWidth={1.8}/><span>{n}</span></a>})}</nav>
    <button className="sos" onClick={()=>showToast('Emergency support opened')}><span className="sos-indicator"><I.PhoneCall/></span> EMERGENCY SOS</button>
   </div>
  </header>

  <main id="top">
   <section className="hero container">
    <div className="hero-copy">
      <div className="mini-badge"><I.UsersRound/> Trusted healthcare support <span className="badge-dot">✓</span></div>
      <h1>Your Health,<br/><span>Our Priority</span></h1>
      <p>Find trusted healthcare, get guidance, book appointments and access support — all in one place.</p>
      <div className="search-wrap"><I.Search/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search doctors, symptoms, medicines, hospitals..."/><button><I.Search size={21}/></button>{searchResults.length>0&&<div className="search-menu">{searchResults.map(r=><div key={r}><I.Sparkles size={15}/>{r}<I.ArrowUpRight size={14}/></div>)}</div>}</div>
      <div className="popular-searches"><b><I.Flame size={14}/> Popular searches:</b>{['Fever','Diabetes','Cardiologist','Dentist','Vitamin D'].map(x=><button key={x} onClick={()=>setSearch(x)}>{x}</button>)}</div>
    </div>
    <div className="hero-art" aria-label="Healthcare professional">
      <div className="hero-glow"></div><div className="hero-dots"></div>
      <div className="hero-photo-wrap"><img className="hero-doctor-img" src={doctorImg} alt="Healthcare professional"/></div>
      <div className="hero-float verified-float"><div className="float-icon green"><I.ShieldCheck/></div><div><b>Verified Doctors & Hospitals</b><small>Trusted and certified healthcare providers</small></div></div>
      <div className="hero-float ai-float"><div className="float-icon violet"><I.Bot/></div><div><b>AI Health Assistant</b><small>Get health guidance 24/7</small></div></div>
      <div className="hero-float support-float"><div className="float-icon blue"><I.UsersRound/></div><div><b>24/7 Support</b><small>We are always here to help you</small></div></div>
    </div>
   </section>

   <section className="quickbar container" aria-labelledby="quick-actions-title"><div className="quickbar-title"><div><h2 id="quick-actions-title">Quick Actions</h2><span>Get quick access to essential healthcare services.</span></div><a href="#services">View All <I.ArrowRight size={16}/></a></div><div className="quickbar-grid">{quick.map(q=><a className={`quick-tile ${q.tone}`} href={q.href} key={q.title}><div className="quick-icon"><Icon name={q.icon} size={24}/></div><div><b>{q.title}</b><span>{q.sub}</span></div></a>)}</div></section>
   <section className="urgent container" id="urgent">
    <div className="urgent-header"><div><div className="eyebrow red">EMERGENCY SUPPORT</div><h2>Need urgent medical help?</h2><p>Get immediate assistance for emergencies.</p></div><div className="ecg-line"></div></div>
    <div className="urgent-body">
      <div className="urgent-option-grid">
       <button className="urgent-option" onClick={()=>showToast('Emergency options opened')}><span className="urgent-option-icon red"><I.PhoneCall/></span><span><b>Emergency Help</b><small>Call emergency services immediately</small></span></button>
       <button className="urgent-option" onClick={()=>showToast('Ambulance request started')}><span className="urgent-option-icon purple"><I.Ambulance/></span><span><b>Request Ambulance</b><small>Book an ambulance to reach you</small></span></button>
       <button className="urgent-option" onClick={()=>showToast('Finding emergency hospitals near you')}><span className="urgent-option-icon pink"><I.MapPinned/></span><span><b>Find Emergency Hospital</b><small>Locate nearest emergency hospitals</small></span></button>
      </div>
      <div className="urgent-visual"><div className="ambulance-art"><img className="ambulance-image" src={ambulanceImg} alt="Emergency ambulance"/></div><button className="sos emergency-main" onClick={()=>showToast('Emergency support opened')}><I.Siren/> GET EMERGENCY HELP <I.ArrowRight/></button><div className="location-note"><I.MapPin size={15}/> Your location will be used to connect you faster</div></div>
    </div>
   </section>
   <section className="container services" id="services"><SectionHead title="Primary Healthcare Services" desc="Access essential healthcare services quickly and easily." action="View All Services"/><div className="service-grid">{services.map(sv=><article className={`service-card ${sv.tone}`} key={sv.title} tabIndex={0} onClick={()=>showToast(`${sv.title} opened`)}><div className="service-image"><img src={sv.image} alt="" loading="lazy"/><div className="service-image-icon"><Icon name={sv.icon} size={20}/></div></div><div className="service-card-copy"><h3>{sv.title}</h3><p>{sv.desc}</p><button className="text-action" onClick={(e)=>{e.stopPropagation();showToast(`${sv.title} opened`)}}>{sv.cta}<I.ArrowRight/></button></div></article>)}</div></section>
   <section className="container ai-section" id="ai">
    <div className="ai-visual">
      <div className="ai-arch">
        <img src={robotImg} alt="AI Health Assistant robot"/>
      </div>
    </div>
    <div className="ai-main">
      <div className="ai-heading">
        <span className="ai-eyebrow">AI HEALTH ASSISTANT</span>
        <h2>How can we help today?</h2>
        <p>Ask a health question, understand a symptom, or find the right healthcare service. AI provides general guidance — not a diagnosis.</p>
      </div>
      <div className="ai-input">
        <I.Sparkles/>
        <input placeholder="Describe your health concern..." aria-label="Describe your health concern"/>
        <button onClick={()=>showToast('AI assistant opened')}>Ask AI</button>
      </div>
      <div className="ai-chips">
        <button onClick={()=>showToast('AI prompt selected')}>What doctor should I see?</button>
        <button onClick={()=>showToast('AI prompt selected')}>Explain this symptom</button>
        <button onClick={()=>showToast('AI prompt selected')}>Find care near me</button>
      </div>
    </div>
   </section>   <section className="container nearby" id="nearby">
    <div className="nearby-head">
      <div className="nearby-copy"><h2>Healthcare near you</h2><p>Find care that is nearby, open, and available when you need it.</p></div>
      <div className="view-toggle"><button className={nearMode==='map'?'active':''} onClick={()=>setNearMode('map')}><I.MapPin/> Map View</button><button className={nearMode==='list'?'active':''} onClick={()=>setNearMode('list')}><I.List/> List View</button></div>
    </div>
    {nearMode==='map' ? <div className="nearby-layout">
      <div className="map-panel"><div className="map-location-chip"><I.MapPin/> {nearLocation || 'Current location'}</div><div className="map-canvas"><img src={mapImg} alt="Map showing nearby healthcare providers"/>{visibleMarkers.map(([left,top,tone],i)=><button key={i} className={`map-marker ${tone}`} style={{left:`${left}%`,top:`${top}%`}} aria-label={`Nearby ${tone} provider`} onClick={()=>showToast(`Nearby ${tone} provider selected`)}><I.MapPin/></button>)}<div className="map-current" aria-hidden="true"><span></span></div></div></div>
      <div className="nearby-results">
        <div className="near-location-search"><I.Search className="location-search-icon"/><input value={nearQuery} onChange={e=>setNearQuery(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){const input=nearQuery.trim()||'New Delhi, India'; const key=normalizeLocation(input); setNearLocation(input); showToast(`Showing nearby care near ${key}`)}}} placeholder="Search doctors, hospitals, pharmacies, blood banks..." aria-label="Search doctors, hospitals, pharmacies, blood banks"/><button className="near-search-submit" onClick={()=>{const input=nearQuery.trim()||'New Delhi, India'; const key=normalizeLocation(input); setNearLocation(input); showToast(`Showing nearby care near ${key}`)}} aria-label="Search nearby healthcare"><I.Search/></button></div>
        <div className="near-category-row">
          {[[I.UserRound,'Doctors','blue'],[I.Hospital,'Hospitals','cyan'],[I.Pill,'Pharmacies','green'],[I.Droplets,'Blood','pink']].map(([C,t,tone])=><button key={t} className={`near-category ${tone} ${nearCategory===t || (nearCategory==='Hospitals & Clinics'&&t==='Hospitals') || (nearCategory==='Blood Resources'&&t==='Blood')?'active':''}`} onClick={()=>setNearCategory(t==='Hospitals'?'Hospitals & Clinics':t==='Blood'?'Blood Resources':t)}><C/><b>{t}</b></button>)}
        </div>
        {filteredNearby.map(item=><article className="near-result-card" key={item.name}>{item.image?<img src={item.image} alt=""/>:<img src={doctorImg} alt=""/>}<div><div className="result-title"><b>{item.name}</b>{item.open&&<span className="open-pill">Open</span>}</div><small>{item.meta}</small><div className="result-rating"><span>★ {item.rating}</span> <em>({item.reviews})</em></div><div className="result-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><button className="result-call" onClick={()=>showToast(`${item.name} contact opened`)} aria-label={`Call ${item.name}`}><I.Phone/></button></article>)}
        <button className="view-all-near" onClick={()=>showToast(`Showing all nearby ${nearCategory==='All'?'healthcare':nearCategory.toLowerCase()} around ${nearLocation}`)}>View all nearby results <I.ArrowRight/></button>
      </div>
    </div> : <div className="near-list-view">{filteredNearby.map(item=><button key={item.name} className="near-list-item" onClick={()=>showToast(`${item.name} opened`)}><span className="near-stat-icon"><I.MapPinned/></span><span><b>{item.name}</b><small>{item.meta} · ★ {item.rating}</small></span><I.ArrowRight/></button>)}</div>}
   </section>
   <section className="container blood" id="blood">
    <div className="blood-banner-copy">
      <div className="eyebrow red">BLOOD SUPPORT</div>
      <h2>Need blood or want to help someone?</h2>
      <p>Find verified blood resources nearby or register as a donor and help when you can.</p>
      <div className="blood-actions">
        <button className="red-solid blood-find-btn" onClick={()=>showToast('Blood resources opened')}>Find Blood <I.ArrowRight/></button>
        <button className="blood-donor-btn" onClick={()=>protectedClick('Become a Donor')}>Become a Donor</button>
      </div>
    </div>
    <article className="blood-nearby-request">
      <div className="blood-request-icon"><I.Droplets/></div>
      <div className="blood-request-content">
        <span className="blood-request-label">NEARBY REQUEST</span>
        <h3>O+ Blood Request</h3>
        <p>Max Healthcare · 4.2 km away</p>
        <span className="blood-urgent-badge">Urgent</span>
      </div>
      <button className="blood-view-btn" onClick={()=>protectedClick('View blood request')}>View</button>
    </article>
   </section>
   <section className="container community" id="community">
    <div className="community-head">
      <div>
        <div className="eyebrow">COMMUNITY & HUMAN SUPPORT</div>
        <h2>Ask, share, and learn together</h2>
        <p>A moderated healthcare community for questions, experiences, and peer support.</p>
      </div>
      <button className="outline-btn community-top-action" onClick={()=>document.getElementById('community')?.scrollIntoView({behavior:'smooth'})}>Explore Community <I.ArrowRight/></button>
    </div>
    <div className="community-reference-layout">
      <div className="community-reference-feed">
        <div className="community-search-row">
          <I.Search size={20}/>
          <input value={communityQuery} onChange={e=>setCommunityQuery(e.target.value)} placeholder="Search questions, topics, or keywords..." aria-label="Search community questions, topics, or keywords"/>
        </div>
        <div className="community-reference-posts">
          {[
            ['Diabetes Support','How do you manage blood sugar spikes after meals?','42 replies','128 helpful','2h ago','https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80','Diabetes Support'],
            ['General Health','What helped you build a consistent sleep routine?','31 replies','87 helpful','2h ago','https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80','General Health'],
            ["Women’s Health",'What questions should I ask at my first gynecology visit?','26 replies','64 helpful','2h ago','https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80',"Women’s Health"]
          ].filter(post=>!communityQuery || `${post[0]} ${post[1]}`.toLowerCase().includes(communityQuery.toLowerCase())).map((post,i)=>(
            <article className="community-reference-post" key={post[1]}>
              <img src={post[5]} alt={`${post[0]} community discussion illustration`} loading="lazy"/>
              <div className="community-reference-post-main">
                <div className="community-reference-post-top">
                  <span className="community-topic-pill">{post[0]}</span>
                  {i===0&&<span className="verified-joined"><I.BadgeCheck/> Verified Doctor joined</span>}
                </div>
                <h3>{post[1]}</h3>
                <div className="community-reference-meta"><span><I.MessageCircle/> {post[2]}</span><span><I.Heart/> {post[3]}</span><span><I.Clock3/> {post[4]}</span></div>
                <div className="community-discussers"><span>A</span><span>R</span><span>S</span><em>+{i===0?'18':'18'} people discussing</em></div>
              </div>
              <button className="community-discussion-btn" onClick={()=>showToast(`Opening ${post[0]} discussion`)}>View Discussion <I.ArrowRight/></button>
            </article>
          ))}
          {communityQuery && ![
            ['Diabetes Support','How do you manage blood sugar spikes after meals?'],
            ['General Health','What helped you build a consistent sleep routine?'],
            ["Women’s Health",'What questions should I ask at my first gynecology visit?']
          ].some(post=>`${post[0]} ${post[1]}`.toLowerCase().includes(communityQuery.toLowerCase())) && <div className="community-empty"><I.Search/><b>No discussions found</b><span>Try another health topic or keyword.</span></div>}
        </div>
      </div>
      <aside className="community-reference-sidebar">
        <div className="community-conversation-card">
          <div className="community-brand-icon"><I.UsersRound/></div>
          <h3>Join the conversation</h3>
          <p>Ask about a health condition, share your experience, or learn from others.</p>
          <button className="primary-btn" onClick={()=>protectedClick('Create community post')}>Explore Community <I.ArrowRight/></button>
        </div>
        <div className="community-professional-card">
          <I.BadgeCheck/>
          <div><b>Verified professionals</b><p>Doctors, nurses and other verified healthcare professionals have a special badge.</p></div>
        </div>
      </aside>
    </div>
   </section>
   <section className="container volunteer" id="volunteer"><SectionHead eyebrow="GIVE BACK" title="Volunteer opportunities" desc="Join campaigns and help make healthcare more accessible in your community." action="View All Opportunities"/><div className="volunteer-grid">{volunteers.map(v=><article className="vol-card" key={v[0]}><img src={v[5]} alt=""/><div className="vol-body"><div className="vol-top"><span className="topic green-pill">{v[4]}</span><span className="avatars">● ● ● <b>+6</b></span></div><h3>{v[0]}</h3><div className="vol-meta"><span><I.MapPin size={14}/> {v[1]}</span><span><I.CalendarDays size={14}/> {v[2]}</span></div><p>{v[3]}</p><button className="outline-btn full">View Details</button></div></article>)}<aside className="vol-join"><I.HeartHandshake/><h3>Want to help more?</h3><p>Become a volunteer and create a positive impact in your community.</p><button className="green-btn" onClick={()=>protectedClick('Volunteer registration')}>Become a Volunteer <I.ArrowRight/></button><span>Already a volunteer?</span><button className="text-action" onClick={()=>protectedClick('Volunteer activity')}>View My Activities <I.ArrowRight/></button></aside></div></section>

   <section className="container health-info" id="health-info"><SectionHead eyebrow="HEALTH KNOWLEDGE" title="Health information & discovery" desc="Explore understandable, trusted health information for everyday decisions." action="Explore All Topics"/><div className="health-search"><div><I.Search/><input placeholder="Search diseases, symptoms, treatments, articles..."/></div><div className="filter-chips"><button className="active">Diseases</button><button>Symptoms</button><button>Prevention</button><button>Nutrition</button><button>First Aid</button><button>More <I.ChevronDown/></button></div></div><h3 className="subheading">Popular health topics</h3><div className="article-grid">{articles.map(a=><article className="article-card" key={a[1]}><img src={a[5]} alt=""/><span className="article-tag">{a[0]}</span><div className="article-body"><h3>{a[1]}</h3><p>{a[2]}</p><div className="article-meta"><span>◉ {a[3]} views</span><span>◷ {a[4]} read</span></div></div></article>)}<aside className="ask-card"><I.MessageCircle/><h3>Can't find what you're looking for?</h3><p>Ask our community and get reliable answers from real people.</p><button className="purple-btn" onClick={()=>showToast('Community question composer opened')}>Ask a Question <I.ArrowRight/></button><div className="join-people"><span className="mini-avatar">A</span><span className="mini-avatar">R</span><span className="mini-avatar">S</span><b>Join the conversation</b></div></aside></div></section>

   <section className="container news" id="news"><SectionHead eyebrow="STAY INFORMED" title="Health news & medical research" desc="Keep up with health news, medical breakthroughs and innovation." action="View All News"/><div className="news-tabs"><button className="active">Health News</button><button>Medical Research</button><button>Innovations</button></div><div className="news-grid">{news.map(n=><article className="news-card" key={n[1]}><img src={n[3]} alt=""/><div className="news-tag">{n[0]}</div><small>{n[2]}</small><h3>{n[1]}</h3><p>Health experts and researchers share updates and new developments.</p><div className="article-meta"><span>◉ 1.2K views</span><span>💬 24 comments</span></div></article>)}</div></section>

   <section className="container trust"><h2>Trusted by millions, committed to your health</h2><div className="trust-grid">{[[I.BadgeCheck,'Verified & Trusted','Doctors and hospitals'],[I.LockKeyhole,'Secure & Private','Your data is protected'],[I.ClipboardCheck,'Medically Reviewed','Content you can rely on'],[I.Sparkles,'AI with Caution','Guidance, not a diagnosis'],[I.Headset,'24/7 Support','We are always here']].map(([ic,t,s])=><div key={t}><div className="trust-icon"><Icon name={ic}/></div><div><b>{t}</b><span>{s}</span></div></div>)}</div></section>

   <footer className="footer"><div className="footer-brand"><div className="brand"><div className="brand-mark"><I.HeartPulse/></div><div><strong>MediCare<span>+</span></strong><small>Care. Connect. Better Health.</small></div></div><p>A complete healthcare support platform designed to care, connect and support you and your loved ones.</p><div className="socials"><span>f</span><span>◎</span><span>𝕏</span><span>▶</span></div></div><div><h4>Explore</h4><a href="#services">Doctors</a><a href="#nearby">Hospitals</a><a href="#services">Medicines</a><a href="#health-info">Health Info</a><a href="#community">Community</a><a href="#news">News</a></div><div><h4>Support</h4><a>Help Center</a><a>Patient Support</a><a>Contact Us</a><a>FAQs</a><a>Feedback</a></div><div><h4>Resources</h4><a>Health Articles</a><a>Diseases</a><a>Symptoms</a><a>First Aid</a><a>Health Videos</a></div><div><h4>Legal</h4><a>Terms & Conditions</a><a>Privacy Policy</a><a>Disclaimer</a><a>Community Guidelines</a><a>Cookie Policy</a></div><div><h4>Download Our App</h4><p>Get the best experience on our mobile app.</p><div className="store-badges"><div>▶ <span>Google Play</span></div><div>● <span>App Store</span></div></div></div><div className="copyright">© 2026 MediCare+ · All rights reserved.</div></footer>
  </main>
  {toast&&<div className="toast"><I.CheckCircle2/> {toast}</div>}{auth&&<AuthModal onClose={()=>setAuth(false)}/>} 
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);
