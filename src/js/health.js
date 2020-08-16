/* eslint-disable linebreak-style */
export default function healthBar(points) {
  let status;
  if (points.health > 50) {
    status = 'healthy';
  }
  if (points.health <= 50 && points.health > 15) {
    status = 'wounded';
  }
  if (points.health <= 15 && points.health > 0) {
    status = 'critical';
  }
  if (!points.health || points.health === undefined || points.health < 0 || typeof (points.health) !== 'number') {
    throw new Error('Invalid health value');
  }
  return status;
}
