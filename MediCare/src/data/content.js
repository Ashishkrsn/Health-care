import { FaHome, FaUserMd, FaHospital, FaPills, FaUsers, FaTint, FaBookMedical, FaNewspaper } from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalHospital, MdEmergency, MdLocationOn, MdFavorite, MdMedication, MdMenuBook, MdPeopleAlt, MdVolunteerActivism, MdMonitorHeart, MdSearch, MdArrowForward, MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { GiAmbulance } from 'react-icons/gi';
import quickCheckupImage from '../assets/primary-services/quick-checkup.webp';
import findDoctorsImage from '../assets/primary-services/find-doctors.webp';
import hospitalsClinicsImage from '../assets/primary-services/hospitals-clinics.webp';
import medicinesImage from '../assets/primary-services/medicines.webp';
import healthInformationImage from '../assets/primary-services/health-information.webp';
import diabetesHealthImage from '../assets/health-information/diabetes.png';
import headachesHealthImage from '../assets/health-information/headaches.png';
import preventionHealthImage from '../assets/health-information/prevention.png';
import nutritionHealthImage from '../assets/health-information/nutrition.png';

export const navLinks = [
  { label: 'Home', icon: FaHome },
  { label: 'Doctors', icon: FaUserMd },
  { label: 'Hospitals', icon: FaHospital },
  { label: 'Medicines', icon: FaPills },
  { label: 'Community', icon: FaUsers },
  { label: 'Blood Donor', icon: FaTint },
  { label: 'Health Info', icon: FaBookMedical },
  { label: 'News', icon: FaNewspaper },
];

export const popularSearches = ['Fever', 'Diabetes', 'Cardiologist', 'Dentist', 'Vitamin D'];

export const trustCards = [
  { icon: MdHealthAndSafety, tone: 'green', title: 'Verified Doctors & Hospitals', description: 'Trusted and certified healthcare providers' },
  { icon: MdMonitorHeart, tone: 'purple', title: 'AI Health Assistant', description: 'Get health guidance 24/7' },
  { icon: MdPeopleAlt, tone: 'blue', title: '24/7 Support', description: 'We are always here to help you' },
];

export const quickActions = [
  { icon: MdMonitorHeart, tone: 'blue', title: 'Quick Checkup', description: 'Consult doctors online' },
  { icon: FaUserMd, tone: 'blue', title: 'Find Doctors', description: 'Book appointment with specialist' },
  { icon: FaHospital, tone: 'teal', title: 'Hospitals & Clinics', description: 'Near you with ratings' },
  { icon: MdMedication, tone: 'green', title: 'Medicines', description: 'Search & order medicines' },
  { icon: MdEmergency, tone: 'red', title: 'Emergency', description: 'Ambulance & urgent care' },
  { icon: MdMenuBook, tone: 'blue', title: 'Health Info', description: 'Diseases, symptoms & blogs' },
  { icon: MdPeopleAlt, tone: 'purple', title: 'Community', description: 'Ask, share & connect' },
  { icon: FaTint, tone: 'red', title: 'Blood Donor', description: 'Find donors or request blood' },
  { icon: MdVolunteerActivism, tone: 'green', title: 'Volunteer', description: 'Help others & join campaigns' },
  { icon: FaNewspaper, tone: 'purple', title: 'Health News', description: 'Latest health news & research' },
];

export const emergencyActions = [
  { icon: MdLocalPhone, tone: 'red', title: 'Emergency Help', description: 'Call emergency services immediately' },
  { icon: GiAmbulance, tone: 'purple', title: 'Request Ambulance', description: 'Book an ambulance to reach you' },
  { icon: MdLocationPin, tone: 'red', title: 'Find Emergency Hospital', description: 'Locate nearest emergency hospitals' },
];

