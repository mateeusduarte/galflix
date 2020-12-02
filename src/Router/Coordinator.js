// Função de voltar para HomePage
export const goToHome = (history) => {
    history.push('/');
  };

// Função de ir para página de detalhes do filme clicado
export const goToMoviePage = (history, id) => {
    history.push(`/movie/${id}`);
  };

// Função de voltar para página anterior
export const goBack = (history) => {
    history.goBack();
  };
  