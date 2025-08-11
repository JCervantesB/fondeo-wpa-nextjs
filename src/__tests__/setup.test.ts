/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

// Test básico para verificar que Jest funciona
describe('Setup Test', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true)
  })

  it('should have testing environment configured', () => {
    expect(typeof window).toBe('object')
    expect(typeof document).toBe('object')
  })

  it('should have jest-dom matchers available', () => {
    const div = document.createElement('div')
    div.textContent = 'Hello World'
    document.body.appendChild(div)

    expect(div).toBeInTheDocument()
    expect(div).toHaveTextContent('Hello World')
  })
})
