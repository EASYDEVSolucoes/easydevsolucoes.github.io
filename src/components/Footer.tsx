import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/company/logoEasyDev.png"
              alt="EasyDev Logo"
              width={120}
              height={40}
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300">
              Transformando ideias em soluções digitais inovadoras
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contato@easydevsolucoes.com.br</li>
              <li>Telefone: (31) 99278-4329</li>
              <li>Ibirité, MG</li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <a
                href="https://www.linkedin.com/company/easydevsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/EASYDEVSolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.instagram.com/easydevsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} EasyDev. Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link
              href="/politica-privacidade"
              className="text-gray-300 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/termos-de-uso"
              className="text-gray-300 hover:text-primary"
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
