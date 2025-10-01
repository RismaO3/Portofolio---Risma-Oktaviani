import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Instagram, ExternalLink, Award, Briefcase, Star, MapPin, Play, Layers, Palette, Camera, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

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

  const projects = [
    {
      title: "MetaSchool SMP ISLAM AZZAHRA",
      image: "projects/Azzahra.png",
      category: "MetaSchool",
      type: "Metaverse",
      description: "Virtual school environment dengan interactive classroom dan library 3D yang memungkinkan pembelajaran immersive dengan detail arsitektur yang realistis",
      tools: ["Blender", "Unity"],
      year: "2024",
      demoLink: "https://www.spatial.io/s/SMP-Azzahra-66e5273fd9a79a340962518a?share=8831437309303499832",
    },
    {
      title: "Ido & Adi Pesisir Barat",
      image: "projects/PTBA.png",
      category: "Game Education",
      type: "Game Education",
      description: "Ido & Adi Pesisir Barat is an educational adventure game where players explore mangrove forests and learn their vital role in protecting coastal ecosystems",
      tools: ["Blender", "Unity"],
      year: "2025",
      demoLink: "https://www.spatial.io/s/Pasar-Kreatif-dan-Seni-67569629bce99bc7f7b9241a?share=1789966570546314383",
    },
    {
      title: "Metaverse Universitas Islam Makassar",
      image: "projects/UMI.png",
      category: "MetaSchool",
      type: "Metaverse",
      description: "Campus virtual environment yang memberikan pengalaman eksplorasi kampus yang immersive",
      tools: ["Blender", "Unity"],
      year: "2025",
      demoLink: "https://www.spatial.io/s/Universitas-Muslim-Indonesia-682b0a457096556e2726a6ee?share=346264815127952182",
    },
    {
      title: "Metaverse Universitas Teknokrat Indonesia",
      image: "projects/RobloxTeknokratWorld.png",
      category: "Roblox World",
      type: "Metaverse",
      description: "Interactive campus di Roblox dengan virtual exhibition halls spaces yang mendukung pembelajaran kolaboratif di era digital.",
      tools: ["Blender", "Roblox Studio", "Roblox Player", "Canva", "CorellDraw"],
      year: "2025",
      demoLink: "https://www.roblox.com/games/78630757535727/Teknokrat-World-Alpha-UTI",
    },
    {
      title: "Metaverse Candi Borobudur dan UMKM",
      image: "projects/candi-borobudur.png",
      category: "Cultural Heritage",
      type: "Metaverse",
      description: "Cultural heritage preservation dengan UMKM showcase untuk promosi produk lokal, menggabungkan pelestarian budaya dengan ekonomi digital",
      tools: ["Blender", "Unity"],
      year: "2025",
      demoLink: "https://www.spatial.io/s/Candi-Borobudur-68a5caacb1b68e1cddc84681?share=6592398909935388262",
    },
    {
      title: "Metaverse SMA Al-Kautsar",
      image: "projects/alkautsar.png",
      category: "MetaSchool",
      type: "Metaverse",
      description: "High school metaverse dengan virtual laboratories dan interactive learning modules yang mendukung eksperimen virtual dan pembelajaran STEM",
      tools: ["Blender", "Unity"],
      year: "2025",
      demoLink: "https://www.spatial.io/s/SEKOLAH-SMA-AL-KAUTSAR-664496de680289231ac6ada2?share=2143212505836071532",
    },
    {
      title: "Metaverse SMA 2 Metro",
      image: "projects/sma2metro.png",
      category: "MetaSchool",
      type: "Metaverse",
      description: "Educational platform dengan interactive learning spaces dan student engagement tools yang meningkatkan partisipasi siswa dalam pembelajaran digital",
      tools: ["Blender", "Unity"],
      year: "2024",
      demoLink: "https://www.spatial.io/s/SMAN-2-Metro-6757f3c424d89ee715720d89?share=4150804468430241838",
    },
    {
      title: "Metaverse Pasar Seni dan Kreatif",
      image: "projects/Pasar-SeniKreatif.png",
      category: "Art Gallery",
      type: "Metaverse",
      description: "Virtual art marketplace dengan 3D gallery exhibitions dan artist collaboration features yang memfasilitasi pameran seni digital dan kolaborasi kreatif",
      tools: ["Blender", "Unity", "Canva", "CorelDraw"],
      year: "2024",
      demoLink: "https://www.spatial.io/s/Pasar-Kreatif-dan-Seni-67569629bce99bc7f7b9241a?share=1789966570546314383",
    },
  ];

  const experiences = [
    { role: "Ketua JUARAMETA", org: "Center of Excellence Metaverse UTI", period: "Mei 2025 - Sekarang", type: "Leadership" },
    { role: "Sekretaris Umum", org: "Himpunan Mahasiswa Informatika", period: "Februari 2025 - Sekarang", type: "Leadership" },
    { role: "Koordinator Divisi Humas dan Media Sosial", org: "Center of Excellence Metaverse UTI", period: "Agustus 2024 - April 2025", type: "Social Media" },
    { role: "Ketua Divisi - KOMINFO", org: "Ikatan Beasiswa Teknokrat", period: "Maret 2024 - Januari 2025", type: "Communications" },
    { role: "Sekretaris Divisi - KOMINFO", org: "Himpunan Mahasiswa Informatika", period: "Februari 2023 - Februari 2024", type: "Communications" },
    { role: "Staf Divisi Pendidikan", org: "Himpunan Mahasiswa Informatika", period: "Juli 2022 - Februari 2023", type: "Education" }
  ];

  const tools = [
    { name: "Blender", description: "3D Modeling & Animation", category: "3D Software", icon: "icons/blender.png" },
    { name: "Canva Pro", description: "Graphic Design & Visual Content", category: "Design Tools", icon: "icons/canva.png" },
    { name: "CapCut & Premiere", description: "Video Production & Motion Graphics", category: "Video Editing", icon: "icons/capcut.png" },
    { name: "CorelDraw", description: "Vector Graphics & Illustration", category: "Design Software", icon: "icons/coreldraw.png" },
    { name: "Google Workspace", description: "Email & Collaboration", category: "Collaboration Tools", icon: "icons/googleworkspace.png" }
  ];

  const specialties = [
    {
      icon: Layers,
      title: "3D Modeling & Animation",
      description: "Creating immersive 3D environments, architectural visualizations, and interactive metaverse experiences using Blender and Unity.",
      skills: ["Architectural Modeling", "Environment Design", "Character Modeling", "Animation Rigging"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Comprehensive visual design solutions from brand identity to digital marketing materials with focus on modern aesthetics.",
      skills: ["Brand Identity", "Print Design", "Digital Graphics", "UI/UX Elements"]
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Strategic social media content development, video production, and digital storytelling for educational and promotional purposes.",
      skills: ["Social Media Strategy", "Video Production", "Content Planning", "Visual Storytelling"]
    }
  ];

  const certificates = [
    {
      id: 1,
      image: "certificates/contributionmetaverse.png",
      title: "CONTRIBUTTION CREATION METAVERSE SCHOOL",
      category: "Metaverse",
      year: "2024",
      description: "Awarded for the contribution in creating and developing the Metaverse of SMA Al Kautsar.",
      issuer: "SMA Al Kautsar"
    },
    {
      id: 2,
      image: "certificates/juara1.png",
      title: "1st National Poster Design Chemistry Digital Competition",
      category: "Poster Design",
      year: "2023",
      description: "First place in the Digital Chemistry Competition",
      issuer: "Himpunan Mahasiswa Kimia, Universitas Sriwijaya"
    },
    {
      id: 3,
      image: "certificates/Juara2desainposter.jpg",
      title: "2nd National Poster Design Sosek English Competition (SEC)",
      category: "Poster Design",
      year: "2023",
      description: "2nd Winner of Poster Design in National Sosek English Competition with theme 'Discover Your Cupidity Through The Cleft of The World'",
      issuer: "Himaseperta, Faculty of Agriculture, Universitas Lampung"
    },
    {
      id: 4,
      image: "certificates/Ruanglombajuara2.png",
      title: "2nd National Student Poster Design Competition",
      category: "Poster Design",
      year: "2023",
      description: "2nd Winner of National Student Poster Design Competition organized by Ruang Lomba Nasional with the theme 'Indonesia Berkarya', held in Jakarta on July 20, 2023",
      issuer: "Ruang Lomba Nasional"
    },
    {
      id: 5,
      image: "certificates/Internationaldesignposter.png",
      title: "International Poster Design Competition",
      category: "Poster Design",
      year: "2024",
      description: "Participation in the International Poster Design Competition with the theme '2024 To Be Health The Rising Generation', organized by BEM IIKNU Tuban in the context of the 3rd anniversary of IIKNU.",
      issuer: "BEM IIKNU Tuban"
    },
    {
      id: 6,
      image: "certificates/puisirusani.png",
      title: "National Poetry Writing Competition",
      category: "Literature",
      year: "2023",
      description: "Talented Work Award in the National Online Poetry Writing Competition organized by Rumah Sastra Seni (RUSANI) with the theme 'Freedom', held on June 10-19, 2023",
      issuer: "Rumah Sastra Seni (RUSANI)"
    },
    {
      id: 7,
      image: "certificates/posterrusani.png",
      title: "National Poster Design Competition",
      category: "Poster Design",
      year: "2023",
      description: "2nd Winner of National Student Poster Design Competition organized by Ruang Lomba Nasional with the theme 'Indonesia Berkarya', held in Jakarta on July 20, 2023",
      issuer: "Ruang Lomba Nasional"
    },
    {
      id: 8,
      image: "certificates/Salinan Risma Oktaviani.png",
      title: "Flarity Scientific Poster Energy Contest",
      category: "Poster Design",
      year: "2023",
      description: "Participant in the Flarity Scientific Poster Energy Contest as part of Flarity Science Competition 2023, organized by LNG Academy, Bontang, East Kalimantan",
      issuer: "LNG Academy & Flarity Committee"
    },
    {
      id: 9,
      image: "certificates/olimpiade sastra.png",
      title: "National Literature Olympiad",
      category: "Literature",
      year: "2023",
      description: "Nominee for Best Participant in the National Literature Olympiad with the theme 'Love', organized by Pelita Aksara Indonesia & Sinar Jaya Publisher",
      issuer: "Pelita Aksara Indonesia & Sinar Jaya Publisher"
    },
    {
      id: 10,
      image: "certificates/peserta-design-poster.png",
      title: "Digital Poster Design Competition",
      category: "Poster Design",
      year: "2023",
      description: "Participant in the Digital Poster Design Competition with the theme 'Tune In to Rights: The Voice of Law in the Digital Wave', organized by UKM Fiat Justicia, Universitas Negeri Semarang",
      issuer: "UKM Fiat Justicia, Universitas Negeri Semarang"
    },
    {
      id: 11,
      image: "certificates/Sertifikat Lomba Cerpen Coconut Books 211 (1).png",
      title: "National Short Story Writing Competition",
      category: "Literature",
      year: "2023",
      description: "Participant in the National Short Story Writing Competition organized by Coconut Books on August 17, 2023",
      issuer: "Coconut Books"
    },
    {
      id: 12,
      image: "certificates/Salinan SERTIFIKAT JGD (1).jpg",
      title: "Junior Graphic Designer Competency Certificate",
      category: "Professional Certification",
      year: "2024",
      description: "Certified as Junior Graphic Designer in IT Multimedia by BNSP (valid three years from July 8, 2024)",
      issuer: "BNSP & BPPTIK Professional Certification Body"
    },
    {
      id: 13,
      image: "certificates/infografisggprize.png",
      title: "National Infographic Competition",
      category: "Design",
      year: "2023",
      description: "Participant in the National Infographic Competition organized by GG Prize and Javawebster Teknologi Pintar",
      issuer: "GG Prize & Javawebster Teknologi Pintar"
    }
  ];

  // ✅ Social accounts: image square (1080x1080 responsive) + clickable IG with animation
  const socialAccounts = [
    {
      title: "IKATAN BEASISWA TEKNOKRAT",
      image: "sosmed/igibatek.png", // square image
      handle: "@ibatek.uti",
      igUrl: "https://instagram.com/ibatek.uti",
      focus: "Educational Content Strategy",
      objectives: [
        "Developing engaging educational content for scholarship information",
        "Building strong community engagement through strategic posting",
        "Creating comprehensive FAQ series and testimonial content"
      ],
      achievements: [
        "Increased follower engagement by implementing visual storytelling",
        "Developed consistent brand identity across all social platforms"
      ]
    },
    {
      title: "COE METAVERSE UTI",
      image: "sosmed/igmeta.png", // square container will crop as 1:1
      handle: "@juarameta",
      igUrl: "https://instagram.com/juarameta",
      focus: "Innovation & Technology Content",
      objectives: [
        "Promoting metaverse technology awareness and adoption",
        "Showcasing innovative research and development projects",
        "Building digital presence for academic excellence"
      ],
      achievements: [
        "Created compelling visual content showcasing 3D projects",
        "Established thought leadership in metaverse education space"
      ]
    }
  ];

  // compute visible items (3 on homepage, expandable)
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const visibleCerts = showAllCerts ? certificates : certificates.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }

        @keyframes fadeInUp { from {opacity:0;transform:translateY(40px);} to {opacity:1;transform:translateY(0);} }
        @keyframes slideInLeft { from {opacity:0;transform:translateX(-40px);} to {opacity:1;transform:translateX(0);} }
        @keyframes slideInRight { from {opacity:0;transform:translateX(40px);} to {opacity:1;transform:translateX(0);} }
        @keyframes float { 0%,100% {transform:translateY(0)} 50% {transform:translateY(-10px)} }
        @keyframes pulse { 0%,100% {transform:scale(1)} 50% {transform:scale(1.05)} }
        @keyframes shimmer { 0% {background-position:-1000px 0} 100% {background-position:1000px 0} }

        .animate-fadeInUp { animation: fadeInUp .8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft .8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight .8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }

        .fade-in-on-scroll { opacity:0; transform:translateY(30px); transition:all .8s cubic-bezier(.4,0,.2,1); }

        .glass { background:rgba(255,255,255,.95); backdrop-filter:blur(20px); border:1px solid rgba(59,130,246,.1); }
        .glass-dark { background:rgba(37,99,235,.95); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.2); }
        .shadow-elegant { box-shadow:0 20px 60px rgba(59,130,246,.1); }
        .shadow-deep { box-shadow:0 25px 80px rgba(59,130,246,.15); }
        .hover-lift { transition:all .4s cubic-bezier(.4,0,.2,1); }
        .hover-lift:hover { transform:translateY(-12px); box-shadow:0 30px 80px rgba(59,130,246,.2); }
        .hover-scale:hover { transform:scale(1.05); }
        .hover-glow:hover { box-shadow:0 0 30px rgba(59,130,246,.4); }

        .text-gradient { background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .bg-gradient-custom { background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 50%,#f1f5f9 100%); }
        .grid-pattern { background-image:linear-gradient(rgba(59,130,246,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.05) 1px,transparent 1px); background-size:50px 50px; }
        .project-overlay { background:linear-gradient(135deg,rgba(59,130,246,.9) 0%,rgba(29,78,216,.9) 100%); }

        .certificate-hover { position:relative; overflow:hidden; }
        .certificate-hover::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent); transition:left .5s; }
        .certificate-hover:hover::before { left:100%; }

        .project-link-btn { background:rgba(255,255,255,.2); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,.3); transition:all .3s; }
        .project-link-btn:hover { background:rgba(255,255,255,.3); transform:translateY(-2px); }

        /* IG link animation */
        .ig-link { position:relative; display:inline-flex; align-items:center; gap:6px; transition:transform 300ms ease,color 300ms ease; }
        .ig-link:hover { transform:translateY(-2px); }
        .ig-link::after { content:""; position:absolute; left:0; bottom:-2px; width:100%; height:2px; background:linear-gradient(90deg,#60a5fa,#1d4ed8,#60a5fa); background-size:200% 100%; transform:scaleX(0); transform-origin:left; transition:transform 300ms ease; }
        .ig-link:hover::after { transform:scaleX(1); animation:igShimmer 1.2s linear infinite; }
        @keyframes igShimmer { 0% {background-position:0% 0} 100% {background-position:200% 0} }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'glass shadow-elegant py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black text-blue-600 tracking-tight hover-scale transition-transform duration-300 cursor-pointer">
              PORTOFOLIO
            </div>

            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Specialties', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('specialties', 'social-media'))}
                  className={`px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold hover-scale ${activeSection === item.toLowerCase().replace(' ', '-').replace('specialties', 'social-media')
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-blue-50 transition-all duration-300 hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass border-t animate-fadeInUp">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Specialties', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('specialties', 'social-media'))}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium hover-scale"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 bg-gradient-custom relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -mr-48 -mt-48 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 -ml-40 -mb-40 animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 glass rounded-full text-sm font-semibold text-blue-700 hover-glow transition-all duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom"></div>
                Available for Creative Projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight">
                Creative
                <br />
                <span className="text-gradient">Designer</span>
              </h1>

              <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2">
                <p className="font-semibold text-gray-800">Risma Oktaviani</p>
                <p>3D Modeling • Graphic Design</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift inline-flex items-center gap-3 shadow-lg hover-glow"
                >
                  <Play className="w-5 h-5" />
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="glass text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all hover-lift border border-blue-200 hover-glow"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            <div className="animate-slideInRight flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                <div className="glass p-6 rounded-3xl shadow-deep hover-lift transition-all duration-500">
                  <img
                    src="profile/risma.JPG"
                    alt="Risma Oktaviani - Profile"
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    style={{ maxHeight: '500px' }}
                  />
                  <div className="absolute bottom-10 left-6 right-6 glass-dark p-4 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-1">Risma Oktaviani</h3>
                    <p className="text-blue-200 font-medium text-sm">Creative Designer & 3D Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <ChevronDown
              size={32}
              className="mx-auto text-gray-400 cursor-pointer hover:text-blue-600 transition-colors animate-bounce hover-scale"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8 fade-in-on-scroll">
              <div className="glass-dark p-8 rounded-2xl text-white hover-lift transition-all duration-500">
                <h3 className="text-3xl font-bold mb-6">Risma Oktaviani</h3>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-lg text-blue-50">Currently pursuing a Bachelor's degree in Informatics at the Indonesian Technocrat University, specializing in Creative Design, 3D Modeling, and Content Strategy.</p>
                  <p className="text-blue-100">Experienced in developing metaverse environments, engaging visual content, and leading creative teams for innovative digital solutions.</p>
                  <p className="text-blue-100">Combining technical expertise with creative vision to deliver captivating and meaningful digital experiences.</p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">Lampung, Indonesia</span>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl shadow-elegant hover-lift transition-all duration-500">
                <h4 className="font-black text-2xl mb-8 text-gray-900 flex items-center gap-3">
                  <Award className="text-blue-600" />
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover-scale duration-300">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md hover-scale transition-transform duration-300">
                        <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg">{tool.name}</div>
                        <div className="text-blue-600 font-medium text-sm mb-1">{tool.category}</div>
                        <div className="text-gray-600 text-sm">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-in-on-scroll">
              <div className="glass p-8 rounded-2xl shadow-elegant hover-lift transition-all duration-500">
                <h4 className="font-black text-2xl mb-8 text-gray-900 flex items-center gap-3">
                  <Briefcase className="text-blue-600" />
                  Leadership Journey
                </h4>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0 last:pb-0 hover-scale transition-transform duration-300">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-600 rounded-full border-2 border-white hover-glow transition-all duration-300"></div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">{exp.type}</span>
                        <h5 className="font-bold text-gray-900 mb-1 leading-tight">{exp.role}</h5>
                        <p className="text-blue-600 font-semibold mb-1 text-sm">{exp.org}</p>
                        <p className="text-xs text-gray-500">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties / Social Media */}
      <section id="social-media" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Creative <span className="text-gradient">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive creative solutions spanning digital design, 3D environments, and strategic content development
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* specialties cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {specialties.map((specialty, idx) => {
              const IconComponent = specialty.icon;
              return (
                <div key={idx} className="glass p-8 rounded-2xl shadow-elegant hover-lift fade-in-on-scroll hover-glow transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 hover-scale transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
                  <div className="space-y-2">
                    {specialty.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex items-center gap-3 hover-scale transition-transform duration-200">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social accounts: Title → Square Image (1080x1080 responsive) → Description */}
          <div className="grid lg:grid-cols-2 gap-12">
            {socialAccounts.map((account, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl shadow-elegant hover-lift fade-in-on-scroll hover-glow transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center hover-scale transition-transform duration-300">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{account.title}</h3>
                    <a href={account.igUrl} target="_blank" rel="noopener noreferrer" className="ig-link text-blue-600 font-semibold" title={`Open ${account.handle} on Instagram`}>
                      <Instagram size={16} />
                      {account.handle}
                    </a>
                    <div className="mt-1">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{account.focus}</span>
                    </div>
                  </div>
                </div>

                {/* Square image container (1:1) with max dimension 1080px */}
                <div className="w-full max-w-[1080px] mx-auto">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-6">
                    <img src={account.image} alt={account.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Strategic Objectives</h4>
                    <ul className="space-y-2">
                      {account.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 hover-scale transition-transform duration-200">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Key Achievements</h4>
                    <ul className="space-y-2">
                      {account.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 hover-scale transition-transform duration-200">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="leading-relaxed font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects (show 3, expandable) */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 ">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immersive 3D environments and digital experiences that push creative boundaries
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, idx) => (
              <div key={idx} className="group bg-white rounded-2xl shadow-elegant hover-lift cursor-pointer overflow-hidden  hover-glow transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 project-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <div className="text-center text-white mb-6">
                      <Eye className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold text-lg">View Project</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="project-link-btn text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="glass text-blue-600 px-3 py-1.5 rounded-full text-sm font-bold">{project.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="glass-dark text-white px-3 py-1.5 rounded-full text-sm font-bold">{project.year}</span>
                  </div>
                </div>

                <div className="p-6" onClick={() => setSelectedProject(project)}>
                  <div className="mb-2"><span className="text-blue-600 font-semibold text-sm">{project.type}</span></div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description.substring(0, 120)}...</p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Explore Project</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lihat selanjutnya / Lihat lebih sedikit */}
          <div className="text-center mt-10">
            {!showAllProjects ? (
              <button
                onClick={() => setShowAllProjects(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift"
              >
                Lihat selanjutnya
              </button>
            ) : (
              <button
                onClick={() => { setShowAllProjects(false); window.scrollTo({ top: document.getElementById('projects').offsetTop - 80, behavior: 'smooth' }); }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all hover-lift mt-4"
              >
                Tampilkan lebih sedikit
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Certificates (show 3, expandable) */}
      <section id="certificates" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 ">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Certificates & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Continuous learning and professional development in creative and technical fields
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCerts.map((cert) => (
              <div key={cert.id} onClick={() => setSelectedCert(cert)} className="glass p-6 rounded-2xl shadow-elegant hover-lift cursor-pointer  certificate-hover hover-glow transition-all duration-500">
                <div className="h-40 bg-blue-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden hover-scale transition-transform duration-300">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full hover-scale transition-transform duration-200">{cert.category}</span>
                    <span className="text-gray-500 text-xs font-medium">{cert.year}</span>
                  </div>
                  <p className="text-gray-900 font-bold text-sm leading-tight mb-2">{cert.title}</p>
                  <p className="text-gray-600 text-xs">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lihat selanjutnya / Lihat lebih sedikit */}
          <div className="text-center mt-10">
            {!showAllCerts ? (
              <button
                onClick={() => setShowAllCerts(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift"
              >
                Lihat selanjutnya
              </button>
            ) : (
              <button
                onClick={() => { setShowAllCerts(false); window.scrollTo({ top: document.getElementById('certificates').offsetTop - 80, behavior: 'smooth' }); }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all hover-lift mt-4"
              >
                Tampilkan lebih sedikit
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox: Certificate */}
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
              <p className="text-blue-300 text-sm">Issued by {selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Project detail */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeInUp" onClick={() => setSelectedProject(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-10 hover-scale" onClick={() => setSelectedProject(null)}>
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full my-8 hover-scale transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover-glow">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover-scale transition-transform duration-200">{selectedProject.category}</span>
                  <span className="text-blue-600 font-semibold">{selectedProject.type}</span>
                  <span className="text-gray-500 font-medium">{selectedProject.year}</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="border-top border-gray-200 pt-8 mb-8">
                  <h4 className="font-black text-xl mb-6 text-gray-900">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-100 transition-all hover-scale duration-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoLink && (
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover-lift flex items-center gap-3">
                      <ExternalLink size={20} />
                      Live Demo
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
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your creative vision into stunning digital reality
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a href="tel:0896-8424-5977" className="glass p-8 rounded-2xl shadow-elegant hover-lift border border-blue-100 group fade-in-on-scroll hover-glow transition-all duration-500">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-all hover-scale duration-300">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Contact</h3>
              <p className="text-3xl font-black text-blue-600 mb-3 hover-scale transition-transform duration-200">0896-8424-5977</p>
              <p className="text-gray-600 font-medium">Available for project consultation</p>
            </a>

            <a href="https://instagram.com/Ribloozy.ovnn" target="_blank" rel="noopener noreferrer" className="glass p-8 rounded-2xl shadow-elegant hover-lift border border-blue-100 group fade-in-on-scroll hover-glow transition-all duration-500">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-all hover-scale duration-300">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instagram</h3>
              <p className="text-3xl font-black text-blue-600 mb-3 hover-scale transition-transform duration-200">@Ribloozy.ovnn</p>
              <p className="text-gray-600 font-medium">Follow my creative process</p>
            </a>
          </div>

          <div className="glass-dark p-8 rounded-2xl inline-block fade-in-on-scroll hover-lift hover-glow transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">Risma Oktaviani</h3>
            <p className="text-lg text-blue-200 mb-2">Creative Designer & 3D Specialist</p>
            <p className="text-sm text-blue-300">Crafting immersive digital experiences since 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
