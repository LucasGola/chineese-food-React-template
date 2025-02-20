import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Verifica se um elemento existe no DOM pelo ID.
 */
const sectionExists = (sectionId: string): boolean => {
  return !!document.getElementById(sectionId.toLowerCase());
};

/**
 * Faz scroll suave até uma seção da página.
 */
const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, 100);
};

/**
 * Encontra a melhor rota para exibir a seção desejada.
 */
export const navigateToBestRoute = (
  navigate: (path: string) => void,
  sectionId?: string,
  currentRoute?: string,
  availableRoutes?: { path: string; type: string }[],
  defaultRoute?: string,
) => {
  if (sectionId) {
    if (sectionExists(sectionId)) {
      // Se a seção existe na página atual, apenas faz o scroll
      scrollToSection(sectionId);
    } else {
      // Procura uma rota que contenha a seção desejada
      const bestRoute = availableRoutes?.find((route) =>
        route.path.includes(sectionId),
      );

      if (bestRoute) {
        navigate(`${bestRoute.path}#${sectionId}`);
      } else {
        // Se não encontrou uma rota melhor, volta para a default
        navigate(`${defaultRoute}#${sectionId}`);
      }
    }
  } else {
    // Se não foi passado um sectionId, encontra a melhor rota possível
    const bestGeneralRoute =
      availableRoutes?.find((route) => route.type === 'menu') ||
      availableRoutes?.find((route) => route.type === 'default');

    if (bestGeneralRoute) {
      navigate(bestGeneralRoute.path);
    } else if (defaultRoute) {
      navigate(defaultRoute);
    }
  }
};

/**
 * Hook que verifica mudanças na URL e scrolla automaticamente para a seção correta.
 */
export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.substring(1));
    }
  }, [location]);
};
