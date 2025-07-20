'use client'

import { useEffect, useRef } from 'react'

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Neural network nodes
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; connections: number[] }> = []
    const connections: Array<{ from: number; to: number; opacity: number }> = []

    // Initialize nodes
    const initNodes = () => {
      nodes.length = 0
      connections.length = 0
      
      const nodeCount = Math.floor((canvas.width * canvas.height) / 50000)
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: []
        })
      }

      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodes.length)
          if (target !== i && !connections.some(c => (c.from === i && c.to === target) || (c.from === target && c.to === i))) {
            connections.push({
              from: i,
              to: target,
              opacity: Math.random() * 0.3 + 0.1
            })
          }
        }
      }
    }

    initNodes()

    // Animation loop
    let animationId: number
    const animate = () => {
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
      gradient.addColorStop(1, 'rgba(249, 250, 251, 0.95)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'
        ctx.fill()

        // Draw node glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6)
        glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)')
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        ctx.fillStyle = glowGradient
        ctx.fill()
      })

      // Draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]
        
        if (fromNode && toNode) {
          const distance = Math.sqrt(
            Math.pow(fromNode.x - toNode.x, 2) + Math.pow(fromNode.y - toNode.y, 2)
          )
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(fromNode.x, fromNode.y)
            ctx.lineTo(toNode.x, toNode.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${connection.opacity * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      // Draw circuit patterns
      drawCircuitPatterns(ctx, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const drawCircuitPatterns = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw subtle circuit board patterns
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
    ctx.lineWidth = 1

    // Horizontal circuit lines
    for (let y = 0; y < height; y += 100) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Vertical circuit lines
    for (let x = 0; x < width; x += 150) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Circuit nodes at intersections
    for (let x = 0; x < width; x += 150) {
      for (let y = 0; y < height; y += 100) {
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'
        ctx.fill()
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
} 