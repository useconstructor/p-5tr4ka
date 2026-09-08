import ArrowRight from 'lucide-react/icons/arrow-right'
import Award from 'lucide-react/icons/award'
import BarChart3 from 'lucide-react/icons/chart-no-axes-column-increasing'
import BedDouble from 'lucide-react/icons/bed-double'
import Building2 from 'lucide-react/icons/building-2'
import Check from 'lucide-react/icons/check'
import ClipboardList from 'lucide-react/icons/clipboard-list'
import HouseIcon from 'lucide-react/icons/house'
import Instagram from 'lucide-react/icons/instagram'
import KeyRound from 'lucide-react/icons/key-round'
import Linkedin from 'lucide-react/icons/linkedin'
import Mail from 'lucide-react/icons/mail'
import MapPin from 'lucide-react/icons/map-pin'
import Menu from 'lucide-react/icons/menu'
import Phone from 'lucide-react/icons/phone'
import Ruler from 'lucide-react/icons/ruler'
import ShieldCheck from 'lucide-react/icons/shield-check'
import UsersRound from 'lucide-react/icons/users-round'
import Youtube from 'lucide-react/icons/youtube'

const properties = [
  { status: 'EN VENTA', place: 'Polanco, Miguel Hidalgo', name: 'Departamento en Polanco', price: '$12,800,000 MXN', beds: 2, baths: '2.5', area: 145, art: 'tower' },
  { status: 'EN VENTA', place: 'Roma Norte, Cuauhtémoc', name: 'Loft con terraza privada', price: '$6,950,000 MXN', beds: 1, baths: 1, area: 83, art: 'loft' },
  { status: 'EN RENTA', place: 'Condesa, Cuauhtémoc', name: 'Departamento amueblado', price: '$38,000 MXN / mes', beds: 2, baths: 2, area: 110, art: 'condesa' },
  { status: 'EN VENTA', place: 'Del Valle, Benito Juárez', name: 'Casa con jardín', price: '$15,900,000 MXN', beds: 3, baths: '3.5', area: 230, art: 'house' },
]
const services = [
  { icon: HouseIcon, title: 'Compra y Venta', text: 'Te ayudamos a encontrar o vender la propiedad ideal con estrategias efectivas.' },
  { icon: KeyRound, title: 'Renta de Propiedades', text: 'Opciones exclusivas para vivir o invertir en las mejores zonas de la ciudad.' },
  { icon: BarChart3, title: 'Inversión Inmobiliaria', text: 'Asesoría para invertir con visión y obtener el máximo rendimiento.' },
  { icon: ClipboardList, title: 'Valuación Profesional', text: 'Conoce el valor real de tu propiedad con nuestros expertos certificados.' },
  { icon: ShieldCheck, title: 'Gestión Patrimonial', text: 'Protegemos y hacemos crecer tu patrimonio con soluciones integrales.' },
]
function Brand() { return <a href="#inicio" className="brand" aria-label="Raíz Propiedades"><span className="monogram">R</span><span><b>Raíz</b> Propiedades <small>v2</small></span></a> }
export default function Home() {
  return <main>
    <header className="header"><Brand/><nav aria-label="Navegación principal"><a href="#propiedades">Propiedades</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a></nav><a className="goldButton headerCta" href="#contacto">Valuar mi propiedad</a><Menu className="menuIcon" aria-label="Abrir menú"/></header>
    <section className="hero" id="inicio">
      <div className="heroCopy"><p className="eyebrow">BIENES RAÍCES EN CDMX</p><h1>RAÍCES FUERTES,<br/>MEJORES <em>HOGARES.</em></h1><span className="hairline"/><p className="intro">Conectamos personas con espacios que<br/>inspiran su vida y multiplican su patrimonio.</p><div className="heroActions"><a className="goldButton" href="#propiedades">Explorar propiedades <ArrowRight/></a><a className="textLink" href="#nosotros">Conocer más sobre nosotros</a></div><p className="location"><MapPin/> Ciudad de México <span>• Polanco, Roma, Condesa, Del Valle y más</span></p></div>
      <div className="heroArt" role="img" aria-label="Residencia contemporánea con vista a la Ciudad de México"><div className="skyline"><i/><i/><i/><i/><i/><i/><i/></div><div className="windows"><span/><span/><span/><span/></div><div className="sofa"><b/><b/><b/></div><div className="table"/><div className="plant">✦</div></div>
    </section>
    <section className="stats" aria-label="Nuestra experiencia"><div><Building2/><strong>+1,250</strong><b>PROPIEDADES VENDIDAS</b><span>en los últimos 5 años</span></div><div><UsersRound/><strong>+980</strong><b>CLIENTES SATISFECHOS</b><span>que confiaron en nosotros</span></div><div><BarChart3/><strong>$4,200 <small>MDP</small></strong><b>EN TRANSACCIONES</b><span>gestionadas exitosamente</span></div><div><Award/><strong>+15 AÑOS</strong><b>DE EXPERIENCIA</b><span>en el mercado inmobiliario</span></div></section>
    <section className="properties section" id="propiedades"><div className="sectionHead"><div><p className="eyebrow">PROPIEDADES DESTACADAS</p><h2>Encuentra tu próximo hogar</h2></div><a className="textLink" href="#contacto">Ver todas las propiedades <ArrowRight/></a></div><div className="propertyGrid">{properties.map(p=><article className="property" key={p.name}><div className={"propertyArt "+p.art}><span>{p.status}</span><button aria-label={"Guardar "+p.name}>♡</button><div className="buildingShape"/></div><div className="propertyBody"><small>{p.place}</small><h3>{p.name}</h3><div className="amenities"><span><BedDouble/> {p.beds}</span><span>♨ {p.baths}</span><span><Ruler/> {p.area} m²</span></div><strong>{p.price}</strong></div></article>)}</div></section>
    <section className="services section" id="servicios"><div className="sectionHead"><div><p className="eyebrow">NUESTROS SERVICIOS</p><h2>Soluciones inmobiliarias<br/>a tu medida</h2></div><p>Te acompañamos en cada paso del proceso para que tomes<br/>decisiones seguras y rentables.</p></div><div className="serviceGrid">{services.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p><a href="#contacto">Saber más <ArrowRight/></a></article>)}</div></section>
    <section className="about" id="nosotros"><div><p className="eyebrow">EXPERIENCIA LOCAL</p><h2>Tu patrimonio,<br/>en manos expertas.</h2><p>Conocemos cada colonia, cada oportunidad y cada detalle del mercado inmobiliario de la ciudad.</p><span><Check/> Asesoría cercana y transparente</span><span><Check/> Propiedades cuidadosamente verificadas</span></div><div className="aboutPattern"><div>15<small>años construyendo<br/>confianza</small></div></div></section>
    <section className="cta" id="contacto"><div><h2>¿Listo para dar el siguiente paso?</h2><span className="hairline"/><p>Permítenos ayudarte a encontrar la propiedad<br/>que se alinee con tus sueños y objetivos.</p><a className="goldButton" href="mailto:hola@raizpropiedades.mx">Contáctanos hoy <ArrowRight/></a></div><div className="terrace"><span/><span/><span/></div></section>
    <footer><div className="footerGrid"><div><Brand/><p>Expertos en bienes raíces en CDMX.<br/>Conectamos personas con propiedades<br/>excepcionales y oportunidades únicas.</p><div className="social"><Instagram/><span>f</span><Linkedin/><Youtube/></div></div><div><b>NAVEGACIÓN</b><a href="#propiedades">Propiedades</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a></div><div><b>ZONAS</b><span>Polanco</span><span>Roma</span><span>Condesa</span><span>Del Valle</span><span>Coyoacán</span></div><div id="blog"><b>RECURSOS</b><span>Guías de compra</span><span>Consejos inmobiliarios</span><span>Preguntas frecuentes</span><span>Valuar mi propiedad</span></div><div><b>CONTÁCTANOS</b><span><Phone/> 55 1234 5678</span><span><Mail/> hola@raizpropiedades.mx</span><span><MapPin/> Campos Elíseos 345, Polanco<br/>Miguel Hidalgo, 11560, CDMX</span></div></div><div className="copyright"><span>© 2026 Raíz Propiedades v2. Todos los derechos reservados.</span><span>Aviso de privacidad　 |　 Términos y condiciones</span></div></footer>
  </main>
}
