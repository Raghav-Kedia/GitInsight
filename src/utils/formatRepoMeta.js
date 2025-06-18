export function formatSizeKB(size) {
  if (typeof size !== 'number') return '';
  return `${size.toLocaleString()} KB`;
}

export function formatRelativeTime(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diff = (date - now) / 1000; // seconds
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const ranges = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ];
  for (const range of ranges) {
    if (Math.abs(diff) > range.seconds || range.unit === 'second') {
      return rtf.format(Math.round(diff / range.seconds), range.unit);
    }
  }
  return '';
}

export function formatLicense(license) {
  if (!license) return 'No license';
  return license.name || 'No license';
} 