export const primaryServices = [
  { icon: MdMonitorHeart, tone: 'blue', title: 'Quick Checkup', description: 'Get general health guidance and find the right specialist.', cta: 'Start Checkup', image: quickCheckupImage },
  { icon: FaUserMd, tone: 'purple', title: 'Find Doctors', description: 'Search by specialty, experience, ratings and availability.', cta: 'Search Doctors', image: findDoctorsImage },
  { icon: FaHospital, tone: 'teal', title: 'Hospitals & Clinics', description: 'Find nearby hospitals and clinics with ratings, services and more.', cta: 'Find Hospitals', image: hospitalsClinicsImage },
  { icon: MdMedication, tone: 'green', title: 'Medicines', description: 'Search medicines, check availability and order online.', cta: 'Search Medicines', image: medicinesImage },
  { icon: MdMenuBook, tone: 'red', iconTone: 'purple', title: 'Health Information', description: 'Explore diseases, symptoms, treatments and healthy living guides.', cta: 'Explore Articles', image: healthInformationImage },
];

export const toneStyles = {
  blue: { iconBg: 'bg-blue-50', iconText: 'text-[#2563EB]', title: 'text-[#1E40AF]' },
  purple: { iconBg: 'bg-purple-50', iconText: 'text-[#7C3AED]', title: 'text-[#6D28D9]' },
  teal: { iconBg: 'bg-teal-50', iconText: 'text-[#0D9488]', title: 'text-[#0F766E]' },
  green: { iconBg: 'bg-green-50', iconText: 'text-[#16A34A]', title: 'text-[#15803D]' },
  red: { iconBg: 'bg-red-50', iconText: 'text-[#EF4444]', title: 'text-[#DC2626]' },
  orange: { iconBg: 'bg-orange-50', iconText: 'text-[#F97316]', title: 'text-[#EA580C]' },
};

export const uiIcons = { MdLocationOn, MdSearch, MdArrowForward, MdFavorite, MdLocalPhone, MdLocationPin };

export const nearbyCategories = [
  { label: 'Doctors', tone: 'blue' },
  { label: 'Hospitals', tone: 'green' },
  { label: 'Pharmacies', tone: 'orange' },
  { label: 'Blood', tone: 'red' },
];

export const nearbyProviders = [
  { id: 'anjali-mehta', category: 'Doctors', initial: 'A', name: 'Dr. Anjali Mehta', specialty: 'Cardiologist', rating: '4.8', distance: '1.8 km', availability: 'Available today', tone: 'purple', marker: 'blue' },
  { id: 'rohan-kapoor', category: 'Doctors', initial: 'R', name: 'Dr. Rohan Kapoor', specialty: 'Dermatologist', rating: '4.7', distance: '2.4 km', availability: 'Available now', tone: 'purple', marker: 'blue' },
  { id: 'sara-khan', category: 'Doctors', initial: 'S', name: 'Dr. Sara Khan', specialty: 'Pediatrician', rating: '4.9', distance: '3.1 km', availability: 'Tomorrow', tone: 'purple', marker: 'blue' },
  { id: 'city-care-hospital', category: 'Hospitals', initial: 'H', name: 'City Care Hospital', specialty: 'Multi-specialty hospital', rating: '4.6', distance: '2.7 km', availability: 'Open now', tone: 'green', marker: 'green' },
  { id: 'apollo-pharmacy', category: 'Pharmacies', initial: 'P', name: 'HealthPlus Pharmacy', specialty: '24/7 pharmacy', rating: '4.5', distance: '1.2 km', availability: 'Open now', tone: 'orange', marker: 'orange' },
  { id: 'blood-connect', category: 'Blood', initial: 'B', name: 'BloodConnect Center', specialty: 'Blood resources', rating: '4.9', distance: '3.6 km', availability: 'O+ available', tone: 'red', marker: 'red' },
];

