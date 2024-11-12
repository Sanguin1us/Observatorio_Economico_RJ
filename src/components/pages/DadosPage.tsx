import React from 'react';
import { Download, FileText } from 'lucide-react';

export const DadosPage = () => {
  const sections = [
    {
      title: 'Atividade',
      items: [
        'Índice de Atividade Econômica (IAE-Rio)',
        'Pesquisa Mensal de Serviços (PMS) - Volume',
        'Pesquisa Mensal de Serviços (PMS) - Turismo',
        'Pesquisa Mensal de Serviços (PMS) - Receita Nominal',
        'Pesquisa Mensal de Comércio (PMC) - Volume',
        'Pesquisa Mensal de Comércio (PMC) - Receita Nominal',
        'Pesquisa Industrial Mensal - Produção Física (PIM-PF)',
        'Índice de Atividade Econômica Regional (IBCR-RJ)'
      ]
    },
    {
      title: 'Inflação',
      items: [
        'Índice Nacional de Preços ao Consumidor Amplo (IPCA)',
        'Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15)',
        'Índice Nacional de Preços ao Consumidor (INPC)',
        'Núcleos de Inflação IPCA'
      ]
    },
    {
      title: 'Mercado de Trabalho',
      items: [
        'Dados de Mercado de Trabalho (Pnad Contínua/IBGE) - Município do Rio de Janeiro',
        'Taxa de Desemprego Retropolada do Rio (2002-2011)',
        'Cadastro Geral de Empregados e Desempregados (CAGED) - Estado do Rio de Janeiro',
        'Cadastro Geral de Empregados e Desempregados (CAGED) - Município do Rio de Janeiro'
      ]
    },
    {
      title: 'Contas Regionais',
      items: [
        'Contas Regionais - Município do Rio de Janeiro',
        'Contas Regionais - Estado do Rio de Janeiro'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {section.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-600 group-hover:text-gray-900 pr-4">
                    {item}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="text-gray-400 hover:text-blue-600 p-1.5 rounded-full hover:bg-blue-50 transition-colors"
                      title="Baixar CSV"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-blue-600 p-1.5 rounded-full hover:bg-blue-50 transition-colors"
                      title="Baixar Excel"
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};