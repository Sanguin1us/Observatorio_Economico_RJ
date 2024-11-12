import React, { useState } from 'react';
import { Home, FileText, Database, Users, Building2 } from 'lucide-react';

interface DockNavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const DockNavigation: React.FC<DockNavigationProps> = ({ activePage, setActivePage }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const menuItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'publicacoes', icon: FileText, label: 'Publicações' },
    { id: 'dados', icon: Database, label: 'Dados' },
    { id: 'equipe', icon: Users, label: 'Equipe' },
    { id: 'sobre', icon: Building2, label: 'Sobre' }
  ];

  const getScale = (id: string) => {
    if (hoveredItem === null) return 1;
    const hoveredIndex = menuItems.findIndex(item => item.id === hoveredItem);
    const currentIndex = menuItems.findIndex(item => item.id === id);
    const distance = Math.abs(hoveredIndex - currentIndex);
    
    if (distance === 0) return 1.8;
    if (distance === 1) return 1.4;
    return 1;
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-100 pointer-events-auto">
      <div className="bg-blue-900 rounded-2xl p-2 shadow-2xl border border-blue-800">
        <div 
          className="flex items-center gap-2"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {menuItems.map(({ id, icon: Icon, label }) => {
            const scale = getScale(id);
            const isActive = activePage === id;
            return (
              <div
                key={id}
                style={{
                  transform: `scale(${scale})`,
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  margin: `0 ${(scale - 1) * 16}px`
                }}
                className="relative"
              >
                <button
                  onClick={() => id !== 'home' && setActivePage(id)}
                  onMouseEnter={() => setHoveredItem(id)}
                  className={`relative group p-2 rounded-full hover:bg-blue-800 
                    ${isActive ? 'bg-blue-700' : 'hover:bg-blue-800/50'}`}
                >
                  <Icon 
                    size={22}
                    className={`${isActive ? 'text-white' : 'text-blue-100 group-hover:text-white'} 
                      transition-colors duration-200`}
                  />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    bg-blue-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    whitespace-nowrap border border-blue-800 z-0 pointer-events-none">
                    {label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
