import { IntlShape } from 'react-intl';

export const roundNumber = (number: number, decimals: number): number => {
  return parseFloat(number.toFixed(decimals));
};

export const padValue = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const formatCountdown = (millis: number): string => {
  const days = Math.floor(millis / 86400000);
  const hours = Math.floor((millis % 86400000) / 3600000);
  const minutes = Math.floor((millis % 3600000) / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);

  const d = days > 0 ? `${days}{"d"} ` : '';
  const h = hours > 0 ? `${hours}{"h"} ` : '';
  const m = minutes > 0 ? `${minutes}{"m"} ` : '';
  const s = seconds > 0 ? `${seconds}{"s"} ` : '';
  return `${d}${h}${m}${s}`;
};

export const formatInterval = (millis: number): string => {
  if (millis === 0) {
    return '0';
  }

  const days = Math.floor(millis / 86400000);
  const hours = Math.floor((millis % 86400000) / 3600000);
  const minutes = Math.floor((millis % 3600000) / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);
  const milliseconds = Math.floor(millis % 1000);

  const d = days > 0 ? `${days}{"d"} ` : '';
  const h = hours > 0 ? `${hours}{"h"} ` : '';
  const m = minutes > 0 ? `${minutes}{"m"} ` : '';
  const s = seconds > 0 ? `${seconds}{"s"} ` : '';
  const ms = milliseconds > 0 ? `${milliseconds}{"ms"} ` : '';

  return `${d}${h}${m}${s}${ms}`;
};

export const formatBytes = (bytes: number): string => {
  if (bytes >= 1024 * 1024 * 1024) {
    return `${roundNumber(bytes / 1024 / 1024 / 1024, 2)} GB`;
  }
  return `${roundNumber(bytes / 1024 / 1024, 2)} MB`;
};
