import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const SobrePage = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre a SMDUE</h2>
      <Card>
        <CardContent className="prose max-w-none pt-6">
          <p className="text-gray-600 mb-4">
            A Secretaria Municipal de Desenvolvimento Urbano e Econômico (SMDUE) é responsável por 
            formular, coordenar e implementar políticas e diretrizes voltadas para o desenvolvimento 
            econômico do município do Rio de Janeiro.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Nossa Missão</h3>
          <p className="text-gray-600 mb-4">
            Promover o desenvolvimento econômico sustentável do Rio de Janeiro, através da geração 
            e disseminação de dados e análises econômicas que auxiliem na tomada de decisões e 
            na formulação de políticas públicas.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Objetivos</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Produzir e disseminar informações econômicas sobre o município</li>
            <li>Realizar estudos e pesquisas sobre a economia local</li>
            <li>Apoiar a formulação de políticas públicas baseadas em evidências</li>
            <li>Promover a transparência dos dados econômicos municipais</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  </div>
);