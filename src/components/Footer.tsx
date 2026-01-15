import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t border-gray-900 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Image
              src="/company/logoEasyDev.png"
              alt="EasyDev Logo"
              width={150}
              height={50}
              className="h-24 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Transformando ideias em soluções digitais inovadoras com tecnologia de ponta e design premium.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Fale Conosco</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                contato@easydevsolucoes.com.br
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                (31) 99278-4329
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Ibirité, MG
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/easydevsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/EASYDEVSolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/easydevsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} EasyDev Soluções. Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              href="/politica-privacidade"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
