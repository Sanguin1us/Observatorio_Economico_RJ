// File: /src/components/ObservatorioEconomico.tsx

import React, { useState } from 'react';
import { Mail } from 'lucide-react'; // Ensure Mail icon is imported
import { PublicacoesPage } from './pages/PublicacoesPage';
import { DadosPage } from './pages/DadosPage';
import { EquipePage } from './pages/EquipePage';
import { SobrePage } from './pages/SobrePage';
import { DockNavigation } from './DockNavigation';

// Main App Component
const ObservatorioEconomico = () => {
  const [activePage, setActivePage] = useState('publicacoes');

  const renderPage = () => {
    switch (activePage) {
      case 'publicacoes':
        return <PublicacoesPage />;
      case 'dados':
        return <DadosPage />;
      case 'equipe':
        return <EquipePage />;
      case 'sobre':
        return <SobrePage />;
      default:
        return <PublicacoesPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900">
        <div className="w-full flex items-center justify-between px-4 py-4">
          {/* Logo on the Left - Enlarged by 50% */}
          <div className="flex-shrink-0 overflow-hidden">
            <img
              src="/assets/logo-left.png" // Path to the left logo
              alt="Observatório Econômico do Rio Logo"
              className="h-36 w-auto object-contain object-left"
              loading="lazy" // Lazy loading for performance
            />
          </div>

          {/* Logo on the Right - Increased by 10% */}
          <div className="flex-shrink-0 overflow-hidden">
            <img
              src="/assets/logo-right.png" // Path to the right logo
              alt="Prefeitura do Rio de Janeiro Logo"
              className="h-[4.4rem] w-auto object-contain object-right"
              loading="lazy" // Lazy loading for performance
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 overflow-y-auto">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6">
              <p className="text-blue-100">
                Em caso de dúvidas, sugestões ou reclamações entre em contato conosco.
              </p>
              <a
                href="mailto:observatorioeconomico@rio.rj.gov.br"
                className="text-blue-100 hover:text-white font-medium inline-flex items-center gap-2 justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
                observatorioeconomico@rio.rj.gov.br
              </a>
              <p className="text-blue-100">
                Centro Administrativo São Sebastião
                <br />
                R. Afonso Cavalcanti, 455, 11° andar
                <br />
                Cidade Nova, Rio de Janeiro - RJ, 20211-110
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-blue-800 mt-8">
            <p className="text-blue-100 text-sm text-center">
              &copy; 2024 Observatório Econômico do Rio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Dock Navigation */}
      <DockNavigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default ObservatorioEconomico;
