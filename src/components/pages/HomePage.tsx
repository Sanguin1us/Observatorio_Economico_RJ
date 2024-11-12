import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CircleDollarSign, LineChart, ScrollText, MapPin } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null);

  // Mock data for the indicators
  const mockData = {
    'PIB Municipal': [
      { year: '2018', value: 382.5 },
      { year: '2019', value: 390.2 },
      { year: '2020', value: 375.8 },
      { year: '2021', value: 397.4 },
      { year: '2022', value: 411.4 },
    ],
    'Taxa de Desemprego': [
      { year: '2019', value: 12.8 },
      { year: '2020', value: 14.7 },
      { year: '2021', value: 13.2 },
      { year: '2022', value: 10.5 },
      { year: '2023', value: 8.4 },
    ],
    'Arrecadação Municipal': [
      { year: '2019', value: 31.2 },
      { year: '2020', value: 29.8 },
      { year: '2021', value: 32.6 },
      { year: '2022', value: 34.5 },
      { year: '2023', value: 38.7 },
    ],
    'Estabelecimentos Ativos': [
      { year: '2019', value: 280.5 },
      { year: '2020', value: 275.3 },
      { year: '2021', value: 285.8 },
      { year: '2022', value: 298.6 },
      { year: '2023', value: 314.2 },
    ],
  };

  const getFormattingConfig = (indicator: string) => {
    switch (indicator) {
      case 'PIB Municipal':
        return {
          prefix: 'R$ ',
          suffix: ' bi',
          color: '#2563eb',
          description: 'Produto Interno Bruto do município do Rio de Janeiro a preços correntes.'
        };
      case 'Taxa de Desemprego':
        return {
          prefix: '',
          suffix: '%',
          color: '#dc2626',
          description: 'Taxa de desemprego da cidade do Rio de Janeiro, segundo a PNAD Contínua.'
        };
      case 'Arrecadação Municipal':
        return {
          prefix: 'R$ ',
          suffix: ' bi',
          color: '#059669',
          description: 'Arrecadação total do município, incluindo impostos, taxas e contribuições.'
        };
      case 'Estabelecimentos Ativos':
        return {
          prefix: '',
          suffix: ' mil',
          color: '#7c3aed',
          description: 'Número total de estabelecimentos ativos na cidade do Rio de Janeiro.'
        };
      default:
        return {
          prefix: '',
          suffix: '',
          color: '#000000',
          description: ''
        };
    }
  };

  const featuredIndicators = [
    {
      title: 'PIB Municipal',
      value: 'R$ 411,4 bi',
      trend: '+3,5%',
      year: '2022',
      icon: CircleDollarSign,
    },
    {
      title: 'Taxa de Desemprego',
      value: '8,4%',
      trend: '-2,1 p.p.',
      year: '2023',
      icon: LineChart,
    },
    {
      title: 'Arrecadação Municipal',
      value: 'R$ 38,7 bi',
      trend: '+12,3%',
      year: '2023',
      icon: ScrollText,
    },
    {
      title: 'Estabelecimentos Ativos',
      value: '314,2 mil',
      trend: '+5,2%',
      year: '2023',
      icon: MapPin,
    },
  ];

  const renderChart = () => {
    if (!selectedIndicator) return null;
    
    const data = mockData[selectedIndicator];
    const config = getFormattingConfig(selectedIndicator);
    
    return (
      <div className="space-y-4">
        <p className="text-gray-600">
          {config.description}
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => `${config.prefix}${value}${config.suffix}`}
              />
              <Tooltip 
                formatter={(value: number) => [`${config.prefix}${value}${config.suffix}`, selectedIndicator]}
                labelFormatter={(label) => `Ano: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={config.color}
                strokeWidth={2}
                dot={{ fill: config.color, strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Observatório Econômico do Rio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dados e análises econômicas da cidade do Rio de Janeiro, produzidos pela 
          Secretaria Municipal de Desenvolvimento Urbano e Econômico.
        </p>
      </section>

      {/* Featured Indicators Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredIndicators.map((indicator, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedIndicator(indicator.title)}
          >
            <CardHeader className="space-y-0 pb-2">
              <CardTitle className="text-sm text-gray-600 flex items-center gap-2">
                <indicator.icon className="h-4 w-4" />
                {indicator.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {indicator.value}
                </span>
                <span className={`text-sm font-medium ${
                  indicator.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {indicator.trend}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {indicator.year}
              </span>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Modal for charts */}
      <Modal
        isOpen={!!selectedIndicator}
        onClose={() => setSelectedIndicator(null)}
        title={selectedIndicator || ''}
      >
        {renderChart()}
      </Modal>

      {/* Quick Access Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => setActivePage('dados')}
        >
          <CardHeader>
            <CardTitle className="group-hover:text-blue-600 transition-colors">
              Base de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Acesse nossa base de dados econômicos e financeiros da cidade, 
              incluindo séries históricas e dados setoriais.
            </p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => setActivePage('publicacoes')}
        >
          <CardHeader>
            <CardTitle className="group-hover:text-blue-600 transition-colors">
              Publicações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Explore nossos boletins, estudos e análises sobre a economia carioca 
              e seus diversos setores.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Latest Updates Section */}
      <section className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Últimas Atualizações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <time className="text-sm text-gray-500">15 Março 2024</time>
                <h3 className="font-medium text-gray-900">
                  Boletim Econômico - Março 2024
                </h3>
              </li>
              <li>
                <time className="text-sm text-gray-500">08 Março 2024</time>
                <h3 className="font-medium text-gray-900">
                  Análise do Impacto Econômico do Carnaval 2024
                </h3>
              </li>
              <li>
                <time className="text-sm text-gray-500">01 Março 2024</time>
                <h3 className="font-medium text-gray-900">
                  Atualização dos Indicadores de Atividade Econômica
                </h3>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};