import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Instagram, ExternalLink, Award, Briefcase, Star, MapPin, Play, Layers, Palette, Camera, Eye, Moon, Sun, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('id');

  const translations = {
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        specialties: 'Keahlian',
        projects: 'Proyek',
        certificates: 'Sertifikat',
        contact: 'Kontak'
      },
      hero: {
        available: 'Tersedia untuk Proyek Kreatif',
        title: 'Desainer Kreatif',
        subtitle: '3D Modeling • Desain Grafis • Pembuatan Konten',
        viewPortfolio: 'Lihat Portofolio',
        getInTouch: 'Hubungi Saya'
      },
      about: {
        title: 'Tentang Saya',
        description1: 'Mahasiswi S1 Informatika Tahun Keempat di Universitas Teknokrat Indonesia dengan spesialisasi dalam bidang Creative Design, 3D Modeling, dan Content Strategy.',
        description2: 'Berpengalaman dalam mengembangkan metaverse environments, menghasilkan konten visual yang engaging, dan memimpin tim kreatif untuk menciptakan solusi digital yang inovatif.',
        description3: 'Menggabungkan technical expertise dengan creative vision untuk menghadirkan pengalaman digital yang memukau dan meaningful.',
        skills: 'Keterampilan Teknis',
        journey: 'Perjalanan Kepemimpinan'
      },
      specialties: {
        title: 'Keahlian Kreatif',
        subtitle: 'Solusi kreatif komprehensif yang mencakup desain digital, lingkungan 3D, dan pengembangan konten strategis',
        modeling: {
          title: '3D Modeling & Animasi',
          description: 'Menciptakan lingkungan 3D yang imersif, visualisasi arsitektur, dan pengalaman metaverse interaktif menggunakan Blender dan Unity.',
          skills: ['Pemodelan Arsitektur', 'Desain Lingkungan', 'Pemodelan Karakter', 'Rigging Animasi']
        },
        design: {
          title: 'Desain Grafis',
          description: 'Solusi desain visual komprehensif dari identitas merek hingga materi pemasaran digital dengan fokus pada estetika modern.',
          skills: ['Identitas Brand', 'Desain Cetak', 'Grafis Digital', 'Elemen UI/UX']
        },
        content: {
          title: 'Pembuatan Konten',
          description: 'Pengembangan konten media sosial strategis, produksi video, dan storytelling digital untuk tujuan pendidikan dan promosi.',
          skills: ['Strategi Media Sosial', 'Produksi Video', 'Perencanaan Konten', 'Visual Storytelling']
        }
      },
      projects: {
        title: 'Proyek Unggulan',
        subtitle: 'Lingkungan 3D yang imersif dan pengalaman digital yang melampaui batas kreatif',
        explore: 'Jelajahi Proyek',
        viewProject: 'Lihat Proyek',
        demo: 'Demo',
        liveDemo: 'Demo Langsung',
        watchVideo: 'Tonton Video',
        portfolio: 'Portofolio',
        tools: 'Teknologi & Alat'
      },
      certificates: {
        title: 'Sertifikat & Pengakuan',
        subtitle: 'Pembelajaran berkelanjutan dan pengembangan profesional di bidang kreatif dan teknis'
      },
      contact: {
        title: "Mari Berkarya Bersama",
        subtitle: 'Siap mengubah visi kreatif Anda menjadi realitas digital yang menakjubkan',
        directContact: 'Kontak Langsung',
        available: 'Tersedia untuk konsultasi proyek',
        followProcess: 'Ikuti proses kreatif saya',
        craftingExperiences: 'Menciptakan pengalaman digital imersif sejak 2022'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        specialties: 'Specialties',
        projects: 'Projects',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      hero: {
        available: 'Available for Creative Projects',
        title: 'Creative Designer',
        subtitle: '3D Modeling • Graphic Design • Content Creation',
        viewPortfolio: 'View Portfolio',
        getInTouch: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        description1: 'Fourth-year Informatics undergraduate student at Universitas Teknokrat Indonesia specializing in Creative Design, 3D Modeling, and Content Strategy.',
        description2: 'Experienced in developing metaverse environments, producing engaging visual content, and leading creative teams to create innovative digital solutions.',
        description3: 'Combining technical expertise with creative vision to deliver stunning and meaningful digital experiences.',
        skills: 'Technical Skills',
        journey: 'Leadership Journey'
      },
      specialties: {
        title: 'Creative Specialties',
        subtitle: 'Comprehensive creative solutions spanning digital design, 3D environments, and strategic content development',
        modeling: {
          title: '3D Modeling & Animation',
          description: 'Creating immersive 3D environments, architectural visualizations, and interactive metaverse experiences using Blender and Unity.',
          skills: ['Architectural Modeling', 'Environment Design', 'Character Modeling', 'Animation Rigging']
        },
        design: {
          title: 'Graphic Design',
          description: 'Comprehensive visual design solutions from brand identity to digital marketing materials with focus on modern aesthetics.',
          skills: ['Brand Identity', 'Print Design', 'Digital Graphics', 'UI/UX Elements']
        },
        content: {
          title: 'Content Creation',
          description: 'Strategic social media content development, video production, and digital storytelling for educational and promotional purposes.',
          skills: ['Social Media Strategy', 'Video Production', 'Content Planning', 'Visual Storytelling']
        }
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Immersive 3D environments and digital experiences that push creative boundaries',
        explore: 'Explore Project',
        viewProject: 'View Project',
        demo: 'Demo',
        liveDemo: 'Live Demo',
        watchVideo: 'Watch Video',
        portfolio: 'Portfolio',
        tools: 'Technologies & Tools'
      },
      certificates: {
        title: 'Certificates & Recognition',
        subtitle: 'Continuous learning and professional development in creative and technical fields'
      },
      contact: {
        title: "Let's Create Together",
        subtitle: 'Ready to transform your creative vision into stunning digital reality',
        directContact: 'Direct Contact',
        available: 'Available for project consultation',
        followProcess: 'Follow my creative process',
        craftingExperiences: 'Crafting immersive digital experiences since 2022'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'social-media', 'projects', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
      const newVisibleElements = new Set(visibleElements);

      elementsToAnimate.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible && !visibleElements.has(index)) {
          newVisibleElements.add(index);
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });

      setVisibleElements(newVisibleElements);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'id' ? 'en' : 'id');

  const projects = [
    { 
      title: "MetaSchool SMP ISLAM AZZAHRA", 
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop", 
      category: "3D Environment",
      type: "Metaverse Design",
      description: language === 'id' 
        ? "Virtual school environment dengan interactive classroom dan library 3D yang memungkinkan pembelajaran immersive dengan detail arsitektur yang realistis"
        : "Virtual school environment with interactive classroom and 3D library enabling immersive learning with realistic architectural details",
      tools: ["Blender", "Unity", "Photoshop"],
      year: "2025",
      demoLink: "https://metaschool-azzahra.demo.com",
      githubLink: "https://github.com/risma/metaschool-azzahra"
    },
    { 
      title: "Metaverse Universitas Islam Makassar", 
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=600&fit=crop", 
      category: "Virtual Tour",
      type: "Educational Platform",
      description: language === 'id'
        ? "Campus virtual tour dengan 360° panoramic views dan interactive navigation system yang memberikan pengalaman eksplorasi kampus yang immersive"
        : "Campus virtual tour with 360° panoramic views and interactive navigation system providing immersive campus exploration experience",
      tools: ["Blender", "CapCut", "After Effects"],
      year: "2024",
      demoLink: "https://uim-metaverse.demo.com",
      videoLink: "https://youtube.com/watch?v=example1"
    },
    { 
      title: "Metaverse Universitas Teknokrat Indonesia", 
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=600&fit=crop", 
      category: "Interactive Campus",
      type: "Digital Architecture",
      description: language === 'id'
        ? "Interactive campus dengan virtual exhibition halls dan student collaboration spaces yang mendukung pembelajaran kolaboratif di era digital"
        : "Interactive campus with virtual exhibition halls and student collaboration spaces supporting collaborative learning in the digital era",
      tools: ["Blender", "Unity", "Illustrator"],
      year: "2024",
      demoLink: "https://uti-metaverse.demo.com",
      portfolioLink: "https://behance.net/project/uti-metaverse"
    },
    { 
      title: "Metaverse Candi Borobudur dan UMKM", 
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop", 
      category: "Cultural Heritage",
      type: "3D Reconstruction",
      description: language === 'id'
        ? "Cultural heritage preservation dengan UMKM showcase untuk promosi produk lokal, menggabungkan pelestarian budaya dengan ekonomi digital"
        : "Cultural heritage preservation with UMKM showcase for local product promotion, combining cultural preservation with digital economy",
      tools: ["Blender", "Photoshop", "Premiere Pro"],
      year: "2024",
      demoLink: "https://borobudur-metaverse.demo.com",
      videoLink: "https://youtube.com/watch?v=example2"
    },
    { 
      title: "Metaverse SMA Al-Kautsar", 
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop", 
      category: "Educational VR",
      type: "Learning Environment",
      description: language === 'id'
        ? "High school metaverse dengan virtual laboratories dan interactive learning modules yang mendukung eksperimen virtual dan pembelajaran STEM"
        : "High school metaverse with virtual laboratories and interactive learning modules supporting virtual experiments and STEM learning",
      tools: ["Blender", "Canva", "Unity"],
      year: "2024",
      demoLink: "https://alkautsar-metaverse.demo.com",
      githubLink: "https://github.com/risma/alkautsar-vr"
    },
    { 
      title: "Metaverse SMA 2 Metro", 
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", 
      category: "School Platform",
      type: "Interactive Learning",
      description: language === 'id'
        ? "Educational platform dengan interactive learning spaces dan student engagement tools yang meningkatkan partisipasi siswa dalam pembelajaran digital"
        : "Educational platform with interactive learning spaces and student engagement tools enhancing student participation in digital learning",
      tools: ["Blender", "CapCut", "Photoshop"],
      year: "2024",
      demoLink: "https://sma2metro-metaverse.demo.com",
      portfolioLink: "https://behance.net/project/sma2metro"
    },
    { 
      title: "Metaverse Pasar Seni dan Kreatif", 
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop", 
      category: "Art Gallery",
      type: "Creative Marketplace",
      description: language === 'id'
        ? "Virtual art marketplace dengan 3D gallery exhibitions dan artist collaboration features yang memfasilitasi pameran seni digital dan kolaborasi kreatif"
        : "Virtual art marketplace with 3D gallery exhibitions and artist collaboration features facilitating digital art exhibitions and creative collaboration",
      tools: ["Blender", "Illustrator", "After Effects"],
      year: "2024",
      demoLink: "https://art-market-metaverse.demo.com",
      videoLink: "https://youtube.com/watch?v=example3"
    }
  ];

  const experiences = [
    { role: language === 'id' ? "Ketua JUARAMETA" : "Chairman of JUARAMETA", org: "Center of Excellence Metaverse UTI", period: language === 'id' ? "Mei 2025 - Sekarang" : "May 2025 - Present", type: "Leadership" },
    { role: language === 'id' ? "Sekretaris Umum" : "General Secretary", org: language === 'id' ? "Himpunan Mahasiswa Informatika" : "Informatics Student Association", period: language === 'id' ? "Februari 2025 - Sekarang" : "February 2025 - Present", type: "Leadership" },
    { role: language === 'id' ? "Koordinator Divisi Humas dan Media Sosial" : "Coordinator of Public Relations and Social Media Division", org: "Center of Excellence Metaverse UTI", period: language === 'id' ? "Agustus 2024 - April 2025" : "August 2024 - April 2025", type: "Social Media" },
    { role: language === 'id' ? "Ketua Divisi - KOMINFO" : "Division Head - KOMINFO", org: language === 'id' ? "Ikatan Beasiswa Teknokrat" : "Teknokrat Scholarship Association", period: language === 'id' ? "Maret 2024 - Januari 2025" : "March 2024 - January 2025", type: "Communications" },
    { role: language === 'id' ? "Sekretaris Divisi - KOMINFO" : "Division Secretary - KOMINFO", org: language === 'id' ? "Himpunan Mahasiswa Informatika" : "Informatics Student Association", period: language === 'id' ? "Februari 2023 - Februari 2024" : "February 2023 - February 2024", type: "Communications" },
    { role: language === 'id' ? "Staf Divisi Pendidikan" : "Education Division Staff", org: language === 'id' ? "Himpunan Mahasiswa Informatika" : "Informatics Student Association", period: language === 'id' ? "Juli 2022 - Februari 2023" : "July 2022 - February 2023", type: "Education" }
  ];

  const tools = [
    { name: "Blender", description: "3D Modeling & Animation", category: "3D Software", icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop" },
    { name: "Canva Pro", description: language === 'id' ? "Desain Grafis & Konten Visual" : "Graphic Design & Visual Content", category: language === 'id' ? "Alat Desain" : "Design Tools", icon: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=80&h=80&fit=crop" },
    { name: "CapCut & Premiere", description: language === 'id' ? "Produksi Video & Motion Graphics" : "Video Production & Motion Graphics", category: language === 'id' ? "Edit Video" : "Video Editing", icon: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=80&h=80&fit=crop" },
    { name: "CorelDraw", description: language === 'id' ? "Grafis Vektor & Ilustrasi" : "Vector Graphics & Illustration", category: language === 'id' ? "Software Desain" : "Design Software", icon: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=80&h=80&fit=crop" },
    { name: "Google Workspace", description: language === 'id' ? "Email & Kolaborasi" : "Email & Collaboration", category: language === 'id' ? "Alat Kolaborasi" : "Collaboration Tools", icon: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop" }
  ];

  const specialties = [
    { icon: Layers, title: t.specialties.modeling.title, description: t.specialties.modeling.description, skills: t.specialties.modeling.skills },
    { icon: Palette, title: t.specialties.design.title, description: t.specialties.design.description, skills: t.specialties.design.skills },
    { icon: Camera, title: t.specialties.content.title, description: t.specialties.content.description, skills: t.specialties.content.skills }
  ];

  const certificates = [
    { id: 1, image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop", title: "EXPO CYBER SECURITY", category: "Security", year: "2024", description: language === 'id' ? "Fundamental keamanan siber lanjutan dan praktik terbaik" : "Advanced cybersecurity fundamentals and best practices", issuer: "Technology Institute" },
    { id: 2, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop", title: "EXPO MOBILE II", category: "Mobile Dev", year: "2024", description: language === 'id' ? "Pengembangan aplikasi mobile dan desain UI/UX" : "Mobile application development and UI/UX design", issuer: "Mobile Development Academy" },
    { id: 3, image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop", title: "UI/UX Design Mastery", category: "Design", year: "2024", description: language === 'id' ? "Prinsip desain antarmuka dan pengalaman pengguna" : "User interface and experience design principles", issuer: "Design Institute" },
    { id: 4, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop", title: "3D Animation Expert", category: "Animation", year: "2024", description: language === 'id' ? "Teknik pemodelan dan animasi 3D lanjutan" : "Advanced 3D modeling and animation techniques", issuer: "Creative Arts Academy" },
    { id: 5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", title: "Digital Marketing Pro", category: "Marketing", year: "2023", description: language === 'id' ? "Pemasaran digital strategis dan analitik" : "Strategic digital marketing and analytics", issuer: "Marketing Institute" },
    { id: 6, image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop", title: "Social Media Strategy", category: "Social Media", year: "2023", description: language === 'id' ? "Strategi konten dan manajemen media sosial" : "Content strategy and social media management", issuer: "Social Media Academy" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }
        .fade-in-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .glass { background: ${darkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)'}; backdrop-filter: blur(20px); border: 1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}; }
        .glass-dark { background: ${darkMode ? 'rgba(29, 78, 216, 0.95)' : 'rgba(37, 99, 235, 0.95)'}; backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .shadow-elegant { box-shadow: 0 20px 60px ${darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(59, 130, 246, 0.1)'}; }
        .shadow-deep { box-shadow: 0 25px 80px ${darkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(59, 130, 246, 0.15)'}; }
        .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-12px); box-shadow: 0 30px 80px ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}; }
        .hover-scale:hover { transform: scale(1.05); }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
        .text-gradient { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .bg-gradient-custom { background: ${darkMode ? 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'}; }
        .grid-pattern { background-image: linear-gradient(${darkMode ? 'rgba(59, 130, 246, 0.03)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(59, 130, 246, 0.03)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px); background-size: 50px 50px; }
        .project-overlay { background: linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(29, 78, 216, 0.9) 100%); }
        .certificate-hover { position: relative; overflow: hidden; }
        .certificate-hover::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
        .certificate-hover:hover::before { left: 100%; }
        .project-link-btn { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); transition: all 0.3s ease; }
        .project-link-btn:hover { background: rgba(255, 255, 255, 0.3); transform: translateY(-2px); }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'glass shadow-elegant py-2' : `${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm py-4`}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-black ${darkMode ? 'text-blue-400' : 'text-blue-600'} tracking-tight hover-scale transition-transform duration-300 cursor-pointer`}>
              PORTOFOLIO
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {Object.values(t.nav).map((item, idx) => {
                const keys = ['home', 'about', 'social-media', 'projects', 'certificates', 'contact'];
                return (
                  <button key={idx} onClick={() => scrollToSection(keys[idx])} className={`px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold hover-scale ${activeSection === keys[idx] ? 'bg-blue-600 text-white shadow-lg scale-105' : `${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}`}>
                    {item}
                  </button>
                );
              })}
              <button onClick={toggleLanguage} className={`ml-2 p-2.5 rounded-xl transition-all duration-300 hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'}`} title={language === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia'}>
                <Globe className="w-5 h-5" />
              </button>
              <button onClick={toggleDarkMode} className={`ml-2 p-2.5 rounded-xl transition-all duration-300 hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'}`} title={darkMode ? 'Light Mode' : 'Dark Mode'}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleLanguage} className={`p-2 rounded-xl transition-all duration-300 hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'}`}>
                <Globe className="w-5 h-5" />
              </button>
              <button onClick={toggleDarkMode} className={`p-2 rounded-xl transition-all duration-300 hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'}`}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className={`p-2 rounded-xl transition-all duration-300 hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass border-t animate-fadeInUp">
            <div className="px-4 py-4 space-y-2">
              {Object.values(t.nav).map((item, idx) => {
                const keys = ['home', 'about', 'social-media', 'projects', 'certificates', 'contact'];
                return (
                  <button key={idx} onClick={() => scrollToSection(keys[idx])} className={`block w-full text-left px-4 py-3 rounded-xl transition-all font-medium hover-scale ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-custom relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className={`absolute top-0 right-0 w-96 h-96 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} rounded-full blur-3xl opacity-40 -mr-48 -mt-48 animate-float`}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 ${darkMode ? 'bg-blue-800' : 'bg-blue-200'} rounded-full blur-3xl opacity-30 -ml-40 -mb-40 animate-float`} style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 glass rounded-full text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'} hover-glow transition-all duration-300`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom"></div>
                {t.hero.available}
              </div>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                {language === 'id' ? 'Desainer' : 'Creative'}
                <br />
                <span className="text-gradient">{language === 'id' ? 'Kreatif' : 'Designer'}</span>
              </h1>
              <div className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 space-y-2`}>
                <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Risma Oktaviani</p>
                <p>{t.hero.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={() => scrollToSection('projects')} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift inline-flex items-center gap-3 shadow-lg hover-glow">
                  <Play className="w-5 h-5" />
                  {t.hero.viewPortfolio}
                </button>
                <button onClick={() => scrollToSection('contact')} className={`glass ${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-200'} px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all hover-lift border hover-glow`}>
                  {t.hero.getInTouch}
                </button>
              </div>
            </div>
            
            <div className="animate-slideInRight flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                <div className="glass p-6 rounded-3xl shadow-deep hover-lift transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop" alt="Risma Oktaviani" className="w-full h-auto rounded-2xl shadow-lg object-cover" style={{ maxHeight: '500px' }} />
                  <div className="absolute bottom-10 left-6 right-6 glass-dark p-4 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-1">Risma Oktaviani</h3>
                    <p className="text-blue-200 font-medium text-sm">{language === 'id' ? 'Desainer Kreatif & Spesialis 3D' : 'Creative Designer & 3D Specialist'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <ChevronDown size={32} className={`mx-auto ${darkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'} cursor-pointer transition-colors animate-bounce hover-scale`} onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              {t.about.title.split(' ')[0]} <span className="text-gradient">{t.about.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8 fade-in-on-scroll">
              <div className="glass-dark p-8 rounded-2xl text-white hover-lift transition-all duration-500">
                <h3 className="text-3xl font-bold mb-6">Risma Oktaviani</h3>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-lg text-blue-50">{t.about.description1}</p>
                  <p className="text-blue-100">{t.about.description2}</p>
                  <p className="text-blue-100">{t.about.description3}</p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">Lampung, Indonesia</span>
                </div>
              </div>
              
              <div className="glass p-8 rounded-2xl shadow-elegant hover-lift transition-all duration-500">
                <h4 className={`font-black text-2xl mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                  <Award className="text-blue-600" />
                  {t.about.skills}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool, idx) => (
                    <div key={tool.name} className={`flex items-center gap-4 p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl hover:bg-opacity-80 transition-all hover-scale duration-300`}>
                      <div className={`w-16 h-16 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl flex items-center justify-center shadow-md hover-scale transition-transform duration-300`}>
                        <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain rounded-lg" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-lg`}>{tool.name}</div>
                        <div className="text-blue-600 font-medium text-sm mb-1">{tool.category}</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-in-on-scroll">
              <div className="glass p-8 rounded-2xl shadow-elegant hover-lift transition-all duration-500">
                <h4 className={`font-black text-2xl mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                  <Briefcase className="text-blue-600" />
                  {t.about.journey}
                </h4>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className={`relative pl-8 pb-6 border-l-2 ${darkMode ? 'border-blue-700' : 'border-blue-200'} last:border-l-0 last:pb-0 hover-scale transition-transform duration-300`}>
                      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-600 rounded-full border-2 border-white hover-glow transition-all duration-300"></div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">{exp.type}</span>
                        <h5 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1 leading-tight`}>{exp.role}</h5>
                        <p className="text-blue-600 font-semibold mb-1 text-sm">{exp.org}</p>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="social-media" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              {t.specialties.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{t.specialties.title.split(' ').slice(-1)}</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>{t.specialties.subtitle}</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specialties.map((specialty, idx) => {
              const IconComponent = specialty.icon;
              return (
                <div key={idx} className="glass p-8 rounded-2xl shadow-elegant hover-lift fade-in-on-scroll hover-glow transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 hover-scale transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>{specialty.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>{specialty.description}</p>
                  <div className="space-y-2">
                    {specialty.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex items-center gap-3 hover-scale transition-transform duration-200">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-sm`}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              {t.projects.title.split(' ')[0]} <span className="text-gradient">{t.projects.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>{t.projects.subtitle}</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`group ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-elegant hover-lift cursor-pointer overflow-hidden fade-in-on-scroll hover-glow transition-all duration-500`} onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 project-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <div className="text-center text-white mb-4">
                      <Eye className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold text-lg">{t.projects.viewProject}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="glass text-blue-600 px-3 py-1.5 rounded-full text-sm font-bold">{project.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="glass-dark text-white px-3 py-1.5 rounded-full text-sm font-bold">{project.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-blue-600 font-semibold text-sm">{project.type}</span>
                  </div>
                  <h3 className={`font-bold text-xl ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} mb-3 transition-colors leading-tight`}>{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 leading-relaxed`}>{project.description.substring(0, 120)}...</p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>{t.projects.explore}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              {t.certificates.title.split('&')[0]} <span className="text-gradient">{t.certificates.title.split('&')[1]}</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>{t.certificates.subtitle}</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} onClick={() => setSelectedCert(cert)} className="glass p-6 rounded-2xl shadow-elegant hover-lift cursor-pointer fade-in-on-scroll certificate-hover hover-glow transition-all duration-500">
                <div className={`h-40 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden hover-scale transition-transform duration-300`}>
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full hover-scale transition-transform duration-200">{cert.category}</span>
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs font-medium`}>{cert.year}</span>
                  </div>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold text-sm leading-tight mb-2`}>{cert.title}</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeInUp" onClick={() => setSelectedCert(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-10 hover-scale" onClick={() => setSelectedCert(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full hover-scale transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-2xl shadow-2xl hover-glow" />
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover-scale transition-transform duration-200">{selectedCert.category}</span>
                <span className="text-blue-300 font-medium">{selectedCert.year}</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-blue-200 mb-2">{selectedCert.description}</p>
              <p className="text-blue-300 text-sm">{language === 'id' ? 'Diterbitkan oleh' : 'Issued by'} {selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeInUp" onClick={() => setSelectedProject(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-10 hover-scale" onClick={() => setSelectedProject(null)}>
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full my-8 hover-scale transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-2xl hover-glow`}>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover-scale transition-transform duration-200">{selectedProject.category}</span>
                  <span className="text-blue-600 font-semibold">{selectedProject.type}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>{selectedProject.year}</span>
                </div>
                <h3 className={`text-3xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>{selectedProject.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8 leading-relaxed`}>{selectedProject.description}</p>
                <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-8 mb-8`}>
                  <h4 className={`font-black text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.projects.tools}</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className={`px-4 py-2 ${darkMode ? 'bg-blue-900/50 border-blue-700' : 'bg-blue-50 border-blue-200'} text-blue-600 rounded-xl font-semibold border-2 hover:bg-opacity-80 transition-all hover-scale duration-200`}>{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoLink && (
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift flex items-center gap-3">
                      <ExternalLink size={20} />
                      {t.projects.liveDemo}
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all hover-lift flex items-center gap-3">
                      <Star size={20} />
                      GitHub
                    </a>
                  )}
                  {selectedProject.videoLink && (
                    <a href={selectedProject.videoLink} target="_blank" rel="noopener noreferrer" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all hover-lift flex items-center gap-3">
                      <Play size={20} />
                      {t.projects.watchVideo}
                    </a>
                  )}
                  {selectedProject.portfolioLink && (
                    <a href={selectedProject.portfolioLink} target="_blank" rel="noopener noreferrer" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all hover-lift flex items-center gap-3">
                      <Palette size={20} />
                      {t.projects.portfolio}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 fade-in-on-scroll">
            <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              {t.contact.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{t.contact.title.split(' ').slice(-1)}</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>{t.contact.subtitle}</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a href="tel:0896-8424-5977" className={`glass p-8 rounded-2xl shadow-elegant hover-lift border ${darkMode ? 'border-blue-900' : 'border-blue-100'} group fade-in-on-scroll hover-glow transition-all duration-500`}>
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-all hover-scale duration-300">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{t.contact.directContact}</h3>
              <p className="text-3xl font-black text-blue-600 mb-3 hover-scale transition-transform duration-200">0896-8424-5977</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{t.contact.available}</p>
            </a>
            
            <a href="https://instagram.com/Ribloozy.ovnn" target="_blank" rel="noopener noreferrer" className={`glass p-8 rounded-2xl shadow-elegant hover-lift border ${darkMode ? 'border-blue-900' : 'border-blue-100'} group fade-in-on-scroll hover-glow transition-all duration-500`}>
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-all hover-scale duration-300">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Instagram</h3>
              <p className="text-3xl font-black text-blue-600 mb-3 hover-scale transition-transform duration-200">@Ribloozy.ovnn</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{t.contact.followProcess}</p>
            </a>
          </div>
          
          <div className="glass-dark p-8 rounded-2xl inline-block fade-in-on-scroll hover-lift hover-glow transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">Risma Oktaviani</h3>
            <p className="text-lg text-blue-200 mb-2">{language === 'id' ? 'Desainer Kreatif & Spesialis 3D' : 'Creative Designer & 3D Specialist'}</p>
            <p className="text-sm text-blue-300">{t.contact.craftingExperiences}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;