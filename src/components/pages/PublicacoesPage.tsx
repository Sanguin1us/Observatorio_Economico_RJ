// File: /src/components/pages/PublicacoesPage.tsx

import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react'; // Import the Download icon
import Modal from '@/components/ui/Modal';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  title: string;
  description: string;
}

interface PDF {
  name: string;
  link: string;
}

export const PublicacoesPage = () => {
  const categories: Category[] = [
    {
      title: "BOLETIM ECONÔMICO",
      description: "Análise mensal dos principais indicadores econômicos do Rio de Janeiro"
    },
    {
      title: "ESTUDOS ESPECIAIS",
      description: "Pesquisas aprofundadas sobre temas específicos da economia carioca"
    },
    {
      title: "NOTAS TÉCNICAS",
      description: "Documentos técnicos sobre aspectos específicos da economia"
    },
    {
      title: "APRESENTAÇÕES",
      description: "Materiais apresentados em eventos e reuniões"
    },
    {
      title: "CARNAVAL DE DADOS",
      description: "Análise do impacto econômico do carnaval no Rio"
    },
    {
      title: "RÉVEILLON EM DADOS",
      description: "Dados sobre o impacto econômico das festas de fim de ano"
    },
    {
      title: "WEB SUMMIT RIO",
      description: "Análises sobre o evento e seu impacto na economia local"
    },
    {
      title: "ECONOMIA VERDE",
      description: "Estudos sobre sustentabilidade e economia verde no Rio"
    },
    {
      title: "CRYPTO RIO",
      description: "Panorama do mercado de criptomoedas e blockchain na cidade"
    },
    {
      title: "DESENVOLVIMENTO ECONÔMICO DO RIO",
      description: "Indicadores e análises do desenvolvimento econômico municipal"
    },
    {
      title: "AEROPORTOS",
      description: "Dados sobre movimentação aeroportuária e impacto econômico"
    },
    {
      title: "TURISMO",
      description: "Análises do setor turístico e seu impacto na economia"
    },
    {
      title: "ECONOMIA DA MODA",
      description: "Estudos sobre o setor da moda e seu papel econômico"
    },
    {
      title: "DEMAIS PUBLICAÇÕES",
      description: "Outras publicações e análises econômicas"
    }
  ];

  // State to track which category's modal is open
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Placeholder PDF links for each category (can be customized per category)
  const placeholderPDFs: PDF[] = [
    { name: 'exemplo1', link: '#' },
    { name: 'exemplo2', link: '#' },
    { name: 'exemplo3', link: '#' },
  ];

  // Function to open modal
  const openModal = (title: string) => {
    setActiveCategory(title);
  };

  // Function to close modal
  const closeModal = () => {
    setActiveCategory(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="group relative bg-white overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openModal(category.title)}
          >
            <div className="p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                {category.description}
              </p>
            </div>

            {/* Hover overlay with description */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/90 via-blue-50/50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for PDF Downloads */}
      <Modal 
        isOpen={activeCategory !== null} 
        onClose={closeModal} 
        title={activeCategory || ''}
      >
        <p className="text-gray-700 mb-4">
          Selecione os documentos que deseja baixar:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderPDFs.map((pdf, idx) => (
            <a 
              href={pdf.link} 
              download 
              key={idx} 
              className="block"
            >
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <CardHeader className="flex items-center justify-between p-4">
                  <CardTitle className="text-base">{pdf.name}.pdf</CardTitle>
                  <Download className="h-5 w-5 text-blue-600" /> {/* Download Icon */}
                </CardHeader>
                {/* Removed CardContent to eliminate the "Baixe o documento exemplo1." text */}
              </Card>
            </a>
          ))}
        </div>
      </Modal>
    </div>
  );
};
