
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Globe, 
  MessageCircle, 
  Play, 
  Youtube, 
  ChevronRight,
  Menu,
  X,
  Server,
  Activity,
  Cpu,
  Info
} from 'lucide-react';

const APP_ICON = "https://www.dropbox.com/scl/fi/h8fxjyge9nqnle2jbnj7s/turbo.png?rlkey=nnhw7iy2blbssn7wyxasrvp7t&st=7njbu0cq&raw=1";
const HERO_IMAGE = "https://www.dropbox.com/scl/fi/0oem5f1lstj29mje78upc/Screenshot_20251217_180952_Turbo-MX-VPN.jpg?rlkey=vm0r9862smam9mrnrk586k158&st=64lgij8j&raw=1";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=turbo.mx.anuncios";
const TELEGRAM_URL = "https://t.me/internetGratisMexico";
const YOUTUBE_URL = "https://youtube.com/shorts/54joHbjYCho?si=V37XU3_4euJzOw6o";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={APP_ICON} alt="TurboMX Logo" className="w-10 h-10 rounded-xl transition-transform group-hover:scale-110" />
            <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
              TurboMX VPN
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
              Características
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#infra" onClick={(e) => handleNavClick(e, 'infra')} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
              Infraestructura
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
              Privacidad
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-sky-600/30 active:scale-95">
              Descargar App
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-300 hover:text-white transition-colors" aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 p-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#features" className="block text-slate-300 py-3 px-4 rounded-xl hover:bg-white/5 font-bold" onClick={(e) => handleNavClick(e, 'features')}>Características</a>
          <a href="#infra" className="block text-slate-300 py-3 px-4 rounded-xl hover:bg-white/5 font-bold" onClick={(e) => handleNavClick(e, 'infra')}>Infraestructura</a>
          <a href="#privacy" className="block text-slate-300 py-3 px-4 rounded-xl hover:bg-white/5 font-bold" onClick={(e) => handleNavClick(e, 'privacy')}>Privacidad</a>
          <a href={PLAY_STORE_URL} target="_blank" className="block w-full bg-sky-600 text-center py-4 rounded-xl font-bold shadow-xl shadow-sky-600/20">Descargar App</a>
        </div>
      )}
    </nav>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 rounded-3xl glass hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-2">
    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sky-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-black uppercase tracking-widest mb-8">
                <Activity size={14} className="animate-pulse" />
                Infraestructura de Alto Rendimiento
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                Velocidad <span className="text-sky-500 underline decoration-sky-500/30">Turbo</span> Sin Límites
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Desbloquea el potencial real de tu conexión con protocolos optimizados para la infraestructura moderna de hosting Tier-1.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href={PLAY_STORE_URL} target="_blank" className="flex items-center justify-center gap-3 bg-white text-black hover:bg-sky-50 px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                  <Play size={24} fill="black" />
                  Descargar para Android
                </a>
                <a href={TELEGRAM_URL} target="_blank" className="flex items-center justify-center gap-3 bg-[#24A1DE] hover:bg-[#1f8aba] px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-sky-500/20 active:scale-95">
                  <MessageCircle size={24} />
                  Comunidad Telegram
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/15 blur-[100px] rounded-full animate-pulse"></div>
              <img 
                src={HERO_IMAGE} 
                alt="TurboMX VPN Interface" 
                className="relative z-10 w-full max-w-[340px] mx-auto rounded-[3.5rem] border-[10px] border-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Tecnología de Vanguardia</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
              Utilizamos los estándares más altos en protocolos de túnel para asegurar que tu conexión sea rápida, estable y privada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Zap size={28} />} title="Baja Latencia" desc="Optimizado para servidores de alto rendimiento en Europa y América, garantizando un ping mínimo." />
            <FeatureCard icon={<Lock size={28} />} title="Cifrado Militar" desc="Protección de datos mediante túneles SSH de alta seguridad que mantienen tu identidad anónima." />
            <FeatureCard icon={<Globe size={28} />} title="Global Reach" desc="Infraestructura compatible con los mejores proveedores de hosting para una estabilidad del 99.9%." />
            <FeatureCard icon={<Activity size={28} />} title="Ancho de Banda" desc="Sin límites de datos. Navega, haz streaming o juega con la máxima capacidad de tu proveedor." />
          </div>
        </div>
      </section>

      {/* Global Infrastructure Section */}
      <section id="infra" className="py-24 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-[3rem] border-sky-500/20 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-sky-600/5 -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Infraestructura <br/><span className="text-sky-500">Tier-1 Enterprise</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400 h-fit"><Server /></div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Servidores Netcup & Pro-Hosting</h4>
                      <p className="text-slate-400">Nuestra red corre en centros de datos con certificación ISO, garantizando máxima redundancia y velocidad punta mediante proveedores líderes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400 h-fit"><Cpu /></div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Hardware de Última Generación</h4>
                      <p className="text-slate-400">Procesadores Xeon/EPYC y almacenamiento NVMe para gestionar miles de conexiones simultáneas sin latencia perceptible.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 text-center">
                  <span className="block text-4xl font-black text-sky-500 mb-2">10Gbps</span>
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Puerto de Red</span>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 text-center">
                  <span className="block text-4xl font-black text-sky-500 mb-2">99.9%</span>
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Uptime Real</span>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 text-center col-span-2">
                  <span className="block text-4xl font-black text-sky-500 mb-2">Protección DDoS</span>
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Capa 7 Activada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden border-sky-500/20 shadow-2xl">
            <div className="absolute -top-10 -right-10 text-sky-500/5 rotate-12">
              <ShieldCheck size={320} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-10 flex items-center gap-4">
              <ShieldCheck className="text-sky-500" size={48} />
              Privacidad
            </h2>
            
            <div className="space-y-10 relative z-10 text-slate-300">
              <article className="p-8 rounded-3xl bg-slate-950/50 border border-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-white mb-5 flex items-center gap-2">
                  <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
                  Uso de la VPN
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Nuestra Aplicación de TurboMX VPN está basada en conexiones de Internet mediante Protocolos de conexión TCP y UDP que permiten al usuario navegar sin dificultad.
                </p>
                <p className="text-lg leading-relaxed text-sky-400 font-semibold italic">
                  No recopilamos ni registramos datos de Tráfico o actividad de navegación de usuarios individuales conectados a nuestro Servicio SSH-VPN. Estamos Comprometidos con su Privacidad.
                </p>
              </article>

              <article className="p-8 rounded-3xl bg-slate-950/50 border border-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-white mb-5 flex items-center gap-2">
                  <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
                  Google AdMob
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Permitimos que los servicios de publicidad de terceros (por ejemplo Admob) publiquen Anuncios y recopilen cierta información anónima cuando utiliza nuestra aplicación. 
                </p>
                <p className="text-lg leading-relaxed">
                  Estos servicios Pueden Usar información anónima, como su ID de publicidad de Google, actividad de navegación, ubicación, las especificaciones de su dispositivo y otros datos Técnicos relacionados con él, Para Proporcionar Anuncios.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section (Netcup Compliance) */}
      <section id="legal" className="py-24 scroll-mt-20 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Info className="text-sky-500" />
              Información Legal
            </h2>
          </div>
          <div className="text-slate-400 text-sm leading-relaxed space-y-4 text-center">
            <p>Este sitio web es operado por TurboMX. La infraestructura del servicio VPN se distribuye a través de nodos globales de alta disponibilidad.</p>
            <p>Al utilizar este sitio, aceptas nuestra política de cookies y privacidad conforme a los estándares internacionales de protección de datos.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img src={APP_ICON} alt="TurboMX" className="w-10 h-10 rounded-xl" />
                <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">TurboMX VPN</span>
              </div>
              <p className="text-slate-500 font-medium">Potencia, Privacidad y Libertad Digital para México.</p>
            </div>
            
            <div className="flex justify-center gap-10">
              <a href={TELEGRAM_URL} target="_blank" className="text-slate-400 hover:text-sky-400 transition-all transform hover:scale-125"><MessageCircle size={32} /></a>
              <a href={YOUTUBE_URL} target="_blank" className="text-slate-400 hover:text-red-500 transition-all transform hover:scale-125"><Youtube size={32} /></a>
              <a href={PLAY_STORE_URL} target="_blank" className="text-slate-400 hover:text-green-500 transition-all transform hover:scale-125"><Play size={32} /></a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-widest">Hosting en Netcup Pro</p>
              <p className="text-slate-600 text-sm">
                &copy; {new Date().getFullYear()} TurboMX. <br/>All systems operational.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
