export default function status(man) {
  if (man.health >= 50) {
    return 'healthy';
  }
  if (man.health >= 15 && man.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}