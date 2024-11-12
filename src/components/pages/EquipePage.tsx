import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const EquipePage = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eduardo Paes Card - Spans both columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Eduardo Paes</CardTitle>
            <p className="text-sm text-blue-600 font-medium">Prefeito do Município do Rio de Janeiro</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Nascido no Rio de Janeiro em 14 de novembro de 1969, o prefeito Eduardo Paes é formado em Direito pela Pontifícia Universidade Católica do Rio de Janeiro com especialização em Políticas Públicas e Governo pela UFRJ. Dedicou sua carreira primordialmente a vida pública, hoje comanda pela terceira vez a cidade Maravilhosa.
            </p>
          </CardContent>
        </Card>

        {/* Chicão Bulhões Card - Spans both columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Chicão Bulhões</CardTitle>
            <p className="text-sm text-blue-600 font-medium">Secretário de Desenvolvimento Urbano e Econômico</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Carioca apaixonado, advogado formado pela PUC-Rio e ex deputado estadual pelo partido NOVO. Foi eleito com 26.335 votos, tendo como principal bandeira a defesa da liberdade em todas as suas formas - seja na economia, por meio da desburocratização e simplificação de tributos, seja no âmbito das liberdades individuais.
            </p>
          </CardContent>
        </Card>

        {/* Marcel Grillo Balassiano Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Marcel Grillo Balassiano</CardTitle>
              <p className="text-sm text-blue-600 font-medium">Subsecretário de Desenvolvimento Econômico e Inovação</p>
            </CardHeader>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'Leonardo Moog',
                description: 'Doutorando em Economia (EPGE/FGV)'
              },
              {
                name: 'Manoel Tabet',
                description: 'Doutor em Economia (UFF)'
              },
              {
                name: 'Lucas Simões',
                description: 'Mestrando em População, Território e Estatísticas Públicas (ENCE/IBGE)'
              },
              {
                name: 'Marcus Nascimento',
                description: 'Doutorando em Estatística (UFRJ)'
              },
              {
                name: 'Luiza Branco',
                description: 'Doutoranda em Direito (UFF)'
              },
              {
                name: 'Maíra França',
                description: 'Doutora em Economia (UFF)'
              },
              {
                name: 'Tayanne Rodrigues',
                description: 'Graduanda em Economia (UERJ)'
              }
            ]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member, index) => (
              <Card key={index} className="bg-gray-50">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Carina Quirino Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Carina Quirino</CardTitle>
              <p className="text-sm text-blue-600 font-medium">Subsecretária de Regulação e Ambiente de Negócios</p>
            </CardHeader>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'Emanuel Fernandes',
                description: 'Mestre em Economia (EPGE/FGV)'
              },
              {
                name: 'João Donasolo',
                description: 'Graduando em Ciência de Dados (EMAp/FGV) e Direito (UFRJ)'
              },
              {
                name: 'Kátia Alves',
                description: 'Doutora em Economia (EPGE/FGV)'
              },
              {
                name: 'Rachel Milito',
                description: 'Pós-graduada em Direito (ESAP/PGE-RJ)'
              },
              {
                name: 'Rafael Wanderley',
                description: 'Graduado em Direito (UFRJ)'
              },
              {
                name: 'Theo Garcia',
                description: 'Mestrando em Economia (EPGE/FGV)'
              }
            ]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member, index) => (
              <Card key={index} className="bg-gray-50">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
