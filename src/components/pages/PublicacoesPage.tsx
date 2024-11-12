import React from 'react';
import { FileText } from 'lucide-react';

export const PublicacoesPage = () => {
  const categories = [
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

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="group relative bg-white overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <button className="w-full h-full p-6 text-left min-h-[160px]">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/90 via-blue-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};