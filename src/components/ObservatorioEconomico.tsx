import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, Users, Building2, Download, Home, Mail } from 'lucide-react';

// Import components
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Observatório Econômico do Rio</h1>
              <p className="mt-1 text-blue-100">Secretaria Municipal de Desenvolvimento Urbano e Econômico</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 mt-12">
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