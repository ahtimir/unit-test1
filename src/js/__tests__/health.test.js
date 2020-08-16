/* eslint-disable linebreak-style */
import healthBar from '../health';

test('should healthy', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 99 });
  expect(testPlayerHP).toBe('healthy');
});
test('should healthy', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 51 });
  expect(testPlayerHP).toBe('healthy');
});
test('should wounded', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 49 });
  expect(testPlayerHP).toBe('wounded');
});

test('should wounded', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 16 });
  expect(testPlayerHP).toBe('wounded');
});

test('should critical', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 14 });
  expect(testPlayerHP).toBe('critical');
});

test('should critical', () => {
  const testPlayerHP = healthBar({ name: 'Маг', health: 1 });
  expect(testPlayerHP).toBe('critical');
});

test('Health parameter is a wrong value', () => {
  expect(() => {
    healthBar({ name: 'Маг', health: -10 });
  }).toThrow();
});

test('Health is undefined', () => {
  expect(() => {
    healthBar({});
  }).toThrow();
});

test('Health parameter is a wrong value', () => {
  expect(() => {
    healthBar({ name: 'Маг', health: 'test' });
  }).toThrow();
});