export const nearbyMapMarkers = [
  { id: 'doctor-marker', tone: 'blue', icon: FaUserMd, x: '20%', y: '30%' },
  { id: 'hospital-marker', tone: 'green', icon: FaHospital, x: '64%', y: '37%' },
  { id: 'blood-marker', tone: 'red', icon: FaTint, x: '42%', y: '61%' },
  { id: 'pharmacy-marker', tone: 'orange', icon: MdMedication, x: '82%', y: '60%' },
];

export const volunteerOpportunities = [
  {
    title: 'Blood Donation Drive', distance: '2.4 km away', date: 'This Saturday', description: 'Help us collect blood and save lives in hospitals.', category: 'Blood Donation', tone: 'red', count: 18,
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=500&q=80',
    avatars: ['https://i.pravatar.cc/80?img=47', 'https://i.pravatar.cc/80?img=32', 'https://i.pravatar.cc/80?img=12'],
  },
  {
    title: 'Patient Support Volunteer', distance: 'New Delhi', date: '3 Openings', description: 'Provide emotional support and assistance to patients.', category: 'Care Support', tone: 'green', count: 6,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80',
    avatars: ['https://i.pravatar.cc/80?img=5', 'https://i.pravatar.cc/80?img=11', 'https://i.pravatar.cc/80?img=20'],
  },
  {
    title: 'Health Awareness Campaign', distance: '3.1 km away', date: 'Next Week', description: 'Spread awareness about hygiene and healthy living.', category: 'Awareness', tone: 'blue', count: 12,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=500&q=80',
    avatars: ['https://i.pravatar.cc/80?img=23', 'https://i.pravatar.cc/80?img=36', 'https://i.pravatar.cc/80?img=44'],
  },
  {
    title: 'Child Health Screening', distance: '5.2 km away', date: 'Aug 24, 2025', description: 'Volunteer for free health checkup for children.', category: 'Health Checkup', tone: 'purple', count: 7,
    image: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=500&q=80',
    avatars: ['https://i.pravatar.cc/80?img=16', 'https://i.pravatar.cc/80?img=28', 'https://i.pravatar.cc/80?img=49'],
  },
];

export const volunteerCta = {
  title: 'Want to help more?',
  description: 'Become a volunteer and create a positive impact in your community.',
  button: 'Become a Volunteer',
};



export const communityTopics = ['All', 'Diabetes', 'General Health', "Women's Health", 'Mental Health', 'Nutrition', 'Lifestyle'];

export const communityDiscussions = [
  { id: 'blood-sugar-spikes', topic: 'Diabetes Support', title: 'How do you manage blood sugar spikes after meals?', replies: 42, helpful: 128, time: '2h ago', discussing: 13, avatars: ['A', 'R', 'S'] },
  { id: 'sleep-routine', topic: 'Diabetes Support', title: 'What helped you build a consistent sleep routine?', replies: 42, helpful: 128, time: '2h ago', discussing: 13, avatars: ['A', 'R', 'S'] },
  { id: 'gynecology-visit', topic: "Women's Health", title: 'What questions should I ask at my first gynecology visit?', replies: 42, helpful: 128, time: '2h ago', discussing: 13, avatars: ['A', 'R', 'S'] },
];

export const healthFilters = ['Diseases', 'Symptoms', 'Prevention', 'Nutrition', 'First Aid', 'More'];

export const healthTopics = [
  {
    category: 'DISEASE', badgeClass: 'bg-[#2563EB]/90', title: 'Understanding Diabetes and How to Manage It', description: 'Learn about types, symptoms, diet, and lifestyle tips.', views: '12.4K', readTime: '6 min read',
    image: diabetesHealthImage,
  },
  {
    category: 'SYMPTOMS', badgeClass: 'bg-[#7C3AED]/90', title: 'Why Do I Get Headaches and How to Relieve?', description: 'Common causes, types of headaches and remedies.', views: '8.7K', readTime: '5 min read',
    image: headachesHealthImage,
  },
  {
    category: 'PREVENTION', badgeClass: 'bg-[#0D9488]/90', title: '10 Simple Habits for a Healthier Lifestyle', description: 'Small daily changes that can improve your overall health.', views: '15.1K', readTime: '7 min read',
    image: preventionHealthImage,
  },
  {
    category: 'NUTRITION', badgeClass: 'bg-[#16A34A]/90', title: 'Best Foods to Boost Immunity Naturally', description: 'Eat these nutrient-rich foods to stay strong and healthy.', views: '9.3K', readTime: '5 min read',
    image: nutritionHealthImage,
  },
];

