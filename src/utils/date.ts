export function calculateDuration(
  startDate: string,
  endDate?: string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Tout mois entamé est considéré comme complet
  // On ajoute 1 pour compter le mois de début
  months = months + 1;

  if (months < 0) return '0 mois';

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`;
  }

  if (years > 0) {
    return `${years} an${years > 1 ? 's' : ''}`;
  }

  return `${remainingMonths} mois`;
}

export function formatPeriod(
  startDate: string,
  endDate?: string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const format = (date: Date) => {
    const formatted = date.toLocaleDateString('fr-FR', {
      month: 'long',
      year: 'numeric',
    });

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return `${format(start)} – ${end ? format(end) : 'Aujourd’hui'}`;
}