export const healthInfoCta = {
  title: "Can't find what you are looking for?",
  description: 'Our health experts and community are here to help.',
  button: 'Ask a Question',
  avatars: ['https://i.pravatar.cc/80?img=7', 'https://i.pravatar.cc/80?img=14', 'https://i.pravatar.cc/80?img=31'],
};

export const healthNewsTabs = ['Health News', 'Medical Research', 'Innovations'];

const newsBase = [
  { badge: 'HEALTH NEWS', badgeClass: 'bg-[#1E3A5F]/90', title: 'New Guidelines for Seasonal Flu Vaccination Released', description: 'Health experts recommend updated vaccine for better protection this year.', views: '1.2K', comments: '24', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b6d6?auto=format&fit=crop&w=900&q=80' },
  { badge: 'RESEARCH', badgeClass: 'bg-[#0F766E]/90', title: 'Breakthrough in Cancer Treatment Shows Promise', description: 'New study shows improved outcomes with targeted therapy approach.', views: '2.8K', comments: '56', time: '5 hours ago', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80' },
  { badge: 'INNOVATION', badgeClass: 'bg-[#166534]/90', title: 'AI Wearables Can Detect Heart Risks Early, Study Finds', description: 'New AI model predicts heart conditions with higher accuracy and speed.', views: '3.1K', comments: '78', time: '1 day ago', image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80' },
  { badge: 'HEALTH NEWS', badgeClass: 'bg-[#1E3A5F]/90', title: 'India Launches Nationwide Mental Health Initiative', description: 'Government announces free counseling and support services for all.', views: '1.7K', comments: '34', time: '1 day ago', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80' },
];

export const healthNews = {
  'Health News': newsBase,
  'Medical Research': newsBase.map((item, index) => ({ ...item, badge: index % 2 ? 'RESEARCH' : 'HEALTH NEWS' })),
  'Innovations': newsBase.map((item, index) => ({ ...item, badge: 'INNOVATION', badgeClass: 'bg-[#166534]/90' })),
};

export const trustItems = [
  { title: 'Trusted & Verified', subtitle: 'Certified doctors & hospitals', icon: MdHealthAndSafety, iconBg: 'bg-blue-50', iconText: 'text-[#1683FF]' },
  { title: 'Secure & Private', subtitle: 'Your data is safe with us', icon: MdHealthAndSafety, iconBg: 'bg-purple-50', iconText: 'text-[#8B5CF6]' },
  { title: 'Reliable Information', subtitle: 'Medically reviewed content', icon: MdMenuBook, iconBg: 'bg-blue-50', iconText: 'text-[#0EA5E9]' },
  { title: '24/7 Support', subtitle: 'We are always here for you', icon: MdLocalPhone, iconBg: 'bg-pink-50', iconText: 'text-[#EC4899]' },
  { title: 'Accessible for All', subtitle: 'Inclusive healthcare for everyone', icon: MdPeopleAlt, iconBg: 'bg-cyan-50', iconText: 'text-[#06A6E0]' },
];

export const footerColumns = [
  { title: 'Quick Links', links: ['About Us', 'Find Doctors', 'Hospitals', 'Medicines', 'Health Info'] },
  { title: 'Support', links: ['Help Center', 'Contact Us', 'Patient Support', 'Terms & Conditions', 'Privacy Policy'] },
  { title: 'Community', links: ['Community Guidelines', 'Blood Donor', 'Volunteer', 'NGO / Partners', 'Events'] },
];
